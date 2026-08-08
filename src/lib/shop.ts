/**
 * BBE shop catalog. Checkout uses Stripe Payment Links (same as membership).
 * Set these in .env / Railway after creating links in Stripe Dashboard:
 *   VITE_STRIPE_BBE_EBOOK
 *   VITE_STRIPE_BBE_ANKLE
 *   VITE_STRIPE_BBE_BUNDLE
 *
 * Recommended success URLs when creating links:
 *   ebook  → https://activex.fit/welcome?product=bbe-ebook
 *   ankle  → https://activex.fit/welcome?product=bbe-ankle
 *   bundle → https://activex.fit/welcome?product=bbe-bundle
 *
 * Enable shipping address collection on ankle + bundle links.
 */

export type ShopProduct = {
  id: "ebook" | "ankle" | "bundle";
  name: string;
  tag: string;
  price: string;
  compareAt?: string;
  blurb: string;
  points: string[];
  image: string;
  stripeUrl: string;
  cta: string;
  featured?: boolean;
  welcomeProduct: "bbe-ebook" | "bbe-ankle" | "bbe-bundle";
};

const STRIPE_EBOOK =
  (import.meta.env.VITE_STRIPE_BBE_EBOOK as string | undefined)?.trim() ||
  "https://buy.stripe.com/7sY4gy6eI6TjaVRgvr4ow0c";
const STRIPE_ANKLE =
  (import.meta.env.VITE_STRIPE_BBE_ANKLE as string | undefined)?.trim() ||
  "https://buy.stripe.com/fZu14m7iMdhH0hd0wt4ow0b";
const STRIPE_BUNDLE =
  (import.meta.env.VITE_STRIPE_BBE_BUNDLE as string | undefined)?.trim() ||
  "https://buy.stripe.com/9B68wO8mQ1yZ5Bx3IF4ow0a";

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "ebook",
    name: "BBE eBook",
    tag: "Digital",
    price: "$60",
    blurb:
      "A Small Step to a Big Change — Ana’s guide to building stronger, fuller glutes with structure you can actually follow.",
    points: [
      "10-week Brazilian Glute Makeover program",
      "Bodyweight sessions you can do at home or in the gym",
      "Diet strategies and Ana’s coaching cues",
      "Delivered by email after purchase",
    ],
    image: "/images/shop/bbe-ebook.webp",
    stripeUrl: STRIPE_EBOOK,
    cta: "Buy eBook",
    welcomeProduct: "bbe-ebook",
  },
  {
    id: "ankle",
    name: "BBE Ankle Strap",
    tag: "Hardware",
    price: "$81",
    compareAt: "$99",
    blurb:
      "The cable-machine ankle strap made in Brazil — stable, comfortable, and built for serious glute work.",
    points: [
      "Even weight distribution that stays put on your ankle",
      "Attaches to any cable or pulley machine",
      "Extra-strong stitching for lasting use",
      "Ships within 2 business days",
    ],
    image: "/images/shop/bbe-ankle-strap.webp",
    stripeUrl: STRIPE_ANKLE,
    cta: "Buy Ankle Strap",
    welcomeProduct: "bbe-ankle",
  },
  {
    id: "bundle",
    name: "eBook + Ankle Strap",
    tag: "Best value",
    price: "$136",
    blurb:
      "The complete BBE setup: digital program by email, plus the strap that makes cable glute work feel right.",
    points: [
      "Full BBE eBook delivered by email",
      "BBE Ankle Strap shipped to you",
      "Save versus buying each separately",
      "Everything you need to start the system",
    ],
    image: "/images/shop/bbe-bundle.webp",
    stripeUrl: STRIPE_BUNDLE,
    cta: "Get the Bundle",
    featured: true,
    welcomeProduct: "bbe-bundle",
  },
];

export function shopBuyHref(product: ShopProduct): string {
  if (product.stripeUrl) return product.stripeUrl;
  return `mailto:info@activex.fit?subject=${encodeURIComponent(
    `Purchase request: ${product.name}`,
  )}&body=${encodeURIComponent(
    `Hi — I'd like to buy the ${product.name} (${product.price}).\n\nMy shipping address (if physical):\n`,
  )}`;
}
