import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Card, Pill, Reveal, Sec } from "../components/ui";

const pillars = [
  {
    name: "Movement IQ",
    color: C.purple,
    sub: "Appropriate control for the task",
    body: "Most people think movement quality improves by doing more reps or lifting heavier. It doesn't. Movement quality improves through intention. Strength is not just about producing force, it's about how well you can organise the body before the force is applied. Creating stability before movement begins. Controlling joint position under load. Producing force without compensation. When Movement IQ is high, movement becomes more efficient, more repeatable, and more resilient under fatigue. This is why strength alone isn't enough. Without control, strength eventually breaks down.",
    img: "/images/iq-movement.png",
    imgAlt: "Athlete performing dips with control",
  },
  {
    name: "Mobility IQ",
    color: C.blue,
    sub: "The right tool for the right outcome",
    body: "Mobility and stretching are not the same thing. Mobility is the ability to move through range with control, built primarily through movement-based drills that teach the body to produce and absorb force through that range. Stretching serves a different role: supporting recovery, improving awareness of range, and down-regulating the nervous system. Mobility IQ is about understanding what tool you're using, why you're using it, and when it belongs in your training. It's not about doing more. It's about choosing the right input for the right outcome.",
    img: "/images/iq-mobility.png",
    imgAlt: "Athlete moving through a controlled lunge",
  },
  {
    name: "Mindset IQ",
    color: "#A855F7",
    sub: "Progress independent of how you feel",
    body: "Most people don't fail because they lack motivation. They fail because they rely on it. Motivation is emotional. Consistency is structural. Mindset IQ is the ability to make progress independent of how you feel. It's built through small, repeatable commitments, clear decision-making, and trust built through action, not intention. Every kept promise builds identity. Every broken one weakens it. Mindset IQ is not about pushing harder. It's about choosing actions that compound. Long-term performance depends less on intensity and more on reliability.",
    img: "/images/iq-mindset.png",
    imgAlt: "Athlete committed to consistent training",
  },
];

const inside = [
  {
    title: "Programs",
    desc: "Structured training built on the IQ Framework",
  },
  {
    title: "Workouts",
    desc: "Pick a one-off workout and train anywhere",
  },
  {
    title: "Exercise Library",
    desc: "Every movement explained with cues and intent",
  },
  {
    title: "Step & Exercise Tracking",
    desc: "Daily movement accountability",
  },
  {
    title: "Macro Tracker",
    desc: "Simple nutrition tracking built in",
  },
  {
    title: "IQ Framework",
    desc: "Movement, mobility and mindset IQ",
  },
];

export function IQPage() {
  return (
    <>
      {/* Intro */}
      <Sec style={{ paddingTop: 80, paddingBottom: 72 }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <Pill>The Foundation</Pill>
            <h1
              className="page-title"
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -2,
                marginTop: 16,
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Three pillars. One decision making system.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Every program, workout, and tool inside activeX is built on this
              framework. Not random content, but applied principles that connect
              your mobility, your movement, and your mindset into one intelligent
              approach to training.
            </p>
          </div>
        </Reveal>
      </Sec>

      {/* Hero visual */}
      <Sec className="sec-pt-0 sec-pb-40">
        <Reveal>
          <div
            style={{
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <img
              src="/images/iq-hero.png"
              alt="Strength training with activeX"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </Reveal>
      </Sec>

      {/* Pillars */}
      {pillars.map((p, i) => {
        const imgLeft = i % 2 === 1;
        const img = (
          <div className="split-img" style={{ flex: 1, minWidth: 0 }}>
            <img
              src={p.img}
              alt={p.imgAlt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          </div>
        );
        const copy = (
          <div className="split-txt" style={{ flex: 1.1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: p.color,
                marginBottom: 12,
              }}
            >
              {p.name}
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              {p.sub}
            </h2>
            <div
              style={{
                width: 48,
                height: 3,
                background: p.color,
                borderRadius: 2,
                marginBottom: 20,
              }}
            />
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {p.body}
            </p>
          </div>
        );
        return (
          <Sec key={p.name} bg={i % 2 === 1 ? C.offWhite : C.white}>
            <Reveal>
              <div
                className="split"
                style={{
                  display: "flex",
                  gap: 56,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {imgLeft ? (
                  <>
                    {img}
                    {copy}
                  </>
                ) : (
                  <>
                    {copy}
                    {img}
                  </>
                )}
              </div>
            </Reveal>
          </Sec>
        );
      })}

      {/* Together */}
      <Sec>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Together, these three pillars form a decision making system.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              This is how we approach training, recovery, and long-term
              performance inside activeX. Every program is built on this
              framework. Every workout applies these principles. It&apos;s not
              about training harder, it&apos;s about training with intelligence.
            </p>
          </div>
        </Reveal>
      </Sec>

      {/* What's inside */}
      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Pill>Platform</Pill>
            <h2
              className="section-title"
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              What&apos;s inside activeX
            </h2>
          </div>
        </Reveal>
        <div
          className="auto-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          {inside.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} style={{ height: "100%" }}>
              <Card title={item.title} desc={item.desc} />
            </Reveal>
          ))}
        </div>
      </Sec>

      {/* CTA */}
      <section
        className="iq-cta"
        style={{
          position: "relative",
          minHeight: 320,
          padding: "100px 24px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <img
          src="/images/iq-cta.png"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(26, 16, 64, 0.55)",
          }}
        />
        <Reveal>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: -1,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Ready to train with intelligence?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              Every program, workout, and tool inside activeX is built on this
              framework.
            </p>
            <CTA to={PAGE_PATHS.pricing}>Start Training</CTA>
          </div>
        </Reveal>
      </section>
    </>
  );
}
