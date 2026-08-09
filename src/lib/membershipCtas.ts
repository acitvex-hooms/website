/** Shared membership checkout copy — keep Home + Pricing aligned. */
export const MEMBERSHIP_CTAS = {
  nav: "Join Now",
  hero: "Start Training",
  join: "Join activeX",
  joinFromAnnual: "Join activeX — from $19/mo annually",
  startMembership: "Start Your Membership",
  annualBadge: "Best Value",
  annualCta: "Start Annual. Save 24%",
  monthlyCta: "Start Monthly",
  annualSub: "$19/month billed annually",
  monthlySub: "Cancel anytime",
} as const;

/**
 * Founding member Payment Links ($14.99/mo · $179/yr).
 * These are not coach-partner links; they are the founding checkout products.
 */
export const STRIPE_FOUNDING = {
  annual: "https://buy.stripe.com/4gM6oG9qU91rd3Z3IF4ow09",
  monthly: "https://buy.stripe.com/8x23cufPielLd3Zenj4ow08",
} as const;

/** Public membership CTAs (Home / Pricing) — founding Payment Links during the offer. */
export const STRIPE_MEMBERSHIP = {
  annual: STRIPE_FOUNDING.annual,
  monthly: STRIPE_FOUNDING.monthly,
} as const;
