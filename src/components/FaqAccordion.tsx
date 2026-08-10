import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { tweenExit, tweenReveal } from "../lib/motion";
import { C } from "../lib/tokens";
import { Pill, Reveal } from "./ui";

export type FaqItemData = { q: string; a: string };

function FaqItem({ q, a }: FaqItemData) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="faq-acc-item">
      <button
        type="button"
        className="faq-acc-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="faq-acc-q">{q}</span>
        <span className="faq-acc-icon" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduce
                ? { opacity: 0 }
                : { height: 0, opacity: 0, transition: tweenExit }
            }
            transition={
              reduce
                ? { duration: 0 }
                : { ...tweenReveal, duration: 0.32 }
            }
            style={{ overflow: "hidden" }}
          >
            <p className="faq-acc-a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type FaqAccordionProps = {
  items: FaqItemData[];
  /** Defaults to “Frequently Asked Questions” */
  title?: string;
  pill?: string;
  /** Center the heading block (default true) */
  centered?: boolean;
};

export function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  pill,
  centered = true,
}: FaqAccordionProps) {
  return (
    <div className="faq-acc">
      <Reveal>
        <div
          className="faq-acc-head"
          style={{ textAlign: centered ? "center" : "left" }}
        >
          {pill && <Pill>{pill}</Pill>}
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: pill ? 16 : 0,
              marginBottom: 0,
            }}
          >
            {title}
          </h2>
        </div>
      </Reveal>
      {items.map((item) => (
        <Reveal key={item.q}>
          <FaqItem {...item} />
        </Reveal>
      ))}
    </div>
  );
}
