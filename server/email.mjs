import nodemailer from "nodemailer";

function smtpConfig() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS are required (Google Workspace app password)");
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE !== "false" && port === 465,
    auth: { user, pass },
  };
}

function transporter() {
  return nodemailer.createTransport(smtpConfig());
}

function fromAddress() {
  return (
    process.env.EMAIL_FROM ||
    `activeX Shop <${process.env.SMTP_USER || "info@activex.fit"}>`
  );
}

function teamInbox() {
  return process.env.SHIP_NOTIFY_EMAIL || process.env.SMTP_USER || "info@activex.fit";
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * @param {{
 *   to: string,
 *   name?: string | null,
 *   skuName: string,
 *   downloadUrl?: string | null,
 *   hasPhysical: boolean,
 * }} opts
 */
export async function sendCustomerOrderEmail(opts) {
  const first = (opts.name || "").split(" ")[0] || "there";
  const downloadBlock = opts.downloadUrl
    ? `
      <p style="margin:24px 0;">
        <a href="${escapeHtml(opts.downloadUrl)}"
           style="display:inline-block;background:#7828FF;color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:600;">
          Download your BBE eBook
        </a>
      </p>
      <p style="color:#4a4a6a;font-size:14px;">
        This link expires in 7 days. If it stops working, reply to this email and we’ll send a fresh one.
      </p>`
    : "";

  const shipBlock = opts.hasPhysical
    ? `<p style="color:#4a4a6a;line-height:1.6;">
         Your BBE Ankle Strap will ship within <strong>2 business days</strong>
         to the address you entered at checkout. You’ll get a separate note when it goes out.
       </p>`
    : "";

  const info = await transporter().sendMail({
    from: fromAddress(),
    to: opts.to,
    replyTo: teamInbox(),
    subject: `Your ${opts.skuName} order — activeX`,
    html: `
      <div style="font-family:Montserrat,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e;">
        <p>Hi ${escapeHtml(first)},</p>
        <p style="line-height:1.6;">
          Thanks for your purchase of <strong>${escapeHtml(opts.skuName)}</strong>.
        </p>
        ${downloadBlock}
        ${shipBlock}
        <p style="color:#7a7a9a;font-size:13px;margin-top:32px;">
          Questions? Reply to this email or write info@activex.fit.
        </p>
        <p style="color:#272789;font-weight:700;">— activeX</p>
      </div>
    `,
  });

  return { id: info.messageId };
}

/**
 * @param {{
 *   customerEmail: string,
 *   customerName?: string | null,
 *   skuName: string,
 *   sessionId: string,
 *   amountTotal: number | null,
 *   currency: string | null,
 *   shipping?: {
 *     name?: string | null,
 *     line1?: string | null,
 *     line2?: string | null,
 *     city?: string | null,
 *     state?: string | null,
 *     postal_code?: string | null,
 *     country?: string | null,
 *   } | null,
 * }} opts
 */
export async function sendTeamShipEmail(opts) {
  const ship = opts.shipping;
  const addressLines = ship
    ? [
        ship.name,
        ship.line1,
        ship.line2,
        [ship.city, ship.state, ship.postal_code].filter(Boolean).join(", "),
        ship.country,
      ]
        .filter(Boolean)
        .map(escapeHtml)
        .join("<br/>")
    : "<em>No shipping address on session — check Stripe Dashboard.</em>";

  const amount =
    typeof opts.amountTotal === "number"
      ? `${(opts.amountTotal / 100).toFixed(2)} ${(opts.currency || "usd").toUpperCase()}`
      : "—";

  const info = await transporter().sendMail({
    from: fromAddress(),
    to: teamInbox(),
    subject: `Ship order: ${opts.skuName} — ${opts.customerEmail}`,
    html: `
      <div style="font-family:Montserrat,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#272789;">Pack & ship — BBE Ankle Strap</h2>
        <p><strong>Product:</strong> ${escapeHtml(opts.skuName)}</p>
        <p><strong>Customer:</strong> ${escapeHtml(opts.customerName || "—")} &lt;${escapeHtml(opts.customerEmail)}&gt;</p>
        <p><strong>Amount:</strong> ${escapeHtml(amount)}</p>
        <p><strong>Stripe session:</strong> ${escapeHtml(opts.sessionId)}</p>
        <p><strong>Ship to:</strong><br/>${addressLines}</p>
        <p style="color:#7a7a9a;font-size:13px;">Automated from activex.fit Stripe webhook.</p>
      </div>
    `,
  });

  return { id: info.messageId };
}
