type HeroProps = {
  backgroundSrc?: string;
};

import Header from "../../../components/common/Header/components/Header";

export default function Hero({ backgroundSrc }: HeroProps) {
  return (
    <section className="w-full bg-ivory">
      <div className="relative w-full overflow-hidden">
        {/* ✅ Altura responsive: mobile más corto, desktop igual */}
        <div className="relative h-[680px] sm:h-[740px] md:h-[820px] lg:h-[900px] w-full">
          {/* Fondo */}
          <img
            src={backgroundSrc}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Contenido */}
          <div className="absolute inset-0 z-10">
            <div className="relative mx-auto h-full max-w-[1440px]">
              {/* ✅ Header: desktop exacto / mobile con padding menor */}
              <div className="absolute left-0 top-[18px] sm:top-[22px] lg:top-[28px] z-50 w-full px-4 sm:px-6 md:px-10 lg:px-[80px]">
                <Header variant="home" position="overlay" />
              </div>

              {/* ✅ Texto:
                  - Mobile: centrado/fluido
                  - Desktop (lg): EXACTO como tu diseño (left 80 / top 547 / widths fijos)
              */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-[320px]
                  px-4
                  sm:px-6
                  md:px-10
                  lg:px-0
                  lg:inset-x-auto
                  lg:left-[80px]
                  lg:top-[547px]
                "
              >
                <h1
                  className="
                    w-full
                    max-w-[520px]
                    text-[34px]
                    leading-[1]
                    text-white/90
                    sm:text-[40px]
                    md:text-[44px]
                    lg:w-[550px]
                    lg:text-[48px]
                  "
                  style={{
                    fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                    fontStyle: "italic",
                    fontWeight: 700,
                  }}
                >
                  Where every road
                  <br />
                  becomes an experience
                </h1>

                <p
                  className="
                    mt-4
                    w-full
                    max-w-[560px]
                    text-[16px]
                    leading-[1.15]
                    text-white
                    sm:mt-[18px]
                    sm:text-[18px]
                    md:text-[19px]
                    lg:mt-[20px]
                    lg:w-[494px]
                    lg:text-[20px]
                    lg:leading-[1]
                  "
                  style={{
                    fontFamily: "Hubballi, system-ui, sans-serif",
                    textAlign: "justify",
                  }}
                >
                  Vive la experiencia de rodar en Italia por rutas icónicas, disfrutando de su gastronomía, sus paisajes y cultura. Vive una de las aventuras más memorables sobre dos ruedas con nosotros.
                </p>
              </div>

              {/* ✅ Botón:
                  - Mobile: centrado abajo con padding
                  - Desktop: EXACTO right 80 / bottom 180
              */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-[36px]
                  flex
                  justify-center
                  px-4
                  sm:px-6
                  md:px-10
                  lg:px-0
                  lg:inset-x-auto
                  lg:right-[80px]
                  lg:bottom-[180px]
                  lg:justify-start
                "
              >
                <button
                  className="
                    w-full
                    max-w-[320px]
                    rounded-none
                    border
                    border-white/50
                    px-6
                    py-3
                    text-[15px]
                    tracking-wide
                    text-white
                    hover:border-white
                    hover:text-white
                    sm:max-w-[340px]
                    lg:w-auto
                    lg:max-w-none
                    lg:text-[16px]
                  "
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  DISCOVER THE JOURNEY
                </button>
              </div>

              {/* ✅ Extra opcional (recomendado):
                  En mobile a veces el texto se pierde si la foto es clara.
                  Puedes subir overlay solo en mobile sin cambiar desktop.
              */}
              <div className="absolute inset-0 bg-black/25 lg:bg-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
