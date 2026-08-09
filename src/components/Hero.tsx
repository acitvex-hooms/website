import { useParallax } from "../hooks/useParallax";
import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { PAGE_PATHS } from "../lib/tokens";
import { CTA, Phone, Pill } from "./ui";

export function Hero() {
  const parallaxY = useParallax(0.45);

  return (
    <section className="hero">
      <div aria-hidden className="hero-bg">
        <img
          className="hero-bg-img"
          src="/images/hero-banner.webp"
          alt=""
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0)`,
            willChange: "transform",
          }}
        />
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className="orb orb-a hero-orb" aria-hidden />
      <div className="orb orb-b hero-orb" aria-hidden />

      <div className="hero-inner">
        <div className="fade-up hero-copy">
          <Pill variant="light">activeX</Pill>
          <h1>
            Train like you{" "}
            <span className="hero-accent">understand</span> your body.
          </h1>
          <p>
            Structured programs, exercise education, and tracking — one
            intelligent system. From $19/mo billed annually.
          </p>
          <div className="cta-row hero-ctas">
            <CTA to={PAGE_PATHS.pricing}>{MEMBERSHIP_CTAS.hero}</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.iq}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              How It Works
            </CTA>
          </div>
          <div className="hero-store-row">
            <a
              href="https://apps.apple.com/ae/app/activex-fitness/id6766033150"
              target="_blank"
              rel="noreferrer"
              className="hero-store-link"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
            <span className="hero-trial">Your first 2 weeks are on us</span>
          </div>
        </div>
        <div className="fade-up fade-up-delay hero-phone">
          <Phone imageSrc="/images/app-home.png" imageAlt="activeX home screen" />
        </div>
      </div>
    </section>
  );
}
