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
 * Only used on `/founding-50`.
 */
export const STRIPE_FOUNDING = {
  annual: "https://buy.stripe.com/4gM6oG9qU91rd3Z3IF4ow09",
  monthly: "https://buy.stripe.com/8x23cufPielLd3Zenj4ow08",
} as const;

/**
 * Standard public membership Payment Links (Home, Pricing, Coaches, etc.).
 * Promo/referral codes from coaches are entered at Stripe checkout.
 */
export const STRIPE_MEMBERSHIP = {
  annual: "https://buy.stripe.com/28E5kCbz27Xn6FB0wt4ow01",
  monthly: "https://buy.stripe.com/14A28q9qU4Lb2plcfb4ow00",
} as const;
