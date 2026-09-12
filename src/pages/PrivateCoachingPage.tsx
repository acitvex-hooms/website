import { useState, type FormEvent } from "react";
import { Reveal, Sec } from "../components/ui";
import { trackLead, trackMeta } from "../lib/metaPixel";
import {
  BENEFITS,
  FREQUENCY_OPTIONS,
  STEPS,
  TIMEFRAME_OPTIONS,
  WHO_OPTIONS,
} from "../lib/privateCoaching";

function pushDataLayer(event: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

function GoldCta({
  href = "#request",
  children = "Request Private Coaching",
  type,
}: {
  href?: string;
  children?: string;
  type?: "submit";
}) {
  const onClick = () => {
    trackMeta("Contact", { content_name: "Private Coaching CTA" });
    pushDataLayer("private_coaching_cta");
  };

  if (type === "submit") {
    return (
      <button
        type="submit"
        className="pc-cta"
        style={{ width: "100%" }}
        disabled={children === "Sending…"}
      >
        {children}
      </button>
    );
  }

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

function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company") || "").trim()) {
      setStatus("sent");
      return;
    }

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      whatsapp: String(data.get("whatsapp") || "").trim(),
      whoFor: String(data.get("whoFor") || "").trim(),
      goal: String(data.get("goal") || "").trim(),
      frequency: String(data.get("frequency") || "").trim(),
      timeframe: String(data.get("timeframe") || "").trim(),
      notes: String(data.get("notes") || "").trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/private-coaching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      trackLead("Private coaching enquiry");
      pushDataLayer("private_coaching_lead");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="pc-form" onSubmit={onSubmit}>
      <p className="pc-hp" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="pc-field">
        <label htmlFor="pc-name">Name</label>
        <input id="pc-name" name="name" required autoComplete="name" />
      </div>
      <div className="pc-field">
        <label htmlFor="pc-email">Email</label>
        <input
          id="pc-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="pc-field">
        <label htmlFor="pc-whatsapp">WhatsApp</label>
        <input
          id="pc-whatsapp"
          name="whatsapp"
          required
          autoComplete="tel"
          inputMode="tel"
        />
      </div>
      <div className="pc-field">
        <label htmlFor="pc-who">Who coaching is for</label>
        <select id="pc-who" name="whoFor" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {WHO_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="pc-field">
        <label htmlFor="pc-goal">Main goal</label>
        <input id="pc-goal" name="goal" required />
      </div>
      <div className="pc-field">
        <label htmlFor="pc-frequency">Preferred training frequency</label>
        <select id="pc-frequency" name="frequency" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {FREQUENCY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="pc-field">
        <label htmlFor="pc-timeframe">Preferred start timeframe</label>
        <select id="pc-timeframe" name="timeframe" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {TIMEFRAME_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="pc-field">
        <label htmlFor="pc-notes">Short notes</label>
        <textarea id="pc-notes" name="notes" rows={4} />
      </div>
      {status === "sent" && (
        <p className="pc-status">
          Received. Ana will follow up directly.
        </p>
      )}
      {status === "error" && (
        <p className="pc-status pc-error">
          Couldn&apos;t send just now. Email{" "}
          <a href="mailto:info@activex.fit" style={{ color: "#c9a962" }}>
            info@activex.fit
          </a>
          .
        </p>
      )}
      {status !== "sent" && (
        <GoldCta type="submit">
          {status === "sending" ? "Sending…" : "Request Private Coaching"}
        </GoldCta>
      )}
    </form>
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
              src="/images/ana-gladiators.jpg"
              alt="Ana Coppola on Gladiators Australia"
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
          <EnquiryForm />
          <p className="pc-fine">
            Already speaking with Ana? Your coaching schedule and next steps can
            be arranged directly.
          </p>
        </Reveal>
      </Sec>
    </div>
  );
}
