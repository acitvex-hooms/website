import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { C, PAGE_PATHS } from "../lib/tokens";
import { Reveal, Sec } from "../components/ui";

const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: "1. Who we are",
    body: (
      <p>
        activeX is operated by activeX LLC FZ (&quot;activeX&quot;, &quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;). Our website is activex.fit. You can
        contact us at{" "}
        <a href="mailto:info@activex.fit" style={{ color: C.purple }}>
          info@activex.fit
        </a>
        .
      </p>
    ),
  },
  {
    title: "2. What information we collect",
    body: (
      <>
        <p style={{ fontWeight: 600, color: C.navy, marginBottom: 8 }}>
          Information you provide directly:
        </p>
        <ul>
          <li>Name and email address when you create an account</li>
          <li>
            Profile information including fitness goals, age, weight, and height
          </li>
          <li>
            Workout logs including exercises, sets, reps, and weights
          </li>
          <li>Nutrition data including food entries and macro targets</li>
          <li>
            Body measurements and progress photos if you choose to upload them
          </li>
          <li>
            Payment information processed by Stripe — we do not store card
            details directly
          </li>
          <li>Communications when you contact our support team</li>
        </ul>
        <p
          style={{
            fontWeight: 600,
            color: C.navy,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Information collected automatically:
        </p>
        <ul>
          <li>
            Device information including device type, operating system, and app
            version
          </li>
          <li>
            Usage data including features used, screens viewed, and session
            duration
          </li>
          <li>
            Step count, heart rate, and other health metrics if you enable Apple
            Health integration
          </li>
          <li>IP address and general location (country/region level)</li>
        </ul>
        <p
          style={{
            fontWeight: 600,
            color: C.navy,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Information from third parties:
        </p>
        <ul>
          <li>Apple Health data if you grant permission</li>
          <li>
            Spotify account information if you connect your Spotify account
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>
            Deliver the fitness programs, workout tracking, and nutrition
            features you use
          </li>
          <li>Track your progress and provide personalised insights</li>
          <li>Process payments for memberships and programs</li>
          <li>
            Send you notifications about your workouts and program schedule if
            you enable them
          </li>
          <li>Respond to your support requests</li>
          <li>Improve the app based on how it is used</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Health and fitness data",
    body: (
      <p>
        We treat your health and fitness data with particular care. This
        includes workout history, body measurements, nutrition logs, and any
        data synced from Apple Health. We do not sell this data. We do not share
        it with third parties except as described in this policy. You can delete
        your health data at any time by deleting your account.
      </p>
    ),
  },
  {
    title: "5. Who we share your information with",
    body: (
      <>
        <p>
          We share data only with the following categories of third parties:
        </p>
        <ul>
          <li>
            Stripe — payment processing. Stripe&apos;s privacy policy applies to
            payment data.
          </li>
          <li>Railway — cloud hosting for our backend infrastructure</li>
          <li>FatSecret — food and nutrition database lookups</li>
          <li>
            Apple — if you use Sign in with Apple or Apple Health integration
          </li>
          <li>
            Spotify — if you connect your Spotify account to access playlists
          </li>
          <li>
            Law enforcement — if required by law or to protect our legal rights
          </li>
        </ul>
        <p>We do not sell your personal data to any third party.</p>
      </>
    ),
  },
  {
    title: "6. Social features",
    body: (
      <p>
        If you use the social features of activeX, your username, profile photo,
        and workout posts you choose to share will be visible to other users.
        You control what you share. Private workout logs are never visible to
        other users.
      </p>
    ),
  },
  {
    title: "7. Data retention",
    body: (
      <p>
        We retain your account data for as long as your account is active. If
        you delete your account, we will delete your personal data within 30
        days, except where we are required to retain it for legal or financial
        compliance purposes (such as payment records which may be retained for
        up to 7 years).
      </p>
    ),
  },
  {
    title: "8. Your rights",
    body: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your account and associated data</li>
          <li>Export your data in a portable format</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hooms@activex.fit" style={{ color: C.purple }}>
            hooms@activex.fit
          </a>
          . You can also delete your account directly from within the app under
          Settings → Delete Account.
        </p>
      </>
    ),
  },
  {
    title: "9. Children",
    body: (
      <p>
        activeX is not intended for users under the age of 16. We do not
        knowingly collect personal data from children under 16. If you believe a
        child has provided us with personal data, please contact us and we will
        delete it.
      </p>
    ),
  },
  {
    title: "10. Security",
    body: (
      <p>
        We use industry standard security measures including encrypted data
        transmission (HTTPS), secure password storage, and access controls. No
        method of transmission over the internet is completely secure, however
        we take reasonable steps to protect your data.
      </p>
    ),
  },
  {
    title: "11. Changes to this policy",
    body: (
      <p>
        We may update this privacy policy from time to time. We will notify you
        of significant changes via email or in-app notification. Continued use
        of the app after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: "12. Contact",
    body: (
      <p>
        For any privacy related questions:{" "}
        <a href="mailto:info@activex.fit" style={{ color: C.purple }}>
          info@activex.fit
        </a>
      </p>
    ),
  },
];

export function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: 14,
              color: C.textLight,
              marginBottom: 40,
            }}
          >
            Last updated: July 12, 2026
          </p>
          <p
            style={{
              fontSize: 15,
              color: C.textMid,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Related:{" "}
            <Link to={PAGE_PATHS.terms} style={{ color: C.purple }}>
              Terms of Service
            </Link>{" "}
            ·{" "}
            <Link to={PAGE_PATHS.refund} style={{ color: C.purple }}>
              Refund Policy
            </Link>
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
