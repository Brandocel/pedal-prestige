export type ExperienceOption = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  cta: string;
  priceMXN: number;
};

const EXPERIENCE_OPTIONS_EN: ExperienceOption[] = [
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

const EXPERIENCE_OPTIONS_ES: ExperienceOption[] = [
  {
    id: "full-prestige",
    title: "Experiencia Full Prestige",
    subtitle: "Opcion 1 (recomendada)",
    description:
      "La experiencia mas completa de Pedal Prestige, pensada para viajeros que buscan confort real, servicio impecable y una ruta completamente curada.",
    includes: [
      "Rutas de ciclismo guiadas",
      "Hospedaje boutique",
      "Todos los traslados y logistica",
      "Experiencias gastronomicas y vino",
      "Cobertura profesional de foto y video",
      "Soporte concierge personalizado",
    ],
    cta: "CONTINUAR CON ESTA EXPERIENCIA",
    priceMXN: 0,
  },
  {
    id: "ride-stay",
    title: "Experiencia Ride & Stay",
    subtitle: "Opcion 2",
    description:
      "Una experiencia equilibrada que combina rutas curadas de ciclismo con hospedaje seleccionado y servicios esenciales.",
    includes: [
      "Rutas de ciclismo guiadas",
      "Hospedaje boutique",
      "Traslados entre etapas",
      "Vehiculo de apoyo",
    ],
    cta: "CONTINUAR CON ESTA EXPERIENCIA",
    priceMXN: 0,
  },
  {
    id: "ride-only",
    title: "Experiencia Ride",
    subtitle: "Opcion 3",
    description:
      "Una experiencia enfocada en ciclismo para viajeros que desean sumarse a las rutas gestionando su hospedaje y extras por su cuenta.",
    includes: ["Rutas de ciclismo guiadas", "Vehiculo de apoyo", "Planeacion de ruta y guia diaria"],
    cta: "CONTINUAR CON ESTA EXPERIENCIA",
    priceMXN: 0,
  },
];

export const getExperienceOptions = (language: "es" | "en"): ExperienceOption[] =>
  language === "es" ? EXPERIENCE_OPTIONS_ES : EXPERIENCE_OPTIONS_EN;

export const EXPERIENCE_OPTIONS: ExperienceOption[] = EXPERIENCE_OPTIONS_EN;
