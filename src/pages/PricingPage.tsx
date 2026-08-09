import { Testimonials } from "../components/Testimonials";
import { FaqAccordion } from "../components/FaqAccordion";
import { MEMBERSHIP_CTAS, STRIPE_MEMBERSHIP } from "../lib/membershipCtas";
import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

const FAQ = [
  {
    q: "What is activeX?",
    a: "activeX is a fitness training app and coaching platform built on the IQ Framework created by coach Ana Coppola. It gives you 40+ structured training programs and a 600+ exercise library with demonstrations and coaching cues, plus workout tracking, macro tracking, step tracking and journals in one system. You can follow an activeX program or build your own. The idea behind it is simple: most people don't need more exercises, they need a way to organise and progress the ones they're already doing.",
  },
  {
    q: "What's included in an activeX membership?",
    a: "Full access to every program on the platform, the complete exercise library with video and coaching cues, workout tracking, macro tracker, step tracker, and journals. No locked features. No tiers. Everything is included.",
  },
  {
    q: "Am I locked in?",
    a: "No. Monthly is cancel-anytime. Annual just saves you money if you're committed.",
  },
  {
    q: "How do I access the platform after I pay?",
    a: "activeX app can be downloaded for iOS here. You can access it from your device. Anywhere, anytime.",
  },
  {
    q: "Can I build my own training program in activeX?",
    a: "Yes. The custom program builder lets you name your program, choose how many days a week you train, build each training day from the exercise library, and set your own sets, repetitions and rest periods. You can restructure it whenever your schedule, equipment or goals change. It's tracked exactly the same way as the professionally structured activeX programs, so a plan you built yourself still progresses.",
  },
  {
    q: "Can I switch programs mid-way?",
    a: "Absolutely. You have access to every program, so you can switch whenever you want. However, we recommend completing a full program cycle for best results.",
  },
  {
    q: "Is activeX suitable for women in their 40s?",
    a: "Yes, it's a large part of who activeX was built for. Ana Coppola has more than 18 years of coaching experience and trains in her 40s herself, and much of the programming is aimed at women training for strength, glute development and body composition around work, family and travel. The emphasis is on understanding why an exercise is in your program rather than copying sessions, and on structure you can keep to on the weeks when motivation drops.",
  },
  {
    q: "Do I need a membership to buy a custom program or coaching?",
    a: "No. Custom programs, custom diets, and video consults can be purchased standalone. However, members get the benefit of having everything delivered inside the app with tracking built in. Coaching clients receive full membership access included.",
  },
  {
    q: "Can I upgrade from membership to coaching later?",
    a: "Absolutely. Many people start with the membership and move to coaching when they're ready for a more personalized approach. Your membership is simply replaced by the coaching subscription, which includes full platform access.",
  },
  {
    q: "Is coaching included in the membership?",
    a: "No. The membership gives you platform access and all self-guided programs. Coaching is a separate, premium service with direct weekly contact with Ana or Hooms. Coaching does include full membership access though.",
  },
  {
    q: "How do I book a video consult?",
    a: 'Click "Book a Consult" button and fill out the form with what you\'d like help with, and we\'ll organize a time and the details.',
  },
];


