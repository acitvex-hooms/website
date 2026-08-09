import { useState, type FormEvent } from "react";
import { C, FONT } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Sec className="sec-page-hero">
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Pill>Get in touch</Pill>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Contact activeX
          </h1>
          <p
            style={{
              fontSize: 17,
              color: C.textMid,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Questions about membership, coaching, or partnerships? We&apos;d love
            to hear from you.
          </p>
        </div>
      </Reveal>
      <div
        className="contact-split"
        style={{
          display: "flex",
          gap: 40,
          maxWidth: 800,
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <Reveal style={{ flex: 1, minWidth: 0 }}>
          <form
            className="contact-form"
            onSubmit={onSubmit}
            style={{
              background: C.offWhite,
              borderRadius: 16,
              padding: 24,
            }}
          >
            {["Name", "Email", "Subject"].map((f) => (
              <div key={f} style={{ marginBottom: 16 }}>
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.navy,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {f}
                </label>
                <input
                  required
                  name={f.toLowerCase()}
                  type={f === "Email" ? "email" : "text"}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    fontSize: 16,
                    fontFamily: FONT,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder={f}
                />
              </div>
            ))}
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.navy,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  fontSize: 16,
                  fontFamily: FONT,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
                placeholder="Your message..."
              />
            </div>
            {sent ? (
              <p
                style={{
                  color: C.purple,
                  fontWeight: 600,
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Thanks. We&apos;ll get back to you soon.
              </p>
            ) : (
              <CTA type="submit" style={{ width: "100%" }}>
                Send Message
              </CTA>
            )}
          </form>
        </Reveal>
        <Reveal delay={0.15} style={{ flex: 0.7, minWidth: 0 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 20,
            }}
          >
            Other ways to reach us
          </h3>
          {[
            {
              label: "WhatsApp",
              value: "+971 55 248 9789",
              href: "https://wa.me/971552489789",
            },
            {
              label: "Email",
              value: "info@activex.fit",
              href: "mailto:info@activex.fit",
            },
            {
              label: "Location",
              value: "Dubai, UAE",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 20,
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.textLight,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    style={{
                      fontSize: 15,
                      color: C.navy,
                      marginTop: 2,
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {c.value}
                  </a>
                ) : (
                  <div
                    style={{ fontSize: 15, color: C.navy, marginTop: 2 }}
                  >
                    {c.value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Sec>
  );
}
