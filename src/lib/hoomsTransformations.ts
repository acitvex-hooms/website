import { TRANSFORMATIONS, type Transformation } from "./transformations";

export type HoomsTransformation = Transformation & {
  /** Hooms' own result. Renders full width above the client grid. */
  featured?: boolean;
};

/**
 * Gallery on /hooman, directly under the video.
 * Put Hooms' own photo first with featured: true, then 4–5 clients.
 * Files go in public/images/transformations/.
 * An empty list falls back to the published site results.
 */
export const HOOMS_TRANSFORMATIONS: HoomsTransformation[] = [];

export function hoomsGallery(): HoomsTransformation[] {
  if (HOOMS_TRANSFORMATIONS.length > 0) return HOOMS_TRANSFORMATIONS;
  return TRANSFORMATIONS;
}
