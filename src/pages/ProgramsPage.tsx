import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec, Split } from "../components/ui";

const cats = [
  {
    name: "Beginner",
    count: "10+",
    desc: "Start with structure. Learn movement, build confidence, progress safely.",
  },
  {
    name: "Intermediate",
    count: "15+",
    desc: "Structured progression for training experience. Push past plateaus.",
  },
  {
    name: "Advanced",
    count: "10+",
    desc: "Complex programming for experienced lifters ready for serious progression.",
  },
  {
    name: "Home",
    count: "8+",
    desc: "No gym required. Full programs using minimal or no equipment.",
  },
  {
    name: "Glute Focus",
    count: "6+",
    desc: "Targeted lower-body programming built on intelligent exercise selection.",
  },
  {
    name: "Bodybuilding",
    count: "5+",
    desc: "Hypertrophy-focused programs for muscle gain and body composition.",
  },
];

export function ProgramsPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Pill>40+ Programs</Pill>
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
              Choose your program. Or build your own.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: C.textMid,
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Follow a professionally structured program when you want expert
              guidance, or create your own using the Custom Program Builder when
              your schedule, equipment, or goals require more control.
            </p>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div
                style={{
                  background: C.offWhite,
                  borderRadius: 16,
                  padding: 32,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{ fontSize: 20, fontWeight: 700, color: C.navy }}
                  >
                    {c.name}
                  </h3>
                  <span
                    style={{ fontSize: 13, fontWeight: 600, color: C.purple }}
                  >
                    {c.count} programs
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>
      <Sec bg={C.offWhite}>
        <Split
          pill="Custom Program Builder"
          title="Build the program you will actually follow."
          text="Name your program, choose how many days a week you train, build each training day from the exercise library, and set your own sets, repetitions, and rest periods. Restructure it whenever your schedule, equipment, or goals change. Tracked exactly the same way as activeX programs."
          cta="Start Building"
          ctaTo={PAGE_PATHS.pricing}
        />
      </Sec>
      <Sec bg={C.navy} style={{ textAlign: "center", padding: "72px 24px" }}>
        <Reveal>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            All programs included in your membership.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              marginBottom: 24,
            }}
          >
            $24.99/month or $229/year (save 24%). No locked content.
          </p>
          <CTA to={PAGE_PATHS.pricing}>Join activeX</CTA>
        </Reveal>
      </Sec>
    </>
  );
}
