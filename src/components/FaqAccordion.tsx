import { useState } from "react";
import { C } from "../lib/tokens";
import { Pill, Reveal } from "./ui";

export type FaqItemData = { q: string; a: string };

function FaqItem({ q, a }: FaqItemData) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: C.navy,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            fontSize: 22,
            fontWeight: 400,
            color: C.purple,
            lineHeight: 1,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          style={{
            fontSize: 15,
            color: C.textMid,
            lineHeight: 1.7,
            margin: "0 0 20px",
            maxWidth: 640,
          }}
        >
          {a}
        </p>
      )}
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
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <Reveal>
        <div
          style={{
            textAlign: centered ? "center" : "left",
            marginBottom: 28,
          }}
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
