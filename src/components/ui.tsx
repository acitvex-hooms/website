import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { C, FONT, MAX, PAGE_PATHS, type PageKey } from "../lib/tokens";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

export function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.1 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(.22,1,.36,1), transform 0.7s ${delay}s cubic-bezier(.22,1,.36,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

type CTAProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
};

export function CTA({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  style: s,
}: CTAProps) {
  const [h, setH] = useState(false);
  const isPri = variant === "primary";
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    cursor: "pointer",
    padding: isPri ? "15px 32px" : "13px 28px",
    borderRadius: 50,
    fontWeight: 600,
    fontSize: isPri ? 15 : 14,
    letterSpacing: 0.2,
    transition: "all 0.35s",
    background: isPri ? (h ? C.navy : C.purple) : "transparent",
    color: isPri ? "#fff" : C.navy,
    border: isPri ? "none" : `2px solid ${C.border}`,
    boxShadow: isPri && h ? "0 8px 32px rgba(120,40,255,0.25)" : "none",
    transform: h ? "translateY(-2px)" : "none",
    ...s,
  };
  const handlers = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick,
  };

  if (to) {
    return (
      <Link to={to} className="cta-btn" style={style} {...handlers}>
        {children}
      </Link>
    );
  }

  const isExternal = Boolean(href && /^https?:\/\//i.test(href));

  return (
    <a
      className="cta-btn"
      href={href ?? "#"}
      style={style}
      {...handlers}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function Pill({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "light";
}) {
  const light = variant === "light";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: 50,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1.8,
        textTransform: "uppercase",
        color: light ? "#fff" : C.purple,
        background: light ? "rgba(255,255,255,0.14)" : "rgba(120,40,255,0.07)",
        border: light
          ? "1px solid rgba(255,255,255,0.35)"
          : "1px solid rgba(120,40,255,0.15)",
      }}
    >
      {children}
    </span>
  );
}

type SecProps = {
  children: ReactNode;
  bg?: string;
  style?: CSSProperties;
  id?: string;
  className?: string;
};

