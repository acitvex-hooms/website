export type Transformation = {
  id: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
};

/** Published client composites. Add copy/metrics only when the client confirms them. */
export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "hannah",
    name: "Hannah McCalmont",
    summary:
      "Front, side, and back — from everyday training photos to the competition stage.",
    image: "/images/transformations/hannah-mccalmont.webp",
    imageAlt:
      "Hannah McCalmont before and after from the front, side, and back",
  },
  {
    id: "eric",
    name: "Eric",
    summary:
      "Three stages of the same physique: starting point, mid-way, and a leaner, more defined finish.",
    image: "/images/transformations/eric.webp",
    imageAlt: "Eric physique progression in three stages",
  },
  {
    id: "miryana",
    name: "Miryana",
    summary:
      "Same kit, same three angles. Clearer muscle and a tighter midsection.",
    image: "/images/transformations/miryana.webp",
    imageAlt: "Miryana before and after from the front, side, and back",
  },
  {
    id: "charlie",
    name: "Charlie Clausen",
    summary:
      "A tighter, more defined physique from consistent training with structure.",
    image: "/images/transformations/charlie-clausen.webp",
    imageAlt: "Charlie Clausen before and after, front view",
  },
];
