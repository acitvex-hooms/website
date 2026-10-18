import { useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { ImageLightbox } from "../components/ImageLightbox";
import { COACHING_PLANS } from "../lib/coachingPlans";
import {
  hoomsGallery,
  type HoomsTransformation,
} from "../lib/hoomsTransformations";
import { CALENDLY } from "../lib/tokens";
import { CTA, Reveal } from "../components/ui";

/**
 * Paste a YouTube or Vimeo link here when the VSL is ready.
 * Leave this empty until then — the player stays a reserved 16:9 slot.
 * Example: "https://www.youtube.com/watch?v=VIDEO_ID"
 */
const HOOMS_VSL_URL = "";

const forWhom = [
  "You run a business, a desk, or a pipeline.",
  "You train, imperfectly, and you have done for years.",
  "You are not looking for a challenge, a meal prep plan, or somebody to shout at you.",
];

const whyNot = [
  "Random programming.",
  "No progression model.",
  "Exercise selection that ignores your structure.",
  "A diet that was never matched to your training.",
];

const week = [
  "Train the program in the app.",
  "Log every set.",
  "Log nutrition and steps daily.",
  "Check in once a week.",
  "I adjust and send a video back explaining what changed and why.",
];

const included = [
  "A program built on your days, your equipment, and your injury history.",
  "Nutrition targets from what you actually eat.",
  "A weekly check-in with a video response.",
  "activeX membership.",
  "WhatsApp access, Monday to Saturday.",
];

const notThis = [
  "Not a PDF.",
  "Not a template.",
  "Not a twelve week challenge you get sold and left with.",
  "Not medical care.",
  "Not a guarantee.",
];

const FAQ = [
  {
    q: "What if I travel?",
    a: "The program is built around the calendar you already have. If you are away, tell me before the week. I move the sessions to the days and the equipment you will actually have.",
  },
  {
    q: "What if I can only train three days?",
    a: "Four sessions is the default, because that is what most of these weeks can hold. If you only have three, the program is written for three. I will not invent a fourth day.",
  },
  {
    q: "Do I have to cook?",
    a: "No. Targets come from what you already eat. This is not a meal prep plan, and you do not have to cook from a list.",
  },
  {
    q: "What if I get injured?",
    a: "Tell me. The program already accounts for your injury history, and if something new happens I change the sessions. This is not medical care. If you need a clinician, see one.",
  },
  {
    q: "What happens after twelve weeks?",
    a: "Twelve weeks is the minimum. After that you can stay monthly, or take a longer commitment, which costs less. We decide that from the work, after we have spoken. Nobody is billed from this page.",
  },
  {
    q: "How fast will I see change?",
    a: "I will not give you a date. The log moves first. The mirror follows. A promised timeline is a different product.",
  },
  {
    q: "What happens on the call?",
    a: "Twenty minutes. I will have read your answers beforehand, so we skip the basics. I will tell you how I would structure your week, what I would change first, and what coaching with me would actually look like for you. If it is not a fit I will say so and tell you what would be.",
  },
];

function videoEmbedSrc(url: string) {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const yt = trimmed.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{6,})/,
  );
  if (yt) {
    return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&mute=1&cc_load_policy=1&cc_lang_pref=en&playsinline=1&rel=0&modestbranding=1`;
  }

  const vimeo = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&muted=1`;

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

function BookCall({ note = false }: { note?: boolean }) {
  return (
    <div className="hm-book">
      <div className="cta-row">
        <CTA href={CALENDLY.hoomsCoaching}>Book a call</CTA>
      </div>
      {note && (
        <p className="hm-book-note">
          Twenty minutes, straight answers, no pressure. Six questions first
          so I turn up knowing your week.
        </p>
      )}
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
        <img
          src={item.image}
          alt={item.imageAlt}
          loading={eager ? "eager" : "lazy"}
        />
        <span className="xf-card-hint">
          <span className="xf-card-hint-tap">Tap to enlarge</span>
          <span className="xf-card-hint-click">Click to enlarge</span>
        </span>
      </button>
      <div className="xf-card-body">
        <h3 className="xf-card-name">{item.name}</h3>
        {item.summary ? <p className="xf-card-summary">{item.summary}</p> : null}
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
    <div className="hm-page">
      <section className="hm-sec hm-hero">
        <Reveal>
          <h1 className="hm-title">
            Four sessions a week, built around the calendar you already have.
          </h1>
          <p className="hm-lede">
            One on one coaching for men who run businesses, travel, and have
            client dinners in the diary that are not moving. The plan goes
            around your week, not against it.
          </p>
        </Reveal>
        <div className="vsl-wrap">
          <Vsl url={HOOMS_VSL_URL} />
        </div>
        <BookCall note />
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">Who this is for</h2>
          <p className="hm-lede">
            You run something. A business, a desk, a pipeline, a team. You
            train, not perfectly, but you are not starting from zero, and you
            have been at it long enough to know that motivation is not your
            problem, because you are disciplined everywhere else in your life.
            What you do not have is a plan that survives a bad fortnight.
          </p>
        </Reveal>
        <div className="hm-cols hm-cols-3">
          {forWhom.map((line, i) => (
            <Reveal key={line} delay={i * 0.06}>
              <p className="hm-card">{line}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <h3 className="hm-subhead">Who this is not for</h3>
          <p className="hm-lede">
            Anyone looking for a twelve week challenge, a meal prep plan, or
            somebody to shout at them. There are a thousand people online who
            will sell you that.
          </p>
        </Reveal>
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">Why it is not working</h2>
        </Reveal>
        <ul className="hm-lines">
          {whyNot.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">How a week runs</h2>
        </Reveal>
        <ol className="hm-steps">
          {week.map((line, i) => (
            <li key={line}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {line}
            </li>
          ))}
        </ol>
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">What you get</h2>
        </Reveal>
        <ul className="hm-lines">
          {included.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      {gallery.length > 0 && (
        <section className="hm-sec">
          <Reveal>
            <h2 className="hm-title hm-title-md">Proof</h2>
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
          <p className="hm-fine">
            Results vary. Photos are shared with permission and are not a
            guarantee of a specific outcome.
          </p>
          {open && (
            <ImageLightbox
              src={open.image}
              alt={open.imageAlt}
              caption={open.name}
              onClose={() => setOpenId(null)}
            />
          )}
        </section>
      )}

      <section className="hm-sec" id="pricing">
        <Reveal>
          <h2 className="hm-title hm-title-md">Pricing</h2>
          <p className="hm-lede">
            Twelve weeks is the minimum, because anything shorter is a
            transaction rather than coaching. Longer commitments cost less,
            for the simple reason that they work better.
          </p>
        </Reveal>
        <div className="hm-table-wrap">
          <table className="hm-table">
            <caption className="hm-sr">Coaching options. Twelve week minimum.</caption>
            <thead>
              <tr>
                <th scope="col">Commitment</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {COACHING_PLANS.map((plan) => (
                <tr key={plan.id}>
                  <th scope="row">
                    {plan.id === "annual" ? "12 months" : plan.name}
                    {plan.id === "monthly" && (
                      <span className="hm-row-note">12-week minimum</span>
                    )}
                  </th>
                  <td>
                    {plan.price}
                    {plan.per ? plan.per : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hm-lede hm-after-table">
          Nobody pays on this page. We talk first, I tell you honestly whether
          I can help, and you decide after that.
        </p>
        <BookCall />
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">Who I am</h2>
          <p className="hm-lede">
            I co-own activeX. I am a competitive bodybuilder. I coach this way
            because a week only works when the sessions fit the calendar you
            already have, and each one progresses the one before it.
          </p>
        </Reveal>
      </section>

      <section className="hm-sec">
        <Reveal>
          <h2 className="hm-title hm-title-md">What this is not</h2>
        </Reveal>
        <ul className="hm-lines">
          {notThis.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="hm-sec">
        <FaqAccordion items={FAQ} title="FAQ" />
      </section>

      <section className="hm-sec hm-close">
        <Reveal>
          <h2 className="hm-title hm-title-md">
            I work with 12 men at a time.
          </h2>
          <p className="hm-lede">
            Book a call, answer the six questions properly, and we will talk
            this week.
          </p>
        </Reveal>
        <BookCall />
      </section>
    </div>
  );
}

export default HoomanPage;
