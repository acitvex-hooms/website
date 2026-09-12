import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CTA, Reveal, Sec } from "../components/ui";
import { getChallenge, type ChallengeConfig } from "../lib/challenges";
import { C, RADIUS } from "../lib/tokens";

function BuyCta({
  challenge,
  children,
}: {
  challenge: ChallengeConfig;
  children: ReactNode;
}) {
  return (
    <CTA
      href={challenge.stripeUrl}
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      {children}
    </CTA>
  );
}

function PricingCard({ challenge }: { challenge: ChallengeConfig }) {
  return (
    <div className="pricing-cards ch-pricing">
      <div
        className="pricing-card is-featured"
        style={{
          background: C.white,
          borderRadius: RADIUS.xl,
          border: `2px solid ${C.purple}`,
          position: "relative",
        }}
      >
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
          Only {challenge.places} places
        </div>
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
          {challenge.duration}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            className="pricing-price"
            style={{ fontWeight: 800, color: C.navy }}
          >
            {challenge.price}
          </span>
          <span style={{ fontSize: 15, color: C.textLight }}>
            / {challenge.pricePer}
          </span>
        </div>
        <div
          style={{
            fontSize: 13,
            color: C.purple,
            fontWeight: 500,
            marginTop: 4,
          }}
        >
          {challenge.startsLabel} · {challenge.prize} prize
        </div>
        <div style={{ height: 1, background: C.border, margin: "20px 0" }} />
        {challenge.included.map((item) => (
          <div
            key={item}
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
              {item}
            </span>
          </div>
        ))}
        <div style={{ marginTop: 20 }}>
          <BuyCta challenge={challenge}>{challenge.cta}</BuyCta>
        </div>
      </div>
    </div>
  );
}

function ChallengeView({ challenge }: { challenge: ChallengeConfig }) {
  return (
    <div className="ch-page">
      <Sec className="ch-sec sec-page-hero" bg="#07050c">
        <div className="ch-hero">
          <Reveal>
            <p className="ch-kicker">{challenge.kicker}</p>
            <h1 className="ch-title">{challenge.name}</h1>
            <p className="ch-duration">{challenge.duration}</p>
            <p className="ch-lede">{challenge.audience}</p>
            <p className="ch-price-hero">
              {challenge.price}
              <span> / {challenge.pricePer}</span>
            </p>
            <div className="ch-pills">
              <span>{challenge.startsLabel}</span>
              <span>Only {challenge.places} places</span>
              <span>{challenge.prize} prize</span>
            </div>
            <BuyCta challenge={challenge}>
              {challenge.cta} · {challenge.price}
            </BuyCta>
          </Reveal>
          <Reveal delay={0.06}>
            <figure className="ch-figure">
              <img
                src={challenge.heroImage.src}
                alt={challenge.heroImage.alt}
              />
              {challenge.photoCredit && (
                <figcaption>Photo: {challenge.photoCredit}</figcaption>
              )}
            </figure>
          </Reveal>
        </div>
      </Sec>

      <Sec className="ch-sec ch-sec-alt" bg="#0c0814">
        <Reveal>
          <p className="ch-kicker">{challenge.duration}</p>
          <h2 className="ch-title ch-title-md">{challenge.headline}</h2>
          <p className="ch-lede" style={{ maxWidth: 680 }}>
            {challenge.lede}
          </p>
        </Reveal>
      </Sec>

      <Sec className="ch-sec" bg="#07050c">
        <Reveal>
          <p className="ch-kicker">The real problem</p>
          <h2 className="ch-title ch-title-md">{challenge.problemTitle}</h2>
          <p className="ch-lede" style={{ maxWidth: 680, marginBottom: 32 }}>
            {challenge.problemBody}
          </p>
          <ol className="ch-cycle">
            {challenge.problemCycle.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="ch-close">{challenge.problemClose}</p>
        </Reveal>
      </Sec>

      <Sec className="ch-sec ch-sec-alt" bg="#0c0814">
        <div className="ch-split">
          <Reveal>
            <p className="ch-kicker">{challenge.builtKicker}</p>
            <h2 className="ch-title ch-title-md">{challenge.builtTitle}</h2>
            <p className="ch-lede">{challenge.builtLede}</p>
            <ul className="ch-features">
              {challenge.features.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="ch-close">{challenge.builtClose}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <figure className="ch-figure">
              <img
                src={challenge.portraitImage.src}
                alt={challenge.portraitImage.alt}
              />
            </figure>
          </Reveal>
        </div>
      </Sec>

      <Sec className="ch-sec" bg="#07050c">
        <Reveal>
          <p className="ch-kicker">The prize</p>
          <h2 className="ch-title ch-title-md">
            {challenge.prize} for the biggest transformation.
          </h2>
          <p className="ch-lede" style={{ maxWidth: 680 }}>
            {challenge.prizeDetail} This is a short, measured block — every
            session logged, every change coming from your data — so the result
            at week 8 is visible.
          </p>
        </Reveal>
      </Sec>

      <Sec id="pricing" className="ch-sec ch-sec-alt" bg="#0c0814">
        <Reveal className="ch-join">
          <p className="ch-kicker">Join the challenge</p>
          <h2 className="ch-title ch-title-md">
            {challenge.price} for {challenge.pricePer}.
          </h2>
          <p className="ch-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
            Only {challenge.places} places. {challenge.startsLabel}. After
            payment you&apos;ll land on onboarding to download the app and
            complete your intake.
          </p>
          <PricingCard challenge={challenge} />
        </Reveal>
      </Sec>
    </div>
  );
}

export function ChallengeLandingPage({ slug: slugProp }: { slug?: string }) {
  const { slug: paramSlug } = useParams();
  const challenge = getChallenge(slugProp || paramSlug);
  if (!challenge) return <Navigate to="/" replace />;
  return <ChallengeView challenge={challenge} />;
}
