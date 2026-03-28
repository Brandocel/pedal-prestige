import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type AppLanguage = "es" | "en";

interface TranslationTree {
  [key: string]: string | TranslationTree;
}

const STORAGE_KEY = "pedal-prestige-language";

const translations: Record<AppLanguage, TranslationTree> = {
  es: {
    lang: {
      es: "ES",
      en: "EN",
      switchLabel: "Cambiar idioma",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      experience: "Experiencia",
      discover: "Descubrir",
      contact: "Contacto",
      goHome: "Ir a inicio",
      primary: "Navegacion principal",
    },
    footer: {
      contactUs: "Contactanos",
      terms: "Terminos y condiciones",
      privacy: "Politica de privacidad",
      disclaimer: "Disclaimer",
      rights: "Pedal Prestige © Todos los derechos reservados",
    },
    contact: {
      title: "Contactanos",
      subtitle: "Vive Italia de forma diferente.",
      body: "Convocamos un aforo limitado, vive la experiencia.",
      apply: "Aplica para una proxima experiencia",
      fullName: "NOMBRE COMPLETO",
      email: "EMAIL",
      phone: "TELEFONO",
      city: "CIUDAD",
      message: "MENSAJE...",
      cta: "SOLICITA TU EXPERIENCIA",
      subject: "Nueva solicitud desde Pedal Prestige",
    },
    hero: {
      titleLine1: "Donde cada ruta",
      titleLine2: "se vuelve una experiencia",
      text: "Vive la experiencia de rodar en Italia por rutas iconicas, disfrutando de su gastronomia, sus paisajes y cultura. Vive una de las aventuras mas memorables sobre dos ruedas con nosotros.",
      cta: "DESCUBRE EL VIAJE",
    },
    common: {
      continue: "Continuar",
      accepted: "ACEPTADO",
      read: "LEER",
      comingSoon: "PROXIMAMENTE",
    },
  },
  en: {
    lang: {
      es: "ES",
      en: "EN",
      switchLabel: "Switch language",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      discover: "Discover",
      contact: "Contact",
      goHome: "Go to home",
      primary: "Primary navigation",
    },
    footer: {
      contactUs: "Contact us",
      terms: "Terms & conditions",
      privacy: "Privacy policy",
      disclaimer: "Disclaimer",
      rights: "Pedal Prestige © All Rights Reserved",
    },
    contact: {
      title: "Contact us",
      subtitle: "Experience Italy differently.",
      body: "We curate limited groups so every journey feels personal.",
      apply: "Apply for an upcoming experience",
      fullName: "FULL NAME",
      email: "EMAIL",
      phone: "PHONE",
      city: "CITY",
      message: "MESSAGE...",
      cta: "REQUEST YOUR JOURNEY",
      subject: "New inquiry from Pedal Prestige",
    },
    hero: {
      titleLine1: "Where every road",
      titleLine2: "becomes an experience",
      text: "Experience Italy through iconic routes, local cuisine, culture, and unforgettable moments on two wheels.",
      cta: "DISCOVER THE JOURNEY",
    },
    common: {
      continue: "Continue",
      accepted: "ACCEPTED",
      read: "READ",
      comingSoon: "COMING SOON",
    },
  },
};

type I18nContextType = {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: (key: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

const getValueByKey = (tree: TranslationTree, key: string): string | null => {
  const parts = key.split(".");
  let current: string | TranslationTree | undefined = tree;

  for (const part of parts) {
    if (!current || typeof current === "string") {
      return null;
    }
    current = current[part];
  }

  return typeof current === "string" ? current : null;
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    if (typeof window === "undefined") return "es";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : "es";
  });

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextType>(() => {
    return {
      language,
      setLanguage,
      t: (key: string, fallback?: string) => {
        const translated = getValueByKey(translations[language], key);
        if (translated) return translated;
        const spanishFallback = getValueByKey(translations.es, key);
        return spanishFallback || fallback || key;
      },
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
