type HeroProps = {
  backgroundSrc?: string;
};

import Header from "../../../components/common/Header/components/Header";

export default function Hero({ backgroundSrc }: HeroProps) {
  return (
    <section className="w-full bg-ivory">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[900px] w-full">
          {/* Fondo */}
          <img
            src={backgroundSrc}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* ✅ Contenido alineado al layout */}
          <div className="absolute inset-0 z-10">
            <div className="relative mx-auto h-full max-w-[1440px]">
              {/* ✅ Header encima del hero */}
              <div className="absolute left-0 top-[28px] z-50 w-full px-[80px]">
                <Header variant="home" position="overlay" />
              </div>

              {/* ✅ Texto EXACTO con margen 80 */}
              <div className="absolute left-[80px] top-[547px]">
                <h1
                  className="w-[550px] text-[48px] leading-[1] text-white/90"
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
                  className="mt-[20px] w-[494px] text-[20px] leading-[1] text-white"
                  style={{
                    fontFamily: "Hubballi, system-ui, sans-serif",
                    textAlign: "justify",
                  }}
                >
                  Vive la experiencia de rodar en Italia en rutas icónicas,
                  gastronomía, vino, paisajes y cultura. Experiencias cuidadosamente
                  curadas para quienes buscan algo más que solo pedalear.
                </p>
              </div>

              {/* ✅ Botón EXACTO con margen 80 */}
              <div className="absolute right-[80px] bottom-[180px]">
                <button
                  className="rounded-none border border-white/50 px-6 py-3 text-[16px] tracking-wide text-white hover:border-white hover:text-white"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  DISCOVER THE JOURNEY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
