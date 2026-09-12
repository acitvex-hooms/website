import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Reveal, Sec } from "../components/ui";
import { trackLead } from "../lib/metaPixel";
import {
  COACHING_STYLE,
  HEALTH_SCREEN,
  INDEPENDENT_TRAINING,
  ONBOARDING_STEPS,
  SLEEP_OPTIONS,
  STRESS_OPTIONS,
  TRAIN_DAYS,
  TRAINING_TYPES,
  TRAINING_YEARS,
  WELCOME_VIDEO_URL,
} from "../lib/privateCoaching";

/**
 * Post-purchase page for the Private Hybrid Coaching Stripe Payment Link.
 * Not linked from the site. Stripe → After payment → Redirect to:
 *   https://www.activex.fit/private-coaching/welcome
 */
const APP_STORE_URL =
  "https://apps.apple.com/ae/app/activex-fitness/id6766033150";
const WEB_ONBOARDING = "https://api.activex.fit/onboarding";
const STAGE_KEY = "pcw-stage";
const INTAKE_KEY = "pcw-intake-done";
const NAME_KEY = "pcw-name";
const EMAIL_KEY = "pcw-email";

type Stage = "welcome" | "intake" | "health" | "activex";

function readSession(key: string) {
  try {
    return sessionStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function writeSession(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* ignore quota / private mode */
  }
}

function initialStage(): Stage {
  const stored = readSession(STAGE_KEY);
  if (
    stored === "welcome" ||
    stored === "intake" ||
    stored === "health" ||
    stored === "activex"
  ) {
    return stored;
  }
  return "welcome";
}

function pushDataLayer(event: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

function videoEmbedSrc(url: string) {
  const yt = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
}

function GoldButton({
  children,
  type = "button",
  onClick,
  disabled,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      className="pc-cta"
      style={{ width: "100%" }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  textarea,
  options,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  textarea?: boolean;
  options?: readonly string[];
  defaultValue?: string;
  autoComplete?: string;
}) {
  const id = `pcw-${name}`;
  return (
    <div className="pc-field">
      <label htmlFor={id}>
        {label}
        {optional ? " (optional)" : ""}
      </label>
      {options ? (
        <select
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue || ""}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
}

function YesNo({
  name,
  label,
  detailsLabel,
}: {
  name: string;
  label: string;
  detailsLabel: string;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="pc-field">
      <fieldset className="pc-yesno">
        <legend>
          {label} <span className="pc-req">Required</span>
        </legend>
        {["Yes", "No"].map((opt) => (
          <label key={opt} className="pc-choice">
            <input
              type="radio"
              name={name}
              value={opt}
              required
              checked={value === opt}
              onChange={() => setValue(opt)}
            />
            {opt}
          </label>
        ))}
      </fieldset>
      {value === "Yes" && (
        <div className="pc-field" style={{ marginTop: 12, marginBottom: 0 }}>
          <label htmlFor={`pcw-${name}Details`}>{detailsLabel}</label>
          <textarea id={`pcw-${name}Details`} name={`${name}Details`} rows={3} required />
        </div>
      )}
    </div>
  );
}

function Progress({ stage }: { stage: Stage }) {
  const idx = ["welcome", "intake", "health", "activex"].indexOf(stage);
  return (
    <ol className="pc-progress" aria-label="Onboarding progress">
      {ONBOARDING_STEPS.map((label, i) => (
        <li
          key={label}
          className={
            i < idx ? "is-done" : i === idx ? "is-current" : undefined
          }
        >
          <span>{String(i + 1).padStart(2, "0")}</span>
          {label}
        </li>
      ))}
    </ol>
  );
}

function WelcomeVideo() {
  const url = WELCOME_VIDEO_URL.trim();
  if (url) {
    const embed = videoEmbedSrc(url);
    const isFile = /\.(mp4|webm)(\?|$)/i.test(url);
    return (
      <div className="pc-video">
        {isFile ? (
          <video src={url} controls playsInline poster="/images/ana-private-coaching.jpg" />
        ) : (
          <iframe
            src={embed}
            title="Welcome to Private Hybrid Coaching"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  return (
    <div className="pc-video pc-video-poster">
      <img src="/images/ana-private-coaching.jpg" alt="Ana Coppola" />
      <p className="pc-video-caption">A short welcome from Ana will appear here</p>
    </div>
  );
}

async function submitOnboarding(type: "intake" | "health", form: HTMLFormElement) {
  const data = new FormData(form);
  if (String(data.get("company") || "").trim()) return { ok: true };
  const payload: Record<string, string | string[]> = { type };
  for (const [key, value] of data.entries()) {
    if (key === "company") continue;
    if (key === "trainingTypes") {
      const current = payload[key];
      const next = String(value);
      payload[key] = Array.isArray(current) ? [...current, next] : [next];
      continue;
    }
    payload[key] = String(value);
  }
  const res = await fetch("/api/private-coaching-onboarding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("send failed");
  return { ok: true };
}

function IntakeForm({ onDone }: { onDone: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [types, setTypes] = useState<string[]>([]);
  const [typeError, setTypeError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (types.length === 0) {
      setTypeError(true);
      return;
    }
    setStatus("sending");
    try {
      await submitOnboarding("intake", form);
      writeSession(NAME_KEY, String(new FormData(form).get("fullName") || ""));
      writeSession(EMAIL_KEY, String(new FormData(form).get("email") || ""));
      trackLead("Private coaching intake");
      pushDataLayer("private_coaching_intake");
      onDone();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="pc-form pc-form-wide" onSubmit={onSubmit}>
      <p className="pc-hp" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <h3 className="pc-form-sec">A. About you</h3>
      <Field label="Full name" name="fullName" required autoComplete="name" />
      <Field label="Date of birth" name="dob" type="date" required />
      <Field
        label="Preferred email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        label="Mobile / WhatsApp"
        name="whatsapp"
        type="tel"
        required
        autoComplete="tel"
      />
      <Field label="Occupation" name="occupation" required />

      <h3 className="pc-form-sec">B. Your goals</h3>
      <Field
        label="What is your main training goal right now?"
        name="mainGoal"
        textarea
        required
      />
      <Field
        label="Are there any other goals you would like me to know about?"
        name="otherGoals"
        textarea
        optional
      />
      <Field
        label="If we were looking back 3–6 months from now, what would make you feel that your training had been genuinely successful?"
        name="successLook"
        textarea
        required
      />

      <h3 className="pc-form-sec">C. Training history</h3>
      <Field
        label="How long have you been training consistently?"
        name="trainingYears"
        options={TRAINING_YEARS}
        required
      />
      <Field
        label="What does your training look like currently?"
        name="currentTraining"
        textarea
        required
      />
      <div className="pc-field">
        <fieldset className="pc-yesno">
          <legend>
            What types of training have you done in the past?{" "}
            <span className="pc-req">Required</span>
          </legend>
          {TRAINING_TYPES.map((opt) => (
            <label key={opt} className="pc-choice">
              <input
                type="checkbox"
                name="trainingTypes"
                value={opt}
                checked={types.includes(opt)}
                onChange={() => {
                  setTypes((prev) =>
                    prev.includes(opt)
                      ? prev.filter((item) => item !== opt)
                      : [...prev, opt],
                  );
                  setTypeError(false);
                }}
              />
              {opt}
            </label>
          ))}
        </fieldset>
        {typeError && (
          <p className="pc-field-error">Please select at least one option.</p>
        )}
      </div>
      <Field
        label="What has worked particularly well for you before?"
        name="workedWell"
        textarea
        optional
      />
      <Field
        label="What hasn't worked for you — or what have you disliked about previous programs or coaching?"
        name="hasntWorked"
        textarea
        optional
      />
      <Field
        label="Are there exercises or types of training you particularly enjoy?"
        name="enjoy"
        textarea
        optional
      />
      <Field
        label="Are there exercises you dislike, avoid or don't feel confident performing?"
        name="avoid"
        textarea
        optional
      />

      <h3 className="pc-form-sec">D. Body, movement + health context</h3>
      <YesNo
        name="painNow"
        label="Do you currently have any pain, injuries or physical limitations that may affect training?"
        detailsLabel="Please share the details"
      />
      <YesNo
        name="pastInjury"
        label="Have you had any previous injuries or surgeries that I should know about?"
        detailsLabel="Please share the details"
      />
      <YesNo
        name="medical"
        label="Do you have any diagnosed medical conditions, or take any medication, that may be relevant to exercise?"
        detailsLabel="Please share the details"
      />
      <YesNo
        name="restricted"
        label="Has a medical professional ever advised you to restrict or modify exercise?"
        detailsLabel="Please share the details"
      />

      <h3 className="pc-form-sec">E. Lifestyle + recovery</h3>
      <Field label="On average, how would you describe your sleep?" name="sleep" options={SLEEP_OPTIONS} required />
      <Field label="How would you describe your current stress level?" name="stress" options={STRESS_OPTIONS} required />
      <YesNo
        name="travel"
        label="Does your work or lifestyle involve frequent travel or unpredictable hours?"
        detailsLabel="Please share the details"
      />
      <Field
        label="How many days per week can you realistically train?"
        name="trainDays"
        options={TRAIN_DAYS}
        required
      />
      <Field
        label="Which days and times normally work best?"
        name="bestTimes"
        textarea
        required
      />
      <Field
        label="Outside our private sessions, are you willing to complete training independently when programmed?"
        name="independent"
        options={INDEPENDENT_TRAINING}
        required
      />
      <Field
        label="What usually gets in the way of your training consistency?"
        name="blockers"
        textarea
        optional
      />

      <h3 className="pc-form-sec">F. How you like to be coached</h3>
      <Field
        label="How do you prefer to be coached?"
        name="coachStyle"
        options={COACHING_STYLE}
        required
      />
      <Field
        label="What do you wish previous coaches had paid more attention to?"
        name="wishAttention"
        textarea
        optional
      />
      <Field
        label="What would make this coaching feel genuinely valuable to you?"
        name="value"
        textarea
        required
      />
      <Field
        label="Is there anything about training that makes you nervous, uncomfortable or self-conscious that you would like me to be aware of?"
        name="nervous"
        textarea
        optional
      />
      <Field
        label="Is there anything else you think I should know before we begin?"
        name="anythingElse"
        textarea
        optional
      />

      {status === "error" && (
        <p className="pc-status pc-error">
          Couldn&apos;t send just now. Email{" "}
          <a href="mailto:ana@activex.fit" style={{ color: "#c9a962" }}>
            ana@activex.fit
          </a>
          .
        </p>
      )}
      <GoldButton type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit my coaching intake"}
      </GoldButton>
    </form>
  );
}

function HealthForm({ onDone }: { onDone: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [flags, setFlags] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submitOnboarding("health", form);
      trackLead("Private coaching health consent");
      pushDataLayer("private_coaching_health");
      onDone();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="pc-form pc-form-wide" onSubmit={onSubmit}>
      <p className="pc-hp" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <Field
        label="Full name"
        name="fullName"
        required
        autoComplete="name"
        defaultValue={readSession(NAME_KEY)}
      />
      <Field
        label="Preferred email"
        name="email"
        type="email"
        required
        autoComplete="email"
        defaultValue={readSession(EMAIL_KEY)}
      />

      <h3 className="pc-form-sec">Pre-exercise health screening</h3>
      {HEALTH_SCREEN.map((q) => (
        <div className="pc-field" key={q.name}>
          <fieldset className="pc-yesno">
            <legend>
              {q.label} <span className="pc-req">Required</span>
            </legend>
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="pc-choice">
                <input
                  type="radio"
                  name={q.name}
                  value={opt}
                  required
                  checked={flags[q.name] === opt}
                  onChange={() =>
                    setFlags((prev) => ({ ...prev, [q.name]: opt }))
                  }
                />
                {opt}
              </label>
            ))}
          </fieldset>
          {flags[q.name] === "Yes" && (
            <div className="pc-field" style={{ marginTop: 12, marginBottom: 0 }}>
              <label htmlFor={`pcw-${q.name}Details`}>Please share the details</label>
              <textarea
                id={`pcw-${q.name}Details`}
                name={`${q.name}Details`}
                rows={3}
                required
              />
            </div>
          )}
        </div>
      ))}

      <h3 className="pc-form-sec">Emergency contact</h3>
      <Field label="Emergency contact name" name="emergencyName" required />
      <Field label="Emergency contact phone" name="emergencyPhone" type="tel" required />
      <Field label="Relationship" name="emergencyRelation" required />

      <h3 className="pc-form-sec">Medical clearance</h3>
      <YesNo
        name="needsClearance"
        label="Has a medical professional advised that you need clearance before starting or changing an exercise programme?"
        detailsLabel="Please share what was advised"
      />

      <h3 className="pc-form-sec">Consent + terms</h3>
      <label className="pc-check">
        <input type="checkbox" name="infoAccurate" value="Yes" required />
        I confirm the information I have given is accurate to the best of my knowledge.
      </label>
      <label className="pc-check">
        <input type="checkbox" name="exerciseConsent" value="Yes" required />
        I understand that exercise carries inherent risk and I consent to take part in Private Hybrid Coaching.
      </label>
      <label className="pc-check">
        <input type="checkbox" name="seekAdvice" value="Yes" required />
        I understand I should seek medical advice if I have any concern about my ability to exercise, and that this screening does not replace medical care.
      </label>
      <label className="pc-check">
        <input type="checkbox" name="privacyConsent" value="Yes" required />
        I agree that activeX may use my intake, training and health-context information to coach me, programme my training, and keep my individual record.
      </label>
      <label className="pc-check">
        <input type="checkbox" name="coachingTerms" value="Yes" required />
        I understand coaching blocks are reserved in advance, my activeX profile and programme are individual to me, and schedule details are agreed directly with Ana.
      </label>
      <Field
        label="Full name (signature)"
        name="signatureName"
        required
      />

      {status === "error" && (
        <p className="pc-status pc-error">
          Couldn&apos;t send just now. Email{" "}
          <a href="mailto:ana@activex.fit" style={{ color: "#c9a962" }}>
            ana@activex.fit
          </a>
          .
        </p>
      )}
      <GoldButton type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit health + consent"}
      </GoldButton>
    </form>
  );
}

export function PrivateCoachingWelcomePage() {
  const [stage, setStage] = useState<Stage>(initialStage);
  const [intakeDone, setIntakeDone] = useState(
    () => readSession(INTAKE_KEY) === "1",
  );

  useEffect(() => {
    writeSession(STAGE_KEY, stage);
    writeSession(INTAKE_KEY, intakeDone ? "1" : "0");
    window.scrollTo(0, 0);
  }, [stage, intakeDone]);

  return (
    <div className="pc-page">
      <Sec className="pc-sec sec-page-hero" bg="#0a0a0a">
        <Reveal>
          <Progress stage={stage} />
        </Reveal>

        {stage === "welcome" && (
          <>
            <Reveal>
              <div className="pc-welcome-col">
              <p className="pc-kicker">Welcome to Private Hybrid Coaching</p>
              <h1
                className="pc-title"
                style={{
                  fontSize: "clamp(30px, 6vw, 48px)",
                  marginTop: 16,
                  marginBottom: 16,
                  maxWidth: 760,
                }}
              >
                Your coaching starts before the first session.
              </h1>
              <p className="pc-lede" style={{ maxWidth: 680, marginBottom: 28 }}>
                Before we train, I want to understand your goals, your training
                history, what your body is telling you, and what your life can
                realistically support. The information you give me here helps me
                arrive at our first session already knowing what matters to you.
              </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <WelcomeVideo />
            </Reveal>
            <Reveal>
              <div className="pc-welcome-col">
              <ol className="pc-onboard-steps">
                <li>Watch the welcome video</li>
                <li>Complete your coaching intake</li>
                <li>Complete health screening + consent</li>
                <li>Activate your activeX profile</li>
              </ol>
              <h2 className="pc-title" style={{ fontSize: 24, marginBottom: 12 }}>
                Before you begin
              </h2>
              <p className="pc-lede" style={{ maxWidth: 680, marginBottom: 14 }}>
                Please complete this yourself, even if you are training with a
                partner or family member. Your goals, history, program and
                progress inside activeX are individual to you.
              </p>
              <p className="pc-lede" style={{ maxWidth: 680, marginBottom: 28 }}>
                There are no perfect answers. The more useful context you give
                me, the better I can coach you from day one.
              </p>
              <GoldButton onClick={() => setStage("intake")}>
                Start my coaching intake
              </GoldButton>
              </div>
            </Reveal>
          </>
        )}

        {stage === "intake" && !intakeDone && (
          <Reveal>
            <p className="pc-kicker">Step 2</p>
            <h1
              className="pc-title"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 12,
              }}
            >
              Private Hybrid Coaching — Client Onboarding
            </h1>
            <p className="pc-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
              About 7–10 minutes. One submission per person.
            </p>
            <IntakeForm onDone={() => setIntakeDone(true)} />
          </Reveal>
        )}

        {stage === "intake" && intakeDone && (
          <Reveal>
            <div className="pc-welcome-col">
            <p className="pc-kicker">Intake received</p>
            <h1
              className="pc-title"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 16,
              }}
            >
              Thank you — I&apos;ve got it.
            </h1>
            <p className="pc-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
              I&apos;ll review your coaching intake before we train so I can
              arrive with a clear picture of your goals, history and anything I
              need to consider. Next, please complete your pre-exercise health
              screening and coaching consent. After that, you&apos;ll activate
              your individual activeX profile so your program and training
              history are ready for us to build from.
            </p>
            <GoldButton onClick={() => setStage("health")}>
              Continue to health + consent
            </GoldButton>
            </div>
          </Reveal>
        )}

        {stage === "health" && (
          <Reveal>
            <p className="pc-kicker">Step 3</p>
            <h1
              className="pc-title"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 12,
              }}
            >
              Health screening + consent
            </h1>
            <p className="pc-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
              This is separate from your coaching intake. It helps us screen
              safely and confirm how your information is used.
            </p>
            <HealthForm onDone={() => setStage("activex")} />
          </Reveal>
        )}

        {stage === "activex" && (
          <Reveal>
            <p className="pc-kicker">Step 4</p>
            <h1
              className="pc-title"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                marginTop: 14,
                marginBottom: 16,
              }}
            >
              Your training lives here.
            </h1>
            <p className="pc-lede" style={{ maxWidth: 640, marginBottom: 28 }}>
              Your activeX profile is where your individual program, training
              history and progress are kept. If you are training as a couple or
              family, each person still has their own profile and their own
              program.
            </p>
            <div className="pc-setup">
              <p className="pc-lede" style={{ marginBottom: 20 }}>
                Download the iOS app, or sign up on the web. Use the same email
                you used for this onboarding.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="pc-store"
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                />
              </a>
              <p className="pc-fine" style={{ marginTop: 18 }}>
                Or activate on the web at{" "}
                <a href={WEB_ONBOARDING}>{WEB_ONBOARDING.replace("https://", "")}</a>
              </p>
              <div style={{ marginTop: 28 }}>
                <a href={WEB_ONBOARDING} className="pc-cta" style={{ width: "100%" }}>
                  Activate my activeX profile
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </Sec>
    </div>
  );
}
