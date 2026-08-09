import { useParallax } from "../hooks/useParallax";
import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Phone, Pill } from "./ui";

export function Hero() {
  const parallaxY = useParallax(0.45);

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Parallax hero banner from activex.fit */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          className="hero-bg-img"
          src="/images/hero-banner.webp"
          alt=""
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "130%",
            top: "-10%",
            objectFit: "cover",
            objectPosition: "center 28%",
            transform: `translate3d(0, ${parallaxY}px, 0)`,
            willChange: "transform",
          }}
        />
      </div>
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(115deg, rgba(26,16,64,0.82) 0%, rgba(39,39,137,0.55) 48%, rgba(120,40,255,0.35) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="orb orb-a hero-orb"
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.purple}44, transparent 70%)`,
          filter: "blur(80px)",
          opacity: 0.45,
          zIndex: 1,
        }}
      />
      <div
        className="orb orb-b hero-orb"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.blue}33, transparent 70%)`,
          filter: "blur(60px)",
          opacity: 0.35,
          zIndex: 1,
        }}
      />

      <div
        className="hero-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 80,
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div className="fade-up hero-copy" style={{ flex: 1.3, minWidth: 320 }}>
          <Pill variant="light">Coaching since 2008</Pill>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 800,
              color: C.white,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Train like you{" "}
            <span
              style={{
                background: C.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              understand
            </span>{" "}
            your body.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 32,
            }}
          >
            No more guessing. No more random workouts. activeX combines
            structured programs, exercise education, and workout tracking in one
            intelligent system.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <CTA to={PAGE_PATHS.pricing}>{MEMBERSHIP_CTAS.hero}</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.iq}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              How It Works
            </CTA>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://apps.apple.com/ae/app/activex-fitness/id6766033150"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", lineHeight: 0 }}
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                style={{ height: 40, width: "auto" }}
              />
            </a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              Your first 2 weeks are on us
            </span>
          </div>
        </div>
        <div
          className="fade-up fade-up-delay hero-phone"
          style={{
            flex: 0.7,
            minWidth: 280,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Phone imageSrc="/images/app-home.png" imageAlt="activeX home screen" />
        </div>
      </div>
    </section>
  );
}
