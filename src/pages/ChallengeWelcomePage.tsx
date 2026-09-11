import { TallyEmbed } from "../components/TallyEmbed";
import { CTA, Pill, Reveal, Sec } from "../components/ui";
import { C, PAGE_PATHS } from "../lib/tokens";

/**
 * Post-purchase page for the 8-week challenge Stripe Payment Link.
 * Not linked from the site. Stripe → After payment → Redirect to:
 *   https://www.activex.fit/welcome-challenge
 */
const APP_STORE_URL =
  "https://apps.apple.com/ae/app/activex-fitness/id6766033150";

const INTAKE_FORM = "https://tally.so/r/xXADME";

export function ChallengeWelcomePage() {
  return (
    <>
      <Sec className="sec-page-hero" style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>Welcome</Pill>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 14,
            }}
          >
            You're in, challenge onboarding is next
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 3.8vw, 17px)",
              color: C.textMid,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
              padding: "0 4px",
            }}
          >
            Here's how to get set up. Download the app first, then complete the
            short intake so we can prepare your challenge onboarding.
          </p>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite} className="sec-pt-24">
        <Reveal>
          <div
            className="app-download-block"
            style={{
              background: C.offWhite,
              borderRadius: 20,
              border: `1px solid ${C.border}`,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.navy,
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              1. Download the app & create your account
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                lineHeight: 1.7,
                maxWidth: 520,
                margin: "0 auto 24px",
              }}
            >
              Use the same email you purchased with. Your plan is delivered
              through activeX, so this is the most important first step.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", lineHeight: 0 }}
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                style={{ height: 48, width: "auto" }}
              />
            </a>
            <p
              style={{
                fontSize: 13,
                color: C.textLight,
                marginTop: 16,
              }}
            >
              Or sign up on the web at{" "}
              <a
                href="https://api.activex.fit/onboarding"
                style={{ color: C.purple, fontWeight: 600 }}
              >
                api.activex.fit/onboarding
              </a>
            </p>
          </div>
        </Reveal>
      </Sec>

      <Sec className="sec-pt-24">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Pill>Intake</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 14,
                marginBottom: 10,
              }}
            >
              2. Complete your intake
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.textMid,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              You're already in. Now help us personalise your plan. This only
              takes a few minutes.
            </p>
          </div>
          <TallyEmbed
            src={INTAKE_FORM}
            title="8-Week Challenge Intake"
            variant="inline"
            height={980}
          />
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite} className="sec-cta" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginBottom: 12,
            }}
          >
            What happens next
          </h2>
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              maxWidth: 520,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            After you submit the intake, we'll personally reach out within 24
            hours to schedule your onboarding call.
          </p>
          <CTA to={PAGE_PATHS.home} variant="secondary">
            Back to home
          </CTA>
        </Reveal>
      </Sec>
    </>
  );
}
