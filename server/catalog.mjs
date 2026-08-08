/**
 * Map Stripe checkouts to shop SKUs.
 *
 * Preferred: set STRIPE_PRICE_* env vars to your Stripe Price IDs (price_...).
 * Fallback: match amount_total in cents (USD).
 */

export const SKUS = {
  ebook: {
    id: "ebook",
    name: "BBE eBook",
    hasEbook: true,
    hasPhysical: false,
    welcomePath: "/welcome?product=bbe-ebook",
    amounts: [6000],
  },
  ankle: {
    id: "ankle",
    name: "BBE Ankle Strap",
    hasEbook: false,
    hasPhysical: true,
    welcomePath: "/welcome?product=bbe-ankle",
    amounts: [8100],
  },
  bundle: {
    id: "bundle",
    name: "BBE eBook + Ankle Strap Bundle",
    hasEbook: true,
    hasPhysical: true,
    welcomePath: "/welcome?product=bbe-bundle",
    amounts: [13600],
  },
};

function priceEnvMap() {
  return {
    ebook: (process.env.STRIPE_PRICE_EBOOK || "").trim(),
    ankle: (process.env.STRIPE_PRICE_ANKLE || "").trim(),
    bundle: (process.env.STRIPE_PRICE_BUNDLE || "").trim(),
  };
}

function plinkEnvMap() {
  return {
    ebook: (process.env.STRIPE_PLINK_EBOOK || "").trim(),
    ankle: (process.env.STRIPE_PLINK_ANKLE || "").trim(),
    bundle: (process.env.STRIPE_PLINK_BUNDLE || "").trim(),
  };
}

/**
 * @param {{
 *   amountTotal: number | null,
 *   currency: string | null,
 *   paymentLinkId: string | null,
 *   priceIds: string[],
 *   productNames: string[],
 * }} input
 */
export function resolveSku(input) {
  const prices = priceEnvMap();
  const plinks = plinkEnvMap();

  for (const [sku, priceId] of Object.entries(prices)) {
    if (priceId && input.priceIds.includes(priceId)) {
      return SKUS[sku];
    }
  }

  for (const [sku, plink] of Object.entries(plinks)) {
    if (plink && input.paymentLinkId === plink) {
      return SKUS[sku];
    }
  }

  const names = input.productNames.map((n) => n.toLowerCase());
  if (names.some((n) => n.includes("bundle"))) return SKUS.bundle;
  if (names.some((n) => n.includes("ankle") || n.includes("strap"))) {
    return SKUS.ankle;
  }
  if (names.some((n) => n.includes("ebook") || n.includes("e-book") || n.includes("bbe"))) {
    return SKUS.ebook;
  }

  if (input.currency === "usd" && typeof input.amountTotal === "number") {
    for (const sku of Object.values(SKUS)) {
      if (sku.amounts.includes(input.amountTotal)) return sku;
    }
  }

  return null;
}
