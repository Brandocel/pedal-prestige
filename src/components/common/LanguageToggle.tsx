import { useI18n } from "../../i18n/i18n";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      className={`inline-flex items-center border border-white/55 text-[11px] leading-none ${className}`}
      style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
      aria-label={t("lang.switchLabel")}
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`px-[8px] py-[6px] transition ${language === "es" ? "bg-white/90 text-[#0E1A24]" : "text-white/90"}`}
      >
        {t("lang.es")}
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-[8px] py-[6px] transition ${language === "en" ? "bg-white/90 text-[#0E1A24]" : "text-white/90"}`}
      >
        {t("lang.en")}
      </button>
    </div>
  );
}
