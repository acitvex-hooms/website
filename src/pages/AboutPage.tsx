import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Card, Pill, Reveal, Sec, Split } from "../components/ui";

const press = [
  { date: "July 2021", outlet: "Daily Mail Australia" },
  { date: "September 2019", outlet: "Daily Mail" },
  { date: "June 2019", outlet: "Fitness First Australia" },
  { date: "July 2016", outlet: "Australian Men's Health" },
  { date: "Winter 2015", outlet: "WNiF - What's New In Fitness Australia" },
  { date: "July/August 2013", outlet: "Fitness First Australia" },
  { date: "June 2013", outlet: "Fitness First Australia" },
  { date: "May/June 2012", outlet: "Fitness First Australia" },
];

const beliefs = [
  {
    title: "Intelligence Over Intensity",
    desc: "Training harder isn't the answer. Training smarter with intention, awareness, and structure is what produces results that last.",
  },
  {
    title: "Systems Over Motivation",
    desc: "Motivation fades. Systems don't. Every part of activeX is built to remove guesswork and give you a repeatable process.",
  },
  {
    title: "Progress Over Perfection",
    desc: "There is no perfect form, perfect plan, or perfect day. There is only consistent action, adjusted over time, compounding into real change.",
  },
];

export function AboutPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }}>
        <Split
          imgSide="right"
          pill="Co-founder & Head Coach"
          title="Ana Coppola"
          text="Co-founder of activeX. Creator of the IQ Framework. Online Coach."
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/ana-hero.png"
              alt="Ana Coppola"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          }
        >
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              lineHeight: 1.75,
              marginBottom: 20,
            }}
          >
            Celebrity personal trainer with over 18 years of experience,
            Gladiators AUS contestant, Australian Ninja Warrior - season 5
            contestant, founder and author of Brazilian Butt Express.
          </p>
        </Split>
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Pill>Press</Pill>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              As seen on
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {press.map((p, i) => (
            <Reveal key={`${p.outlet}-${p.date}`} delay={i * 0.05}>
              <div
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.purple,
                    letterSpacing: 0.5,
                    marginBottom: 6,
                  }}
                >
                  {p.date}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: C.navy,
                    lineHeight: 1.4,
                  }}
                >
                  {p.outlet}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec>
        <Split
          pill="Origin"
          title="How it started"
          text="A week after landing in Australia in 2008, while still in a hostel, I started working at, then, the world's largest privately owned health club: Fitness First (initially at the Randwick and later also at the Bondi club, both located on the Eastern suburbs of Sydney) - where I worked for 12 years and became a senior personal trainer, a boxing group fitness instructor, a writer and an ambassador for both Australia and Malaysia groups."
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/ana-started.jpg"
              alt="Ana coaching beginnings"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          }
        >
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              lineHeight: 1.75,
              marginBottom: 0,
            }}
          >
            It wasn&apos;t all fun and games. It was mostly hard and many times I
            did miss the high salary, the prestige and the stability associated
            to my previous career path. However, the one thing I never missed was
            the &ldquo;dream&rdquo;. Because that exact transition (from Law to
            Fitness) was my dream then and it is my dream now.
          </p>
        </Split>
      </Sec>

      <Sec bg={C.offWhite}>
        <Split
          imgSide="right"
          pill="The System"
          title="Why the IQ Framework"
          text="Most fitness content tells people what to do. Do this workout. Follow this diet. Hit these numbers. But without understanding the principles behind the plan, people plateau, get injured, or lose consistency. The IQ Framework flips that. Mobility IQ teaches you how to choose the right tool for the right outcome. Movement IQ teaches you how to control your body before loading it. Mindset IQ teaches you how to build consistency through structure, not willpower. That system is the foundation of everything inside activeX: every program, every workout, every tool."
          cta="Explore the IQ Framework"
          ctaTo={PAGE_PATHS.iq}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/ana-iq.jpg"
              alt="IQ Framework in practice"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          }
        />
      </Sec>

      <Sec>
        <Split
          pill="Platform"
          title="What activeX is today"
          text="What started as personalized online coaching has grown into a full platform. activeX gives members access to programs, workouts, an exercise library, macro tracking, step tracking, and exercise tracking all built on the IQ Framework. It's not a random collection of workouts. Every piece of content is connected to the same system. For people who want a more hands-on approach, Ana still coaches a limited number of clients 1-on-1."
          cta="Join activeX - $19/mo"
          ctaTo={PAGE_PATHS.pricing}
          imgFit="contain"
          imgHeight="auto"
          imgRadius={28}
          img={
            <img
              src="/images/ana-platform.jpg"
              alt="activeX training"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 28,
              }}
            />
          }
        />
      </Sec>

      <Sec bg={C.offWhite}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Pill>Philosophy</Pill>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              What I believe
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} style={{ height: "100%" }}>
              <Card title={b.title} desc={b.desc} />
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec bg={C.navy} style={{ textAlign: "center", padding: "80px 24px" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -1,
              marginBottom: 16,
            }}
          >
            Ready to train with intelligence?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 520,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Join activeX for $19/month. Full access to every program, tool, and
            resource. Or apply for 1-on-1 coaching with Ana.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <CTA to={PAGE_PATHS.pricing}>Join activeX</CTA>
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
    </>
  );
}
