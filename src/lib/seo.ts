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
      "Structured programs, exercise education, and workout tracking in one system. From $19/mo billed annually. Built on the IQ Framework by Ana Coppola.",
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
    title: "Membership Pricing | Full Access, One Price | activeX",
    description:
      "No tiers, no locked features. Every program, tool, and exercise included. Choose monthly or annual, or go further with coaching, custom plans, and video consults.",
  },
  "/coaching": {
    path: "/coaching",
    title: "1-on-1 Online Coaching with Ana or Hooms | activeX",
    description:
      "Personalised online coaching with Ana Coppola or Hooms. Monthly from $799, 6 months $3,999, or annual $5,999. Custom programming, weekly check-ins, and direct access.",
  },
  "/coaches": {
    path: "/coaches",
    title: "Coach Partners | Structure Between Sessions | activeX",
    description:
      "Your coach recommended activeX. Partner pricing on programs, workout tracking, and the IQ Framework so the days between sessions still count.",
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
    title: "About Ana Coppola | Co-founder of activeX",
    description:
      "Meet Ana Coppola, co-founder of activeX and creator of the IQ Framework. 18 years coaching, from everyday clients to public figures. Learn why she built activeX.",
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
      "You're in. Download the activeX app, create your account with your purchase email, and start training with structure.",
    robots: "noindex, nofollow",
  },
  "/welcome-challenge": {
    path: "/welcome-challenge",
    title: "You're In | Challenge Onboarding | activeX",
    description:
      "Download the activeX app, create your account with your purchase email, and complete the 8 week challenge intake so we can prepare your onboarding.",
    robots: "noindex, nofollow",
  },
  "/private-coaching": {
    path: "/private-coaching",
    title: "Private Hybrid Coaching | Ana Coppola | activeX",
    description:
      "Personalised private coaching with Ana Coppola. Individual programming, movement analysis, and digital support between sessions. Request access.",
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
    title: "Xmas Shred Challenge | 8 Weeks with Hooms | activeX",
    description:
      "8 week Xmas Shred with Hooms. Custom program, diet, and movement targets written from your onboarding. $999 for 8 weeks. Only 5 places. $500 prize.",
    ogImage: `${SITE_URL}/images/hooms-xmas-shred.jpg`,
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

const WELCOME_PRODUCT_SEO: Record<
  string,
  { title: string; description: string }
> = {
  membership: {
    title: "Welcome to activeX | Get Started",
    description:
      "You're in. Download the activeX app, create your account with your purchase email, and start training with structure.",
  },
  "custom-program": {
    title: "Your Custom Program Is Being Built | activeX",
    description:
      "Download the app, sign up with your purchase email, and complete the custom program intake so we can personalise your plan.",
  },
  "custom-diet": {
    title: "Your Custom Diet Is Being Built | activeX",
    description:
      "Download the app, sign up with your purchase email, and complete the custom diet intake so we can personalise your plan.",
  },
  "custom-program-diet": {
    title: "Your Custom Program and Diet Are Being Built | activeX",
    description:
      "Download the app, sign up with your purchase email, and complete the intake so we can build your program and diet.",
  },
  "video-consult": {
    title: "You Purchased a Video Consult | activeX",
    description:
      "Complete the short form so we can prepare for your consult. Downloading the app is optional but recommended.",
  },
  coaching: {
    title: "You're In | Coaching Onboarding | activeX",
    description:
      "Download the app, sign up with your purchase email, and complete the coaching intake. We'll reach out within 24 hours.",
  },
  "bbe-ebook": {
    title: "Your BBE eBook Is On the Way | activeX",
    description:
      "Check the email you used at checkout for your BBE eBook download. If it is not in inbox, look in spam.",
  },
  "bbe-ankle": {
    title: "Your Ankle Strap Order Is In | activeX",
    description:
      "We'll pack and ship your BBE Ankle Strap within 2 business days. Watch your inbox for tracking.",
  },
  "bbe-bundle": {
    title: "Your BBE Bundle Is Confirmed | activeX",
    description:
      "We'll email your eBook shortly and ship the ankle strap within 2 business days to your checkout address.",
  },
};

function welcomeProductKey(search: string): string {
  const raw = new URLSearchParams(search).get("product");
  const v = (raw ?? "membership").toLowerCase().trim();
  if (
    v === "custom-program-diet" ||
    v === "program-diet" ||
    v === "program-and-diet" ||
    v === "custom_program_diet" ||
    v === "program_and_diet"
  ) {
    return "custom-program-diet";
  }
  if (v === "custom-program" || v === "program" || v === "custom_program") {
    return "custom-program";
  }
  if (v === "custom-diet" || v === "diet" || v === "custom_diet") {
    return "custom-diet";
  }
  if (
    v === "video-consult" ||
    v === "video" ||
    v === "consult" ||
    v === "video_consult"
  ) {
    return "video-consult";
  }
  if (v === "coaching" || v === "1-on-1" || v === "1on1") return "coaching";
  if (v === "bbe-ebook" || v === "ebook" || v === "bbe_ebook") {
    return "bbe-ebook";
  }
  if (v === "bbe-ankle" || v === "ankle" || v === "bbe_ankle") {
    return "bbe-ankle";
  }
  if (v === "bbe-bundle" || v === "bundle" || v === "bbe_bundle") {
    return "bbe-bundle";
  }
  return "membership";
}

export function getSeoForPath(pathname: string, search = ""): PageSeo {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (normalized === "/welcome") {
    const key = welcomeProductKey(search);
    const copy = WELCOME_PRODUCT_SEO[key] ?? WELCOME_PRODUCT_SEO.membership;
    const product = new URLSearchParams(search).get("product");
    return {
      ...PAGE_SEO["/welcome"],
      title: copy.title,
      description: copy.description,
      path: product
        ? `/welcome?product=${encodeURIComponent(product)}`
        : "/welcome",
    };
  }

  if (PAGE_SEO[normalized]) return PAGE_SEO[normalized];

  const challenge = getChallengeFromPath(normalized);
  if (challenge) {
    return {
      path: challenge.path,
      title: challenge.seoTitle,
      description: challenge.seoDescription,
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
