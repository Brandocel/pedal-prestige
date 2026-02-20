import { useMemo, useState } from "react";
import DotMorphPagination from "./DotMorphPagination";

import italianImg from "../assets/experience/italian.webp";
import ruedaIcon from "../assets/experience/rueda.png";

import tuscan from "../assets/experience/2-tuscan-landscapes.jpg";
import gastronomic from "../assets/experience/3-gastronomy-and-culture.jpg";
type Slide = {
  title: string;
  description: string; // texto con saltos de línea
  imageSrc: string;
  iconSrc?: string;
};

export default function ItalianExperience() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Iconic Cycling Routes",
        // ✅ 3 líneas EXACTAS como tu imagen
        description:
          "Rodamos por algunas de las rutas más emblemáticas de\n" +
          "Italia, seleccionadas por su belleza, su historia y su equilibrio\n" +
          "entre reto y experiencia.",
        imageSrc: italianImg,
        iconSrc: ruedaIcon,
      },
      {
        title: "Tuscan Landscapes",
        description:
          "Colinas, viñedos y pueblos medievales. Un ritmo perfecto para disfrutar el camino y la cultura a cada kilómetro.",
        imageSrc: tuscan,
        iconSrc: ruedaIcon,
      },
      {
        title: "Gastronomy & Culture",
        description:
          "Sabores locales, paradas con historia y encuentros que vuelven cada día una experiencia completa.",
        imageSrc: gastronomic,
        iconSrc: ruedaIcon,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = slides.length;
  const current = slides[active];

  const goPrev = () => setActive((p) => (p - 1 + total) % total);
  const goNext = () => setActive((p) => (p + 1) % total);

  // Partimos el texto en líneas
  const descriptionLines = current.description.split("\n");

  return (
    <section className="w-full" style={{ backgroundColor: "#F3F0E9" }}>
      <div className="mx-auto max-w-[1440px] px-[80px] py-[62px] max-lg:px-[40px] max-sm:px-[20px]">
        {/* Header */}
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

        {/* Layout */}
        <div
          className="
            mt-[44px]
            grid grid-cols-12 gap-x-[74px]
            items-stretch
            max-lg:mt-[32px] max-lg:gap-x-[40px]
            max-lg:block
          "
        >
          {/* Imagen */}
          <div className="col-span-7">
            <div className="relative w-full overflow-hidden bg-black/5">
              <div className="relative w-full" style={{ aspectRatio: "950 / 520" }}>
                <img
                  src={current.imageSrc}
                  alt={current.title}
                  className="absolute inset-0 h-full w-full object-cover select-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="col-span-5 text-[#111827] max-lg:mt-[28px]">
            <div className="h-full flex flex-col max-lg:h-auto">
              <div className="my-auto max-lg:my-0">
                {/* Ancho suficiente para que no se rompan las líneas */}
                <div className="w-full max-w-[620px]">
                  {/* Icono */}
                  <div className="flex justify-center">
                    {current.iconSrc ? (
                      <img
                        src={current.iconSrc}
                        alt="icon"
                        className="h-[22px] w-[22px] opacity-80 select-none"
                        draggable={false}
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[22px] w-[22px] rounded-full border border-black/30" />
                    )}
                  </div>

                  {/* Título */}
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

                  {/* ✅ Texto JUSTIFICADO con 3 líneas fijas */}
                  <div
                    className="mt-[18px] text-[18px] leading-[1.55] antialiased"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 400,
                    }}
                  >
                    {descriptionLines.map((line, idx) => {
                      const isLast = idx === descriptionLines.length - 1;

                      return (
                        <p
                          key={idx}
                          className="m-0"
                          style={{
                            textAlign: isLast ? "left" : "justify",
                            textAlignLast: isLast ? "left" : "justify",
                          }}
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Controles */}
              <div className="mt-auto max-lg:mt-[28px]">
                <div className="flex w-full items-center justify-between pb-[10px]">
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

                  <DotMorphPagination
  total={total}
  active={active}
  onChange={setActive}
  dotSize={10}
  gap={12}
  pillHeight={10}

  // ✅ aquí sí usamos el color del fondo porque NO es imagen
  backgroundColor="#F3F0E9"

  // ✅ negro (como tu diseño)
  dotBorderColor="rgba(17, 24, 39, 0.45)"   // contorno dots (suave)
  pillBorderColor="rgba(17, 24, 39, 1)"     // pill negro fuerte

  // ✅ para que NO se vea el contorno del dot debajo del pill
  hideActiveDotBorder={true}

  // ✅ margen para que no quede pegado (opcional)
  bottomOffset={0}

  boldPill
/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
