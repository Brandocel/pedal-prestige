export type ExperienceOption = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  cta: string;
  priceMXN: number;
};

export const EXPERIENCE_OPTIONS: ExperienceOption[] = [
  {
    id: "full-prestige",
    title: "Full Prestige Experience",
    subtitle: "Option 1 (recommended)",
    description:
      "The most complete Pedal Prestige experience, designed for travelers seeking real comfort, seamless service and a fully curated journey.",
    includes: [
      "Guided cycling routes",
      "Boutique accommodation",
      "All transfers & logistics",
      "Gastronomy & wine experiences",
      "Professional photo & video coverage",
      "Personalized concierge support",
    ],
    cta: "CONTINUE WITH THIS EXPERIENCE",
    priceMXN: 0,
  },
  {
    id: "ride-stay",
    title: "Ride & Stay Experience",
    subtitle: "Option 2",
    description:
      "A balanced experience combining curated cycling routes with selected accommodation and essential services.",
    includes: [
      "Guided cycling routes",
      "Boutique accommodation",
      "Transfer between stages",
      "Support vehicle",
    ],
    cta: "CONTINUE WITH THIS EXPERIENCE",
    priceMXN: 0,
  },
  {
    id: "ride-only",
    title: "Ride Experience",
    subtitle: "Option 3",
    description:
      "A focused cycling experience for travelers who want to join the rides while managing their own accommodation and extras.",
    includes: ["Guided cycling routes", "Support vehicle", "Route planning & daily guidance"],
    cta: "CONTINUE WITH THIS EXPERIENCE",
    priceMXN: 0,
  },
];
