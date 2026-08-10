import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "../hooks/useParallax";
import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { revealItem, staggerContainer, tweenReveal } from "../lib/motion";
import { PAGE_PATHS } from "../lib/tokens";
import { CTA, Phone, Pill } from "./ui";

export function Hero() {
  const parallaxY = useParallax(0.45);
  const reduce = useReducedMotion();
  const item = revealItem(reduce);

  return (
    <section className="hero">
      <div aria-hidden className="hero-bg">
        <img
          className="hero-bg-img"
          src="/images/hero-banner.webp"
          alt=""
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0)`,
            willChange: reduce ? "auto" : "transform",
          }}
        />
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className="orb orb-a hero-orb" aria-hidden />
      <div className="orb orb-b hero-orb" aria-hidden />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          variants={staggerContainer(reduce, 0.09, 0.06)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Pill variant="light">activeX</Pill>
          </motion.div>
          <motion.h1 variants={item}>
            Train like you{" "}
            <span className="hero-accent">understand</span> your body.
          </motion.h1>
          <motion.p variants={item}>
            Structured programs, exercise education, and tracking — one
            intelligent system. From $19/mo billed annually.
          </motion.p>
          <motion.div className="cta-row hero-ctas" variants={item}>
            <CTA to={PAGE_PATHS.pricing}>{MEMBERSHIP_CTAS.hero}</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.iq}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              How It Works
            </CTA>
          </motion.div>
          <motion.div className="hero-store-row" variants={item}>
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
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-phone"
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            ...tweenReveal,
            delay: reduce ? 0 : 0.28,
            duration: reduce ? 0 : 0.55,
          }}
        >
          <Phone imageSrc="/images/app-home.png" imageAlt="activeX home screen" />
        </motion.div>
      </div>
    </section>
  );
}
