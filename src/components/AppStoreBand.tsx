import { MEMBERSHIP_CTAS } from "../lib/membershipCtas";
import { PAGE_PATHS } from "../lib/tokens";
import { CTA, Reveal, Sec } from "./ui";

const APP_STORE =
  "https://apps.apple.com/ae/app/activex-fitness/id6766033150";

/** Repeated download / join band for App Store–style landings. */
export function AppStoreBand() {
  return (
    <Sec bg="#272789" className="sec-cta app-store-band">
      <Reveal>
        <div className="app-store-band-inner">
          <h2 className="section-title app-store-band-title">
            Download activeX. Start training today.
          </h2>
          <p className="app-store-band-copy">
            Full membership on iOS — or start on the web. Your first 2 weeks are
            on us.
          </p>
          <div className="app-store-band-actions cta-row">
            <CTA to={PAGE_PATHS.pricing}>{MEMBERSHIP_CTAS.startMembership}</CTA>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noreferrer"
              className="app-store-band-badge"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </Sec>
  );
}
