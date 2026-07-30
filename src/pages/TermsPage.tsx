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
          Welcome to activeX. The terms &quot;we&quot;, &quot;us&quot; and
          &quot;our&quot; refer to activeX LLC FZ (&quot;activeX&quot;). activeX
          operates this website and related digital products and services,
          including memberships, coaching, custom programs, custom diet plans,
          video consultations, and the activeX app (the &quot;Services&quot;).
        </p>
        <p>
          These Terms of Service, together with any policies referenced herein
          (these &quot;Terms&quot;), describe your rights and responsibilities
          when you use the Services. Please read them carefully, as they include
          important information about your legal rights, warranty disclaimers,
          and limitations of liability.
        </p>
        <p>
          By visiting, interacting with, or using our Services, you agree to be
          bound by these Terms and our{" "}
          <Link to={PAGE_PATHS.privacy} style={linkStyle}>
            Privacy Policy
          </Link>
          . If you do not agree, you should not use or access our Services.
        </p>
      </>
    ),
  },
  {
    title: "1. Access and account",
    body: (
      <>
        <p>
          By agreeing to these Terms, you represent that you are at least the
          age of majority in your state or province of residence, and you have
          given us your consent to allow any of your minor dependents to use the
          Services on devices you own, purchase, or manage.
        </p>
        <p>
          To use the Services, you may be asked to provide information such as
          your email address, billing, and payment details. You represent and
          warrant that all information you provide is correct, current, and
          complete, and that you have all rights necessary to provide it.
        </p>
        <p>
          You are solely responsible for maintaining the security of your
          account credentials and for all of your account activity. You may not
          transfer, sell, assign, or license your account to any other person.
        </p>
      </>
    ),
  },
  {
    title: "2. Our products and services",
    body: (
      <>
        <p>
          We make every effort to describe our products and services accurately
          on this website and in the app. Appearance of images, videos, and
          content may differ depending on your device and settings.
        </p>
        <p>
          We do not warrant that any product or service will meet your
          expectations in every respect. All descriptions are subject to change
          at any time without notice. We reserve the right to discontinue any
          product or service at any time and may limit availability by person,
          region, or jurisdiction on a case-by-case basis.
        </p>
      </>
    ),
  },
  {
    title: "3. Orders and purchases",
    body: (
      <>
        <p>
          When you place an order or complete a purchase (including memberships,
          coaching, custom programs, custom diets, or video consultations), you
          are making an offer to purchase. activeX reserves the right to accept
          or decline your order for any reason. Your order is not accepted until
          payment is successfully processed and we confirm acceptance.
        </p>
        <p>
          Please review your order carefully before submitting. We may be unable
          to accommodate cancellation requests after an order is accepted. If we
          do not accept, change, or cancel an order, we will attempt to notify
          you using the contact details you provided.
        </p>
        <p>
          Purchases are subject to our{" "}
          <Link to={PAGE_PATHS.refund} style={linkStyle}>
            Refund Policy
          </Link>
          . You represent that purchases are for your own personal use and not
          for commercial resale.
        </p>
      </>
    ),
  },
  {
    title: "4. Prices and billing",
    body: (
      <>
        <p>
          Prices, discounts, and promotions are subject to change without
          notice. The price charged will be the price in effect at the time the
          order is placed and set out in your confirmation. Unless expressly
          stated, posted prices do not include applicable taxes.
        </p>
        <p>
          Payments are processed by Stripe. You agree to provide current,
          complete, and accurate purchase and payment information, and to
          promptly update your details so we can complete transactions and
          contact you as needed.
        </p>
        <p>
          You represent and warrant that (i) the payment information you provide
          is true, correct, and complete, (ii) you are authorized to use that
          payment method, (iii) charges will be honored by your payment
          provider, and (iv) you will pay charges incurred at the posted prices,
          including applicable taxes.
        </p>
      </>
    ),
  },
  {
    title: "5. Digital delivery",
    body: (
      <p>
        Our products and services are delivered digitally through the activeX
        website, app, email, or scheduled video sessions. Access or delivery
        timelines may vary. We are not responsible for delays caused by events
        outside our reasonable control, including issues with your device,
        internet connection, or third-party platforms.
      </p>
    ),
  },
  {
    title: "6. Intellectual property",
    body: (
      <>
        <p>
          Our Services, including trademarks, brands, text, displays, images,
          graphics, video, audio, programs, and the design and arrangement
          thereof, are owned by activeX, its affiliates, or licensors and are
          protected by applicable intellectual property laws.
        </p>
        <p>
          These Terms permit personal, non-commercial use only. You must not
          reproduce, distribute, modify, create derivative works of, publicly
          display, republish, download, store, or transmit any material from the
          Services without our prior written consent. All rights not expressly
          granted are reserved by activeX.
        </p>
        <p>
          activeX names, logos, product and service names, designs, and slogans
          are trademarks of activeX or its affiliates or licensors. You must not
          use them without prior written permission.
        </p>
      </>
    ),
  },
  {
    title: "7. Optional tools and third-party services",
    body: (
      <>
        <p>
          You may be provided access to tools or integrations offered by third
          parties (such as Apple Health, Spotify, or payment providers). We do
          not control these tools and provide access &quot;as is&quot; and
          &quot;as available&quot; without endorsement. Your use of optional
          third-party tools is at your own risk and subject to those
          providers&apos; terms.
        </p>
        <p>
          New features released through the Services are also subject to these
          Terms.
        </p>
      </>
    ),
  },
  {
    title: "8. Third-party links",
    body: (
      <p>
        The Services may contain links to third-party websites or embedded
        functionality. We are not responsible for examining or evaluating
        third-party content or accuracy. If you leave the Services to access
        third-party sites, you do so at your own risk. Complaints about
        third-party products or services should be directed to the third party.
      </p>
    ),
  },
  {
    title: "9. Privacy Policy",
    body: (
      <p>
        All personal information we collect through the Services is subject to
        our{" "}
        <Link to={PAGE_PATHS.privacy} style={linkStyle}>
          Privacy Policy
        </Link>
        . By using the Services, you acknowledge that you have read it.
      </p>
    ),
  },
  {
    title: "10. Feedback",
    body: (
      <>
        <p>
          If you submit ideas, suggestions, feedback, reviews, or other content
          (&quot;Feedback&quot;), you grant us a perpetual, worldwide,
          sublicensable, royalty-free license to use, reproduce, modify,
          publish, distribute, and display such Feedback in any medium for any
          purpose, including commercial use.
        </p>
        <p>
          You represent that you own or have all necessary rights to your
          Feedback, and that it will comply with these Terms. We are under no
          obligation to keep Feedback confidential, pay for it, or respond to
          it. We may remove Feedback that we determine is unlawful, offensive,
          or otherwise objectionable.
        </p>
      </>
    ),
  },
  {
    title: "11. Errors, inaccuracies and omissions",
    body: (
      <p>
        Occasionally information on or in the Services may contain typographical
        errors, inaccuracies, or omissions relating to descriptions, pricing,
        promotions, or availability. We reserve the right to correct any errors
        and to change or update information or cancel orders if any information
        is inaccurate at any time without prior notice (including after you have
        submitted an order).
      </p>
    ),
  },
  {
    title: "12. Prohibited uses",
    body: (
      <>
        <p>
          You may access and use the Services for lawful purposes only. You may
          not use the Services to: (a) engage in unlawful or malicious activity;
          (b) violate any applicable law; (c) infringe intellectual property
          rights; (d) harass, abuse, defame, or harm any person; (e) transmit
          false or misleading information; (f) send spam or unsolicited
          promotions; (g) impersonate any person or entity; or (h) interfere
          with anyone&apos;s use or enjoyment of the Services.
        </p>
        <p>
          You also agree not to upload viruses or malware; reproduce, sell, or
          exploit any portion of the Services without authorization; collect
          personal information of others; or use robots, scrapers, automated
          tools, or similar means to access the Services in ways that bypass
          security or usage limits. We may suspend or terminate your account if
          you violate these Terms.
        </p>
      </>
    ),
  },
  {
    title: "13. Agents",
    body: (
      <>
        <p>
          This section applies if you use or enable an &quot;Agent&quot; (any
          software or service that takes autonomous or semi-autonomous action on
          your behalf) to access or interact with the Services.
        </p>
        <p>
          No Agent may access the Services unless it identifies itself and
          operates in accordance with these requirements. Agents must, in HTTP
          requests, identify that the request is from an Agent and disclose the
          Agent name in the user agent string as &quot;Agent/[agent
          name]&quot;; must not conceal that interactions are from an Agent;
          must respond truthfully to prompts asking whether interactions are
          from a human or computer; and must not circumvent measures intended to
          block or limit Agent access. We may limit how Agents access the
          Services.
        </p>
      </>
    ),
  },
  {
    title: "14. Termination",
    body: (
      <p>
        We may terminate this agreement or your access to the Services at any
        time without notice, and you will remain liable for all amounts due up
        to and including the date of termination. Provisions that by their
        nature should survive termination will continue to apply, including
        Intellectual Property, Feedback, Disclaimer of Warranties, Limitation of
        Liability, Indemnification, and Governing Law.
      </p>
    ),
  },
  {
    title: "15. Disclaimer of warranties",
    body: (
      <>
        <p>
          Information on or through the Services is made available for general
          information purposes. We do not warrant its accuracy, completeness, or
          usefulness. Any reliance you place on such information is at your own
          risk.
        </p>
        <p>
          EXCEPT AS EXPRESSLY STATED BY ACTIVEX, THE SERVICES AND ALL PRODUCTS
          OFFERED THROUGH THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND
          &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE
          THAT YOUR USE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
          SOME JURISDICTIONS LIMIT THESE DISCLAIMERS, SO THEY MAY NOT FULLY
          APPLY TO YOU.
        </p>
      </>
    ),
  },
  {
    title: "16. Limitation of liability",
    body: (
      <p>
        TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO CASE SHALL ACTIVEX, OUR
        PARTNERS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS,
        CONTRACTORS, SERVICE PROVIDERS, OR LICENSORS BE LIABLE FOR ANY INJURY,
        LOSS, CLAIM, OR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR
        CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING LOST PROFITS, LOST REVENUE,
        LOST SAVINGS, LOSS OF DATA, OR REPLACEMENT COSTS, ARISING FROM YOUR USE
        OF THE SERVICES OR ANY PRODUCTS PROCURED USING THE SERVICES, EVEN IF
        ADVISED OF THEIR POSSIBILITY.
      </p>
    ),
  },
  {
    title: "17. Indemnification",
    body: (
      <p>
        You agree to indemnify, defend, and hold harmless activeX and our
        affiliates, partners, officers, directors, employees, agents,
        contractors, licensors, and service providers from any losses, damages,
        liabilities, or claims, including reasonable attorneys&apos; fees,
        arising out of (1) your breach of these Terms, (2) your violation of any
        law or third-party rights, or (3) your access to and use of the
        Services.
      </p>
    ),
  },
  {
    title: "18. Severability",
    body: (
      <p>
        If any provision of these Terms is determined to be unlawful, void, or
        unenforceable, that provision shall be enforceable to the fullest extent
        permitted by law, and the unenforceable portion shall be severed. The
        remaining provisions will continue in full force and effect.
      </p>
    ),
  },
  {
    title: "19. Waiver; entire agreement",
    body: (
      <>
        <p>
          Our failure to exercise or enforce any right or provision of these
          Terms shall not constitute a waiver of such right or provision.
        </p>
        <p>
          These Terms and any policies posted by us on this site constitute the
          entire agreement between you and us regarding the Services, superseding
          any prior agreements or communications. Ambiguities shall not be
          construed against the drafting party.
        </p>
      </>
    ),
  },
  {
    title: "20. Assignment",
    body: (
      <p>
        You may not assign these Terms or any rights or obligations hereunder
        without our prior written consent. We may transfer, assign, or delegate
        these Terms and our rights and obligations without consent or notice.
      </p>
    ),
  },
  {
    title: "21. Governing law",
    body: (
      <p>
        These Terms and any separate agreements whereby we provide you Services
        shall be governed by and construed in accordance with the laws of the
        jurisdiction where activeX is headquartered. You and activeX consent to
        venue and personal jurisdiction in such courts.
      </p>
    ),
  },
  {
    title: "22. Headings",
    body: (
      <p>
        Headings are included for convenience only and will not limit or
        otherwise affect these Terms.
      </p>
    ),
  },
  {
    title: "23. Changes to Terms of Service",
    body: (
      <p>
        You can review the most current version of these Terms at any time on
        this page. We may update, change, or replace any part of these Terms by
        posting updates to our website. It is your responsibility to check this
        page periodically. Continued use of the Services after changes are
        posted constitutes acceptance of those changes.
      </p>
    ),
  },
  {
    title: "24. Contact information",
    body: (
      <p>
        Questions about the Terms of Service should be sent to{" "}
        <a href="mailto:info@activex.fit" style={linkStyle}>
          info@activex.fit
        </a>
        .
        <br />
        activeX LLC FZ
      </p>
    ),
  },
];

export function TermsPage() {
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
            Terms of Service
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
