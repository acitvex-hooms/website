import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

const pillars = [
  {
    name: "Movement IQ",
    color: C.purple,
    sub: "Organise and control the body before producing force",
    points: [
      "Stability before movement",
      "Joint positioning under load",
      "Control appropriate to the task",
      "Force production without compensation",
      "Understanding exercise intent",
      "Maintaining quality under fatigue",
    ],
  },
  {
    name: "Mobility IQ",
    color: C.blue,
    sub: "Select the right tool for the intended outcome",
    points: [
      "Controlled access to range",
      "Movement through range with control",
      "Preparation for training demands",
      "Recovery and nervous system regulation",
      "Dynamic vs. static — know the difference",
      "Progress through presence, not force",
    ],
  },
  {
    name: "Mindset IQ",
    color: "#A855F7",
    sub: "Progress independent of changing emotions",
    points: [
      "Small, repeatable commitments",
      "Clear decisions, not motivation spikes",
      "Structure over willpower",
      "Evidence builds confidence",
      "Actions that compound over time",
      "Reliability over intensity",
    ],
  },
];

export function IQPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Pill>The Foundation</Pill>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -2,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              The IQ Framework
            </h1>
            <p
              style={{
                fontSize: 18,
                color: C.textMid,
                maxWidth: 620,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Most fitness content focuses on what to do. Very little explains
              how to think. The IQ Framework is a decision-making system built on
              three pillars that changes how you approach training, recovery, and
              long-term performance.
            </p>
          </div>
        </Reveal>
      </Sec>
      {pillars.map((p, i) => (
        <Sec key={p.name} bg={i % 2 === 1 ? C.offWhite : C.white}>
          <Reveal>
            <div
              style={{
                display: "flex",
                gap: 56,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 300 }}>
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
                    fontSize: 36,
                    fontWeight: 800,
                    color: C.navy,
                    letterSpacing: -1,
                    marginBottom: 12,
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
                    marginBottom: 24,
                  }}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  {p.points.map((pt) => (
                    <div
                      key={pt}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: p.color, fontSize: 14, marginTop: 2 }}>
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: C.textMid,
                          lineHeight: 1.6,
                        }}
                      >
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  flex: 0.8,
                  minWidth: 280,
                  background: C.lightGray,
                  borderRadius: 20,
                  height: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 48, opacity: 0.2, color: C.navy, fontWeight: 800 }}>
                  {p.name.split(" ")[0]}
                </span>
              </div>
            </div>
          </Reveal>
        </Sec>
      ))}
      <Sec bg={C.navy} style={{ textAlign: "center", padding: "72px 24px" }}>
        <Reveal>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -1,
              marginBottom: 16,
            }}
          >
            Every program, workout, and tool inside activeX is built on this
            framework.
          </h2>
          <CTA to={PAGE_PATHS.pricing} style={{ marginTop: 20 }}>
            Start Training
          </CTA>
        </Reveal>
      </Sec>
    </>
  );
}
