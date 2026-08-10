import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { C, PAGE_PATHS, PATH_TO_PAGE, RADIUS, SHADOW, type PageKey } from "../lib/tokens";
import { CTA } from "./ui";

const LINKS: { k: PageKey | "about-menu"; l: string }[] = [
  { k: "iq", l: "IQ Framework" },
  { k: "programs", l: "Programs" },
  { k: "pricing", l: "Pricing" },
  { k: "coaching", l: "Coaching" },
  { k: "shop", l: "Shop" },
  { k: "blog", l: "Blog" },
  { k: "about-menu", l: "About" },
  { k: "contact", l: "Contact" },
];

const ABOUT_LINKS = [
  { to: "/about", l: "About Ana", page: "about" as const },
  { to: "/about/hooms", l: "About Hooms", page: "hooms" as const },
];

export function Nav() {
  const location = useLocation();
  const page =
    location.pathname === PAGE_PATHS.blog ||
    location.pathname.startsWith(`${PAGE_PATHS.blog}/`)
      ? "blog"
      : (PATH_TO_PAGE[location.pathname] ?? "home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutDesktopRef = useRef<HTMLDivElement>(null);
  const aboutMobileRef = useRef<HTMLDivElement>(null);
  const aboutActive = page === "about" || page === "hooms";
  const isPartnerFunnel =
    location.pathname === "/founding-50" ||
    location.pathname === PAGE_PATHS.coaches;

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!aboutOpen) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = aboutDesktopRef.current?.contains(target);
      const inMobile = aboutMobileRef.current?.contains(target);
      if (!inDesktop && !inMobile) setAboutOpen(false);
    };
    // Use click (not mousedown) so menu links can navigate before the menu closes
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [aboutOpen]);

  // Sticky nav sits above the hero in document flow (not overlaid), so always
  // use solid treatment — transparent + white logo reads as a blank white bar.
  const navBg = "rgba(255,255,255,0.97)";
  const navColor = C.navy;

  const linkStyle = (active: boolean): CSSProperties => ({
    color: active ? C.purple : navColor,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: active ? 600 : 500,
    transition: "color var(--duration-ui)",
    opacity: 0.85,
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "inherit",
    padding: 0,
  });

  return (
    <>
      {!isPartnerFunnel && (
        <Link
          to={PAGE_PATHS.pricing}
          className="promo-banner"
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
          Your first 2 weeks are on us <span style={{ marginLeft: 6 }}>→</span>
        </Link>
      )}
      <nav
        className="site-nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "0 24px",
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: navBg,
          backdropFilter: "blur(var(--nav-blur))",
          WebkitBackdropFilter: "blur(var(--nav-blur))",
          borderBottom: `1px solid ${C.border}`,
          transition: "background var(--duration-ui), border-color var(--duration-ui)",
        }}
      >
        <Link
          to={PAGE_PATHS.home}
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            className="nav-logo-img"
            src="/images/logo-black.png"
            alt="activeX"
            style={{
              height: 56,
              width: "auto",
              display: "block",
              borderRadius: RADIUS.sm,
            }}
          />
        </Link>

        <div
          className="nav-desktop"
          style={{ gap: 28, alignItems: "center" }}
        >
          {LINKS.map(({ k, l }) =>
            k === "about-menu" ? (
              <div
                key={k}
                ref={aboutDesktopRef}
                style={{ position: "relative" }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAboutOpen((o) => !o);
                  }}
                  style={{
                    ...linkStyle(aboutActive),
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  aria-expanded={aboutOpen}
                  aria-haspopup="menu"
                >
                  {l}
                  <span style={{ fontSize: 10, opacity: 0.8 }}>▾</span>
                </button>
                {aboutOpen && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: 170,
                      background: C.white,
                      border: `1px solid ${C.border}`,
                      borderRadius: RADIUS.md,
                      boxShadow: SHADOW.nav,
                      padding: "8px 0",
                      zIndex: 120,
                    }}
                  >
                    {ABOUT_LINKS.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          color: page === item.page ? C.purple : C.navy,
                          textDecoration: "none",
                          fontSize: 14,
                          fontWeight: page === item.page ? 600 : 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.l}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={k} to={PAGE_PATHS[k]} style={linkStyle(page === k)}>
                {l}
              </Link>
            ),
          )}
          <CTA
            to={PAGE_PATHS.pricing}
            style={{ padding: "9px 22px", fontSize: 13 }}
          >
            {MEMBERSHIP_CTAS.nav}
          </CTA>
        </div>

        <button
          className="nav-burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((o) => {
              setAboutOpen(false);
              return !o;
            })
          }
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 12,
            margin: -4,
            minWidth: 44,
            minHeight: 44,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: navColor,
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "currentColor",
              marginBottom: 5,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "currentColor",
              marginBottom: 5,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "currentColor",
            }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="nav-mobile-panel is-open"
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
          {LINKS.map(({ k, l }) =>
            k === "about-menu" ? (
              <div
                key={k}
                ref={aboutMobileRef}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAboutOpen((o) => !o);
                  }}
                  aria-expanded={aboutOpen}
                  aria-haspopup="menu"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 8,
                    color: aboutActive ? C.purple : C.navy,
                    fontSize: 16,
                    fontWeight: aboutActive ? 700 : 500,
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "inherit",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {l}
                  <span
                    aria-hidden
                    style={{
                      fontSize: 12,
                      opacity: 0.75,
                      transform: aboutOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                      lineHeight: 1,
                    }}
                  >
                    ▾
                  </span>
                </button>
                {aboutOpen &&
                  ABOUT_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      style={{
                        color: page === item.page ? C.purple : C.navy,
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: page === item.page ? 700 : 500,
                        padding: "10px 0 10px 12px",
                      }}
                    >
                      {item.l}
                    </Link>
                  ))}
              </div>
            ) : (
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
            ),
          )}
          <CTA to={PAGE_PATHS.pricing} style={{ justifyContent: "center" }}>
            {MEMBERSHIP_CTAS.nav}
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
        ["Coaching", "coaching"],
        ["Shop", "shop"],
        ["Blog", "blog"],
      ],
    },
    {
      t: "Company",
      links: [
        ["About Ana", "about"],
        ["About Hooms", "hooms"],
        ["Contact", "contact"],
      ],
    },
    {
      t: "Legal",
      links: [
        ["Privacy Policy", "privacy"],
        ["Terms of Service", "terms"],
        ["Refund Policy", "refund"],
      ],
    },
  ];

  return (
    <footer className="site-footer" style={{ background: C.navy, padding: "72px 24px 40px", color: "#fff" }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        <div className="footer-brand" style={{ minWidth: 240 }}>
          <img
            src="/images/logo-footer.png"
            alt="activeX"
            style={{
              height: 40,
              width: "auto",
            }}
          />
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
          <div
            className="footer-social"
            style={{
              display: "flex",
              gap: 14,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            {[
              {
                name: "Instagram",
                href: "https://www.instagram.com/_active_x_/",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                  </svg>
                ),
              },
              {
                name: "YouTube",
                href: "https://www.youtube.com/@active_x_fitness",
                icon: (
                  <svg width="24" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                href: "https://www.tiktok.com/@_active_x_",
                icon: (
                  <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.6 7.8a6.7 6.7 0 0 1-3.9-1.3v7.3a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.9a3 3 0 1 0 2.1 2.9V2.1h2.8a6.7 6.7 0 0 0 4 5.1v.6z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                style={{
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.06)",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-cols">
          {cols.map((col) => (
            <div key={col.t} className="footer-col" style={{ minWidth: 140 }}>
              <div
                className="footer-col-title"
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
      </div>
      <div
        className="footer-bottom"
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
          © 2026 activeX LLC FZ, Dubai, U.A.E.
        </span>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "Apple Pay", src: "/images/payments/apple-pay.png" },
            { name: "Visa", src: "/images/payments/visa.png" },
            { name: "Amex", src: "/images/payments/amex.png" },
            { name: "Mastercard", src: "/images/payments/mastercard.png" },
          ].map((p) => (
            <span
              key={p.name}
              className="footer-pay"
              aria-label={p.name}
              title={p.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 36,
                padding: "0 8px",
                borderRadius: 6,
                background: "#fff",
                boxSizing: "border-box",
              }}
            >
              <img
                src={p.src}
                alt={p.name}
                style={{
                  width: "100%",
                  height: 18,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
