import { getPostBySlug } from "./blog";
import { getChallengeFromPath } from "./challenges";

export const SITE_URL = "https://activex.fit";
export const SITE_NAME = "activeX";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-banner.jpg`;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Defaults to index, follow */
  robots?: string;
  ogImage?: string;
  ogType?: string;
};

/**
 * Per-route SEO. Titles ~50–60 chars. Descriptions ~150–160 chars.
 * Funnel/form/post-purchase routes are noindex.
 */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "activeX | Train Like You Understand Your Body",
    description:
      "Structured programs, 600+ exercises with coaching cues, and workout tracking in one system. Built on the IQ Framework by Ana Coppola. Start training with activeX.",
  },
  "/iq-framework": {
    path: "/iq-framework",
    title: "IQ Framework | Mobility, Movement & Mindset | activeX",
    description:
      "Learn the activeX IQ Framework: Mobility IQ, Movement IQ, and Mindset IQ. One decision-making system behind every program, workout, and tool on the platform.",
  },
  "/programs": {
    path: "/programs",
    title: "Fitness Programs & Custom Builder | activeX",
    description:
      "Choose from 40+ structured programs or build your own with the Custom Program Builder. Beginner to advanced, home and gym, all included in activeX membership.",
  },
  "/pricing": {
    path: "/pricing",
    title: "Membership Pricing | Monthly & Annual Plans | activeX",
    description:
      "Full access membership with no locked features. Choose monthly or annual billing, or go further with coaching, custom programs, diets, and video consults.",
  },
  "/coaching": {
    path: "/coaching",
    title: "1-on-1 Online Coaching with Ana or Hooms | activeX",
    description:
      "Personalised online coaching with Ana Coppola or Hooms. Monthly from $799, 6 months $3,999, or annual $5,999. Custom programming, weekly check-ins, and direct access.",
  },
  "/coaches": {
    path: "/coaches",
    title: "Coach Partner Pricing | activeX for Clients",
    description:
      "Your coach recommended activeX. Get partner pricing on full membership access: programs, tracking, and the IQ Framework for the days between sessions.",
    robots: "noindex, nofollow",
  },
  "/shop": {
    path: "/shop",
    title: "Shop | BBE eBook & Ankle Strap | activeX",
    description:
      "Shop Ana’s BBE eBook and Brazilian-made ankle strap. Buy separately or as a bundle for glute training at home or in the gym.",
  },
  "/blog": {
    path: "/blog",
    title: "Blog | Training, Movement & Mindset | activeX",
    description:
      "Practical writing on the IQ Framework, programming, and how to train with more intention. Guides from Ana Coppola and the activeX team.",
  },
  "/about": {
    path: "/about",
    title: "About Ana Coppola | Founder of activeX",
    description:
      "Meet Ana Coppola, co-founder of activeX and creator of the IQ Framework. 18+ years coaching, from everyday clients to public figures. Learn why she built activeX.",
  },
  "/about/hooms": {
    path: "/about/hooms",
    title: "About Hooms | Co-founder of activeX",
    description:
      "Meet Hooms, co-founder of activeX. Competitive bodybuilder with 20+ years of training experience and hypertrophy specialist. Learn his story.",
  },
  "/results": {
    path: "/results",
    title: "Client Transformations | Real Results | activeX",
    description:
      "See client transformations from activeX coaching. Real physiques built with structure — Hannah, Eric, Miryana, Charlie, and more. Results vary.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact activeX | Support & Partnerships",
    description:
      "Questions about membership, coaching, or partnerships? Contact the activeX team in Dubai. Email info@activex.fit or send a message through our contact form.",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | activeX",
    description:
      "Read how activeX LLC FZ collects, uses, and protects your personal and health data. Learn your rights, data retention, and how to contact us about privacy.",
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | activeX",
    description:
      "Terms of Service for the activeX website, app, and membership. Understand your rights and responsibilities when using activeX products and services.",
  },
  "/refund": {
    path: "/refund",
    title: "Refund Policy | activeX",
    description:
      "activeX refund and return policy for memberships, coaching, custom plans, and digital products. Learn how to request a refund and typical processing times.",
  },
  "/apply": {
    path: "/apply",
    title: "Apply for 1-on-1 Coaching | activeX",
    description:
      "Apply for personalised 1-on-1 coaching with Ana or Hooms. Tell us your goals and training history so we can confirm coaching is the right fit.",
    robots: "noindex, nofollow",
  },
  "/video-consult": {
    path: "/video-consult",
    title: "Book a Video Consult | activeX",
    description:
      "Book a one-off video consultation with Ana or Hooms for personalised guidance on training, movement, nutrition, or goals.",
    robots: "noindex, nofollow",
  },
  "/welcome": {
    path: "/welcome",
    title: "Welcome to activeX | Get Started",
    description:
      "You're in. Download the activeX app, create your account with your purchase email, and complete any intake steps for your custom plan or coaching.",
    robots: "noindex, nofollow",
  },
  "/welcome-challenge": {
    path: "/welcome-challenge",
    title: "8-Week Challenge Onboarding | activeX",
    description:
      "You're in. Download the activeX app, create your account with your purchase email, and complete the 8-week challenge intake.",
    robots: "noindex, nofollow",
  },
  "/private-coaching": {
    path: "/private-coaching",
    title: "Private Hybrid Coaching | activeX",
    description:
      "Private coaching with individual programming, movement analysis, and digital support between sessions. Request access with Ana Coppola.",
    robots: "noindex, nofollow",
  },
  "/private-coaching/welcome": {
    path: "/private-coaching/welcome",
    title: "Welcome to Private Hybrid Coaching | activeX",
    description:
      "Your coaching starts before the first session. Complete your intake, health screening, and activeX setup.",
    robots: "noindex, nofollow",
  },
  "/Hooms-challenge": {
    path: "/Hooms-challenge",
    title: "Xmas Shred Challenge | Hooms | activeX",
    description:
      "8 week Xmas Shred Challenge with Hooms. $999 for 8 weeks. Only 5 places. $500 prize for the biggest transformation.",
    ogImage: `${SITE_URL}/images/hooms-stage.jpg`,
    robots: "noindex, nofollow",
  },
  "/founding-50": {
    path: "/founding-50",
    title: "Founding Members | $14.99/mo Locked for Life | activeX",
    description:
      "Join 50 founding members at $14.99/mo locked for life. 14-day free trial, full platform access, and founding pricing that stays yours. Limited spots available.",
    robots: "noindex, nofollow",
  },
};

export const DEFAULT_SEO: PageSeo = PAGE_SEO["/"];

export function getSeoForPath(pathname: string): PageSeo {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (PAGE_SEO[normalized]) return PAGE_SEO[normalized];

  const challenge = getChallengeFromPath(normalized);
  if (challenge) {
    return {
      path: challenge.path,
      title: `${challenge.name} | ${challenge.coach} | activeX`,
      description: challenge.lede.slice(0, 160),
      ogImage: absoluteUrl(challenge.heroImage.src),
      robots: "noindex, nofollow",
    };
  }

  if (normalized.startsWith("/blog/")) {
    const slug = normalized.slice("/blog/".length);
    const post = getPostBySlug(slug);
    if (post) {
      return {
        path: normalized,
        title: `${post.title} | activeX Blog`,
        description: post.excerpt || DEFAULT_SEO.description,
        ogImage: post.cover ? absoluteUrl(post.cover) : undefined,
        ogType: "article",
      };
    }
  }

  return {
    ...DEFAULT_SEO,
    path: normalized || "/",
    robots: "noindex, follow",
  };
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
