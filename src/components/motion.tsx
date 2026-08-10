import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";
import { revealItem, staggerContainer } from "../lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  style?: HTMLMotionProps<"div">["style"];
  /** Seconds between children */
  stagger?: number;
  delayChildren?: number;
};

/** Parent for staggered enter-on-view children (use with MotionItem). */
export function Stagger({
  children,
  className,
  style,
  stagger = 0.08,
  delayChildren = 0.04,
}: StaggerProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer(reduce, stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

type MotionItemProps = {
  children: ReactNode;
  className?: string;
  style?: HTMLMotionProps<"div">["style"];
};

export function MotionItem({ children, className, style }: MotionItemProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={revealItem(reduce)}
    >
      {children}
    </motion.div>
  );
}
