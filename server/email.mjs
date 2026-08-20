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

/** Inbox for every shop order (default info@activex.fit). */
export function teamInbox() {
  return (
    process.env.ORDER_NOTIFY_EMAIL ||
    process.env.SHIP_NOTIFY_EMAIL ||
    process.env.SMTP_USER ||
    "info@activex.fit"
  );
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatMoney(amountTotal, currency) {
  if (typeof amountTotal !== "number") return "—";
  const code = (currency || "usd").toUpperCase();
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
    }).format(amountTotal / 100);
  } catch {
    return `${(amountTotal / 100).toFixed(2)} ${code}`;
  }
}

function formatAddress(addr) {
  if (!addr) return null;
  const lines = [
    addr.name,
    addr.line1,
    addr.line2,
    [addr.city, addr.state, addr.postal_code].filter(Boolean).join(", "),
    addr.country,
  ].filter(Boolean);
  return lines.length ? lines.map(escapeHtml).join("<br/>") : null;
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
 * Full order alert to the team for every shop purchase.
 * @param {{
 *   customerEmail: string,
 *   customerName?: string | null,
 *   customerPhone?: string | null,
 *   skuId?: string | null,
 *   skuName: string,
 *   hasEbook?: boolean,
 *   hasPhysical?: boolean,
 *   sessionId: string,
 *   paymentIntentId?: string | null,
 *   amountTotal: number | null,
 *   currency: string | null,
 *   paymentType?: string | null,
 *   lineItems?: Array<{ name: string, quantity: number, amount: number | null }>,
 *   shipping?: {
 *     name?: string | null,
 *     line1?: string | null,
 *     line2?: string | null,
 *     city?: string | null,
 *     state?: string | null,
 *     postal_code?: string | null,
 *     country?: string | null,
 *   } | null,
 *   billing?: {
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
export async function sendTeamOrderEmail(opts) {
  const amount = formatMoney(opts.amountTotal, opts.currency);
  const shipHtml =
    formatAddress(opts.shipping) ||
    "<em>No shipping address on session (digital-only or not collected).</em>";
  const billHtml =
    formatAddress(opts.billing) ||
    "<em>No billing address on session.</em>";

  const lines = (opts.lineItems || [])
    .map((item) => {
      const qty = item.quantity > 1 ? ` × ${item.quantity}` : "";
      const lineAmount =
        typeof item.amount === "number"
          ? ` — ${formatMoney(item.amount, opts.currency)}`
          : "";
      return `<li>${escapeHtml(item.name)}${qty}${escapeHtml(lineAmount)}</li>`;
    })
    .join("");

  const productsHtml = lines
    ? `<ul style="padding-left:18px;margin:8px 0;">${lines}</ul>`
    : `<p>${escapeHtml(opts.skuName)}</p>`;

  const fulfillmentNotes = [];
  if (opts.hasEbook) fulfillmentNotes.push("eBook download emailed to customer");
  if (opts.hasPhysical) fulfillmentNotes.push("Physical item — pack & ship");
  if (!opts.hasEbook && !opts.hasPhysical) {
    fulfillmentNotes.push("Check Stripe for fulfillment needs");
  }

  const dashboardUrl = `https://dashboard.stripe.com/payments/${encodeURIComponent(
    opts.paymentIntentId || opts.sessionId,
  )}`;

  const subjectPrefix = opts.hasPhysical ? "New order (ship)" : "New order";
  const info = await transporter().sendMail({
    from: fromAddress(),
    to: teamInbox(),
    replyTo: opts.customerEmail,
    subject: `${subjectPrefix}: ${opts.skuName} — ${opts.customerEmail}`,
    html: `
      <div style="font-family:Montserrat,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <h2 style="color:#272789;margin-bottom:8px;">New shop order</h2>
        <p style="color:#4a4a6a;margin-top:0;">Automated from activex.fit Stripe checkout.</p>

        <h3 style="color:#272789;font-size:15px;margin-bottom:6px;">Customer</h3>
        <p style="margin:0 0 4px;"><strong>Name:</strong> ${escapeHtml(opts.customerName || "—")}</p>
        <p style="margin:0 0 4px;"><strong>Email:</strong> ${escapeHtml(opts.customerEmail)}</p>
        <p style="margin:0 0 16px;"><strong>Phone:</strong> ${escapeHtml(opts.customerPhone || "—")}</p>

        <h3 style="color:#272789;font-size:15px;margin-bottom:6px;">Products</h3>
        ${productsHtml}
        <p style="margin:8px 0;"><strong>Matched SKU:</strong> ${escapeHtml(opts.skuName)}${opts.skuId ? ` (${escapeHtml(opts.skuId)})` : ""}</p>
        <p style="margin:0 0 16px;"><strong>Fulfillment:</strong> ${escapeHtml(fulfillmentNotes.join(" · "))}</p>

        <h3 style="color:#272789;font-size:15px;margin-bottom:6px;">Payment</h3>
        <p style="margin:0 0 4px;"><strong>Total:</strong> ${escapeHtml(amount)}</p>
        <p style="margin:0 0 4px;"><strong>Payment type:</strong> ${escapeHtml(opts.paymentType || "—")}</p>
        <p style="margin:0 0 4px;"><strong>Stripe session:</strong> ${escapeHtml(opts.sessionId)}</p>
        ${
          opts.paymentIntentId
            ? `<p style="margin:0 0 4px;"><strong>Payment intent:</strong> ${escapeHtml(opts.paymentIntentId)}</p>`
            : ""
        }
        <p style="margin:0 0 16px;"><a href="${escapeHtml(dashboardUrl)}">Open in Stripe</a></p>

        <h3 style="color:#272789;font-size:15px;margin-bottom:6px;">Shipping address</h3>
        <p style="margin:0 0 16px;line-height:1.5;">${shipHtml}</p>

        <h3 style="color:#272789;font-size:15px;margin-bottom:6px;">Billing address</h3>
        <p style="margin:0 0 8px;line-height:1.5;">${billHtml}</p>
      </div>
    `,
  });

  return { id: info.messageId };
}

/**
 * @deprecated Use sendTeamOrderEmail — kept as alias for older imports.
 */
export async function sendTeamShipEmail(opts) {
  return sendTeamOrderEmail({
    ...opts,
    hasPhysical: true,
  });
}
