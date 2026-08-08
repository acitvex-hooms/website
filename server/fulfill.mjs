import Stripe from "stripe";
import { resolveSku } from "./catalog.mjs";
import { createDownloadToken, downloadUrlFor } from "./download.mjs";
import { sendCustomerOrderEmail, sendTeamShipEmail } from "./email.mjs";

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is required");
  return new Stripe(key);
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
    expand: ["line_items.data.price.product", "shipping_cost", "collected_information"],
  });

  const lineItems = full.line_items?.data ?? [];
  const priceIds = [];
  const productNames = [];

  for (const item of lineItems) {
    const price = item.price;
    if (price?.id) priceIds.push(price.id);
    const product = price?.product;
    if (product && typeof product === "object" && "name" in product && product.name) {
      productNames.push(product.name);
    } else if (item.description) {
      productNames.push(item.description);
    }
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

  if (!sku) {
    console.warn(
      `[fulfill] unknown product for ${session.id}`,
      { amountTotal: full.amount_total, priceIds, productNames, paymentLinkId },
    );
    return { ok: false, error: "unknown_product" };
  }

  const email =
    full.customer_details?.email ||
    full.customer_email ||
    null;
  if (!email) {
    throw new Error(`No customer email on session ${session.id}`);
  }

  const name = full.customer_details?.name || null;

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

  if (sku.hasPhysical) {
    const shippingDetails =
      full.shipping_details ||
      full.collected_information?.shipping_details ||
      null;
    const addr =
      shippingDetails?.address ||
      full.customer_details?.address ||
      null;

    await sendTeamShipEmail({
      customerEmail: email,
      customerName: name || shippingDetails?.name || null,
      skuName: sku.name,
      sessionId: full.id,
      amountTotal: full.amount_total,
      currency: full.currency,
      shipping: addr
        ? {
            name: shippingDetails?.name || name,
            line1: addr.line1,
            line2: addr.line2,
            city: addr.city,
            state: addr.state,
            postal_code: addr.postal_code,
            country: addr.country,
          }
        : null,
    });
  }

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
