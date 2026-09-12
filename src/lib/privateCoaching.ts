export const PRIVATE_COACHING_PATH = "/private-coaching";

export const BENEFITS = [
  {
    title: "Private Coaching",
    text: "Scheduled private coaching with real-time feedback, exercise execution, progression and adjustment.",
  },
  {
    title: "Individual Programming",
    text: "A program built around your goals, training history, movement quality, schedule and current capacity.",
  },
  {
    title: "Movement Analysis",
    text: "Your movement and exercise execution are assessed while you train — not through a generic one-size-fits-all test.",
  },
  {
    title: "Progress Tracking",
    text: "Training performance and relevant progress markers are recorded so decisions are based on what is actually happening.",
  },
  {
    title: "Program Adjustments",
    text: "Your program evolves as you do. Exercises, loading, volume and priorities are adjusted when the data or your body says they should be.",
  },
  {
    title: "Digital Coaching Support",
    text: "Between sessions, activeX gives us a private space for relevant training questions, exercise videos, feedback and coaching support.",
  },
  {
    title: "Progress Reviews",
    text: "We periodically review what is improving, what is not, and whether your goals or priorities have changed before planning the next block.",
  },
  {
    title: "Your Own activeX Profile",
    text: "Each client has an individual account, program, training history and progress record — including couples and families training together.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Private Coaching Intake",
    text: "Before training begins, you'll complete a private questionnaire covering your goals, training history, current routine, injuries or limitations, lifestyle and previous training experience.",
  },
  {
    n: "02",
    title: "Baseline Coaching Session",
    text: "Your first session combines training with a practical movement and performance baseline. Rather than putting you through a generic fitness test, I'll assess the movements and performance markers relevant to your goals while we train.",
  },
  {
    n: "03",
    title: "Your Individual Program",
    text: "Using your intake information and what I observe during your baseline session, I'll build and refine your individual training program inside activeX.",
  },
  {
    n: "04",
    title: "Coach + Track",
    text: "Your private sessions, exercise performance and progression are tracked through activeX so decisions aren't based on guesswork.",
  },
  {
    n: "05",
    title: "Digital Coaching Support",
    text: "Between sessions, activeX gives us a private space for relevant training questions, exercise videos, feedback and coaching support.",
  },
  {
    n: "06",
    title: "Review + Adjust",
    text: "We'll periodically review what's improving, what's not, and whether your goals or priorities have changed — then adjust the next training block accordingly.",
  },
] as const;

export const WHO_OPTIONS = ["Myself", "Couple", "Family", "Other"] as const;
export const FREQUENCY_OPTIONS = [
  "1 session / week",
  "2 sessions / week",
  "3+ sessions / week",
  "To be discussed",
] as const;
export const TIMEFRAME_OPTIONS = [
  "Immediately",
  "Within 2 weeks",
  "Within a month",
  "Flexible",
] as const;
