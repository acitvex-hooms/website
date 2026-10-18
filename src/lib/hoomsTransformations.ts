import type { Transformation } from "./transformations";

export type HoomsTransformation = Transformation & {
  /** Hooms' own result. Renders full width above the client grid. */
  featured?: boolean;
};

/**
 * Proof on /hooman, directly above pricing.
 * Add a photo only when it is a real client result. No metrics unless the client confirms them.
 */
export const HOOMS_TRANSFORMATIONS: HoomsTransformation[] = [
  {
    id: "darren",
    name: "Darren",
    summary: "Front, side, and back.",
    image: "/images/transformations/darren.jpg",
    imageAlt: "Darren before and after from the front, side, and back",
  },
  {
    id: "mark",
    name: "Mark",
    summary: "Front, side, and back.",
    image: "/images/transformations/mark.jpg",
    imageAlt: "Mark before and after from the front, side, and back",
  },
];

export function hoomsGallery(): HoomsTransformation[] {
  return HOOMS_TRANSFORMATIONS;
}
