import { C, PAGE_PATHS } from "../lib/tokens";
import { Hero } from "../components/Hero";
import {
  CTA,
  Card,
  Pill,
  Reveal,
  Sec,
  Split,
  StatBar,
} from "../components/ui";

export function HomePage() {
  return (
    <>
      <Hero />
      <StatBar
        items={[
          { n: "40+", l: "Structured Programs" },
          { n: "600+", l: "Exercise Demos" },
          { n: "3", l: "IQ Pillars" },
          { n: "1", l: "Connected System" },
        ]}
      />

      <Sec>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Pill>The IQ Framework</Pill>
            <h2
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1.5,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Three pillars. One system.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.textMid,
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Most fitness content tells you what to do. The IQ Framework teaches
              you how to think — so every session has purpose.
            </p>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              icon: "M",
              title: "Mobility IQ",
              desc: "Select the right tool for the intended outcome. Dynamic mobility builds usable range. Static stretching supports recovery. Know which to use and when.",
            },
            {
              icon: "V",
              title: "Movement IQ",
              desc: "Organise and control the body before producing force. Strength improves when stability comes first — not just load.",
            },
            {
              icon: "I",
              title: "Mindset IQ",
              desc: "Motivation is emotional. Consistency is structural. Build progress through small, repeatable commitments that compound.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <Card {...c} />
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <CTA to={PAGE_PATHS.iq}>Explore the IQ Framework</CTA>
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          pill="Custom Program Builder"
          title="Your schedule shapes your program — not the other way around."
          text="Choose how many days you train, select every exercise from the library, control sets, reps, tempo, and rest periods — all inside one organised program. Follow an activeX program when you want expert structure, or create your own when your goals require more control."
          cta="See Programs"
          ctaTo={PAGE_PATHS.programs}
        />
      </Sec>
      <Sec>
        <Split
          imgSide="right"
          pill="Exercise Library"
          title="600+ exercises. Coaching cues. Movement intent."
          text="Select an exercise, see how it is performed, and understand what you should be controlling before adding it to your program. Every exercise includes video demonstration and coaching direction."
          cta="Learn More"
          ctaTo={PAGE_PATHS.programs}
        />
      </Sec>
      <Sec bg={C.offWhite}>
        <Split
          pill="Workout Tracking"
          title="See what you completed. Progress with data, not memory."
          text="Log every set, every rep, every load. See what you completed previously so the next session is based on progression rather than guesswork. Your self-built programs track exactly the same way as activeX programs."
          cta="Start Tracking"
          ctaTo={PAGE_PATHS.pricing}
        />
      </Sec>

      <Sec>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Pill>Behavioural Design</Pill>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              activeX rewards consistency, not perfection.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.textMid,
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Small actions compound. activeX reinforces that behaviour through
              measurable milestones and visible progress.
            </p>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              icon: "XP",
              title: "Experience Points",
              desc: "Earn XP for every completed session and logged workout.",
            },
            {
              icon: "Lv",
              title: "Member Levels",
              desc: "Progress through levels as your consistency builds over time.",
            },
            {
              icon: "★",
              title: "Achievement Badges",
              desc: "Hit milestones and unlock badges for real training behaviour.",
            },
            {
              icon: "#",
              title: "Leaderboards",
              desc: "See where you stand in the community and stay motivated.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Card {...c} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.offWhite} id="pricing-home">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Pill>Membership</Pill>
            <h2
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1.5,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Full access. One price.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.textMid,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              No locked features. No tiers. Everything is included.
            </p>
          </div>
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
              price: "$229",
              per: "year",
              sub: "Less than $19/month",
              badge: "Save 24%",
              hi: true,
              feats: [
                "All 40+ programs",
                "600+ exercise library",
                "Custom Program Builder",
                "Workout, macro & step tracking",
                "XP, levels & leaderboards",
                "IQ Framework built in",
              ],
            },
            {
              name: "Monthly",
              price: "$24.99",
              per: "month",
              sub: "Cancel anytime",
              feats: [
                "Full access to everything",
                "All programs & exercise library",
                "Custom Program Builder",
                "All tracking tools",
                "Gamification & community",
              ],
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.15}>
              <div
                style={{
                  width: 360,
                  background: C.white,
                  borderRadius: 20,
                  padding: "36px 28px",
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
                  boxShadow: t.hi
                    ? "0 16px 48px rgba(120,40,255,0.1)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                  position: "relative",
                }}
              >
                {t.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: C.gradient,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 50,
                      letterSpacing: 0.5,
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
                  }}
                >
                  {t.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    style={{
                      fontSize: 44,
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
                {t.sub && (
                  <div
                    style={{
                      fontSize: 13,
                      color: C.purple,
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {t.sub}
                  </div>
                )}
                <div
                  style={{ height: 1, background: C.border, margin: "20px 0" }}
                />
                {t.feats.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: C.purple, fontSize: 14, marginTop: 2 }}>
                      ✓
                    </span>
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
                  to={PAGE_PATHS.pricing}
                  variant={t.hi ? "primary" : "secondary"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  {t.hi ? "Start Training" : "Choose Monthly"}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: C.textLight,
              marginTop: 28,
            }}
          >
            Your first 2 weeks are on Ana. Start training today — risk-free.
          </p>
        </Reveal>
      </Sec>

      <Sec>
        <Split
          imgSide="right"
          pill="Built by a real coach"
          title="Ana Coppola didn't build activeX because the internet needed more exercises."
          text="She built it because people needed a better way to organise and apply them. After coaching since 2008 — from everyday clients to actors and public figures, from Sydney gym floors to Australian Ninja Warrior and Gladiators Australia — she turned her entire coaching system into a platform anyone can use."
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
            &ldquo;The best training program is the one your client will
            follow.&rdquo;
          </p>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {[
              "Coaching since 2008",
              "Ninja Warrior",
              "Gladiators AU",
              "Celebrity PT",
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
          <CTA to={PAGE_PATHS.about}>Ana&apos;s Full Story</CTA>
        </Split>
      </Sec>

      <Sec
        bg={C.navy}
        style={{ textAlign: "center", padding: "80px 24px" }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -1.5,
              marginBottom: 16,
            }}
          >
            Ready to train with intelligence?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 500,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Join activeX. Full access to every program, tool, and the IQ
            Framework.
          </p>
          <CTA to={PAGE_PATHS.pricing}>Start Your Membership</CTA>
        </Reveal>
      </Sec>
    </>
  );
}
