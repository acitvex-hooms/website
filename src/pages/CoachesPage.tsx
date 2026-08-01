import { C } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec, Split } from "../components/ui";

const STRIPE_ANNUAL = "https://buy.stripe.com/28E5kCbz27Xn6FB0wt4ow01";
const STRIPE_MONTHLY = "https://buy.stripe.com/14A28q9qU4Lb2plcfb4ow00";

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
      <Sec className="coaches-hero" style={{ paddingTop: 56 }}>
        <div className="coaches-hero-grid">
          <Reveal>
            <Pill>Coach partners</Pill>
            <h1
              className="page-title"
              style={{
                fontSize: "clamp(30px, 8vw, 52px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1.5,
                marginTop: 16,
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              The structure between your sessions.
            </h1>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 28,
              }}
            >
              activeX gives you professionally designed training programs,
              workout tracking, and the IQ Framework, so every session with your
              coach builds on the last, and every session without them still
              counts.
            </p>
            <CTA href="#partner-pricing">Start Training</CTA>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              className="coaches-hero-img"
              src="/images/coaches-app.png"
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
          text="activeX is a training app built by Ana Coppola and Hooman Momtazi. Ana has coached since 2008, competed on Australian Ninja Warrior and Gladiators Australia, and created the IQ Framework. Hooman brings 20+ years of training experience as a competitive bodybuilder."
          imgFit="cover"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/coaches-training.jpg"
              alt="Training with activeX"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                display: "block",
                borderRadius: 28,
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
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Pill>Membership</Pill>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              What You Get
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Full membership access. No locked features. No tiers.
            </p>
          </div>
        </Reveal>
        <div
          className="coaches-features"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className="coaches-feature-card"
                style={{
                  background: C.lightGray,
                  borderRadius: 16,
                  padding: "28px 24px",
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
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Pill>Partner Pricing</Pill>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Exclusive pricing through your coach
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Because your coach is part of the activeX partner network, you get
              exclusive pricing.
            </p>
          </div>
        </Reveal>

        <div
          className="coaches-pricing"
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {[
            {
              name: "Annual",
              badge: "Best Value",
              price: "$16.20",
              per: "mo",
              sub: "$194 billed yearly",
              compare: "Standard: $229/yr",
              href: STRIPE_ANNUAL,
              cta: "Choose Annual →",
              hi: true,
            },
            {
              name: "Monthly",
              price: "$21.25",
              per: "mo",
              sub: "Cancel anytime",
              compare: "Standard: $24.99/mo",
              href: STRIPE_MONTHLY,
              cta: "Choose Monthly →",
              hi: false,
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className="pricing-card"
                style={{
                  width: 360,
                  maxWidth: "100%",
                  background: C.white,
                  borderRadius: 20,
                  padding: "40px 32px",
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
                  boxShadow: t.hi
                    ? "0 20px 60px rgba(120,40,255,0.1)"
                    : "none",
                  position: "relative",
                  boxSizing: "border-box",
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
                      fontSize: 48,
                      fontWeight: 800,
                      color: C.navy,
                      letterSpacing: -2,
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
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Pill>Getting started</Pill>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              How It Works
            </h2>
          </div>
        </Reveal>
        <div
          className="coaches-steps"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 20,
          }}
        >
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

      <Sec bg={C.navy} className="sec-cta" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -1,
              marginBottom: 16,
            }}
          >
            Built to Complement Your Coach
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 560,
              margin: "0 auto 16px",
              lineHeight: 1.7,
            }}
          >
            activeX is not a replacement for your coach. It&apos;s the layer
            between your sessions that keeps you progressing: structured
            training, tracked results, and a system that compounds over time.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 520,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Your coach brings the relationship, accountability, and personal
            attention. activeX brings the programming structure, tracking, and
            the IQ Framework on the days you train alone. Together, you progress
            faster.
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              marginBottom: 28,
            }}
          >
            Your coach recommended activeX for a reason.
          </p>
          <CTA href="#partner-pricing">Start Training</CTA>
        </Reveal>
      </Sec>
    </>
  );
}
