import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CTA, Reveal, Sec } from "../components/ui";
import { getChallenge, type ChallengeConfig } from "../lib/challenges";

function JoinCta({
  challenge,
  children,
}: {
  challenge: ChallengeConfig;
  children: ReactNode;
}) {
  return (
    <CTA
      href={challenge.ctaUrl}
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      {children}
    </CTA>
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
            <div className="ch-pills">
              <span>{challenge.startsLabel}</span>
              <span>Only {challenge.places} places</span>
              <span>{challenge.prize} prize</span>
            </div>
            <JoinCta challenge={challenge}>{challenge.cta}</JoinCta>
          </Reveal>
          <Reveal delay={0.06}>
            <figure className="ch-figure ch-hero-photo">
              <div className="ch-hero-photo-frame">
                <img
                  src={challenge.heroImage.src}
                  alt={challenge.heroImage.alt}
                />
              </div>
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
          <p className="ch-kicker">Built from your answers</p>
          <h2 className="ch-title ch-title-md">{challenge.customTitle}</h2>
          <p className="ch-lede" style={{ maxWidth: 680, marginBottom: 28 }}>
            {challenge.customLede}
          </p>
          <ul className="ch-custom">
            {challenge.customPoints.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Sec>

      <Sec className="ch-sec ch-sec-alt" bg="#0c0814">
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

      <Sec className="ch-sec" bg="#07050c">
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
              <div className="ch-stage-frame">
                <img
                  src={challenge.portraitImage.src}
                  alt={challenge.portraitImage.alt}
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </Sec>

      <Sec className="ch-sec ch-sec-alt" bg="#0c0814">
        <Reveal>
          <p className="ch-kicker">The prize</p>
          <h2 className="ch-title ch-title-md">
            {challenge.prize} for the biggest transformation.
          </h2>
          <p className="ch-lede" style={{ maxWidth: 680 }}>
            {challenge.prizeDetail} This is a short, measured block. Every
            session logged, every change coming from your data, so the result
            at week 8 is visible.
          </p>
        </Reveal>
      </Sec>

      <Sec className="ch-sec" bg="#07050c">
        <Reveal className="ch-join">
          <p className="ch-kicker">Join the challenge</p>
          <h2 className="ch-title ch-title-md">Book a call with Hooms.</h2>
          <p className="ch-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
            Only {challenge.places} places. {challenge.startsLabel}. We will
            go through fit, your week, and next steps on the call.
          </p>
          <JoinCta challenge={challenge}>{challenge.cta}</JoinCta>
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
