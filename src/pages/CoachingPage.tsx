import { Testimonials } from "../components/Testimonials";
import { FaqAccordion } from "../components/FaqAccordion";
import { C, PAGE_PATHS } from "../lib/tokens";
import { Card, CTA, Pill, Reveal, Sec, Split } from "../components/ui";

const FAQ = [
  {
    q: "How is coaching different from the activeX membership?",
    a: "The membership gives you access to all programs, workouts, and tools on the platform. Coaching is a fully personalised experience your own custom programming, movement analysis, and direct weekly contact with Ana. Think of membership as the framework applied broadly, and coaching as the framework applied specifically to you.",
  },
  {
    q: "How do check-ins work?",
    a: "You'll complete a weekly check-in covering training, recovery, and progress. Ana reviews everything and adjusts your plan as needed. You also have ongoing access for form reviews and questions between check-ins.",
  },
  {
    q: "Do I need to train at a gym?",
    a: "Most coaching clients train at a gym, but programming can be adapted for home setups depending on available equipment. This is discussed during the application process.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Yes, coaching requires a minimum 3-month commitment. Real progress takes consistency, and the IQ Framework is designed to build over time, not deliver quick fixes.",
  },
  {
    q: "How many spots are available?",
    a: "Ana works with a limited number of coaching clients at any time to ensure quality. If spots are full, you can join the waitlist and you'll be contacted when a space opens.",
  },
];

