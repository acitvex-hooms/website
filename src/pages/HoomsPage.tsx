import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Card, Pill, Reveal, Sec, Split } from "../components/ui";

const hoomsBeliefs = [
  {
    title: "Consistency",
    desc: "Results in training don't come from a handful of perfect sessions, they come from showing up on the days you don't feel like it. The body adapts to repeated signals over time, not sporadic bursts of effort.",
  },
  {
    title: "Structured System",
    desc: "Random workouts might make you tired, but they rarely make you better. A structured approach means every session has a purpose that connects to the one before it and the one after it.",
  },
  {
    title: "Progressive Overload",
    desc: "The body only changes when it's asked to do something it currently can't. Progressive overload is what separates training from just exercising: it's the mechanism that actually builds strength, muscle, and capacity over time.",
  },
];

export function HoomsPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Split
          imgSide="right"
          pill="Co-founder"
          title="Hooman Momtazi"
          text="Co-founder of activeX. Competitive bodybuilder. 20+ years training experience."
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/hooms-portrait.png"
              alt="Hooman Momtazi"
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
              fontSize: 16,
              color: C.textMid,
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            Competitive Bodybuilder with over 20 years of training experience,
            IFBB Pro league competitor in the Classic Physique division. Specializing in advanced hypertrophy & fast fat loss for males.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              "Competitive bodybuilder",
              "IFBB Classic Physique",
              "activeX co-founder",
              "20+ years training",
            ].map((t) => (
              <span
                key={t}
                style={{
                  padding: "5px 14px",
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 500,
                  border: `1px solid ${C.border}`,
                  color: C.textMid,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </Split>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          pill="Origin"
          title="How I started"
          text={`Growing up, I was the chubby kid. Then, almost overnight it felt like, that flipped completely, I shot up, dropped the weight, and ended up 65kg at 5'11". Skinny. Not the transformation people usually picture. My brother had been asking me to start training with him for a while partly to get me in the gym, partly just to have a reason to spend more time together. I kept putting it off.`}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/hooms-hero.jpg"
              alt="Hooman training"
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
              fontSize: 16,
              color: C.textMid,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            There was also something deeper pulling me toward the weight room
            before that day ever happened. My grandfather was a bodybuilder. I
            grew up around that world, the discipline, the physiques, the idea
            that you could actually build your body into something, rather than
            just accept whatever it happened to be. Bodybuilding was never a
            foreign concept to me. It was something I&apos;d always been drawn
            to, I just hadn&apos;t made it mine yet.
          </p>
        </Split>
      </Sec>

      <Sec>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Pill>Competition</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Why I compete
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Competing isn&apos;t about the trophy for me, it&apos;s about who
              you have to become to earn the right to stand on that stage. Every
              prep strips away the excuses. There&apos;s no &ldquo;I&apos;ll
              start Monday,&rdquo; no skipping a meal because you&apos;re not
              feeling it, no half-effort set. The stage doesn&apos;t care how you
              feel that day, it only reflects exactly what you did or didn&apos;t
              do in the months before it.
            </p>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              That&apos;s the part I&apos;m addicted to. Not the pump, not the
              applause, the discipline it demands out of you when nobody&apos;s
              watching. Waking up for the same meals, the same training, the same
              recovery, day after day, whether you feel motivated or not.
              Competing turns discipline from a nice idea into a non-negotiable,
              because the deadline is fixed and the mirror doesn&apos;t lie.
            </p>
          </div>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Pill>Mission</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Why activeX
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              activeX exists because I was tired of watching people put in the
              effort, showing up, sweating, doing the work, and still not knowing
              whether any of it was actually building toward something. Most
              fitness content out there is a random collection of workouts
              stitched together with no throughline.
            </p>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              activeX gives members access to structured programs, a full workout
              and exercise library, macro tracking, step tracking, and exercise
              tracking, but the tools aren&apos;t the point. The point is that
              every single one of them is connected to the same underlying
              system: the IQ Framework. Nothing inside activeX is random. Every
              program, every exercise, every tracked number exists to feed the
              same three pillars, Mobility, Movement, Mindset, so progress
              compounds instead of resetting every time you open the app.
            </p>
            <CTA to={PAGE_PATHS.pricing}>Join activeX - $19/month</CTA>
          </div>
        </Reveal>
      </Sec>

      <Sec>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Pill>Philosophy</Pill>
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
              What I believe
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
          {hoomsBeliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} style={{ height: "100%" }}>
              <Card title={b.title} desc={b.desc} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.navy} style={{ textAlign: "center", padding: "80px 24px" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -1,
              marginBottom: 16,
            }}
          >
            Ready to transform?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 520,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Join activeX for $19/month. Full access to every program, tool, and
            resource. Or apply for 1-on-1 coaching with Hooms.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <CTA to={PAGE_PATHS.pricing}>Join activeX</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.apply}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Apply for coaching
            </CTA>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}

export default HoomsPage;
