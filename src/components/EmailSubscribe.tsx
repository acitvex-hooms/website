import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { C, FONT, MOTION, PAGE_PATHS } from "../lib/tokens";
import { subscribeToKlaviyo } from "../lib/klaviyo";
import { Pill, Reveal, Sec } from "./ui";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const result = await subscribeToKlaviyo({ email, firstName });
    if (result.ok) {
      setStatus("success");
      setMessage("You're on the list. Watch your inbox.");
      setEmail("");
      setFirstName("");
      return;
    }

    setStatus("error");
    setMessage(result.message);
  };

  return (
    <Sec
      className="email-subscribe"
      bg={C.offWhite}
      style={{ textAlign: "center", padding: "72px 24px" }}
    >
      <Reveal>
        <Pill>Stay in the loop</Pill>
        <h2
          className="section-title"
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: C.navy,
            letterSpacing: -1.5,
            marginTop: 16,
            marginBottom: 12,
          }}
        >
          Get training insights in your inbox
        </h2>
        <p
          style={{
            fontSize: 17,
            color: C.textMid,
            maxWidth: 480,
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}
        >
          New programs, coaching tips, and activeX updates. No spam, unsubscribe
          anytime.
        </p>

        {status === "success" ? (
          <p
            role="status"
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: C.navy,
              margin: 0,
            }}
          >
            {message}
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="email-subscribe-form"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            <label className="sr-only" htmlFor="subscribe-first-name">
              First name
            </label>
            <input
              id="subscribe-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={status === "loading"}
              style={{
                flex: "1 1 140px",
                minWidth: 0,
                padding: "14px 18px",
                borderRadius: 50,
                border: `1px solid ${C.border}`,
                background: C.white,
                fontSize: 16,
                fontFamily: FONT,
                color: C.text,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <label className="sr-only" htmlFor="subscribe-email">
              Email
            </label>
            <input
              id="subscribe-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              style={{
                flex: "1 1 200px",
                minWidth: 0,
                padding: "14px 18px",
                borderRadius: 50,
                border: `1px solid ${C.border}`,
                background: C.white,
                fontSize: 16,
                fontFamily: FONT,
                color: C.text,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="cta-btn"
              style={{
                flex: "0 0 auto",
                padding: "14px 28px",
                borderRadius: 50,
                border: "none",
                background: hover ? C.navy : C.purple,
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                fontFamily: FONT,
                cursor: status === "loading" ? "wait" : "pointer",
                transition: `background ${MOTION.durationUiMs}`,
                opacity: status === "loading" ? 0.75 : 1,
              }}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && message && (
          <p
            role="alert"
            style={{
              fontSize: 14,
              color: "#b42318",
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            {message}
          </p>
        )}

        {status !== "success" && (
          <p
            style={{
              fontSize: 12,
              color: C.textLight,
              marginTop: 16,
              marginBottom: 0,
              lineHeight: 1.5,
            }}
          >
            By subscribing, you agree to receive emails from activeX. See our{" "}
            <Link
              to={PAGE_PATHS.privacy}
              style={{ color: C.navy, textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
            .
          </p>
        )}
      </Reveal>
    </Sec>
  );
}
