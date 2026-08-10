import { AppStoreBand } from "../components/AppStoreBand";
import { Hero } from "../components/Hero";
import { MotionItem, Stagger } from "../components/motion";
import { ScreenshotStrip } from "../components/ScreenshotStrip";
import { Testimonials } from "../components/Testimonials";
import { MEMBERSHIP_CTAS, STRIPE_MEMBERSHIP } from "../lib/membershipCtas";
import { C, PAGE_PATHS, RADIUS } from "../lib/tokens";
import {
  CTA,
  Card,
  Pill,
  Reveal,
  Sec,
  Split,
  StatBar,
} from "../components/ui";

const HOME_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3 4.5 6.5v5.2c0 4.6 3.1 8.8 7.5 9.8 4.4-1 7.5-5.2 7.5-9.8V6.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.2 11.2 14l3.4-3.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Full membership",
    desc: "One price. Gym or home. Every program, tool, and update included.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 9.5h8M8 13h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Exercise library",
    desc: "600+ demos with coaching cues and movement intent.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 19V5h3.2v14H4Zm6.4 0V9h3.2v10h-3.2Zm6.4 0v-6H20v6h-3.2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Workout tracking",
    desc: "Log sets, reps, and load. Progress from data, not memory.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2.8 13.7 8.4l5.8.4-4.5 3.6 1.5 5.6L12 15.4 7.5 18l1.5-5.6L4.5 8.8l5.8-.4L12 2.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "XP & levels",
    desc: "Earn points, level up, and stay consistent with visible milestones.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.8" />
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
    title: "Badges & boards",
    desc: "Unlock achievements and see where you stand in the community.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 7h10v10H7V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 4h4M12 4v3M10 20h4M12 17v3M4 10v4M4 12h3M20 10v4M17 12h3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Program builder",
    desc: "Build your own sessions — tracked the same way as activeX programs.",
  },
] as const;

export function HomePage() {
  return (
    <>
      <Hero />
      <ScreenshotStrip />
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
          <div className="home-sec-head">
            <Pill>The IQ Framework</Pill>
            <h2 className="section-title home-sec-title">
              Three pillars. One system.
            </h2>
            <p className="home-sec-copy">
              Most fitness content tells you what to do. The IQ Framework teaches
              you how to think so every session has purpose.
            </p>
          </div>
        </Reveal>
        <Stagger className="iq-cards" stagger={0.07}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
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
          ].map((c) => (
            <MotionItem key={c.title} style={{ height: "100%" }}>
              <Card {...c} />
            </MotionItem>
          ))}
        </Stagger>
        <div className="home-sec-cta">
          <CTA to={PAGE_PATHS.iq}>Explore the IQ Framework</CTA>
        </div>
      </Sec>

      <Sec className="home-features">
        <Reveal>
          <div className="home-sec-head">
            <Pill>What&apos;s inside</Pill>
            <h2 className="section-title home-sec-title">
              Everything you need to train with intent.
            </h2>
            <p className="home-sec-copy">
              Membership, library, tracking, and behavioural design — one
              connected system.
            </p>
          </div>
        </Reveal>
        <Stagger className="feature-icon-grid" stagger={0.06}>
          {HOME_FEATURES.map((f) => (
            <MotionItem key={f.title}>
              <div className="feature-icon-item">
                <div className="feature-icon-badge" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="feature-icon-title">{f.title}</h3>
                <p className="feature-icon-copy">{f.desc}</p>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </Sec>

      <Testimonials />

      <Sec id="pricing-home">
        <Reveal>
          <div className="home-sec-head">
            <Pill>Membership</Pill>
            <h2 className="section-title home-sec-title">
              Full access. One price.
            </h2>
            <p className="home-sec-copy">
              No locked features. No tiers. Everything is included.
            </p>
          </div>
        </Reveal>
        <div className="pricing-cards" style={{ marginBottom: 0 }}>
          {[
            {
              name: "Annual",
              price: "$229",
              per: "year",
              sub: MEMBERSHIP_CTAS.annualSub,
              badge: MEMBERSHIP_CTAS.annualBadge,
              hi: true,
              href: STRIPE_MEMBERSHIP.annual,
              cta: MEMBERSHIP_CTAS.annualCta,
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
              sub: MEMBERSHIP_CTAS.monthlySub,
              href: STRIPE_MEMBERSHIP.monthly,
              cta: MEMBERSHIP_CTAS.monthlyCta,
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
                className={`pricing-card${t.hi ? " is-featured" : ""}`}
                style={{
                  background: C.white,
                  borderRadius: RADIUS.xl,
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
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
                    className="pricing-price"
                    style={{
                      fontWeight: 800,
                      color: C.navy,
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
                  href={t.href}
                  variant={t.hi ? "primary" : "secondary"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  {t.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="home-pricing-note">
            Your first 2 weeks are on us. Start training, risk-free.
          </p>
        </Reveal>
      </Sec>

      <Sec>
        <Split
          imgSide="right"
          pill="Built by a real coach"
          title="Ana Coppola built activeX so training had a system — not more noise."
          text="Coaching since 2008, from everyday clients to Ninja Warrior and Gladiators Australia, she turned her coaching method into a platform anyone can use."
          img={
            <img
              src="/images/ana-training.jpg"
              alt="Ana Coppola training"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
        >
          <p className="home-ana-quote">
            &ldquo;The best training program is the one your client will
            follow.&rdquo;
          </p>
          <div className="home-ana-tags">
            {[
              "Coaching since 2008",
              "Ninja Warrior",
              "Gladiators AU",
              "Celebrity PT",
            ].map((t) => (
              <span key={t} className="home-ana-tag">
                {t}
              </span>
            ))}
          </div>
          <CTA to={PAGE_PATHS.about}>Ana&apos;s Full Story</CTA>
        </Split>
      </Sec>

      <AppStoreBand />
    </>
  );
}
