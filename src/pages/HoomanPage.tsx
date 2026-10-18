import { useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { ImageLightbox } from "../components/ImageLightbox";
import {
  hoomsGallery,
  type HoomsTransformation,
} from "../lib/hoomsTransformations";
import { C, CALENDLY, IMG, PAGE_PATHS } from "../lib/tokens";
import { Card, CTA, Pill, Reveal, Sec, Split } from "../components/ui";

/**
 * Paste a YouTube or Vimeo link here when the VSL is ready.
 * Leave this empty until then — the player stays a reserved 16:9 slot.
 * Example: "https://www.youtube.com/watch?v=VIDEO_ID"
 */
const HOOMS_VSL_URL = "";

const beliefs = [
  {
    title: "Consistency",
    desc: "Results don't come from a handful of perfect sessions. They come from showing up on the days you don't feel like it.",
  },
  {
    title: "Structured system",
    desc: "Random workouts make you tired. A structured plan means every session connects to the one before it and the one after it.",
  },
  {
    title: "Progressive overload",
    desc: "The body changes when it's asked to do something it currently can't. That's what builds muscle, strength, and capacity.",
  },
];

const included = [
  {
    icon: "01",
    title: "Custom Programming",
    desc: "Fully individualised training built around your goals, schedule, and experience level. Updated as you progress.",
  },
  {
    icon: "02",
    title: "Direct Access",
    desc: "Ongoing communication with Hooms. Form reviews, check-ins, and real-time adjustments, not a chatbot.",
  },
  {
    icon: "03",
    title: "Movement Analysis",
    desc: "Video review of your movement quality. Identify compensations, build stability, and improve how you train.",
  },
  {
    icon: "04",
    title: "Accountability & Structure",
    desc: "Weekly check-ins, progress tracking, and a clear system to keep you consistent week to week.",
  },
];

const steps = [
  {
    n: "01",
    t: "Book a call",
    d: "We'll go through your goals, training history, and whether coaching with Hooms is the right fit.",
  },
  {
    n: "02",
    t: "Build your plan",
    d: "Hooms builds a fully custom program around your goals, schedule, and how you need to train.",
  },
  {
    n: "03",
    t: "Train & evolve",
    d: "You train. Hooms reviews, adjusts, and progresses your plan week to week with form checks and accountability.",
  },
];

const oneTime = [
  {
    title: "12-Week Custom Program",
    desc: "A fully personalized 12-week training program built around your goals, experience level, and available equipment. Structured on the IQ Framework: Mobility IQ, Movement IQ, and Mindset IQ applied directly to your training. Delivered through the activeX app for members.",
    cta: "Get Custom Program",
    href: "https://buy.stripe.com/6oU8wObz2dhH1lh92Z4ow02",
  },
  {
    title: "12-Week Custom Diet",
    desc: "A fully personalized 12-week nutrition plan built around your goals, preferences, and lifestyle. Macro targets, meal structure, and guidance designed to support your training and long-term health. Delivered through the activeX app for members.",
    cta: "Get Custom Diet",
    href: "https://buy.stripe.com/aFa14mcD62D32plbb74ow03",
  },
  {
    title: "Video Consult",
    desc: "One-off video consultation directly with Hooms. Personalised guidance on your training, movement, nutrition, or goals without committing to ongoing coaching.",
    cta: "Book a Consult",
    href: "https://buy.stripe.com/00w9AS46A1yZe83a734ow06",
  },
];

const FAQ = [
  {
    q: "How is coaching different from the activeX membership?",
    a: "The membership gives you access to all programs, workouts, and tools on the platform. Coaching is a fully personalised experience: your own custom programming, movement analysis, and direct weekly contact with Hooms. Membership is the framework applied broadly. Coaching is the framework applied specifically to you.",
  },
  {
    q: "How do check-ins work?",
    a: "You'll complete a weekly check-in covering training, recovery, and progress. Hooms reviews everything and adjusts your plan as needed. You also have ongoing access for form reviews and questions between check-ins.",
  },
  {
    q: "Do I need to train at a gym?",
    a: "Most coaching clients train at a gym, but programming can be adapted for home setups depending on available equipment. This is discussed on the intro call.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Monthly coaching has a 3-month minimum. You can also commit to 6 or 12 months upfront. Real progress takes consistency, and the plan is designed to build over time.",
  },
  {
    q: "How many spots are available?",
    a: "Hooms works with a limited number of coaching clients at any time to ensure quality. If spots are full, you'll be told on the call.",
  },
];

function videoEmbedSrc(url: string) {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const yt = trimmed.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{6,})/,
  );
  if (yt) {
    return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&modestbranding=1&playsinline=1`;
  }

  const vimeo = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  if (/^https:\/\//i.test(trimmed)) return trimmed;
  return null;
}

function Vsl({ url }: { url: string }) {
  const src = videoEmbedSrc(url);

  if (!src) {
    return (
      <div className="vsl-frame vsl-frame--empty" aria-label="Video">
        Video
      </div>
    );
  }

  return (
    <div className="vsl-frame">
      <iframe
        src={src}
        title="Coaching with Hooms"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function ResultCard({
  item,
  eager,
  onOpen,
}: {
  item: HoomsTransformation;
  eager?: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="xf-card hooms-xf-card">
      <button type="button" className="xf-card-media" onClick={onOpen}>
        <img src={item.image} alt={item.imageAlt} loading={eager ? "eager" : "lazy"} />
        <span className="xf-card-hint">
          <span className="xf-card-hint-tap">Tap to enlarge</span>
          <span className="xf-card-hint-click">Click to enlarge</span>
        </span>
      </button>
      <div className="xf-card-body">
        <h3 className="xf-card-name">{item.name}</h3>
        <p className="xf-card-summary">{item.summary}</p>
      </div>
    </article>
  );
}

export function HoomanPage() {
  const gallery = hoomsGallery();
  const featured = gallery.find((item) => item.featured);
  const clients = featured
    ? gallery.filter((item) => item !== featured)
    : gallery;
  const [openId, setOpenId] = useState<string | null>(null);
  const open = gallery.find((item) => item.id === openId);

  return (
    <>
      <Sec className="sec-page-hero" style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>Limited spots</Pill>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            1-on-1 coaching with Hooms
          </h1>
          <p className="page-lede" style={{ margin: "0 auto" }}>
            Build muscle, lose fat, and train with structure. Custom
            programming, weekly check-ins, and direct access from a competitive
            bodybuilder with 20+ years of training experience.
          </p>
          <div
            className="cta-row"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            <CTA href={CALENDLY.hoomsCoaching}>Book a call with Hooms</CTA>
          </div>
        </Reveal>
        <div className="vsl-wrap">
          <Vsl url={HOOMS_VSL_URL} />
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Pill>Results</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Physiques built with structure
            </h2>
            <p className="page-lede" style={{ margin: "0 auto" }}>
              Real clients. Real structure. These photos show individual
              journeys, not a promise of a specific outcome.
            </p>
          </div>
        </Reveal>
        <div className="hooms-xf">
          {featured && (
            <Reveal>
              <ResultCard
                item={featured}
                eager
                onOpen={() => setOpenId(featured.id)}
              />
            </Reveal>
          )}
          <div className="hooms-xf-clients">
            {clients.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06} style={{ height: "100%" }}>
                <ResultCard
                  item={item}
                  eager={!featured && i === 0}
                  onOpen={() => setOpenId(item.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
        <p className="xf-disclaimer">
          Results vary. Photos are shared with permission and are not a
          guarantee of a specific outcome.
        </p>
        <div className="cta-row" style={{ justifyContent: "center", marginTop: 28 }}>
          <CTA href={CALENDLY.hoomsCoaching}>Book a call with Hooms</CTA>
        </div>
        {open && (
          <ImageLightbox
            src={open.image}
            alt={open.imageAlt}
            caption={open.name}
            onClose={() => setOpenId(null)}
          />
        )}
      </Sec>

      <Sec>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            What you get
          </h2>
          <p
            className="page-lede"
            style={{ textAlign: "center", margin: "0 auto 40px" }}
          >
            A fully tailored experience, not a template.
          </p>
        </Reveal>
        <div className="auto-grid">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card {...item} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          imgSide="right"
          pill="Hooms"
          title="Competitive bodybuilder. Co-founder of activeX."
          text="IFBB Pro League competitor in Classic Physique. Specializing in advanced hypertrophy and fast fat loss. 20+ years of training experience."
          imgFit="contain"
          imgHeight="auto"
          imgRadius={IMG.portraitRadius}
          img={
            <img
              src="/images/hooms-stage.jpg"
              alt="Hooms on the Classic Physique stage"
              className="img-portrait"
            />
          }
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {[
              "Competitive bodybuilder",
              "IFBB Classic Physique",
              "activeX co-founder",
              "20+ years training",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 14px",
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 500,
                  border: `1px solid ${C.border}`,
                  color: C.textMid,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <CTA href={CALENDLY.hoomsCoaching}>Book a call with Hooms</CTA>
            <CTA to={PAGE_PATHS.hooms} variant="secondary">
              Learn more about Hooms
            </CTA>
          </div>
        </Split>
      </Sec>

      <Sec>
        <div
          className="auto-grid"
          style={{ alignItems: "start" }}
        >
          <Reveal>
            <div>
              <Pill>Origin</Pill>
              <h2
                className="section-title"
                style={{
                  fontWeight: 800,
                  color: C.navy,
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                How I started
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: C.textMid,
                  lineHeight: 1.75,
                  margin: "0 0 16px",
                }}
              >
                Growing up, I was the chubby kid. Then that flipped. I shot up,
                dropped the weight, and ended up 65kg at 5&apos;11&quot;. Skinny.
                My brother had been asking me to train with him. I kept putting
                it off.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: C.textMid,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                My grandfather was a bodybuilder. I grew up around the
                discipline and the idea that you could build your body into
                something, rather than accept whatever it happened to be. I had
                always been drawn to it. I just hadn&apos;t made it mine yet.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <Pill>Competition</Pill>
              <h2
                className="section-title"
                style={{
                  fontWeight: 800,
                  color: C.navy,
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                Why I compete
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: C.textMid,
                  lineHeight: 1.75,
                  margin: "0 0 16px",
                }}
              >
                Competing isn&apos;t about the trophy. It&apos;s about who you
                have to become to earn the right to stand on that stage. Every
                prep strips away the excuses. The stage only reflects what you
                did in the months before it.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: C.textMid,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                That&apos;s the part I coach from. The same meals, the same
                training, the same recovery, whether you feel motivated or not.
                The deadline is fixed and the mirror doesn&apos;t lie.
              </p>
            </div>
          </Reveal>
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Pill>Philosophy</Pill>
            <h2
              className="section-title"
              style={{
                fontWeight: 800,
                color: C.navy,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              What I believe
            </h2>
          </div>
        </Reveal>
        <div className="auto-grid">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} style={{ height: "100%" }}>
              <Card title={b.title} desc={b.desc} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec style={{ textAlign: "center" }}>
        <Reveal>
          <Pill>How it works</Pill>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 32,
            }}
          >
            Book a call. Build. Train &amp; evolve.
          </h2>
        </Reveal>
        <div className="auto-grid" style={{ textAlign: "left" }}>
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="surface-card">
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.purple,
                    marginBottom: 10,
                    letterSpacing: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 8,
                  }}
                >
                  {s.t}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: C.textMid,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal style={{ textAlign: "center" }}>
          <Pill>One-time options</Pill>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Not ready for ongoing coaching?
          </h2>
          <p className="page-lede" style={{ margin: "0 auto 40px" }}>
            Get expert guidance in a one-time plan built around your exact
            situation.
          </p>
        </Reveal>
        <div className="one-time-options">
          {oneTime.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} style={{ height: "100%" }}>
              <div
                className="one-time-card"
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: C.textMid,
                    lineHeight: 1.7,
                    margin: "0 0 28px",
                    flex: 1,
                  }}
                >
                  {c.desc}
                </p>
                <div className="cta-block-full" style={{ marginTop: "auto" }}>
                  <CTA
                    href={c.href}
                    style={{ padding: "14px 16px", fontSize: 14 }}
                  >
                    {c.cta}
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec>
        <FaqAccordion items={FAQ} />
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
            Ready to train with Hooms?
          </h2>
          <p
            className="page-lede"
            style={{
              color: "rgba(255,255,255,0.75)",
              margin: "0 auto 28px",
            }}
          >
            Book a call and we&apos;ll go through your goals and confirm the
            fit. Spots are limited.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <CTA href={CALENDLY.hoomsCoaching}>Book a call with Hooms</CTA>
            <CTA
              variant="secondary"
              to={PAGE_PATHS.pricing}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Or start with membership
            </CTA>
          </div>
        </Reveal>
      </Sec>
    </>
  );
}

export default HoomanPage;
