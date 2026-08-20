import Stripe from "stripe";
import { resolveSku } from "./catalog.mjs";
import { createDownloadToken, downloadUrlFor } from "./download.mjs";
import { sendCustomerOrderEmail, sendTeamOrderEmail } from "./email.mjs";

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is required");
  return new Stripe(key);
}

/**
 * @param {import('stripe').Stripe.PaymentIntent | string | null | undefined} pi
 * @returns {string | null}
 */
function formatPaymentType(pi) {
  if (!pi || typeof pi === "string") return null;

  const pm =
    pi.payment_method && typeof pi.payment_method === "object"
      ? pi.payment_method
      : null;

  if (pm) {
    const type = pm.type || "unknown";
    if (type === "card" && pm.card) {
      const brand = (pm.card.brand || "card").toUpperCase();
      const last4 = pm.card.last4 ? ` •••• ${pm.card.last4}` : "";
      const wallet = pm.card.wallet?.type
        ? ` (${pm.card.wallet.type})`
        : "";
      return `${brand}${last4}${wallet}`;
    }
    if (type === "link") return "Link";
    if (type === "paypal") return "PayPal";
    if (type === "klarna") return "Klarna";
    return type.replaceAll("_", " ");
  }

  const charge = pi.latest_charge;
  if (charge && typeof charge === "object" && charge.payment_method_details) {
    const details = charge.payment_method_details;
    if (details.card) {
      const brand = (details.card.brand || "card").toUpperCase();
      const last4 = details.card.last4 ? ` •••• ${details.card.last4}` : "";
      return `${brand}${last4}`;
    }
    if (details.type) return details.type.replaceAll("_", " ");
  }

  if (pi.payment_method_types?.length) {
    return pi.payment_method_types.join(", ");
  }

  return null;
}

/**
 * @param {import('stripe').Stripe.Checkout.Session} full
 */
function extractShipping(full) {
  const shippingDetails =
    full.shipping_details ||
    full.collected_information?.shipping_details ||
    null;
  const addr =
    shippingDetails?.address ||
    full.customer_details?.address ||
    null;
  if (!addr) return null;
  return {
    name: shippingDetails?.name || full.customer_details?.name || null,
    line1: addr.line1,
    line2: addr.line2,
    city: addr.city,
    state: addr.state,
    postal_code: addr.postal_code,
    country: addr.country,
  };
}

/**
 * @param {import('stripe').Stripe.Checkout.Session} full
 */
function extractBilling(full) {
  const addr = full.customer_details?.address || null;
  if (!addr || (!addr.line1 && !addr.city && !addr.country)) return null;
  return {
    name: full.customer_details?.name || null,
    line1: addr.line1,
    line2: addr.line2,
    city: addr.city,
    state: addr.state,
    postal_code: addr.postal_code,
    country: addr.country,
  };
}

/**
 * @param {import('stripe').Stripe.Checkout.Session} session
 */
export async function fulfillCheckoutSession(session) {
  const stripe = stripeClient();

  if (session.payment_status !== "paid") {
    console.log(`[fulfill] skip ${session.id} — payment_status=${session.payment_status}`);
    return { ok: true, skipped: "unpaid" };
  }

  if (session.metadata?.activex_fulfilled === "true") {
    console.log(`[fulfill] skip ${session.id} — already fulfilled`);
    return { ok: true, skipped: "already_fulfilled" };
  }

  const full = await stripe.checkout.sessions.retrieve(session.id, {
    expand: [
      "line_items.data.price.product",
      "shipping_cost",
      "collected_information",
      "payment_intent",
      "payment_intent.payment_method",
      "payment_intent.latest_charge",
    ],
  });

  const lineItems = full.line_items?.data ?? [];
  const priceIds = [];
  const productNames = [];
  /** @type {Array<{ name: string, quantity: number, amount: number | null }>} */
  const lineSummaries = [];

  for (const item of lineItems) {
    const price = item.price;
    if (price?.id) priceIds.push(price.id);
    const product = price?.product;
    let name = item.description || "Item";
    if (product && typeof product === "object" && "name" in product && product.name) {
      name = product.name;
      productNames.push(product.name);
    } else if (item.description) {
      productNames.push(item.description);
    }
    lineSummaries.push({
      name,
      quantity: item.quantity ?? 1,
      amount: typeof item.amount_total === "number" ? item.amount_total : null,
    });
  }

  const paymentLinkId =
    typeof full.payment_link === "string"
      ? full.payment_link
      : full.payment_link && typeof full.payment_link === "object"
        ? full.payment_link.id
        : null;

  const sku = resolveSku({
    amountTotal: full.amount_total,
    currency: full.currency,
    paymentLinkId,
    priceIds,
    productNames,
  });

  const email =
    full.customer_details?.email ||
    full.customer_email ||
    null;
  if (!email) {
    throw new Error(`No customer email on session ${session.id}`);
  }

  const name = full.customer_details?.name || null;
  const phone = full.customer_details?.phone || null;
  const shipping = extractShipping(full);
  const billing = extractBilling(full);
  const paymentIntent =
    full.payment_intent && typeof full.payment_intent === "object"
      ? full.payment_intent
      : null;
  const paymentIntentId =
    typeof full.payment_intent === "string"
      ? full.payment_intent
      : paymentIntent?.id || null;
  const paymentType = formatPaymentType(paymentIntent);

  if (!sku) {
    console.warn(
      `[fulfill] unknown product for ${session.id}`,
      { amountTotal: full.amount_total, priceIds, productNames, paymentLinkId },
    );

    // Still alert the team so sales aren't missed when SKU matching fails.
    await sendTeamOrderEmail({
      customerEmail: email,
      customerName: name,
      customerPhone: phone,
      skuId: null,
      skuName: productNames[0] || "Unknown product (check Stripe)",
      hasEbook: false,
      hasPhysical: Boolean(shipping),
      sessionId: full.id,
      paymentIntentId,
      amountTotal: full.amount_total,
      currency: full.currency,
      paymentType,
      lineItems: lineSummaries,
      shipping,
      billing,
    });

    await stripe.checkout.sessions.update(full.id, {
      metadata: {
        ...(full.metadata || {}),
        activex_fulfilled: "true",
        activex_sku: "unknown",
      },
    });

    return { ok: false, error: "unknown_product" };
  }

  let downloadUrl = null;
  if (sku.hasEbook) {
    const token = createDownloadToken({ sessionId: full.id, email });
    downloadUrl = downloadUrlFor(token);
  }

  await sendCustomerOrderEmail({
    to: email,
    name,
    skuName: sku.name,
    downloadUrl,
    hasPhysical: sku.hasPhysical,
  });

  await sendTeamOrderEmail({
    customerEmail: email,
    customerName: name || shipping?.name || null,
    customerPhone: phone,
    skuId: sku.id,
    skuName: sku.name,
    hasEbook: sku.hasEbook,
    hasPhysical: sku.hasPhysical,
    sessionId: full.id,
    paymentIntentId,
    amountTotal: full.amount_total,
    currency: full.currency,
    paymentType,
    lineItems: lineSummaries.length
      ? lineSummaries
      : [{ name: sku.name, quantity: 1, amount: full.amount_total }],
    shipping,
    billing,
  });

  await stripe.checkout.sessions.update(full.id, {
    metadata: {
      ...(full.metadata || {}),
      activex_fulfilled: "true",
      activex_sku: sku.id,
    },
  });

  console.log(`[fulfill] ok ${full.id} sku=${sku.id} email=${email}`);
  return { ok: true, sku: sku.id };
}
