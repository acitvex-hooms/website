import { STRIPE_FOUNDING, STRIPE_MEMBERSHIP } from "./membershipCtas";
import { SHOP_PRODUCTS } from "./shop";

const PIXEL_FROM_ENV = (
  import.meta.env.VITE_META_PIXEL_ID as string | undefined
)?.trim();

/** Dataset ID from Events Manager. Public (ships in the browser). */
const PIXEL_ID = "1376005510875234";

export const META_PIXEL_ID =
  PIXEL_FROM_ENV && /^\d{10,20}$/.test(PIXEL_FROM_ENV)
    ? PIXEL_FROM_ENV
    : PIXEL_ID;

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

export type MetaCommerce = {
  content_name: string;
  content_ids: string[];
  content_type: "product";
  value: number;
  currency: "USD";
};

function stripeLinkId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.endsWith("stripe.com")) return null;
    const id = parsed.pathname.replace(/^\//, "").split("/")[0];
    return id || null;
  } catch {
    return null;
  }
}

function item(
  content_name: string,
  content_id: string,
  value: number,
): MetaCommerce {
  return {
    content_name,
    content_ids: [content_id],
    content_type: "product",
    value,
    currency: "USD",
  };
}

const BY_STRIPE_ID = new Map<string, MetaCommerce>();

function registerStripe(url: string, commerce: MetaCommerce) {
  const id = stripeLinkId(url);
  if (id) BY_STRIPE_ID.set(id, commerce);
}

registerStripe(STRIPE_MEMBERSHIP.annual, item("Membership Annual", "membership-annual", 229));
registerStripe(STRIPE_MEMBERSHIP.monthly, item("Membership Monthly", "membership-monthly", 24.99));
registerStripe(STRIPE_FOUNDING.annual, item("Founding Membership Annual", "founding-annual", 179));
registerStripe(STRIPE_FOUNDING.monthly, item("Founding Membership Monthly", "founding-monthly", 14.99));
registerStripe(
  "https://buy.stripe.com/6oU8wObz2dhH1lh92Z4ow02",
  item("12-Week Custom Program", "custom-program", 499),
);
registerStripe(
  "https://buy.stripe.com/aFa14mcD62D32plbb74ow03",
  item("12-Week Custom Diet", "custom-diet", 499),
);
registerStripe(
  "https://buy.stripe.com/00w9AS46A1yZe83a734ow06",
  item("Video Consult", "video-consult", 499),
);

for (const product of SHOP_PRODUCTS) {
  const value = Number(product.price.replace(/[^0-9.]/g, ""));
  registerStripe(
    product.stripeUrl,
    item(product.name, product.welcomeProduct, Number.isFinite(value) ? value : 0),
  );
}

const WELCOME_PURCHASE: Record<string, MetaCommerce> = {
  membership: item("Membership", "membership", 229),
  "custom-program": item("12-Week Custom Program", "custom-program", 499),
  "custom-diet": item("12-Week Custom Diet", "custom-diet", 499),
  "video-consult": item("Video Consult", "video-consult", 499),
  coaching: item("1-on-1 Coaching", "coaching", 799),
  "8-week-challenge": item("8-Week Challenge", "8-week-challenge", 0),
  "bbe-ebook": item("BBE eBook", "bbe-ebook", 60),
  "bbe-ankle": item("BBE Ankle Strap", "bbe-ankle", 81),
  "bbe-bundle": item("BBE Bundle", "bbe-bundle", 136),
};

const TALLY_LEAD_NAMES: Record<string, string> = {
  kd1q6d: "Coaching apply",
  "9qyVe5": "Video consult form",
  kdXree: "Custom program intake",
  MelGNA: "Custom diet intake",
  xXADME: "8-week challenge intake",
};

export function commerceForStripeHref(href: string): MetaCommerce | undefined {
  const id = stripeLinkId(href);
  return id ? BY_STRIPE_ID.get(id) : undefined;
}

export function isStripeCheckoutHref(href: string): boolean {
  return /https?:\/\/(?:buy|checkout)\.stripe\.com\//i.test(href);
}

function ensureFbqQueue(): FbqFn {
  if (window.fbq) return window.fbq;

  const fbq: FbqFn = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      (fbq.queue ||= []).push(args);
    }
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;
  return fbq;
}

/**
 * Install the Meta Pixel if the index.html snippet did not already.
 * Returns true when PageView was already sent from HTML (skip the first SPA view).
 */
export function ensureMetaPixel(pixelId: string): boolean {
  const htmlSnippet =
    typeof window.fbq === "function" &&
    Boolean(
      document.querySelector('script[src*="fbevents.js"]') ||
        Array.from(document.scripts).some((s) =>
          (s.textContent || "").includes("connect.facebook.net/en_US/fbevents.js"),
        ),
    );
  if (htmlSnippet) return true;

  if (document.getElementById("meta-pixel")) {
    ensureFbqQueue();
    return false;
  }

  const fbq = ensureFbqQueue();
  const script = document.createElement("script");
  script.id = "meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init", pixelId);

  if (!document.getElementById("meta-pixel-noscript")) {
    const noscript = document.createElement("noscript");
    noscript.id = "meta-pixel-noscript";
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.alt = "";
    img.src = `https://www.facebook.com/tr?id=${encodeURIComponent(pixelId)}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
  return false;
}

export function trackMeta(event: string, params?: Record<string, unknown>) {
  if (!META_PIXEL_ID || typeof window.fbq !== "function") return;
  if (params) window.fbq("track", event, params);
  else window.fbq("track", event);
}

export function trackPageView() {
  trackMeta("PageView");
}

export function trackInitiateCheckout(href: string) {
  const commerce = commerceForStripeHref(href);
  trackMeta("InitiateCheckout", commerce ?? { currency: "USD" });
}

export function trackLead(contentName: string) {
  trackMeta("Lead", { content_name: contentName });
}

export function tallyLeadName(formId: string | undefined): string {
  if (!formId) return "Form";
  return TALLY_LEAD_NAMES[formId] ?? `Form ${formId}`;
}

function welcomeProductKey(search: string): string {
  const raw = new URLSearchParams(search).get("product");
  const v = (raw ?? "").toLowerCase().trim();
  if (v === "program" || v === "custom_program") return "custom-program";
  if (v === "diet" || v === "custom_diet") return "custom-diet";
  if (v === "video" || v === "consult" || v === "video_consult") {
    return "video-consult";
  }
  if (v === "1-on-1" || v === "1on1") return "coaching";
  if (v === "ebook" || v === "bbe_ebook") return "bbe-ebook";
  if (v === "ankle" || v === "bbe_ankle") return "bbe-ankle";
  if (v === "bundle" || v === "bbe_bundle") return "bbe-bundle";
  if (v && WELCOME_PURCHASE[v]) return v;
  return "membership";
}

/**
 * Purchase fires on /welcome after Stripe. Skip bare /welcome visits
 * (no product param and no Stripe referrer) so the thank-you URL is not
 * a conversion by itself.
 */
export function trackWelcomePurchase(search: string) {
  const params = new URLSearchParams(search);
  const fromStripe = /stripe\.com/i.test(document.referrer);
  if (!params.get("product") && !fromStripe) return;

  const key = welcomeProductKey(search);
  const dedupeKey = `ax_meta_purchase:${key}:${search}`;
  try {
    if (sessionStorage.getItem(dedupeKey)) return;
    sessionStorage.setItem(dedupeKey, "1");
  } catch {
    // Private mode can block sessionStorage; still send once this load.
  }

  trackMeta("Purchase", WELCOME_PURCHASE[key] ?? WELCOME_PURCHASE.membership);
}
