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
  features: { title: string; text: string }[];
  inboxName: string;
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
    duration: "8-week challenge",
    audience:
      "For men in their 20s, 30s & 40s who perform everywhere else — and still can't hold a training week together.",
    headline: "Less body fat. More output. A week that holds.",
    lede:
      "Eight weeks of structure designed to shift body fat and build a routine that survives a real schedule. Built for quick, visible results — not another plan that dies when the week gets busy.",
    startsLabel: "Starts Monday 21st",
    places: 5,
    price: "$999",
    priceValue: 999,
    pricePer: "8 weeks",
    stripeUrl: "https://buy.stripe.com/eVqaEW5aEa5vggb4MJ4ow0f",
    cta: "Join the challenge",
    prize: "$500",
    prizeDetail:
      "The $500 prize goes to the top performer — the biggest transformation during the 8 weeks.",
    instagramUrl: "https://www.instagram.com/_active_x_/",
    instagramHandle: "@_active_x_",
    instagramKeyword: "CHALLENGE",
    heroImage: {
      src: "/images/hooms-stage.jpg",
      alt: "Hooms on the Classic Physique stage",
    },
    portraitImage: {
      src: "/images/hooms-portrait.webp",
      alt: "Hooms",
    },
    photoCredit: "Gary Phillips",
    problemTitle: "You don't have a discipline problem.",
    problemBody:
      "You hit targets at work. You show up when it's hard. Then the week moves, training is the first thing dropped, and the plan dies quietly.",
    problemCycle: ["Start strong.", "Fall off.", "Start again."],
    problemClose: "Eight weeks from now, what's actually different?",
    builtKicker: "That's why I built",
    builtTitle: "Xmas Shred Challenge",
    builtLede: "Eight weeks. One structure. Every session measured.",
    builtClose: "Structure, not templates.",
    features: [
      {
        title: "Your actual week",
        text: "Training built around your actual week, not an ideal one.",
      },
      {
        title: "Macros that match training",
        text: "Macros set against your training days, not one flat number.",
      },
      {
        title: "Logged in activeX",
        text: "Every set logged in the activeX app.",
      },
      {
        title: "Weekly check-in",
        text: "A weekly check-in where every change comes from your data.",
      },
    ],
    included: [
      "8 weeks of individual programming",
      "Training built around your actual week",
      "Macros set to your training days",
      "Every set logged in the activeX app",
      "Weekly check-in from your data",
      "$500 prize for the biggest transformation",
    ],
    inboxName: "Hooms",
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
