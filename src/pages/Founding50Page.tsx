import { useState } from "react";
import { C } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

const APP_STORE =
  "https://apps.apple.com/ae/app/activex-fitness/id6766033150";
const STRIPE_ANNUAL = "https://buy.stripe.com/4gM6oG9qU91rd3Z3IF4ow09";
const STRIPE_MONTHLY = "https://buy.stripe.com/8x23cufPielLd3Zenj4ow08";

const FAQ = [
  {
    q: "What's included in an activeX membership?",
    a: "Full access to every program on the platform, the complete exercise library with video and coaching cues, workout tracking, macro tracker, step tracker, and journals. No locked features. No tiers. Everything is included.",
  },
  {
    q: "How do I get the app?",
    a: "Claim your spot here, then download activeX from the iOS App Store and sign in with the same email. Your membership unlocks automatically. You can also access the web version at api.activex.fit/onboarding.",
  },
  {
    q: "What happens when the 50 fill?",
    a: "Founding pricing closes and moves to standard. Your locked-in rate stays yours.",
  },
  {
    q: "Can I upgrade from membership to coaching later?",
    a: "Absolutely. Many people start with the membership and move to coaching when they're ready for a more personalized approach. Your membership is simply replaced by the coaching subscription, which includes full platform access.",
  },
  {
    q: "Is there a trial?",
    a: "Yes. You get a 14-day free trial.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, anytime.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${C.border}`,
      }}
    >
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

export function Founding50Page() {
  return (
    <>
      <Sec style={{ paddingTop: 72, textAlign: "center" }}>
        <Reveal>
          <Pill>Limited offer · 50 spots only</Pill>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: C.purple,
              marginTop: 18,
              marginBottom: 12,
            }}
          >
            Your first 2 weeks are on us
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -1.5,
              lineHeight: 1.12,
              marginBottom: 16,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Pay $14.99/month &amp; save 40%
          </h1>
          <p
            style={{
              fontSize: 17,
              color: C.textMid,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Founding member spots:{" "}
            <strong style={{ color: C.navy }}>23 of 50 left</strong>. Locked
            pricing for life.
          </p>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 12,
              letterSpacing: -1,
            }}
          >
            Founding member pricing
          </h2>
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Only 50 spots available.
          </p>
        </Reveal>
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              name: "Annual",
              price: "$14.99",
              per: "mo",
              sub: "$179 billed yearly",
              compare: "Standard: $229/yr",
              badge: "Best Value",
              hi: true,
              href: STRIPE_ANNUAL,
              cta: "Claim annual spot",
            },
            {
              name: "Monthly",
              price: "$14.99",
              per: "mo",
              sub: "Cancel anytime",
              compare: "Standard: $24.99/mo",
              hi: false,
              href: STRIPE_MONTHLY,
              cta: "Claim monthly spot",
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
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
                  textAlign: "left",
                  boxSizing: "border-box",
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
                      whiteSpace: "nowrap",
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
                <CTA
                  href={t.href}
                  variant={t.hi ? "primary" : "secondary"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 28,
                  }}
                >
                  {t.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -1,
              marginBottom: 16,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Founding pricing. Locked for life.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: C.textMid,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            $14.99 a month instead of $24.99. That&apos;s a saving of $10/month.
            As long as you stay a member, even after we raise the price for
            everyone else. There are exactly 50 spots. When they&apos;re gone,
            this closes.
          </p>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -1,
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            What&apos;s Inside
          </h2>
        </Reveal>
        <div
          className="founding-whats-inside"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "A system, not a workout library",
              desc: "Everything is built on the IQ Framework: Mobility, Movement & Mindset. So you're making decisions, not copying reels.",
            },
            {
              title: "Follow a program, or build your own",
              desc: "Over 40 structured programs ready to go, or choose your training days, pick every exercise, & set your own sets, reps, tempo and rest.",
            },
            {
              title: "Every exercise, explained",
              desc: "Over 600 exercises with the coaching cues Ana would give you in person, so you know what you're controlling before you load it.",
            },
            {
              title: "Progress you can see",
              desc: "Your last session's numbers sit right there when you train, so you build on them instead of guessing. Steps, macros, levels & streaks keep consistency visible.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} style={{ height: "100%" }}>
              <div
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "28px 24px",
                  height: "100%",
                  border: `1px solid ${C.border}`,
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
                    lineHeight: 1.7,
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

      <Sec>
        <Reveal>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <Pill>Who built it</Pill>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Built by coaches who live this.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              activeX was created by Ana Coppola, celebrity coach with 18+
              years of experience, Gladiators and Ninja Warrior Australia
              competitor, and creator of the IQ Framework, along with Hooman
              Momtazi, competitive bodybuilder with 20+ years of training
              experience. We didn&apos;t build this because the internet needed
              more exercises. We built it because people needed a better way to
              organise and apply them.
            </p>
          </div>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            Questions
          </h2>
        </Reveal>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {FAQ.map((item) => (
            <Reveal key={item.q}>
              <FaqItem {...item} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.navy} style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: C.white,
              marginBottom: 12,
              letterSpacing: -1,
            }}
          >
            50 founding spots. First come, first locked in.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 480,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Claim your spot, then download the app and sign in with the same
            email.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <CTA href={STRIPE_ANNUAL}>Claim your founding spot</CTA>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", lineHeight: 0 }}
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                style={{ height: 48, width: "auto" }}
              />
            </a>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}
