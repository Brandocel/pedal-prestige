import { useEffect, useRef, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import arrowIcon from "../assets/experiense/→ (1).svg";
import { EXPERIENCE_OPTIONS } from "../data/experienceOptions";

export default function ExperienceChoosePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const element = scrollRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    const element = scrollRef.current;
    if (!element) return;

    const amount = Math.max(280, Math.round(element.clientWidth * 0.72));
    element.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="choose-experience-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto w-full max-w-[1476px] px-[clamp(20px,2.5vw,36px)] py-[clamp(56px,6vh,86px)]">
          <div className="mx-auto text-center text-[#0E1A24]">
            <h1
              className="text-[clamp(36px,2.5vw,48px)] leading-[1]"
              style={{
                fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                fontWeight: 700,
              }}
            >
              Choose Your Experience
            </h1>

            <p
              className="mx-auto mt-[10px] max-w-[980px] text-[clamp(14px,1.11vw,16px)] leading-[1.25] text-[#2E3944]"
              style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
            >
              Select the level of comfort, service and immersion that best suits your journey.
            </p>

            <div className="relative mx-auto mt-[clamp(36px,3.3vw,48px)] w-full max-w-[1396px]">
              <button
                type="button"
                onClick={() => scrollCards("left")}
                disabled={!canScrollLeft}
                aria-label="Previous experiences"
                className="absolute left-[-14px] top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center bg-transparent disabled:cursor-not-allowed disabled:opacity-35"
              >
                <img src={arrowIcon} alt="" aria-hidden="true" className="h-[30px] w-[30px] rotate-180" />
              </button>

              <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="no-scrollbar flex gap-[clamp(16px,1.66vw,24px)] overflow-x-auto pb-[6px]"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {EXPERIENCE_OPTIONS.map((option) => (
                  <article
                    key={option.title}
                    className="flex min-h-[593px] w-[calc((100%-48px)/3)] min-w-[320px] flex-none flex-col border border-[#ECE8E2] bg-[#F8F6F2] p-[clamp(18px,1.66vw,24px)] text-left max-lg:min-h-[520px] max-sm:min-h-[480px]"
                  >
                  <h2
                    className="text-center text-[clamp(24px,1.8vw,34px)] leading-[1]"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 700,
                    }}
                  >
                    {option.title}
                  </h2>

                  <p
                    className="mt-[4px] text-center text-[clamp(12px,0.9vw,13px)] leading-[1.2] text-[#5C6670]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {option.subtitle}
                  </p>

                  <p
                    className="mt-[clamp(14px,1.4vw,20px)] text-[clamp(13px,0.97vw,14px)] leading-[1.3] text-[#2D3742]"
                    style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
                  >
                    {option.description}
                  </p>

                  <p
                    className="mt-[clamp(12px,1.04vw,15px)] text-[clamp(12px,0.83vw,12px)] leading-[1.2] text-[#2C3742]"
                    style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                  >
                    Includes:
                  </p>

                  <ul className="mt-[8px] space-y-[4px] text-[clamp(13px,0.97vw,14px)] leading-[1.25] text-[#2D3742]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}>
                    {option.includes.map((item) => (
                      <li key={item} className="flex items-start gap-[6px]">
                        <span className="mt-[2px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-[clamp(16px,1.6vw,22px)]">
                    <a
                      href={`/experience/checkout?option=${encodeURIComponent(option.id)}`}
                      className="inline-flex h-[clamp(38px,2.77vw,40px)] w-full items-center justify-center border border-[#8A9198] text-[clamp(10px,0.76vw,11px)] tracking-[0.06em] text-[#545B63]"
                      style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
                    >
                      {option.cta}
                    </a>
                  </div>
                </article>
                ))}
              </div>

              <div
                className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-[88px] bg-gradient-to-l from-[var(--prestige-ivory)] via-[rgba(245,241,235,0.92)] to-transparent transition-opacity duration-200 ${
                  canScrollRight ? "opacity-100" : "opacity-0"
                }`}
              />

              <button
                type="button"
                onClick={() => scrollCards("right")}
                disabled={!canScrollRight}
                aria-label="Next experiences"
                className="absolute right-[-14px] top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center bg-transparent disabled:cursor-not-allowed disabled:opacity-35"
              >
                <img src={arrowIcon} alt="" aria-hidden="true" className="h-[30px] w-[30px]" />
              </button>
            </div>

            <p
              className="mx-auto mt-[clamp(24px,2.5vw,36px)] max-w-[1080px] text-center text-[clamp(12px,0.9vw,13px)] leading-[1.25] text-[#2F3A45]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              All experiences are guided, curated and supported by the Pedal Prestige team to ensure quality, safety and attention to detail throughout the journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
