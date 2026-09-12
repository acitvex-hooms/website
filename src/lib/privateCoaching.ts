export const PRIVATE_COACHING_PATH = "/private-coaching";

export const PRIVATE_COACHING_ENQUIRY_FORM = "https://tally.so/r/ZjMV60";

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

/** Stripe Payment Link → After payment → Redirect to /private-coaching/welcome */
export const PRIVATE_COACHING_WELCOME_PATH = "/private-coaching/welcome";

/** YouTube, Vimeo, or direct MP4. Empty shows Ana's portrait until the video is added. */
export const WELCOME_VIDEO_URL = "";

export const ONBOARDING_STEPS = [
  "Welcome",
  "Intake",
  "Health + Consent",
  "activeX",
] as const;

export const TRAINING_YEARS = [
  "New to training",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
] as const;

export const TRAINING_TYPES = [
  "Strength training",
  "Hypertrophy / bodybuilding",
  "Cardio / running",
  "HIIT",
  "CrossFit / functional",
  "Yoga / Pilates",
  "Sport-specific",
  "Rehabilitation",
  "Other",
] as const;

export const SLEEP_OPTIONS = ["Excellent", "Good", "Variable", "Poor"] as const;
export const STRESS_OPTIONS = ["Low", "Moderate", "High", "Very high"] as const;
export const TRAIN_DAYS = ["1", "2", "3", "4", "5", "6", "7"] as const;
export const INDEPENDENT_TRAINING = [
  "Yes",
  "Sometimes",
  "Prefer coached sessions only",
] as const;
export const COACHING_STYLE = [
  "Supportive",
  "Direct",
  "Highly accountable",
  "A combination",
] as const;

export const HEALTH_SCREEN = [
  {
    name: "heartCondition",
    label:
      "Has a doctor ever said you have a heart condition and that you should only do physical activity recommended by a medical professional?",
  },
  {
    name: "chestPainActivity",
    label: "Do you feel pain in your chest when you do physical activity?",
  },
  {
    name: "chestPainRest",
    label:
      "In the past month, have you had chest pain when you were not doing physical activity?",
  },
  {
    name: "dizziness",
    label:
      "Do you lose your balance because of dizziness, or do you ever lose consciousness?",
  },
  {
    name: "jointProblem",
    label:
      "Do you have a bone or joint problem that could be made worse by a change in physical activity?",
  },
  {
    name: "bloodPressureMeds",
    label:
      "Is your doctor currently prescribing medication for your blood pressure or a heart condition?",
  },
  {
    name: "otherReason",
    label:
      "Do you know of any other reason why you should not do physical activity?",
  },
] as const;
