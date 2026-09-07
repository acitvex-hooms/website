import { PAGE_PATHS } from "./tokens";

/**
 * 1-on-1 coaching Payment Links.
 * Recommended Stripe success URL: https://activex.fit/welcome?product=coaching
 * Empty values fall back to /apply.
 */
export const STRIPE_COACHING = {
  monthly: "",
  sixMonth: "",
  annual: "",
} as const;

export type CoachingPlan = {
  id: "monthly" | "sixMonth" | "annual";
  name: string;
  price: string;
  per?: string;
  note: string;
  badge?: string;
  featured?: boolean;
  cta: string;
  href?: string;
  to?: string;
};

function checkout(url: string): Pick<CoachingPlan, "href" | "to" | "cta"> {
  const trimmed = url.trim();
  if (trimmed) {
    return { href: trimmed, cta: "Get started" };
  }
  return { to: PAGE_PATHS.apply, cta: "Apply" };
}

export const COACHING_PLANS: CoachingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$799",
    per: "/month",
    note: "3-month minimum",
    ...checkout(STRIPE_COACHING.monthly),
  },
  {
    id: "sixMonth",
    name: "6 months",
    price: "$3,999",
    note: "Save $795",
    ...checkout(STRIPE_COACHING.sixMonth),
  },
  {
    id: "annual",
    name: "Annual",
    price: "$5,999",
    note: "Save $3,589",
    badge: "Best value",
    featured: true,
    ...checkout(STRIPE_COACHING.annual),
  },
];
