import type { Transition, Variants } from "framer-motion";

/** Shared easing — matches prior CSS cubic-bezier(.22,1,.36,1) */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 0.9,
};

export const tweenReveal: Transition = {
  duration: 0.45,
  ease: easeOutExpo,
};

export const tweenExit: Transition = {
  duration: 0.22,
  ease: easeOutExpo,
};

export function revealItem(reduce: boolean | null): Variants {
  if (reduce) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: tweenReveal,
    },
  };
}

export function staggerContainer(
  reduce: boolean | null,
  stagger = 0.08,
  delayChildren = 0.04,
): Variants {
  return {
    hidden: {},
    show: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: stagger, delayChildren },
    },
  };
}
