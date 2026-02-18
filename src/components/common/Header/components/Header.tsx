import logo from "../assets/logo.webp";

type HeaderVariant = "home" | "compact";
type HeaderPosition = "overlay" | "sticky";

type HeaderProps = {
  variant?: HeaderVariant;
  position?: HeaderPosition;
};

type NavItem =
  | { label: string; type: "hash"; href: `#${string}` }
  | { label: string; type: "route"; href: `/${string}` };

const NAV: NavItem[] = [
  { label: "Home", type: "hash", href: "#home" },
  { label: "About", type: "hash", href: "#about" },
  { label: "Experience", type: "route", href: "/experience" }, // ✅ otra página
  { label: "Discover", type: "hash", href: "#discover" },      // ✅ scroll en home
  { label: "Contact", type: "hash", href: "#contact" },
];

export default function Header({
  variant = "home",
  position = "sticky",
}: HeaderProps) {
  const isHome = variant === "home";

  const wrapperClass = isHome ? "bg-transparent" : "backdrop-blur-[10px] bg-black/35";
  const heightClass = isHome ? "h-[120px]" : "h-[90px]";

  const headerPositionClass =
    position === "overlay"
      ? "absolute top-0 left-0 z-50 w-full"
      : "sticky top-0 z-50 w-full";

  const scrollToHash = (hash: `#${string}`) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = isHome ? 120 : 90;
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const target = elementTop - headerOffset - 10;

    window.scrollTo({ top: target, behavior: "smooth" });
    window.history.replaceState(null, "", hash);
  };

  return (
    <header className={headerPositionClass}>
      <div className={wrapperClass}>
        <div className="mx-auto max-w-[1440px] px-[80px] max-lg:px-[40px] max-sm:px-[20px]">
          <div className={`flex ${heightClass} items-center justify-between`}>
            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToHash("#home")}
              className="flex items-center"
              aria-label="Go to Home"
            >
              <img
                src={logo}
                alt="Pedal Prestige"
                className={isHome ? "h-[40px] w-auto" : "h-[34px] w-auto"}
                draggable={false}
              />
            </button>

            {/* NAV */}
            <nav className="flex items-center gap-[44px]">
              {NAV.map((item) => {
                if (item.type === "hash") {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToHash(item.href)}
                      className="text-white/90 hover:text-white text-[20px] leading-[1] transition"
                      style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                    >
                      {item.label}
                    </button>
                  );
                }

                // Route a Experience
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/90 hover:text-white text-[20px] leading-[1] transition"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
