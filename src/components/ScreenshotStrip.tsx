import { MotionItem, Stagger } from "./motion";
import { Phone, Reveal, Sec } from "./ui";

/** Portrait app frames only — square marketing assets crop poorly in Phone. */
const SCREENS = [
  {
    src: "/images/app-home.png",
    alt: "activeX home screen",
    label: "Home",
  },
  {
    src: "/images/coaches-app.webp",
    alt: "activeX exercise library",
    label: "Library",
  },
] as const;

/** Horizontal product proof strip — App Store landing pattern. */
export function ScreenshotStrip() {
  return (
    <Sec className="screenshot-strip-sec sec-tight">
      <Reveal>
        <div className="screenshot-strip-head">
          <p className="screenshot-strip-kicker">Inside the app</p>
          <h2 className="section-title screenshot-strip-title">
            Real screens. Real structure.
          </h2>
        </div>
      </Reveal>
      <Stagger className="screenshot-strip" stagger={0.08}>
        {SCREENS.map((s) => (
          <MotionItem key={s.label} className="screenshot-strip-item">
            <div className="screenshot-phone">
              <Phone imageSrc={s.src} imageAlt={s.alt} />
            </div>
            <span className="screenshot-label">{s.label}</span>
          </MotionItem>
        ))}
      </Stagger>
    </Sec>
  );
}
