import { C } from "../lib/tokens";
import { Reveal, Sec, Split } from "../components/ui";

const timeline = [
  {
    y: "2008",
    t: "Started coaching in Costa Blanca, Spain, at The European Institute of Fitness.",
  },
  {
    y: "2009–2020",
    t: "Built coaching career in Sydney, based at Fitness First Randwick. Coached everyday clients, actors, and public figures.",
  },
  {
    y: "2013",
    t: "Placed 2nd in INBA fitness model competition. Competed at the Arnold Classic in Melbourne.",
  },
  {
    y: "TV",
    t: "Cast on Australian Ninja Warrior (Season 5) and Gladiators Australia (Season 1). Guest on The Morning Show at Sydney Fitness Expo.",
  },
  {
    y: "2025",
    t: "Relocated to The Palm, Dubai. Founded activeX with husband and business partner Hooman Momtazi.",
  },
  {
    y: "Now",
    t: "Growing activeX globally and building a community where people train with intelligence.",
  },
];

export function AboutPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Split
          imgSide="right"
          pill="Co-Founder & Head Coach"
          title="Ana Coppola"
          text="Coach, founder, author, writer. Ana has been coaching since 2008 — from everyday women rebuilding confidence to actors preparing for camera, from Sydney gym floors to national television. She created the IQ Framework because people needed a system, not more content."
        >
          <p
            style={{
              fontSize: 16,
              fontStyle: "italic",
              color: C.purple,
              marginBottom: 20,
              lineHeight: 1.7,
            }}
          >
            &ldquo;At this stage of life, it&apos;s more important to be honest
            than impressive.&rdquo;
          </p>
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
            Career Timeline
          </h2>
        </Reveal>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {timeline.map((t, i) => (
            <Reveal key={t.y} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: 28,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    minWidth: 90,
                    fontSize: 14,
                    fontWeight: 700,
                    color: C.purple,
                    paddingTop: 2,
                  }}
                >
                  {t.y}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: C.textMid,
                    lineHeight: 1.7,
                    borderLeft: `2px solid ${C.border}`,
                    paddingLeft: 24,
                  }}
                >
                  {t.t}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>
      <Sec>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: C.navy,
                marginBottom: 24,
              }}
            >
              As seen in
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 40,
                flexWrap: "wrap",
                opacity: 0.5,
              }}
            >
              {[
                "Women's Fitness",
                "Daily Mail",
                "Men's Health",
                "Ninja Warrior",
                "Gladiators AU",
                "The Morning Show",
              ].map((m) => (
                <span
                  key={m}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.textMid,
                    letterSpacing: 0.5,
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}

export function HoomanPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Split
          imgSide="right"
          pill="Co-Founder"
          title="Hooman Momtazi"
          text="activeX co-owner, Ana's husband and business partner. Competitive bodybuilder with deep knowledge of hypertrophy, exercise selection, training volume, and progressive overload. Hooman's expertise drives the male-oriented programs, bodybuilding content, and behind-the-scenes product development."
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 16,
            }}
          >
            {[
              "Competitive bodybuilder",
              "Hypertrophy specialist",
              "activeX co-owner",
              "Product development",
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
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: C.navy,
                marginBottom: 16,
              }}
            >
              Bodybuilding expertise meets intelligent programming
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.8,
              }}
            >
              Hooman brings years of bodybuilding knowledge into the activeX
              ecosystem — from exercise selection and volume management to
              contest preparation and progressive overload strategies. His
              expertise shapes the male-oriented programs and hypertrophy content
              inside the app.
            </p>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}
