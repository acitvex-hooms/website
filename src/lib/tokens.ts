export const C = {
  purple: "#7828FF",
  blue: "#64BFF4",
  navy: "#272789",
  white: "#FFFFFF",
  offWhite: "#F9F9FA",
  lightGray: "#F3F4F6",
  text: "#1a1a2e",
  textMid: "#4a4a6a",
  textLight: "#7a7a9a",
  border: "#e5e7eb",
  cardBg: "#FFFFFF",
  gradient: "linear-gradient(135deg, #7828FF, #64BFF4)",
} as const;

export const MAX = "1200px";
export const FONT = "'Montserrat', system-ui, -apple-system, sans-serif";

export type PageKey =
  | "home"
  | "iq"
  | "programs"
  | "pricing"
  | "coaching"
  | "apply"
  | "videoConsult"
  | "welcome"
  | "about"
  | "hooman"
  | "contact";

export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  iq: "/iq-framework",
  programs: "/programs",
  pricing: "/pricing",
  coaching: "/coaching",
  apply: "/apply",
  videoConsult: "/video-consult",
  welcome: "/welcome",
  about: "/about",
  hooman: "/about/hooms",
  contact: "/contact",
};

export const PATH_TO_PAGE: Record<string, PageKey> = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([k, v]) => [v, k as PageKey]),
) as Record<string, PageKey>;