export function Sec({ children, bg = C.white, style, id, className }: SecProps) {
  return (
    <section
      id={id}
      className={["sec", className].filter(Boolean).join(" ")}
      style={{
        background: bg,
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

type SplitProps = {
  img?: ReactNode;
  imgSide?: "left" | "right";
  pill?: string;
  title: string;
  text?: string;
  cta?: string;
  ctaTo?: string;
  children?: ReactNode;
  imgFit?: "cover" | "contain";
  imgHeight?: number | string;
  imgRadius?: number;
};

export function Split({
  img,
  imgSide = "left",
  pill,
  title,
  text,
  cta,
  ctaTo,
  children,
  imgFit = "cover",
  imgHeight = 520,
  imgRadius = 20,
}: SplitProps) {
  const imgEl = (
    <div className="split-img" style={{ flex: 1.15, minWidth: 300 }}>
      <div
        className="split-img-frame"
        style={{
          background:
            imgFit === "contain" || imgHeight === "auto"
              ? "transparent"
              : C.lightGray,
          borderRadius: imgRadius,
          height: imgHeight === "auto" ? "auto" : imgHeight,
          minHeight:
            imgHeight === "auto"
              ? undefined
              : typeof imgHeight === "number"
                ? imgHeight
                : 480,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          padding: 0,
        }}
      >
        {img || (
          <span style={{ fontSize: 64, opacity: 0.15, color: C.navy }}>AX</span>
        )}
      </div>
    </div>
  );
  const txtEl = (
    <div className="split-txt" style={{ flex: 1, minWidth: 280 }}>
      {pill && <Pill>{pill}</Pill>}
      <h2
        className="split-title"
        style={{
          fontSize: 38,
          fontWeight: 800,
          color: C.navy,
          lineHeight: 1.15,
          letterSpacing: -1,
          marginTop: pill ? 16 : 0,
          marginBottom: 16,
        }}
      >
        {title}
      </h2>
      {text && (
        <p
          style={{
            fontSize: 17,
            color: C.textMid,
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          {text}
        </p>
      )}
      {children}
      {cta && <CTA to={ctaTo}>{cta}</CTA>}
    </div>
  );
  return (
    <Reveal>
      <div
        className="split"
        style={{
          display: "flex",
          gap: 64,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {imgSide === "left" ? (
          <>
            {imgEl}
            {txtEl}
          </>
        ) : (
          <>
            {txtEl}
            {imgEl}
          </>
        )}
      </div>
    </Reveal>
  );
}

export function StatBar({
  items,
}: {
  items: { n: string; l: string }[];
}) {
  return (
    <Sec bg={C.navy} className="sec-tight" style={{ padding: "56px 24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {items.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.1}>
            <div style={{ textAlign: "center", minWidth: 100, flex: "1 1 120px" }}>
              <div
                className="stat-n"
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: C.white,
                  letterSpacing: -2,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {s.l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

type CardProps = {
  icon?: ReactNode;
  title: string;
  desc: string;
  style?: CSSProperties;
};

export function Card({ icon, title, desc, style: s }: CardProps) {
  const [h, setH] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: C.white,
        borderRadius: 16,
        padding: 32,
        border: `1px solid ${h ? "rgba(120,40,255,0.3)" : C.border}`,
        boxShadow: h
          ? "0 12px 40px rgba(120,40,255,0.08)"
          : "0 1px 3px rgba(0,0,0,0.04)",
        transition: "all 0.4s",
        transform: h ? "translateY(-4px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        ...s,
      }}
    >
      {icon && (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(120,40,255,0.07)",
            marginBottom: 16,
            color: C.purple,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: C.navy,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.7, margin: 0, flex: 1 }}>
        {desc}
      </p>
    </div>
  );
}

export function Phone({
  screen,
  imageSrc,
  imageAlt = "App screenshot",
}: {
  screen?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className="phone-frame"
      style={{
        width: 260,
        height: 520,
        borderRadius: 40,
        overflow: "hidden",
        border: "10px solid #1a1a2e",
        background: "#111",
        position: "relative",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      ) : (
        <>
          {/* Dynamic Island — only for custom screen mockups, not screenshots */}
          <div
            style={{
              width: 90,
              height: 26,
              background: "#1a1a2e",
              borderRadius: 20,
              margin: "0 auto",
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
            }}
          />
          <div
            style={{
              padding: "40px 16px 16px",
              height: "100%",
              overflow: "hidden",
            }}
          >
            {screen}
          </div>
        </>
      )}
    </div>
  );
}

export function AppScreen() {
  return (
    <>
      <div style={{ fontSize: 10, color: "#888", marginBottom: 2 }}>
        Good evening
      </div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#fff",
          marginBottom: 16,
        }}
      >
        Welcome back
      </div>
      <div
        style={{
          background: `linear-gradient(135deg, ${C.purple}, ${C.navy})`,
          borderRadius: 14,
          padding: 14,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            fontSize: 9,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          IQ Framework
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            marginTop: 4,
          }}
        >
          Movement IQ
        </div>
        <div
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.8)",
            marginTop: 2,
          }}
        >
          Organise before producing force
        </div>
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: 14,
          padding: 14,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            fontSize: 9,
            color: C.blue,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Today&apos;s Session
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            marginTop: 4,
          }}
        >
          Push Day: Upper
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 10,
            color: "#888",
            marginTop: 4,
          }}
        >
          <span>6 exercises</span>
          <span>~55 min</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        {[
          { n: "1,240", l: "XP" },
          { n: "Lv 8", l: "Rank" },
          { n: "12", l: "Streak" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 10,
              padding: "8px 4px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
              {s.n}
            </div>
            <div style={{ fontSize: 8, color: "#888", marginTop: 2 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
      {["Glute Strength: Wk 4", "Home Full Body: Wk 2"].map((p) => (
        <div
          key={p}
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 10,
            padding: "8px 12px",
            marginBottom: 4,
            fontSize: 11,
            color: "#ccc",
          }}
        >
          {p}
        </div>
      ))}
    </>
  );
}

export { C, FONT, MAX, PAGE_PATHS };
export type { PageKey };
