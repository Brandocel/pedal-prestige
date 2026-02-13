import logo from "../assets/logo.webp";

type HeaderVariant = "home" | "compact";
type HeaderPosition = "overlay" | "sticky";

type HeaderProps = {
  variant?: HeaderVariant;
  position?: HeaderPosition;
};

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "/experience" },
  { label: "Discover", href: "#discover" },
  { label: "Contact", href: "#contact" },
];

export default function Header({
  variant = "home",
  position = "sticky",
}: HeaderProps) {
  const isHome = variant === "home";

  // ✅ estilos según página
  const wrapperClass = isHome
    ? "bg-transparent" // en home NO queremos franja
    : "backdrop-blur-[10px] bg-black/35";

  const heightClass = isHome ? "h-[120px]" : "h-[90px]";

  // ✅ posición según uso
  const headerPositionClass =
    position === "overlay"
      ? "absolute top-0 left-0 z-50 w-full"
      : "sticky top-0 z-50 w-full";

  return (
    <header className={headerPositionClass}>
      <div className={wrapperClass}>
        <div className="mx-auto max-w-[1440px] px-[80px]">
          <div className={`flex ${heightClass} items-center justify-between`}>
            {/* LOGO */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Pedal Prestige"
                className={isHome ? "h-[40px] w-auto" : "h-[34px] w-auto"}
                draggable={false}
              />
            </div>

            {/* NAV */}
            <nav className="flex items-center gap-[44px]">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white text-[20px] leading-[1]"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
