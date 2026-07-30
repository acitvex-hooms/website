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

    const mobile = window.matchMedia("(max-width: 900px)");
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const f = mobile.matches ? factor * 0.25 : factor;
        setY(window.scrollY * f);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", onScroll);
    };
  }, [factor]);

  return y;
}
