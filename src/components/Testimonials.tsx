import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import {
  TESTIMONIALS,
  SHOW_TESTIMONIALS,
  type Testimonial,
} from "../lib/testimonials";
import { C } from "../lib/tokens";
import { Pill, Reveal, Sec } from "./ui";

const CARD_TOP = 8;
const TRACK_PAD_BOTTOM = 28;
const SWIPE_THRESHOLD = 48;
const DESKTOP_MQ = "(min-width: 901px)";

type TestimonialsProps = {
  items?: Testimonial[];
};

export function Testimonials({ items = TESTIMONIALS }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [paused, setPaused] = useState(false);
  const [desktopPeek, setDesktopPeek] = useState(false);
  const [peekOffset, setPeekOffset] = useState(96);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const count = items.length;

  const go = (index: number) => {
    setActive(((index % count) + count) % count);
    setPaused(true);
  };

  useEffect(() => {
    if (!SHOW_TESTIMONIALS) return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => {
      const desktop = mq.matches;
      setDesktopPeek(desktop);
      // Tighter peeks on mid-desktop so side cards don't clip awkwardly.
      setPeekOffset(window.innerWidth >= 1200 ? 104 : 96);
    };
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    if (!SHOW_TESTIMONIALS || count <= 1 || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [count, paused, active]);

  useEffect(() => {
    if (!SHOW_TESTIMONIALS || !paused) return;
    const id = window.setTimeout(() => setPaused(false), 12000);
    return () => window.clearTimeout(id);
  }, [paused]);

  // Lock every card to the tallest natural height so active scale looks identical.
  useLayoutEffect(() => {
    if (!SHOW_TESTIMONIALS) return;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".testimonial-card"),
      );
      if (!cards.length) return;

      let max = 0;
      for (const card of cards) {
        const prev = card.style.height;
        card.style.height = "auto";
        max = Math.max(max, card.offsetHeight);
        card.style.height = prev;
      }

      if (max > 0) setCardHeight(max);
    };

    measure();
    const raf = window.requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure);
    });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      imgs.forEach((img) => img.removeEventListener("load", measure));
    };
  }, [items, desktopPeek]);

  const trackHeight = cardHeight
    ? CARD_TOP + cardHeight + TRACK_PAD_BOTTOM
    : undefined;

  if (!SHOW_TESTIMONIALS || !count) return null;

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) go(active + 1);
    else go(active - 1);
  };

  return (
    <Sec bg={C.offWhite} className="testimonials-section">
      <Reveal>
        <div className="testimonials-header">
          <Pill>Testimonials</Pill>
          <h2 className="section-title testimonials-heading">What clients say</h2>
        </div>
      </Reveal>

      <div className="testimonials-carousel">
        <div
          ref={trackRef}
          className="testimonials-track"
          aria-live="polite"
          style={trackHeight ? { height: trackHeight } : undefined}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, i) => {
            const offset = i - active;
            const wrapped =
              offset > count / 2
                ? offset - count
                : offset < -count / 2
                  ? offset + count
                  : offset;
            const abs = Math.abs(wrapped);
            const visible = abs <= 1;
            const isActive = wrapped === 0;

            const transform = desktopPeek
              ? `translateX(calc(-50% + ${wrapped * peekOffset}%)) scale(${
                  isActive ? 1 : 0.9
                })`
              : "translateX(-50%)";

            return (
              <article
                key={item.name}
                className={[
                  "testimonial-card",
                  isActive ? "is-active" : "",
                  visible ? "is-visible" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  top: CARD_TOP,
                  height: cardHeight || undefined,
                  transform,
                  opacity: isActive ? 1 : desktopPeek && visible ? 0.55 : 0,
                  zIndex: isActive ? 3 : visible ? 2 : 0,
                  pointerEvents: isActive
                    ? "auto"
                    : desktopPeek && visible
                      ? "auto"
                      : "none",
                }}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) go(i);
                }}
              >
                <div className="testimonial-quote-mark" aria-hidden>
                  “
                </div>
                <p className="testimonial-quote">{item.quote}</p>
                <img
                  className="testimonial-photo"
                  src={item.image}
                  alt={item.name}
                  loading={isActive || visible ? "eager" : "lazy"}
                />
                <div className="testimonial-meta">
                  <strong>{item.date}</strong>
                  <span>{item.name}</span>
                </div>
                <a
                  className="testimonial-imdb"
                  href={item.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  IMDB
                </a>
              </article>
            );
          })}
        </div>

        <div className="testimonials-controls">
          <button
            type="button"
            className="testimonials-arrow"
            aria-label="Previous testimonial"
            onClick={() => go(active - 1)}
          >
            ‹
          </button>

          <div
            className="testimonials-dots"
            role="tablist"
            aria-label="Client testimonials"
          >
            {items.map((item, i) => (
              <button
                key={`${item.name}-dot`}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial from ${item.name}`}
                className={`testimonials-dot${i === active ? " is-active" : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials-arrow"
            aria-label="Next testimonial"
            onClick={() => go(active + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </Sec>
  );
}
