import { useEffect, useState } from "react";

/** Scroll-linked vertical offset for parallax media. Respects reduced motion. */
export function useParallax(factor = 0.45) {
  const [y, setY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setY(window.scrollY * factor);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [factor]);

  return y;
}
