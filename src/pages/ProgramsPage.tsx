import { useState } from "react";
import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec, Split } from "../components/ui";

const FAQ = [
  {
    q: "What's the difference between buying a program & the membership?",
    a: "Buying a program gives you lifetime access to that single program. The membership gives you access to every program, plus the full suite of tracking tools, exercise library, and journals for $19/month. If you plan to train with activeX long-term, the membership is significantly better value.",
  },
  {
    q: "Where do I access the programs?",
    a: "All programs are delivered through the activeX app on iOS or web app for non-iOS devices. After purchase, you'll receive access to log in and start your program immediately.",
  },
  {
    q: "Do I need a gym?",
    a: "Programs are designed for gym or home environment. Equipment requirements are listed on each program page.",
  },
  {
    q: "Can I do a program & coaching at the same time?",
    a: "Coaching clients receive fully custom programming, so you wouldn't follow a set program alongside coaching. However, if you're not sure which is right for you, start with a program and apply for coaching later.",
  },
  {
    q: "How do I know which program to start with?",
    a: "Beginner if you're new or returning to training. Intermediate if you've been training consistently and want to level up. Advanced if you're experienced and want advanced programming. When in doubt, start with Foundation the principles it builds carry into everything else.",
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
          img={
            <img
              src="/images/feature-1.jpg"
              alt="Custom program builder"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
        />
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
            What&apos;s Inside Every Program
          </h2>
        </Reveal>
        <div
          className="programs-whats-inside"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "Structured Phases",
              desc: "Every program is broken into phases with clear progressions. You always know what you're doing, why you're doing it, & what comes next.",
            },
            {
              title: "Video Instruction",
              desc: "Every exercise comes with video demonstration & coaching cues so you understand the intent behind each movement not just the motion.",
            },
            {
              title: "Mobility & Movement Prep",
              desc: "Each session includes targeted mobility & movement preparation built into the program not bolted on as an afterthought.",
            },
            {
              title: "Tracking & Logging",
              desc: "Log your sessions, track your loads, & monitor your progress over time through the activeX platform.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} style={{ height: "100%" }}>
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
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            Frequently Asked Questions
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
