import { C } from "../lib/tokens";
import { Card, CTA, Pill, Reveal, Sec, Split } from "../components/ui";

export function CoachingPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Split
          pill="Limited Spots"
          title="Work directly with Ana Coppola."
          text="Weekly 1-on-1 coaching with custom programming, movement analysis, form reviews, weekly check-ins, and ongoing accountability. Full activeX platform access included. This is not an automated program — it is direct, professional coaching with a trainer who has coached since 2008."
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.navy,
              marginBottom: 16,
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
            Annual option: $5,999/year (save $3,589). Applications reviewed
            before accepted.
          </p>
          <CTA href="mailto:hello@activex.fit?subject=Coaching%20Application">
            Apply for Coaching
          </CTA>
        </Split>
      </Sec>
      <Sec bg={C.offWhite}>
        <Reveal>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            What&apos;s included
          </h2>
        </Reveal>
        <div
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
              desc: "A training program built specifically for your goals, schedule, and equipment.",
            },
            {
              icon: "02",
              title: "Movement Analysis",
              desc: "Form reviews and coaching cues based on your actual movement, not generic tips.",
            },
            {
              icon: "03",
              title: "Weekly Check-ins",
              desc: "Consistent accountability and programme adjustments based on your progress.",
            },
            {
              icon: "04",
              title: "Full Platform Access",
              desc: "Everything in activeX membership included with your coaching.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Card {...c} />
            </Reveal>
          ))}
        </div>
      </Sec>
      <Sec style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>One-time options</Pill>
          <h2
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
              maxWidth: 500,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Get Ana&apos;s expertise in a one-time plan built around your exact
            situation.
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { t: "12-Week Custom Program", p: "$499" },
              { t: "12-Week Custom Diet", p: "$499" },
              { t: "Video Consult", p: "$499" },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: C.offWhite,
                  borderRadius: 16,
                  padding: "28px 32px",
                  border: `1px solid ${C.border}`,
                  textAlign: "center",
                  minWidth: 220,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 4,
                  }}
                >
                  {c.t}
                </div>
                <div
                  style={{ fontSize: 28, fontWeight: 800, color: C.purple }}
                >
                  {c.p}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Sec>
    </>
  );
}
