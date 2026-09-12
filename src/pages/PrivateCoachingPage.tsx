import { TallyEmbed } from "../components/TallyEmbed";
import { Reveal, Sec } from "../components/ui";
import { trackMeta } from "../lib/metaPixel";
import {
  BENEFITS,
  PRIVATE_COACHING_ENQUIRY_FORM,
  STEPS,
} from "../lib/privateCoaching";

function pushDataLayer(event: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

function GoldCta({
  href = "#request",
  children = "Request Private Coaching",
}: {
  href?: string;
  children?: string;
}) {
  const onClick = () => {
    trackMeta("Contact", { content_name: "Private Coaching CTA" });
    pushDataLayer("private_coaching_cta");
  };

  return (
    <a href={href} className="pc-cta" onClick={onClick}>
      {children}
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="pc-art" aria-hidden={false}>
      <img
        className="pc-art-logo"
        src="/images/logo-white.png"
        alt=""
      />
      <div>
        <p className="pc-art-title">
          Private
          <br />
          Hybrid
        </p>
        <p className="pc-art-sub">Coaching</p>
        <div className="pc-art-rule" />
        <p className="pc-art-meta">
          Custom programming
          <br />
          Movement analysis
          <br />
          Private coaching
          <br />
          Digital support
        </p>
      </div>
    </div>
  );
}

export function PrivateCoachingPage() {
  return (
    <div className="pc-page">
      <Sec className="pc-sec sec-page-hero" bg="#0a0a0a">
        <div className="pc-hero">
          <Reveal>
            <p className="pc-kicker">Private Hybrid Coaching</p>
            <h1
              className="pc-title"
              style={{
                fontSize: "clamp(32px, 7vw, 56px)",
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Personalised coaching.
              <br />
              Powered by activeX.
            </h1>
            <p className="pc-lede" style={{ maxWidth: 520 }}>
              Private coaching for clients who want more than a workout. Your
              training is programmed, coached, tracked and adjusted around you —
              with direct coaching support between sessions.
            </p>
            <div className="pc-pills">
              <span>Custom programming</span>
              <span>Movement analysis</span>
              <span>Private coaching</span>
              <span>Digital support</span>
            </div>
            <GoldCta />
          </Reveal>
          <Reveal delay={0.08}>
            <HeroArtwork />
          </Reveal>
        </div>
      </Sec>

      <Sec className="pc-sec pc-sec-alt" bg="#111111">
        <Reveal>
          <p className="pc-kicker">The difference</p>
          <h2
            className="pc-title"
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              marginTop: 14,
              marginBottom: 20,
              maxWidth: 720,
            }}
          >
            This isn&apos;t a session-by-session approach.
          </h2>
          <p className="pc-lede" style={{ maxWidth: 720, marginBottom: 18 }}>
            I don&apos;t believe in copy-and-paste programs. I want to understand
            how you move, what you&apos;ve tried before, what has worked, what
            hasn&apos;t, where you struggle, and what your life can realistically
            support.
          </p>
          <p className="pc-lede" style={{ maxWidth: 720 }}>
            Your private sessions, your program and your training data all work
            together. What I see when we train informs your programming. What
            you log inside activeX helps me track what is progressing. And when
            something needs to change, we change it.
          </p>
        </Reveal>
      </Sec>

      <Sec className="pc-sec" bg="#0a0a0a">
        <Reveal>
          <p className="pc-kicker">What you receive</p>
          <h2
            className="pc-title"
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              marginTop: 14,
              marginBottom: 32,
            }}
          >
            The highest-access coaching tier.
          </h2>
        </Reveal>
        <div className="pc-benefits">
          {BENEFITS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="pc-card">
                <div className="pc-card-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="pc-callout">
            Training together doesn&apos;t mean being given the same program.
            Every client is coached as an individual, with their own goals,
            program, training history and progress inside activeX.
          </blockquote>
        </Reveal>
      </Sec>

      <Sec className="pc-sec pc-sec-alt" bg="#111111">
        <Reveal>
          <p className="pc-kicker">How it works</p>
          <h2
            className="pc-title"
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              marginTop: 14,
              marginBottom: 32,
            }}
          >
            From intake to the next training block.
          </h2>
          <ol className="pc-steps">
            {STEPS.map((step) => (
              <li key={step.n} className="pc-step">
                <span className="pc-step-n">{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="pc-note">
            Optional progress markers: strength, repetitions/load, movement
            quality, range of motion, pain-free movement, consistency, exercise
            competency, energy/performance or physique changes. Progress photos
            and body measurements are optional, not mandatory.
          </p>
        </Reveal>
      </Sec>

      <Sec className="pc-sec" bg="#0a0a0a">
        <div className="pc-about">
          <Reveal>
            <img
              src="/images/ana-private-coaching.jpg"
              alt="Ana Coppola"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="pc-kicker">About Ana</p>
            <h2
              className="pc-title"
              style={{
                fontSize: "clamp(26px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 18,
              }}
            >
              17 years of coaching experience. One individual at a time.
            </h2>
            <p className="pc-lede" style={{ marginBottom: 16 }}>
              Ana Coppola has spent 17 years coaching across private training,
              strength, body composition and movement quality, including actors,
              television personalities, founders, senior executives and
              high-net-worth private clients.
            </p>
            <p className="pc-lede">
              Her background also includes Australian Ninja Warrior, Gladiators
              Australia, the IFBB Arnold Classic and 12 years with Fitness First
              Australia. As co-founder of activeX, she combines hands-on
              coaching experience with a digital system designed to keep
              programming, training records and progress connected.
            </p>
          </Reveal>
        </div>
      </Sec>

      <Sec className="pc-sec pc-sec-alt" bg="#111111">
        <Reveal>
          <p className="pc-kicker">Private engagements</p>
          <h2
            className="pc-title"
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              marginTop: 14,
              marginBottom: 18,
              maxWidth: 720,
            }}
          >
            Private coaching is structured around the client.
          </h2>
          <p className="pc-lede" style={{ maxWidth: 720, marginBottom: 16 }}>
            Frequency, schedule and total coaching allocation are agreed
            individually according to the client&apos;s goals and requirements.
            Coaching blocks are confirmed in advance so the time is reserved and
            the training plan can be managed properly.
          </p>
          <p className="pc-lede" style={{ maxWidth: 720 }}>
            Each client maintains an individual activeX membership so their
            program, training history and progress record remain theirs
            throughout the coaching relationship and beyond.
          </p>
        </Reveal>
      </Sec>

      <Sec id="request" className="pc-sec" bg="#0a0a0a">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p className="pc-kicker">Request access</p>
            <h2
              className="pc-title"
              style={{
                fontSize: "clamp(26px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 16,
              }}
            >
              Ready for training that is actually built around you?
            </h2>
            <p className="pc-lede" style={{ maxWidth: 560, margin: "0 auto" }}>
              Private Hybrid Coaching is intentionally limited so every client
              receives the level of attention the service is built around.
            </p>
          </div>
          <TallyEmbed
            className="pc-tally"
            src={PRIVATE_COACHING_ENQUIRY_FORM}
            title="Request Private Coaching"
            variant="inline"
          />
          <p className="pc-fine">
            Already speaking with Ana? Your coaching schedule and next steps can
            be arranged directly.
          </p>
        </Reveal>
      </Sec>
    </div>
  );
}
