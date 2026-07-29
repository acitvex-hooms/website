import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, PAGE_PATHS, PATH_TO_PAGE, type PageKey } from "../lib/tokens";
import { CTA } from "./ui";

const LINKS: { k: PageKey; l: string }[] = [
  { k: "iq", l: "IQ Framework" },
  { k: "programs", l: "Programs" },
  { k: "pricing", l: "Pricing" },
  { k: "coaching", l: "Coaching" },
  { k: "about", l: "About" },
  { k: "contact", l: "Contact" },
];

export function Nav() {
  const location = useLocation();
  const page = PATH_TO_PAGE[location.pathname] ?? "home";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = page === "home";
  const navBg = isHome
    ? scrolled
      ? "rgba(255,255,255,0.97)"
      : "transparent"
    : "rgba(255,255,255,0.97)";
  const navColor = isHome && !scrolled ? "#fff" : C.navy;

  return (
    <>
      <Link
        to={PAGE_PATHS.pricing}
        style={{
          background: C.purple,
          padding: "10px 24px",
          textAlign: "center",
          fontSize: 13,
          fontWeight: 500,
          color: "#fff",
          display: "block",
          textDecoration: "none",
        }}
      >
        Founding member spots: <strong>23 of 50 left</strong> — locked pricing
        for life <span style={{ marginLeft: 6 }}>→</span>
      </Link>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: navBg,
          backdropFilter: scrolled || !isHome ? "blur(20px)" : "none",
          borderBottom:
            scrolled || !isHome
              ? `1px solid ${C.border}`
              : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        <Link
          to={PAGE_PATHS.home}
          style={{
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: -0.5,
            textDecoration: "none",
            background: isHome && !scrolled ? C.gradient : "none",
            WebkitBackgroundClip: isHome && !scrolled ? "text" : "initial",
            WebkitTextFillColor:
              isHome && !scrolled ? "transparent" : C.navy,
            color: C.navy,
          }}
        >
          activeX
        </Link>

        <div className="nav-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {LINKS.map(({ k, l }) => (
            <Link
              key={k}
              to={PAGE_PATHS[k]}
              style={{
                color: page === k ? C.purple : navColor,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: page === k ? 600 : 500,
                transition: "color 0.3s",
                opacity: 0.85,
              }}
            >
              {l}
            </Link>
          ))}
          <CTA to={PAGE_PATHS.pricing} style={{ padding: "9px 22px", fontSize: 13 }}>
            Join Now
          </CTA>
        </div>

        <button
          className="nav-burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: navColor,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", marginBottom: 5 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", marginBottom: 5 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor" }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="nav-mobile-panel"
          style={{
            position: "sticky",
            top: 64,
            zIndex: 99,
            background: C.white,
            borderBottom: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map(({ k, l }) => (
            <Link
              key={k}
              to={PAGE_PATHS[k]}
              style={{
                color: page === k ? C.purple : C.navy,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: page === k ? 700 : 500,
              }}
            >
              {l}
            </Link>
          ))}
          <CTA to={PAGE_PATHS.pricing} style={{ justifyContent: "center" }}>
            Join Now
          </CTA>
        </div>
      )}
    </>
  );
}

export function Footer() {
  const cols: { t: string; links: [string, PageKey][] }[] = [
    {
      t: "Product",
      links: [
        ["IQ Framework", "iq"],
        ["Programs", "programs"],
        ["Pricing", "pricing"],
        ["Exercise Library", "home"],
        ["Coaching", "coaching"],
      ],
    },
    {
      t: "Company",
      links: [
        ["About Ana", "about"],
        ["About Hooman", "hooman"],
        ["Blog", "home"],
        ["Contact", "contact"],
      ],
    },
    {
      t: "Legal",
      links: [
        ["Privacy Policy", "home"],
        ["Terms of Service", "home"],
        ["Refund Policy", "home"],
      ],
    },
  ];

  return (
    <footer style={{ background: C.navy, padding: "72px 24px 40px", color: "#fff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        <div style={{ minWidth: 240 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 900,
              background: C.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            activeX
          </span>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              marginTop: 12,
              lineHeight: 1.7,
              maxWidth: 260,
            }}
          >
            Train with structure, not guesswork. The intelligent fitness
            operating system by Ana Coppola.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
            {["Instagram", "TikTok", "YouTube"].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.t} style={{ minWidth: 140 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              {col.t}
            </div>
            {col.links.map(([l, k]) => (
              <Link
                key={l}
                to={PAGE_PATHS[k]}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  textDecoration: "none",
                  marginBottom: 10,
                }}
              >
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © 2026 activeX LLC FZ. Meydan Grandstand, Dubai, U.A.E.
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          {["Apple Pay", "Visa", "Mastercard", "Google Pay"].map((p) => (
            <span
              key={p}
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                padding: "4px 8px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
