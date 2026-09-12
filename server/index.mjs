import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import Stripe from "stripe";
import { fulfillCheckoutSession } from "./fulfill.mjs";
import { openEbookFile, verifyDownloadToken } from "./download.mjs";
import {
  sendPrivateCoachingEnquiry,
  sendPrivateCoachingOnboarding,
} from "./email.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const isProd = process.env.NODE_ENV === "production" || existsSync(DIST);

const app = new Hono();

app.get("/api/health", (c) =>
  c.json({
    ok: true,
    service: "activex-website",
    fulfillment: Boolean(
      process.env.STRIPE_SECRET_KEY &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS,
    ),
  }),
);

app.post("/api/stripe/webhook", async (c) => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!secret || !stripeKey) {
    console.error("[webhook] missing STRIPE_WEBHOOK_SECRET or STRIPE_SECRET_KEY");
    return c.json({ error: "Webhook not configured" }, 500);
  }

  const stripe = new Stripe(stripeKey);
  const signature = c.req.header("stripe-signature");
  if (!signature) return c.json({ error: "Missing stripe-signature" }, 400);

  const rawBody = await c.req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("[webhook] signature verify failed", err.message);
    return c.json({ error: `Webhook Error: ${err.message}` }, 400);
  }

  try {
    if (
      event.type === "checkout.session.completed" ||
      event.type === "checkout.session.async_payment_succeeded"
    ) {
      const session = event.data.object;
      const result = await fulfillCheckoutSession(session);
      if (!result.ok && result.error === "unknown_product") {
        // Acknowledge so Stripe doesn't retry forever; investigate in logs.
        console.error("[webhook] unknown product — configure STRIPE_PRICE_* or amounts");
      }
    } else {
      console.log(`[webhook] ignored ${event.type}`);
    }
    return c.json({ received: true });
  } catch (err) {
    console.error("[webhook] fulfill error", err);
    return c.json({ error: "Fulfillment failed" }, 500);
  }
});

app.post("/api/private-coaching", async (c) => {
  let body;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid request" }, 400);
  }

  const field = (key, max = 240) =>
    String(body?.[key] ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, max);

  const name = field("name", 80);
  const email = field("email", 120);
  const whatsapp = field("whatsapp", 40);
  const whoFor = field("whoFor", 40);
  const goal = field("goal", 240);
  const frequency = field("frequency", 80);
  const timeframe = field("timeframe", 80);
  const notes = field("notes", 1000);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !whatsapp || !whoFor || !goal || !frequency || !timeframe) {
    return c.json({ error: "Please complete the required fields." }, 400);
  }

  try {
    await sendPrivateCoachingEnquiry({
      name,
      email,
      whatsapp,
      whoFor,
      goal,
      frequency,
      timeframe,
      notes,
    });
    return c.json({ ok: true });
  } catch (err) {
    console.error("[private-coaching] email failed", err);
    return c.json({ error: "Could not send enquiry." }, 500);
  }
});

app.post("/api/private-coaching-onboarding", async (c) => {
  let body;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid request" }, 400);
  }

  if (String(body?.company ?? "").trim()) {
    return c.json({ ok: true });
  }

  const type = body?.type === "health" ? "health" : body?.type === "intake" ? "intake" : "";
  if (!type) return c.json({ error: "Unknown form." }, 400);

  const fields = {};
  for (const [key, value] of Object.entries(body || {})) {
    if (key === "company" || key === "type") continue;
    if (!/^[a-zA-Z][a-zA-Z0-9]{0,40}$/.test(key)) continue;
    const text = Array.isArray(value) ? value.join(", ") : value;
    fields[key] = String(text ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 2000);
  }

  const email = fields.email || "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const name = fields.fullName || fields.signatureName || "";
  if (!name || !emailOk) {
    return c.json({ error: "Please complete the required fields." }, 400);
  }

  if (type === "intake") {
    const needed = [
      "whatsapp",
      "occupation",
      "mainGoal",
      "successLook",
      "trainingYears",
      "currentTraining",
      "trainingTypes",
      "painNow",
      "pastInjury",
      "medical",
      "restricted",
      "sleep",
      "stress",
      "travel",
      "trainDays",
      "bestTimes",
      "independent",
      "coachStyle",
      "value",
    ];
    if (needed.some((key) => !fields[key])) {
      return c.json({ error: "Please complete the required fields." }, 400);
    }
  } else {
    const needed = [
      "heartCondition",
      "chestPainActivity",
      "chestPainRest",
      "dizziness",
      "jointProblem",
      "bloodPressureMeds",
      "otherReason",
      "emergencyName",
      "emergencyPhone",
      "emergencyRelation",
      "needsClearance",
      "infoAccurate",
      "exerciseConsent",
      "seekAdvice",
      "privacyConsent",
      "coachingTerms",
      "signatureName",
    ];
    if (needed.some((key) => !fields[key])) {
      return c.json({ error: "Please complete the required fields." }, 400);
    }
  }

  try {
    await sendPrivateCoachingOnboarding({ type, fields });
    return c.json({ ok: true });
  } catch (err) {
    console.error("[private-coaching-onboarding] email failed", err);
    return c.json({ error: "Could not send form." }, 500);
  }
});

app.get("/api/download/ebook", async (c) => {
  const token = c.req.query("token");
  if (!token) return c.text("Missing download token.", 400);

  const claims = verifyDownloadToken(token);
  if (!claims) {
    return c.text(
      "This download link is invalid or has expired. Email info@activex.fit and we’ll send a new one.",
      403,
    );
  }

  try {
    const file = await openEbookFile();
    const headers = {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file.filename}"`,
      "Cache-Control": "no-store",
      "X-Download-Session": claims.sessionId,
    };
    if (file.contentLength) {
      headers["Content-Length"] = String(file.contentLength);
    }

    // Hono accepts a Web ReadableStream; convert Node stream when needed.
    const webStream =
      typeof Readable.toWeb === "function"
        ? Readable.toWeb(file.stream)
        : file.stream;

    return new Response(webStream, { status: 200, headers });
  } catch (err) {
    console.error("[download] error", err);
    return c.text(
      "The eBook file is temporarily unavailable. Email info@activex.fit for help.",
      503,
    );
  }
});

if (isProd) {
  app.use(
    "/*",
    serveStatic({
      root: "./dist",
    }),
  );

  app.notFound(async (c) => {
    if (c.req.path.startsWith("/api/")) {
      return c.json({ error: "Not found" }, 404);
    }
    const indexPath = join(DIST, "index.html");
    if (!existsSync(indexPath)) {
      return c.text("Build missing. Run npm run build.", 500);
    }
    return c.html(readFileSync(indexPath, "utf8"));
  });
} else {
  app.get("/", (c) =>
    c.text(
      "activeX API (dev). Vite serves the site; webhooks at POST /api/stripe/webhook",
    ),
  );
}

const port = Number(process.env.PORT || 8787);

serve({ fetch: app.fetch, port }, (info) => {
  console.log(
    `[server] listening on http://localhost:${info.port} (${isProd ? "prod+static" : "api-only"})`,
  );
});
