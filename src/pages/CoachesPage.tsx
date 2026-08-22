import { STRIPE_MEMBERSHIP } from "../lib/membershipCtas";
import { C, RADIUS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec, Split } from "../components/ui";

const features = [
  {
    title: "40+ Programs",
    desc: "Beginner through Advanced, built on the IQ Framework. Not random workouts.",
  },
  {
    title: "600+ Exercise Library",
    desc: "Video demos, coaching cues, and movement intent for every exercise.",
  },
  {
    title: "Workout Tracking",
    desc: "Log loads, sets, and reps. Progress is visible, not guessed.",
  },
  {
    title: "Custom Program Builder",
    desc: "Build your own plan around your schedule and equipment.",
  },
  {
    title: "Macro Tracker",
    desc: "Daily nutrition tracking built in. No separate app.",
  },
  {
    title: "XP, Levels & Leaderboards",
    desc: "Step tracker, journals, progression system, and community.",
  },
];

const steps = [
  {
    n: "1",
    title: "Check Out",
    desc: "Choose annual or monthly and enter your coach's code at checkout.",
  },
  {
    n: "2",
    title: "Download",
    desc: "Get activeX from the App Store. If you do not have an iOS device, you can still access the app in your web browser.",
  },
  {
    n: "3",
    title: "Sign In",
    desc: "Use the same email you used at checkout.",
  },
  {
    n: "4",
    title: "Start Training",
    desc: "Pick a program or build your own and start your first session.",
  },
];

export function CoachesPage() {
  return (
    <>
      <Sec className="coaches-hero sec-page-hero">
        <div className="coaches-hero-grid">
          <Reveal>
            <Pill>Coach partners</Pill>
            <h1
              className="page-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              The structure between your sessions.
            </h1>
            <p className="page-lede coaches-hero-lede">
              activeX gives you professionally designed training programs,
              workout tracking, and the IQ Framework, so every session with your
              coach builds on the last, and every session without them still
              counts.
            </p>
            <div className="cta-row coaches-hero-cta">
              <CTA href="#partner-pricing">Start Training</CTA>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              className="coaches-hero-img"
              src="/images/coaches-app.webp"
              alt="activeX app on iPad"
            />
          </Reveal>
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          imgSide="right"
          pill="What is activeX?"
          title="Built by coaches. Made for the days between sessions."
          text="activeX is a training app built by Ana Coppola and Hooms. Ana has coached since 2008, competed on Australian Ninja Warrior and Gladiators Australia, and created the IQ Framework. Hooms brings 20+ years of training experience as a competitive bodybuilder."
          imgFit="cover"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              className="img-editorial"
              src="/images/coaches-training.webp"
              alt="Training with activeX"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                display: "block",
              }}
            />
          }
        >
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              lineHeight: 1.75,
              marginBottom: 0,
            }}
          >
            The IQ Framework is a three-pillar system, Movement IQ, Mobility IQ,
            and Mindset IQ, that organises how you train, move, and stay
            consistent. Your coach handles the relationship. activeX handles the
            structure between sessions so you progress faster, train with more
            intent, and show up better prepared.
          </p>
        </Split>
      </Sec>

      <Sec>
        <Reveal>
          <div className="coaches-section-head">
            <Pill>Membership</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              What You Get
            </h2>
            <p className="page-lede" style={{ margin: "0 auto" }}>
              Full membership access. No locked features. No tiers.
            </p>
          </div>
        </Reveal>
        <div className="coaches-features">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className="coaches-feature-card surface-card surface-card--muted"
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec id="partner-pricing" bg={C.offWhite}>
        <Reveal>
          <div className="coaches-section-head">
            <Pill>Partner Pricing</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Exclusive pricing through your coach
            </h2>
            <p className="page-lede" style={{ margin: "0 auto" }}>
              Because your coach is part of the activeX partner network, you get
              exclusive pricing.
            </p>
          </div>
        </Reveal>

        <div className="coaches-pricing pricing-cards" style={{ marginBottom: 0 }}>
          {[
            {
              name: "Annual",
              badge: "Best Value",
              price: "$16.20",
              per: "mo",
              sub: "$194 billed yearly",
              compare: "Standard: $229/yr",
              href: STRIPE_MEMBERSHIP.annual,
              cta: "Choose Annual →",
              hi: true,
            },
            {
              name: "Monthly",
              price: "$21.25",
              per: "mo",
              sub: "Cancel anytime",
              compare: "Standard: $24.99/mo",
              href: STRIPE_MEMBERSHIP.monthly,
              cta: "Choose Monthly →",
              hi: false,
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`pricing-card${t.hi ? " is-featured" : ""}`}
                style={{
                  background: C.white,
                  borderRadius: RADIUS.xl,
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
                  position: "relative",
                  height: "100%",
                }}
              >
                {t.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: C.gradient,
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "6px 20px",
                      borderRadius: 50,
                    }}
                  >
                    {t.badge}
                  </div>
                )}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C.textLight,
                    marginBottom: 8,
                    marginTop: t.badge ? 8 : 0,
                  }}
                >
                  {t.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    className="pricing-price"
                    style={{
                      fontWeight: 800,
                      color: C.navy,
                    }}
                  >
                    {t.price}
                  </span>
                  <span style={{ fontSize: 15, color: C.textLight }}>
                    /{t.per}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: C.purple,
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {t.sub}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: C.textLight,
                    marginTop: 6,
                    textDecoration: "line-through",
                  }}
                >
                  {t.compare}
                </div>
                <div
                  style={{ height: 1, background: C.border, margin: "24px 0" }}
                />
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.6,
                    margin: "0 0 24px",
                  }}
                >
                  Enter your coach&apos;s code at checkout to lock in partner
                  pricing.
                </p>
                <CTA
                  variant={t.hi ? "primary" : "secondary"}
                  href={t.href}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {t.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: C.textLight,
              marginTop: 28,
              marginBottom: 0,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Your coach will give you a code to enter at checkout. That code locks
            in your partner pricing.
          </p>
        </Reveal>
      </Sec>

      <Sec>
        <Reveal>
          <div className="coaches-section-head">
            <Pill>Getting started</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              How It Works
            </h2>
          </div>
        </Reveal>
        <div className="coaches-steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 50,
                    background: C.purple,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.navy} className="sec-cta coaches-closing" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Built to Complement Your Coach
          </h2>
          <p className="coaches-closing-copy">
            activeX is not a replacement for your coach. It&apos;s the layer
            between your sessions that keeps you progressing: structured
            training, tracked results, and a system that compounds over time.
          </p>
          <p className="coaches-closing-copy coaches-closing-copy-soft">
            Your coach brings the relationship, accountability, and personal
            attention. activeX brings the programming structure, tracking, and
            the IQ Framework on the days you train alone. Together, you progress
            faster.
          </p>
          <p className="coaches-closing-line">
            Your coach recommended activeX for a reason.
          </p>
          <div className="cta-row coaches-closing-cta">
            <CTA href="#partner-pricing">Start Training</CTA>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}
