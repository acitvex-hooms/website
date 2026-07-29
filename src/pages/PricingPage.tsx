import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

export function PricingPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Pill>Membership</Pill>
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
              Full access. One price.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: C.textMid,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              No tiers, no locked features. Every tool, every program, every
              exercise — included. Choose how you pay.
            </p>
          </div>
        </Reveal>
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          {[
            {
              name: "Annual",
              price: "$229",
              per: "year",
              sub: "Less than $19/month",
              badge: "Best Value",
              hi: true,
              feats: [
                "All 40+ structured programs",
                "600+ exercise library with coaching cues",
                "Custom Program Builder",
                "Workout tracking — loads, sets, reps",
                "Macro Tracker & Step Tracker",
                "XP, levels, badges & leaderboards",
                "IQ Framework built into everything",
                "Apple Health / Apple Watch integration",
              ],
            },
            {
              name: "Monthly",
              price: "$24.99",
              per: "month",
              sub: "Cancel anytime",
              feats: [
                "Everything in Annual",
                "Same full access",
                "No commitment required",
                "Perfect for trying activeX first",
              ],
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.15}>
              <div
                style={{
                  width: 380,
                  background: C.white,
                  borderRadius: 20,
                  padding: "40px 32px",
                  border: t.hi
                    ? `2px solid ${C.purple}`
                    : `1px solid ${C.border}`,
                  boxShadow: t.hi
                    ? "0 20px 60px rgba(120,40,255,0.1)"
                    : "none",
                  position: "relative",
                }}
              >
                {t.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: C.gradient,
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "6px 20px",
                      borderRadius: 50,
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
                    marginTop: t.badge ? 8 : 0,
                  }}
                >
                  {t.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    style={{
                      fontSize: 48,
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
                      fontSize: 14,
                      color: C.purple,
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {t.sub}
                  </div>
                )}
                <div
                  style={{ height: 1, background: C.border, margin: "24px 0" }}
                />
                {t.feats.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: C.purple, marginTop: 2 }}>✓</span>
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
                  variant={t.hi ? "primary" : "secondary"}
                  href="https://app.activex.fit"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 24,
                  }}
                >
                  {t.hi ? "Start Annual — Save 24%" : "Start Monthly"}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
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
              letterSpacing: -1,
            }}
          >
            Go further with coaching & custom plans
          </h2>
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
              title: "Weekly 1-on-1 Coaching",
              price: "$799/mo",
              desc: "Custom programming, movement analysis, weekly check-ins, ongoing accountability. Directly with Ana Coppola. Limited spots — application only.",
              cta: "Apply for Coaching",
            },
            {
              title: "12-Week Custom Program",
              price: "$499",
              desc: "Fully personalised training program built around your goals, experience level, and available equipment. Built on the IQ Framework.",
              cta: "Learn More",
            },
            {
              title: "12-Week Custom Diet",
              price: "$499",
              desc: "Fully personalised nutrition plan — macro targets, meal structure, and guidance. Delivered through the activeX app.",
              cta: "Learn More",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: 32,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 4,
                  }}
                >
                  {c.title}
                </h3>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: C.purple,
                    marginBottom: 12,
                  }}
                >
                  {c.price}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {c.desc}
                </p>
                <CTA
                  variant="secondary"
                  to={PAGE_PATHS.coaching}
                  style={{
                    marginTop: 20,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {c.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>
    </>
  );
}
