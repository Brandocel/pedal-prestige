import { useMemo, useState } from "react";
import DotMorphPagination from "./DotMorphPagination";

type Slide = {
  title: string;
  description: string;
  imageSrc: string;
  iconSrc?: string;
};

export default function ItalianExperience() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Iconic Cycling Routes",
        description:
          "Rodamos por algunas de las rutas más emblemáticas de Italia, seleccionadas por su belleza, su historia y su equilibrio entre reto y experiencia.",
        imageSrc: "/src/modules/Home/assets/experience/italian.webp",
        iconSrc: "/src/modules/Home/assets/experience/rueda.png",
      },
      {
        title: "Tuscan Landscapes",
        description:
          "Colinas, viñedos y pueblos medievales. Un ritmo perfecto para disfrutar el camino y la cultura a cada kilómetro.",
        imageSrc: "/src/modules/Home/assets/experience/toscana.webp",
        iconSrc: "/src/modules/Home/assets/experience/compass.webp",
      },
      {
        title: "Gastronomy & Culture",
        description:
          "Sabores locales, paradas con historia y encuentros que vuelven cada día una experiencia completa.",
        imageSrc: "/src/modules/Home/assets/experience/cultura.webp",
        iconSrc: "/src/modules/Home/assets/experience/compass.webp",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = slides.length;
  const current = slides[active];

  const goPrev = () => setActive((p) => (p - 1 + total) % total);
  const goNext = () => setActive((p) => (p + 1) % total);

  return (
    <section className="w-full" style={{ backgroundColor: "#F3F0E9" }}>
      <div className="mx-auto max-w-[1440px] px-[80px] py-[62px] max-lg:px-[40px] max-sm:px-[20px]">
        {/* Header arriba izquierda */}
        <header className="text-[#111827]">
          <h2
            className="text-[44px] leading-[1.05] tracking-[-0.02em] antialiased"
            style={{
              fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
              fontWeight: 700,
            }}
          >
            The italian experience
          </h2>

          <p
            className="mt-[6px] text-[18px] leading-[1.2] opacity-80 antialiased"
            style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
          >
            Beyond the pedal. Into Italy.
          </p>
        </header>

        {/* Layout principal */}
        <div
          className="
            mt-[44px]
            grid grid-cols-12 gap-x-[74px]
            items-stretch
            max-lg:mt-[32px] max-lg:gap-x-[40px]
            max-lg:block
          "
        >
          {/* IZQUIERDA: Imagen grande */}
          <div className="col-span-7">
            <div className="relative w-full overflow-hidden bg-black/5">
              <div className="relative w-full" style={{ aspectRatio: "950 / 520" }}>
                <img
                  src={current.imageSrc}
                  alt={current.title}
                  className="absolute inset-0 h-full w-full object-cover select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <div className="col-span-5 text-[#111827] max-lg:mt-[28px]">
            <div className="h-full flex flex-col max-lg:h-auto">
              {/* Contenido centrado vertical */}
              <div className="my-auto max-lg:my-0">
                <div className="mx-auto w-full max-w-[430px]">
                  {/* Icon centrado */}
                  <div className="flex justify-center">
                    {current.iconSrc ? (
                      <img
                        src={current.iconSrc}
                        alt="icon"
                        className="h-[22px] w-[22px] opacity-80"
                        draggable={false}
                      />
                    ) : (
                      <div className="h-[22px] w-[22px] rounded-full border border-black/30" />
                    )}
                  </div>

                  {/* Título centrado */}
                  <h3
                    className="mt-[18px] text-center text-[30px] leading-[1.05] tracking-[-0.01em] antialiased"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    {current.title}
                  </h3>

                  {/* Texto como diseño */}
                  <p
                    className="mt-[18px] mx-auto max-w-[520px] text-left text-[18px] leading-[1.25] antialiased"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 400,
                      textWrap: "balance",
                    }}
                  >
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Controles abajo */}
              <div className="mt-auto max-lg:mt-[28px]">
                <div className="mx-auto flex w-full max-w-[430px] items-center justify-between pb-[10px]">
                  {/* ✅ Flechas más grandes */}
                  <div className="flex items-center gap-[24px]">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="text-black/60 hover:text-black transition"
                      aria-label="Previous"
                    >
                      <span className="text-[34px] leading-none">←</span>
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      className="text-black/60 hover:text-black transition"
                      aria-label="Next"
                    >
                      <span className="text-[34px] leading-none">→</span>
                    </button>
                  </div>

                  {/*  Puntitos  */}
                  <DotMorphPagination
                    total={total}
                    active={active}
                    onChange={setActive}
                    dotSize={10}          
                    gap={12}              
                    pillHeight={10}       
                    backgroundColor="#F3F0E9" 
                    boldPill
                  />
                </div>
              </div>
            </div>
          </div>
          {/* FIN DERECHA */}
        </div>
      </div>
    </section>
  );
}
