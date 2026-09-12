export type ChallengeSlug = "hooms";

export type ChallengeConfig = {
  slug: ChallengeSlug;
  path: string;
  aliases: string[];
  coach: string;
  coachEmail: string;
  navLabel: string;
  kicker: string;
  name: string;
  duration: string;
  audience: string;
  headline: string;
  lede: string;
  startsLabel: string;
  places: number;
  price: string;
  priceValue: number;
  pricePer: string;
  stripeUrl: string;
  cta: string;
  prize: string;
  prizeDetail: string;
  included: string[];
  instagramUrl: string;
  instagramHandle: string;
  instagramKeyword: string;
  heroImage: { src: string; alt: string };
  portraitImage: { src: string; alt: string };
  photoCredit?: string;
  problemTitle: string;
  problemBody: string;
  problemCycle: [string, string, string];
  problemClose: string;
  builtKicker: string;
  builtTitle: string;
  builtLede: string;
  builtClose: string;
  customTitle: string;
  customLede: string;
  customPoints: { title: string; text: string }[];
  features: { title: string; text: string }[];
  inboxName: string;
  seoTitle: string;
  seoDescription: string;
};

/**
 * Add a second concurrent challenge here, then point a public URL at its
 * `path` (and optional aliases). The landing page, apply form, and emails
 * all read from this config.
 */
export const CHALLENGES: Record<ChallengeSlug, ChallengeConfig> = {
  hooms: {
    slug: "hooms",
    path: "/Hooms-challenge",
    aliases: ["/hooms-challenge"],
    coach: "Hooms",
    coachEmail: "hooms@activex.fit",
    navLabel: "Hooms Challenge",
    kicker: "Hooms",
    name: "Xmas Shred Challenge",
    duration: "8 week challenge",
    audience:
      "For men in their 20s, 30s and 40s who perform everywhere else, and still can't hold a training week together.",
    headline: "Less body fat. More output. A week that holds.",
    lede:
      "Eight weeks of structure designed to shift body fat and build a routine that survives a real schedule. Built for quick, visible results. Not another plan that dies when the week gets busy.",
    startsLabel: "Starts Monday 21st",
    places: 5,
    price: "$999",
    priceValue: 999,
    pricePer: "8 weeks",
    stripeUrl: "https://buy.stripe.com/eVqaEW5aEa5vggb4MJ4ow0f",
    cta: "Join the challenge",
    prize: "$500",
    prizeDetail:
      "The $500 prize goes to the top performer, the biggest transformation during the 8 weeks.",
    instagramUrl: "https://www.instagram.com/_active_x_/",
    instagramHandle: "@_active_x_",
    instagramKeyword: "CHALLENGE",
    heroImage: {
      src: "/images/hooms-xmas-shred.jpg",
      alt: "Xactive Hooman 8 week Xmas Shred",
    },
    portraitImage: {
      src: "/images/hooms-stage.jpg",
      alt: "Hooms on the Classic Physique stage",
    },
    problemTitle: "You don't have a discipline problem.",
    problemBody:
      "You hit targets at work. You show up when it's hard. Then the week moves, training is the first thing dropped, and the plan dies quietly.",
    problemCycle: ["Start strong.", "Fall off.", "Start again."],
    problemClose: "Eight weeks from now, what's actually different?",
    builtKicker: "That's why I built",
    builtTitle: "Xmas Shred Challenge",
    builtLede:
      "Eight weeks. One structure. Every session measured. Your program, diet, and movement targets are written from the answers you give in onboarding.",
    builtClose: "Written for you. Not a template.",
    customTitle: "Custom program. Custom diet. Movement targets.",
    customLede:
      "After payment you complete a short onboarding. Those answers write the whole 8 weeks. Nothing is generic. Nothing is sent to the group as one plan.",
    customPoints: [
      {
        title: "Custom program",
        text: "Your training is written from your onboarding answers. Work hours, training days, equipment, and starting point. Built around the week you actually have.",
      },
      {
        title: "Custom diet",
        text: "Calories, macros, and food direction come from what you eat now, how you train, and the result you want. Not one flat number for every day.",
      },
      {
        title: "Movement targets",
        text: "Daily steps and movement are set from your job, travel, and current baseline, then tracked in the app so the week stays honest.",
      },
    ],
    features: [
      {
        title: "Your actual week",
        text: "Training built around your actual week, not an ideal one.",
      },
      {
        title: "Diet that matches training",
        text: "Macros set against your training days, not one number copied across the week.",
      },
      {
        title: "Logged in activeX",
        text: "Every set, every food target, and every movement number lives in the activeX app.",
      },
      {
        title: "Weekly check in",
        text: "A weekly check in where every change comes from your data.",
      },
    ],
    included: [
      "8 weeks of custom programming from your onboarding",
      "Custom diet written from your answers",
      "Movement targets set to your actual week",
      "Every set logged in the activeX app",
      "Weekly check in from your data",
      "$500 prize for the biggest transformation",
    ],
    inboxName: "Hooms",
    seoTitle: "Xmas Shred Challenge | 8 Weeks with Hooms | activeX",
    seoDescription:
      "8 week Xmas Shred with Hooms. Custom program, diet, and movement targets written from your onboarding. $999 for 8 weeks. Only 5 places. $500 prize.",
  },
};

export const AGE_BRACKETS = ["20s", "30s", "40s", "Other"] as const;

export function getChallenge(slug: string | undefined) {
  if (!slug) return undefined;
  return CHALLENGES[slug as ChallengeSlug];
}

export function getChallengeFromPath(pathname: string) {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  for (const challenge of Object.values(CHALLENGES)) {
    if (challenge.path === path) return challenge;
    if (challenge.aliases.some((alias) => alias.toLowerCase() === path.toLowerCase())) {
      return challenge;
    }
  }

  if (path.startsWith("/challenge/")) {
    return getChallenge(path.slice("/challenge/".length));
  }

  return undefined;
}

export function isChallengeLandingPath(pathname: string) {
  return Boolean(getChallengeFromPath(pathname));
}
