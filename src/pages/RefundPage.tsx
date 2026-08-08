import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { C, PAGE_PATHS } from "../lib/tokens";
import { Reveal, Sec } from "../components/ui";

const linkStyle = { color: C.purple };

const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: "Overview",
    body: (
      <>
        <p>
          This Refund Policy applies to purchases made through activex.fit and
          related Stripe checkout links, including memberships, coaching, custom
          programs, custom diet plans, video consultations, and shop products
          (BBE eBook, BBE Ankle Strap, and bundles).
        </p>
        <p>
          Digital products and physical goods have different rules below. For
          related terms, see our{" "}
          <Link to={PAGE_PATHS.terms} style={linkStyle}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to={PAGE_PATHS.privacy} style={linkStyle}>
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "30-day refund window",
    body: (
      <>
        <p>
          We offer a 30-day refund window for eligible purchases, which means
          you have 30 days from the date of purchase to request a refund.
        </p>
        <p>
          To request a refund, contact us at{" "}
          <a href="mailto:info@activex.fit" style={linkStyle}>
            info@activex.fit
          </a>{" "}
          with your full name, the email used at checkout, and proof of
          purchase. Please do not submit a refund request through a third party
          without contacting us first.
        </p>
      </>
    ),
  },
  {
    title: "Eligibility",
    body: (
      <>
        <p>Refund eligibility depends on the product:</p>
        <ul>
          <li>
            <strong>Membership:</strong> Eligible within 30 days of purchase if
            you are unsatisfied, subject to review of account usage and any
            promotional terms.
          </li>
          <li>
            <strong>Custom program or custom diet:</strong> Eligible within 30
            days if substantial custom work has not yet been delivered. Once
            your custom plan has been prepared and delivered, refunds are
            generally not available.
          </li>
          <li>
            <strong>Video consult:</strong> Eligible if cancelled more than 24
            hours before the scheduled session. Missed sessions or cancellations
            within 24 hours are non-refundable.
          </li>
          <li>
            <strong>1-on-1 coaching:</strong> Coaching requires a minimum
            commitment. Unused future months may be considered for partial
            refund at our discretion. Completed coaching sessions and time
            already delivered are non-refundable.
          </li>
          <li>
            <strong>BBE eBook (digital):</strong> Eligible within 30 days if you
            have not downloaded or opened the file. Once delivered and accessed,
            digital downloads are generally non-refundable.
          </li>
          <li>
            <strong>BBE Ankle Strap (physical):</strong> Eligible within 30 days
            if unused and in original condition. Return shipping is the buyer’s
            responsibility unless the item arrived damaged or incorrect. Opened
            or used straps may not qualify.
          </li>
          <li>
            <strong>eBook + Ankle Strap bundle:</strong> Each component follows
            its own rule above. Partial refunds may apply if only one part is
            eligible.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Non-refundable items",
    body: (
      <>
        <p>The following are generally non-refundable:</p>
        <ul>
          <li>Custom programs or diets that have already been delivered</li>
          <li>Completed coaching sessions or coaching time already provided</li>
          <li>
            Video consults that were attended, missed, or cancelled within 24
            hours of the scheduled time
          </li>
          <li>Sale, promotional, or gift purchases where stated as final</li>
          <li>
            Digital eBooks that have already been downloaded or opened
          </li>
          <li>
            Physical ankle straps that are used, damaged by the buyer, or
            returned outside the 30-day window
          </li>
        </ul>
        <p>
          If you have questions about a specific purchase, contact{" "}
          <a href="mailto:info@activex.fit" style={linkStyle}>
            info@activex.fit
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Access and delivery issues",
    body: (
      <p>
        If you experience a problem receiving digital access, content, or a
        scheduled session (for example, a failed consult link, missing program
        delivery, or an account access issue), contact us immediately at{" "}
        <a href="mailto:info@activex.fit" style={linkStyle}>
          info@activex.fit
        </a>{" "}
        so we can investigate and make it right. Where appropriate, we may
        provide a redelivery, reschedule, account fix, or refund.
      </p>
    ),
  },
  {
    title: "European Union cooling-off period",
    body: (
      <p>
        If you are a consumer in the European Union, you may have a legal right
        to withdraw from a distance purchase of digital services within 14 days.
        If you expressly request that digital service delivery begin during the
        cooling-off period, you may lose that right once performance has begun,
        to the extent permitted by applicable law. Contact us to exercise any
        applicable withdrawal rights.
      </p>
    ),
  },
  {
    title: "How refunds are processed",
    body: (
      <>
        <p>
          Once we review your request, we will notify you whether the refund was
          approved. If approved, you will be refunded on your original payment
          method within 10 business days. Your bank or card issuer may take
          additional time to post the refund.
        </p>
        <p>
          If more than 15 business days have passed since we approved your
          refund and you have not received it, contact us at{" "}
          <a href="mailto:info@activex.fit" style={linkStyle}>
            info@activex.fit
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For refund questions:{" "}
        <a href="mailto:info@activex.fit" style={linkStyle}>
          info@activex.fit
        </a>
      </p>
    ),
  },
];

export function RefundPage() {
  return (
    <Sec style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Reveal>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -1,
              marginBottom: 10,
            }}
          >
            Refund Policy
          </h1>
          <p
            style={{
              fontSize: 14,
              color: C.textLight,
              marginBottom: 40,
            }}
          >
            Last updated: July 30, 2026
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h2>
                <div
                  style={{
                    fontSize: 15,
                    color: C.textMid,
                    lineHeight: 1.75,
                  }}
                  className="legal-prose"
                >
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Reveal>
    </Sec>
  );
}
