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
              you how to think so every session has purpose.
            </p>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
          className="iq-cards"
        >
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Mobility — flexible range / stretch arc */}
                  <path
                    d="M7 17a5 5 0 0 1 10 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 14a7 7 0 0 1 14 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                  <circle cx="12" cy="8" r="2.2" fill="currentColor" />
                  <path
                    d="M9.5 11.5 8 19M14.5 11.5 16 19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              title: "Mobility IQ",
              desc: "Select the right tool for the intended outcome. Dynamic mobility builds usable range. Static stretching supports recovery. Know which to use and when.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Movement — controlled stance / strength figure */}
                  <circle cx="12" cy="5.5" r="2" fill="currentColor" />
                  <path
                    d="M12 8.2v5.2M8.2 11.2 12 13.4l3.8-2.2M9.2 20.2 12 13.4l2.8 6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 9.5h11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              ),
              title: "Movement IQ",
              desc: "Organise and control the body before producing force. Strength improves when stability comes first, not just load.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Mindset — brain / focus */}
                  <path
                    d="M9.2 4.8a3.4 3.4 0 0 1 5.6 0 3.2 3.2 0 0 1 3.7 4.2A3.4 3.4 0 0 1 17 15.6v1.6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-1.6a3.4 3.4 0 0 1-1.5-6.6 3.2 3.2 0 0 1 3.7-4.2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12.2h4M10 15h4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              title: "Mindset IQ",
              desc: "Motivation is emotional. Consistency is structural. Build progress through small, repeatable commitments that compound.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12} style={{ height: "100%" }}>
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
          pill="Membership"
          title="activeX Membership"
          cta="Join Now"
          ctaTo={PAGE_PATHS.pricing}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={48}
          img={
            <img
              src="/images/membership.jpg"
              alt="activeX membership"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 48,
              }}
            />
          }
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              "Full access",
              "Train at gym or home",
              "All programs",
              "Exercise library",
              "Tracking tools",
              "Structured Progression",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 17,
                  color: C.textMid,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: C.purple,
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Split>
      </Sec>
      <Sec>
        <Split
          imgSide="right"
          pill="Exercise Library"
          title="600+ exercises. Coaching cues. Movement intent."
          text="Select an exercise, see how it is performed, and understand what you should be controlling before adding it to your program. Every exercise includes video demonstration and coaching direction."
          cta="Learn More"
          ctaTo={PAGE_PATHS.programs}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={48}
          img={
            <img
              src="/images/feature-2.jpg"
              alt="Ana coaching training session"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 48,
              }}
            />
          }
        />
      </Sec>
      <Sec bg={C.offWhite}>
        <Split
          pill="Workout Tracking"
          title="See what you completed. Progress with data, not memory."
          text="Log every set, every rep, every load. See what you completed previously so the next session is based on progression rather than guesswork. Your self-built programs track exactly the same way as activeX programs."
          cta="Start Tracking"
          ctaTo={PAGE_PATHS.pricing}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={48}
          img={
            <img
              src="/images/feature-4.jpg"
              alt="Strength training with activeX"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 48,
              }}
            />
          }
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
            alignItems: "stretch",
          }}
        >
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Experience Points — burst / spark */}
                  <path
                    d="M12 2.8 13.7 8.4l5.8.4-4.5 3.6 1.5 5.6L12 15.4 7.5 18l1.5-5.6L4.5 8.8l5.8-.4L12 2.8Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11.2" r="2" fill="currentColor" />
                </svg>
              ),
              title: "Experience Points",
              desc: "Earn XP for every completed session and logged workout.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Member Levels — ascending steps */}
                  <path
                    d="M4 18h4v-4h4V10h4V6h4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              ),
              title: "Member Levels",
              desc: "Progress through levels as your consistency builds over time.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Achievement Badges — medal */}
                  <circle
                    cx="12"
                    cy="10"
                    r="5.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M10.2 8.8 12 10.5l3-3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.2 14.8 7.5 21l4.5-2.2L16.5 21l-1.7-6.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "Achievement Badges",
              desc: "Hit milestones and unlock badges for real training behaviour.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {/* Leaderboards — podium bars */}
                  <path
                    d="M5 19V11h4v8H5Zm5 0V6h4v13h-4Zm5 0v-5h4v5h-4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              title: "Leaderboards",
              desc: "See where you stand in the community and stay motivated.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} style={{ height: "100%" }}>
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
            Your first 2 weeks are on us. Start training, risk-free.
          </p>
        </Reveal>
      </Sec>

      <Sec>
        <Split
          imgSide="right"
          pill="Built by a real coach"
          title="Ana Coppola didn't build activeX because the internet needed more exercises."
          text="She built it because people needed a better way to organise and apply them. After coaching since 2008, from everyday clients to actors and public figures, from Sydney gym floors to Australian Ninja Warrior and Gladiators Australia, she turned her entire coaching system into a platform anyone can use."
          img={
            <img
              src="/images/ana-training.jpg"
              alt="Ana Coppola training"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
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
