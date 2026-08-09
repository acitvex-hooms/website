import { useSearchParams } from "react-router-dom";
import { TallyEmbed } from "../components/TallyEmbed";
import { CTA, Pill, Reveal, Sec } from "../components/ui";
import { C, PAGE_PATHS } from "../lib/tokens";

const APP_STORE_URL =
  "https://apps.apple.com/ae/app/activex-fitness/id6766033150";

type WelcomeProduct =
  | "membership"
  | "custom-program"
  | "custom-diet"
  | "video-consult"
  | "coaching"
  | "bbe-ebook"
  | "bbe-ankle"
  | "bbe-bundle";

function resolveProduct(raw: string | null): WelcomeProduct {
  const v = (raw ?? "membership").toLowerCase().trim();
  if (
    v === "custom-program" ||
    v === "program" ||
    v === "custom_program"
  ) {
    return "custom-program";
  }
  if (v === "custom-diet" || v === "diet" || v === "custom_diet") {
    return "custom-diet";
  }
  if (
    v === "video-consult" ||
    v === "video" ||
    v === "consult" ||
    v === "video_consult"
  ) {
    return "video-consult";
  }
  if (v === "coaching" || v === "1-on-1" || v === "1on1") {
    return "coaching";
  }
  if (v === "bbe-ebook" || v === "ebook" || v === "bbe_ebook") {
    return "bbe-ebook";
  }
  if (v === "bbe-ankle" || v === "ankle" || v === "bbe_ankle") {
    return "bbe-ankle";
  }
  if (v === "bbe-bundle" || v === "bundle" || v === "bbe_bundle") {
    return "bbe-bundle";
  }
  return "membership";
}

