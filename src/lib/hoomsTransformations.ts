import type { Transformation } from "./transformations";

export type HoomsTransformation = Transformation & {
  /** Hooms' own result. Renders full width above the client grid. */
  featured?: boolean;
};

/**
 * Proof on /hooman, directly above pricing.
 * Leave this empty until the photos and captions are real client results.
 * First entry can set featured: true. Files go in public/images/transformations/.
 */
export const HOOMS_TRANSFORMATIONS: HoomsTransformation[] = [];

export function hoomsGallery(): HoomsTransformation[] {
  return HOOMS_TRANSFORMATIONS;
}
