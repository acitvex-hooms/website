import { C, PAGE_PATHS } from "../lib/tokens";
import { AppScreen, CTA, Phone, Pill } from "./ui";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `linear-gradient(135deg, ${C.navy} 0%, #1a1040 40%, ${C.purple}88 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          zIndex: 1,
        }}
      />
      <div
        className="orb orb-a"
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.purple}44, transparent 70%)`,
          filter: "blur(80px)",
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      <div
        className="orb orb-b"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.blue}33, transparent 70%)`,
          filter: "blur(60px)",
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      <div
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
        <div className="fade-up" style={{ flex: 1.3, minWidth: 320 }}>
          <Pill>Coaching since 2008</Pill>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 900,
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
            <CTA to={PAGE_PATHS.pricing}>Start Training — $19/mo</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.iq}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              How It Works
            </CTA>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(10px)",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 16, color: "#fff" }}></span>
              <div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>
                  Download on the
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>
                  App Store
                </div>
              </div>
            </a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              Your first 2 weeks are on Ana
            </span>
          </div>
        </div>
        <div
          className="fade-up fade-up-delay"
          style={{
            flex: 0.7,
            minWidth: 280,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Phone screen={<AppScreen />} />
        </div>
      </div>
    </section>
  );
}