function AppDownloadBlock({
  title,
  text,
  optional = false,
}: {
  title: string;
  text: string;
  optional?: boolean;
}) {
  return (
    <div
      className="app-download-block"
      style={{
        background: C.offWhite,
        borderRadius: 20,
        border: `1px solid ${C.border}`,
        textAlign: "center",
      }}
    >
      {optional && (
        <Pill>Optional but recommended</Pill>
      )}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: C.navy,
          marginTop: optional ? 14 : 0,
          marginBottom: 12,
        }}
      >
        {title}
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
        {text}
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
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: "0 auto",
        maxWidth: 640,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {steps.map((step, i) => (
        <li
          key={step}
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            textAlign: "left",
            background: C.offWhite,
            borderRadius: 14,
            padding: "18px 20px",
            border: `1px solid ${C.border}`,
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: C.purple,
              color: C.white,
              fontWeight: 800,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {i + 1}
          </span>
          <span
            style={{
              fontSize: 15,
              color: C.textMid,
              lineHeight: 1.65,
              paddingTop: 4,
            }}
          >
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function WelcomePage() {
  const [params] = useSearchParams();
  const product = resolveProduct(params.get("product"));

  const isCustom =
    product === "custom-program" || product === "custom-diet";
  const isVideo = product === "video-consult";
  const isCoaching = product === "coaching";
  const isShop =
    product === "bbe-ebook" ||
    product === "bbe-ankle" ||
    product === "bbe-bundle";

  const headline = isCustom
    ? product === "custom-program"
      ? "Your custom program is being built."
      : "Your custom diet is being built."
    : isVideo
      ? "You're booked for a video consult."
      : isCoaching
        ? "You're in. Coaching onboarding is next."
        : isShop
          ? product === "bbe-ankle"
            ? "Thanks — your ankle strap order is in."
            : product === "bbe-bundle"
              ? "Thanks — your BBE bundle is confirmed."
              : "Thanks — your BBE eBook is on the way."
          : "Congratulations. You're in.";

  const sub = isCustom
    ? "Here's how to get set up. Download the app first, then complete the short intake so we can personalise your plan."
    : isVideo
      ? "Complete the short form below so we can prepare for your consult. Downloading the app is optional, but it's the best way to stay in the activeX ecosystem."
      : isCoaching
        ? "Create your activeX account while we prepare your onboarding. We'll be in touch within 24 hours to schedule your call."
        : isShop
          ? product === "bbe-ankle"
            ? "We'll pack and ship your BBE Ankle Strap within 2 business days. Watch your inbox for tracking once it goes out."
            : product === "bbe-bundle"
              ? "We'll email your eBook shortly, and ship the ankle strap within 2 business days to the address from checkout."
              : "Check the email you used at checkout — we'll send your BBE eBook download there. If it's not in inbox, look in spam."
          : "Here's what to do next to start training with structure.";

  const formSrc =
    product === "custom-program"
      ? "https://tally.so/r/kdXree"
      : product === "custom-diet"
        ? "https://tally.so/r/MelGNA"
        : product === "video-consult"
          ? "https://tally.so/r/9qyVe5"
          : null;

  const formTitle =
    product === "custom-program"
      ? "Custom Program Intake"
      : product === "custom-diet"
        ? "Custom Diet Intake"
        : "Video Consultation";

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
            {headline}
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
            {sub}
          </p>
        </Reveal>
      </Sec>

      {product === "membership" && (
        <Sec bg={C.offWhite} className="sec-pt-40">
          <Reveal>
            <h2
              className="section-title"
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: C.navy,
                textAlign: "center",
                marginBottom: 28,
              }}
            >
              What to do next
            </h2>
            <StepList
              steps={[
                "Download the iOS app below and sign up. Alternatively, use the web version at api.activex.fit/onboarding.",
                "Create your account with the same email you subscribed with.",
                "Pick your program and start your journey.",
                "If you purchased a custom program, diet, or 1-on-1 coaching, we will be in touch within 24 hours to organise an onboarding call.",
              ]}
            />
            <div style={{ marginTop: 36 }}>
              <AppDownloadBlock
                title="Download the app"
                text="Get activeX on iOS and create your account with the email you paid with."
              />
            </div>
          </Reveal>
        </Sec>
      )}

      {isShop && (
        <Sec bg={C.offWhite} className="sec-pt-40">
          <Reveal>
            <h2
              className="section-title"
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: C.navy,
                textAlign: "center",
                marginBottom: 28,
              }}
            >
              What happens next
            </h2>
            <StepList
              steps={
                product === "bbe-ebook"
                  ? [
                      "Watch for an email from activeX with your BBE eBook download.",
                      "Save the file and start the 10-week program at your pace.",
                      "Questions? Email info@activex.fit with your order email.",
                    ]
                  : product === "bbe-ankle"
                    ? [
                        "We process and ship ankle straps within 2 business days.",
                        "You'll get a confirmation email with shipping details.",
                        "Questions about your order? Email info@activex.fit.",
                      ]
                    : [
                        "We'll email your BBE eBook to your checkout address.",
                        "Your ankle strap ships within 2 business days.",
                        "Questions? Email info@activex.fit with your order email.",
                      ]
              }
            />
            <div
              style={{
                marginTop: 36,
                textAlign: "center",
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <CTA to={PAGE_PATHS.shop}>Back to shop</CTA>
              <CTA to={PAGE_PATHS.home} variant="secondary">
                Home
              </CTA>
            </div>
          </Reveal>
        </Sec>
      )}

      {(isCustom || isCoaching) && (
        <Sec bg={C.offWhite} className="sec-pt-24">
          <Reveal>
            <AppDownloadBlock
              title="1. Download the app & create your account"
              text="Use the same email you purchased with. Your plan is delivered through activeX, so this is the most important first step."
            />
          </Reveal>
        </Sec>
      )}

      {isVideo && (
        <Sec bg={C.offWhite} className="sec-pt-24">
          <Reveal>
            <AppDownloadBlock
              optional
              title="Get the app while you're here"
              text="Not required for your consult, but recommended. Create an account with the same email so everything lives in one place when you're ready to train."
            />
          </Reveal>
        </Sec>
      )}

      {formSrc && (
        <Sec className="sec-pt-24">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <Pill>{isVideo ? "Prepare for your consult" : "Intake"}</Pill>
              <h2
                className="section-title"
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: C.navy,
                  marginTop: 14,
                  marginBottom: 10,
                }}
              >
                {isVideo
                  ? "2. Tell us what you want from the consult"
                  : "2. Complete your intake"}
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
                {isVideo
                  ? "A few questions help Ana or Hooms prepare so your session is focused and useful."
                  : "You're already in. Now help us personalise your plan. This only takes a few minutes."}
              </p>
            </div>
            <TallyEmbed
              src={formSrc}
              title={formTitle}
              variant="inline"
              height={980}
            />
          </Reveal>
        </Sec>
      )}

      {(isCustom || isCoaching || isVideo) && (
        <Sec bg={C.offWhite} className="sec-cta" style={{ textAlign: "center" }}>
          <Reveal>
            <h2
              className="section-title"
              style={{
                fontSize: 26,
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
              {isCoaching
                ? "We'll personally reach out within 24 hours to schedule your onboarding call."
                : isVideo
                  ? "After you submit the form, we'll confirm timing and details for your video consultation."
                  : "We'll review your answers and be in touch within 24 hours to discuss your plan."}
            </p>
            <CTA to={PAGE_PATHS.home} variant="secondary">
              Back to home
            </CTA>
          </Reveal>
        </Sec>
      )}

      {product === "membership" && (
        <Sec style={{ textAlign: "center" }}>
          <Reveal>
            <CTA to={PAGE_PATHS.home} variant="secondary">
              Back to home
            </CTA>
          </Reveal>
        </Sec>
      )}
    </>
  );
}
