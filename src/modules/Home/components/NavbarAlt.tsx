import bgNavAlt from "../assets/navaralt/photo.jpg";
import logoNavAlt from "../assets/navaralt/logo (1).svg";
import LanguageToggle from "../../../components/common/LanguageToggle";
import { useI18n } from "../../../i18n/i18n";

type NavLink = {
  label: string;
  href: string;
};

type NavbarAltProps = {
  links?: NavLink[];
  className?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Discover", href: "/discover" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarAlt({ links = DEFAULT_LINKS, className = "" }: NavbarAltProps) {
  const { t } = useI18n();
  const computedLinks: NavLink[] = links === DEFAULT_LINKS
    ? [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.experience"), href: "/experience" },
        { label: t("nav.discover"), href: "/discover" },
        { label: t("nav.contact"), href: "/contact" },
      ]
    : links;

  return (
    <header className={`w-full ${className}`}>
      <div className="relative h-[clamp(84px,7.29vw,105px)] w-full overflow-hidden">
        <img
          src={bgNavAlt}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <div className="absolute inset-0 bg-[#0E1A24]/35" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[clamp(20px,5.55vw,80px)]">
          <a href="/" className="shrink-0" aria-label={t("nav.goHome")}>
            <img
              src={logoNavAlt}
              alt="Pedal Prestige"
              className="h-auto w-[clamp(112px,8vw,150px)]"
              draggable={false}
            />
          </a>

          <nav aria-label={t("nav.primary")}>
            <ul className="flex items-center gap-[clamp(14px,1.75vw,25px)]">
              {computedLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[clamp(12px,1.11vw,16px)] leading-[1] text-[var(--prestige-ivory)] transition-opacity duration-200 hover:opacity-75"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <LanguageToggle className="border-[var(--prestige-ivory)]/55" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