export function CoachingPage() {
  return (
    <>
      <Sec className="sec-page-hero sec-pb-24" style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>Limited Spots</Pill>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Online coaching
          </h1>
          <p className="page-lede" style={{ margin: "0 auto" }}>
            A fully personalised approach to training, built around the IQ
            Framework. Work directly with Ana or Hooms. Spots are limited.
          </p>
        </Reveal>
      </Sec>

      <Sec className="sec-pt-24">
        <Split
          pill="Ana Coppola"
          title="Work directly with Ana."
          text="Weekly 1-on-1 coaching with custom programming, movement analysis, form reviews, weekly check-ins, and ongoing accountability. Built around the same IQ Framework that powers everything inside activeX: Mobility IQ, Movement IQ, and Mindset IQ, applied directly to you."
          img={
            <img
              src="/images/ana-training.jpg"
              alt="1-on-1 coaching with Ana"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
        >
          <p
            style={{
              fontSize: 15,
              color: C.textMid,
              marginBottom: 16,
              lineHeight: 1.6,
            }}
          >
            Co-founder of activeX · Online Coach · Creator of the IQ Framework
          </p>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.navy,
              marginBottom: 8,
            }}
          >
            $799
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: C.textLight,
              }}
            >
              /month
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: C.textMid,
              marginBottom: 20,
            }}
          >
            Minimum 3-month commitment. Applications reviewed before accepted.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CTA to={PAGE_PATHS.apply}>
              Apply to work with Ana
            </CTA>
            <CTA to={PAGE_PATHS.about} variant="secondary">
              Learn more about Ana
            </CTA>
          </div>
        </Split>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          imgSide="right"
          pill="Hooman Momtazi"
          title="Work directly with Hooms."
          text="1-on-1 coaching focused on building muscle, losing fat, and training with structure. Custom programming, weekly check-ins, form reviews, and direct access. Hypertrophy coaching from a competitive bodybuilder with 20+ years of training experience."
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/hooms-portrait.png"
              alt="1-on-1 coaching with Hooms"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          }
        >
          <p
            style={{
              fontSize: 15,
              color: C.textMid,
              marginBottom: 16,
              lineHeight: 1.6,
            }}
          >
            Co-founder of activeX · Competitive Bodybuilder · Hypertrophy
            Specialist
          </p>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.navy,
              marginBottom: 8,
            }}
          >
            $799
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: C.textLight,
              }}
            >
              /month
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: C.textMid,
              marginBottom: 20,
            }}
          >
            Minimum 3-month commitment. Applications reviewed before accepted.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CTA to={PAGE_PATHS.apply}>
              Apply to work with Hooms
            </CTA>
            <CTA to={PAGE_PATHS.hooman} variant="secondary">
              Learn more about Hooms
            </CTA>
          </div>
        </Split>
      </Sec>

      <Sec>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            What&apos;s included
          </h2>
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              textAlign: "center",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            Whether you coach with Ana or Hooms, you get a fully tailored
            experience, not a template.
          </p>
        </Reveal>
        <div
          className="auto-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              icon: "01",
              title: "Custom Programming",
              desc: "Fully individualised training built around your goals, schedule, and experience level. Updated as you progress.",
            },
            {
              icon: "02",
              title: "Direct Access",
              desc: "Ongoing communication with your coach. Form reviews, check-ins, and real-time adjustments, not a chatbot.",
            },
            {
              icon: "03",
              title: "Movement Analysis",
              desc: "Video review of your movement quality. Identify compensations, build stability, and improve how you train.",
            },
            {
              icon: "04",
              title: "Accountability & Structure",
              desc: "Weekly check-ins, progress tracking, and a clear system to keep you consistent week to week.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Card {...c} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.offWhite} style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>How it works</Pill>
          <h2
            className="section-title"
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 40,
            }}
          >
            Apply. Build. Train & evolve.
          </h2>
        </Reveal>
        <div
          className="auto-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            textAlign: "left",
          }}
        >
          {[
            {
              n: "01",
              t: "Apply",
              d: "Share your goals, training history, and where you are right now so we can confirm coaching is the right fit.",
            },
            {
              n: "02",
              t: "Build your plan",
              d: "Your coach builds a fully custom program around your goals, schedule, and how you need to train.",
            },
            {
              n: "03",
              t: "Train & evolve",
              d: "You train. Your coach reviews, adjusts, and progresses your plan week to week with form checks and accountability.",
            },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: 28,
                  border: `1px solid ${C.border}`,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.purple,
                    marginBottom: 10,
                    letterSpacing: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 8,
                  }}
                >
                  {s.t}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: C.textMid,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal style={{ textAlign: "center" }}>
          <Pill>One-time options</Pill>
          <h2
            className="section-title"
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Not ready for ongoing coaching?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: C.textMid,
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Get expert guidance in a one-time plan built around your exact
            situation.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
          className="one-time-options"
        >
          {[
            {
              title: "12-Week Custom Program",
              price: "$499",
              desc: "A fully personalized 12-week training program built around your goals, experience level, & available equipment. Structured on the IQ Framework, Mobility IQ, Movement IQ, & Mindset IQ applied directly to your training. Delivered through the activeX app for members.",
              cta: "Get Custom Program",
              href: "https://buy.stripe.com/6oU8wObz2dhH1lh92Z4ow02",
              to: undefined as string | undefined,
            },
            {
              title: "12-Week Custom Diet",
              price: "$499",
              desc: "A fully personalized 12-week nutrition plan built around your goals, preferences, & lifestyle. Macro targets, meal structure, & guidance designed to support your training and long-term health. Delivered through the activeX app for members.",
              cta: "Get Custom Diet",
              href: "https://buy.stripe.com/aFa14mcD62D32plbb74ow03",
              to: undefined as string | undefined,
            },
            {
              title: "Video Consult",
              price: "$499",
              desc: "One-off video consultation directly with Ana or Hooms. Get personalised guidance on your training, movement, nutrition, or goals without committing to ongoing coaching.",
              cta: "Book a Consult",
              href: "https://buy.stripe.com/00w9AS46A1yZe83a734ow06",
              to: undefined as string | undefined,
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} style={{ height: "100%" }}>
              <div
                className="one-time-card"
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "28px 22px",
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                {c.price ? (
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: C.purple,
                      marginBottom: 16,
                    }}
                  >
                    {c.price}
                  </div>
                ) : (
                  <div style={{ height: 28, marginBottom: 16 }} />
                )}
                <div style={{ flex: 1, marginBottom: 28 }}>
                  {c.desc.split("\n\n").map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      style={{
                        fontSize: 14,
                        color: C.textMid,
                        lineHeight: 1.7,
                        margin: "0 0 14px",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "auto",
                  }}
                >
                  <CTA
                    href={c.href}
                    to={c.to}
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

      <Sec>
        <FaqAccordion items={FAQ} />
      </Sec>

      <Testimonials />

      <Sec bg={C.navy} className="sec-cta" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.white,
              marginBottom: 12,
            }}
          >
            Not ready for coaching? Start with membership.
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
            Full access to all programs, workouts, tracking tools, and the IQ
            Framework — from $19/month billed annually, or $24.99/month.
          </p>
          <CTA to={PAGE_PATHS.pricing}>Join activeX</CTA>
        </Reveal>
      </Sec>
    </>
  );
}