export function PricingPage() {
  return (
    <>
      <Sec className="sec-page-hero">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Pill>Membership</Pill>
            <h1
              className="page-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Full access. One price.
            </h1>
            <p className="page-lede" style={{ margin: "0 auto" }}>
              No tiers, no locked features. Every tool, every program, every
              exercise, included. Choose how you pay.
            </p>
          </div>
        </Reveal>
        <div className="pricing-cards">
          {[
            {
              name: "Annual",
              price: "$229",
              per: "year",
              sub: MEMBERSHIP_CTAS.annualSub,
              badge: MEMBERSHIP_CTAS.annualBadge,
              hi: true,
              href: STRIPE_MEMBERSHIP.annual,
              cta: MEMBERSHIP_CTAS.annualCta,
              feats: [
                "All 40+ structured programs",
                "600+ exercise library with coaching cues",
                "Custom Program Builder",
                "Workout tracking: loads, sets, reps",
                "Macro Tracker & Step Tracker",
                "XP, levels, badges & leaderboards",
                "IQ Framework built into everything",
                "Apple Health / Apple Watch integration",
              ],
            },
            {
              name: "Monthly",
              price: "$24.99",
              per: "month",
              sub: MEMBERSHIP_CTAS.monthlySub,
              hi: false,
              href: STRIPE_MEMBERSHIP.monthly,
              cta: MEMBERSHIP_CTAS.monthlyCta,
              feats: [
                "Everything in Annual",
                "Same full access",
                "No commitment required",
                "Perfect for trying activeX first",
              ],
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.15}>
              <div
                className="pricing-card"
                style={{
                  background: C.white,
                  borderRadius: 20,
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
                  boxShadow: t.hi
                    ? "0 20px 60px rgba(120,40,255,0.1)"
                    : "none",
                  position: "relative",
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
                {t.sub && (
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
                )}
                <div
                  style={{ height: 1, background: C.border, margin: "24px 0" }}
                />
                {t.feats.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: C.purple, marginTop: 2 }}>✓</span>
                    <span
                      style={{
                        fontSize: 14,
                        color: C.textMid,
                        lineHeight: 1.5,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
                <CTA
                  variant={t.hi ? "primary" : "secondary"}
                  href={t.href}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 24,
                  }}
                >
                  {t.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec>
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
          className="pricing-whats-inside"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "All Programs",
              desc: "Every activeX program Beginner, Intermediate, Advanced, & any future releases. Structured training built on the IQ Framework, not random workouts.",
            },
            {
              title: "Exercise Library",
              desc: "Full library of every exercise with video, coaching cues, & intent. Understand the why behind every movement, not just the how.",
            },
            {
              title: "IQ Framework",
              desc: "Three pillars. One decision-making system. Every program, workout, & tool inside activeX is built on this framework.",
            },
            {
              title: "Workout Tracking",
              desc: "Log every session. Track loads, sets, & reps over time. See your progress in real numbers.",
            },
            {
              title: "Macro Tracker",
              desc: "Simple, built-in nutrition tracking. No separate app needed. Set your targets & log your intake alongside your training.",
            },
            {
              title: "Step Tracker",
              desc: "Daily movement accountability. Track your steps & stay aware of your activity outside the gym.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
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

      <Sec bg={C.offWhite}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 48,
              letterSpacing: -1,
            }}
          >
            Go further with coaching & custom plans
          </h2>
        </Reveal>
        <div
          className="pricing-coaching-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Weekly 1-on-1 Coaching",
              price: "$799/mo",
              desc: "Custom programming, movement analysis, weekly check-ins, ongoing accountability. Directly with Ana or Hooms. Limited spots. Application only.",
              cta: "Apply for Coaching",
              to: PAGE_PATHS.apply,
              href: undefined as string | undefined,
            },
            {
              title: "12-Week Custom Program",
              price: "$499",
              desc: "A fully personalized 12-week training program built around your goals, experience level, & available equipment. Structured on the IQ Framework, Mobility IQ, Movement IQ, & Mindset IQ applied directly to your training. Delivered through the activeX app for members.",
              cta: "Get Custom Program",
              to: undefined as string | undefined,
              href: "https://buy.stripe.com/6oU8wObz2dhH1lh92Z4ow02",
            },
            {
              title: "12-Week Custom Diet",
              price: "$499",
              desc: "A fully personalized 12-week nutrition plan built around your goals, preferences, & lifestyle. Macro targets, meal structure, & guidance designed to support your training and long-term health. Delivered through the activeX app for members.",
              cta: "Get Custom Diet",
              to: undefined as string | undefined,
              href: "https://buy.stripe.com/aFa14mcD62D32plbb74ow03",
            },
            {
              title: "Video Consult",
              price: "$499",
              desc: "One-off video consultation directly with Ana or Hooms. Get personalised guidance on your training, movement, nutrition, or goals without committing to ongoing coaching.",
              cta: "Book a Consult",
              to: undefined as string | undefined,
              href: "https://buy.stripe.com/00w9AS46A1yZe83a734ow06",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} style={{ height: "100%" }}>
              <div
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: 32,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 4,
                  }}
                >
                  {c.title}
                </h3>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: C.purple,
                    marginBottom: 12,
                  }}
                >
                  {c.price}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {c.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <CTA
                    variant="primary"
                    to={c.to}
                    href={c.href}
                    style={{
                      width: "100%",
                      maxWidth: 220,
                      justifyContent: "center",
                      boxSizing: "border-box",
                      textAlign: "center",
                      padding: "14px 16px",
                      fontSize: 14,
                    }}
                  >
                    {c.cta}
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Testimonials />

      <Sec>
        <FaqAccordion items={FAQ} />
      </Sec>
    </>
  );
}
