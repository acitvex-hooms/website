import { Link } from "react-router-dom";
import { TRANSFORMATIONS } from "../lib/transformations";
import { PAGE_PATHS } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "./ui";

type TransformationsTeaserProps = {
  compact?: boolean;
};

export function TransformationsTeaser({
  compact = false,
}: TransformationsTeaserProps) {
  const items = compact ? TRANSFORMATIONS.slice(0, 2) : TRANSFORMATIONS;

  return (
    <Sec bg="#F9F9FA" className="xf-teaser-sec">
      <Reveal>
        <div className="home-sec-head">
          <Pill>Results</Pill>
          <h2 className="section-title home-sec-title">
            Client transformations
          </h2>
          <p className="home-sec-copy">
            {compact
              ? "See the physiques clients have built with structured coaching."
              : "Progress you can see. Structure you can repeat."}
          </p>
        </div>
      </Reveal>
      <div className={`xf-teaser-grid${compact ? " is-compact" : ""}`}>
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <Link
              className="xf-teaser-card"
              to={PAGE_PATHS.results}
              aria-label={`${item.name} transformation`}
            >
              <img
                src={item.image}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="xf-teaser-name">{item.name}</span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="home-sec-cta xf-teaser-cta">
        <CTA to={PAGE_PATHS.results}>See all results</CTA>
      </div>
    </Sec>
  );
}
