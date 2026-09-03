import { useState } from "react";
import { ImageLightbox } from "../components/ImageLightbox";
import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { TRANSFORMATIONS } from "../lib/transformations";
import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

export function ResultsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = TRANSFORMATIONS.find((item) => item.id === openId);

  return (
    <>
      <Sec className="sec-page-hero" style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>Results</Pill>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Client transformations
          </h1>
          <p className="page-lede" style={{ margin: "0 auto" }}>
            Real clients. Real structure. These photos show individual
            journeys — not a promise of a specific outcome.
          </p>
        </Reveal>
      </Sec>

      <Sec className="sec-pt-24 xf-results-sec">
        <div className="xf-results-grid">
          {TRANSFORMATIONS.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article className="xf-card">
                <button
                  type="button"
                  className="xf-card-media"
                  onClick={() => setOpenId(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <span className="xf-card-hint">
                    <span className="xf-card-hint-tap">Tap to enlarge</span>
                    <span className="xf-card-hint-click">Click to enlarge</span>
                  </span>
                </button>
                <div className="xf-card-body">
                  <h2 className="xf-card-name">{item.name}</h2>
                  <p className="xf-card-summary">{item.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="xf-disclaimer">
          Results vary. Photos are shared with client permission and are not a
          guarantee of a specific outcome.
        </p>
      </Sec>

      <Sec bg={C.navy} className="sec-cta" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.white,
              marginBottom: 12,
            }}
          >
            Ready to train with structure?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 480,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Start with membership, or apply for 1-on-1 coaching with Ana or
            Hooms.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <CTA to={PAGE_PATHS.pricing}>{MEMBERSHIP_CTAS.join}</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.apply}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Apply for coaching
            </CTA>
          </div>
        </Reveal>
      </Sec>

      {open ? (
        <ImageLightbox
          src={open.image}
          alt={open.imageAlt}
          caption={open.name}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}
