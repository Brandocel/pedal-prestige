type Props = {
    imageFront: string;
    imageBack: string;
  
    title?: string;
    subtitle?: string;
    bullets?: string[];
  };
  
  export default function WhoItsForSection({
    imageFront,
    imageBack,
    title = "Who it’s for",
    subtitle = "Designed for those who value the journey.",
    bullets = [
      "Ciclistas recreativos y avanzados",
      "Viajeros con sensibilidad cultural y gastronómica",
      "Personas que buscan experiencias auténticas, no turismo ordinario",
      "Quienes prefieren calidad, diseño y curaduría sobre cantidad",
    ],
  }: Props) {
    return (
      <section className="w-full bg-[#F3F0E9]">
        <div className="mx-auto max-w-[1440px] px-[80px] py-[120px] max-lg:px-[40px] max-sm:px-[20px]">
          <div className="mx-auto w-full max-w-[1280px]">
            {/* ✅ SOLO desktop/tablet grande: escenario absoluto */}
            <div
              className="relative w-full max-lg:hidden"
              style={{
                // ✅ En vez de height fijo: mantenemos proporción como el diseño
                aspectRatio: "1280 / 520",
                // por si algún browser no respeta aspect-ratio en tu setup:
                height: "auto",
              }}
            >
              {/* ✅ CARD izquierda (MISMA POSICIÓN) */}
              <div
                className="absolute bg-[#FFFDFB] text-[#0E1A24]"
                style={{
                  // ✅ tamaño responsivo sin cambiar composición
                  width: "clamp(360px, 38vw, 488px)",
                  height: "clamp(240px, 22vw, 279px)",
                  padding: "clamp(22px, 2vw, 32px)",
                  boxSizing: "border-box",
  
                  // ⛔️ NO tocamos posición
                  left: "13%",
                  top: "20%",
                  zIndex: 10,
                }}
              >
                <h3
                  className="leading-none"
                  style={{
                    fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                    fontWeight: 600,
                    fontSize: "clamp(22px, 2.1vw, 28px)",
                    lineHeight: "100%",
                  }}
                >
                  {title}
                </h3>
  
                <p
                  className="mt-[6px]"
                  style={{
                    fontFamily: "Hubballi, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(16px, 1.6vw, 20px)",
                    lineHeight: "100%",
                  }}
                >
                  {subtitle}
                </p>
  
                <ul
                  className="mt-[18px] space-y-[6px]"
                  style={{
                    fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.2vw, 16px)",
                    lineHeight: "1.35",
                    paddingLeft: 18,
                  }}
                >
                  {bullets.map((b, i) => (
                    <li key={i} style={{ listStyleType: "disc" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* ✅ COLLAGE derecha (MISMA POSICIÓN) */}
              <div
                className="absolute"
                style={{
                  left: "16%",
                  top: "0%",
                  width: "64%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                {/* Back */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    left: "38%",
                    top: "0%",
                    width: "70%",
                    height: "82%",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={imageBack}
                    alt="background"
                    draggable={false}
                    className="h-full w-full select-none"
                    style={{
                      objectFit: "cover",
                      opacity: 0.95,
                      // ✅ para que al reducir se recorte “bonito”
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
  
                {/* Front */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    left: "58%",
                    top: "14%",
                    width: "62%",
                    height: "64%",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={imageFront}
                    alt="front"
                    draggable={false}
                    className="h-full w-full select-none"
                    style={{
                      objectFit: "cover",
                      // ✅ recorte estable (ajústalo si lo necesitas)
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
              </div>
            </div>
  
            {/* ✅ Mobile / tablet: stack (ya lo tenías) */}
            <div className="hidden max-lg:block mt-[28px]">
              <div className="grid gap-[18px]">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={imageBack}
                    alt="background"
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
  
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={imageFront}
                    alt="front"
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
  
                <div
                  className="bg-[#FFFDFB] text-[#0E1A24] mx-auto w-full"
                  style={{ maxWidth: 488, padding: 32, boxSizing: "border-box" }}
                >
                  <h3
                    className="leading-none"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 600,
                      fontSize: 28,
                      lineHeight: "100%",
                    }}
                  >
                    {title}
                  </h3>
  
                  <p
                    className="mt-[6px]"
                    style={{
                      fontFamily: "Hubballi, system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "100%",
                    }}
                  >
                    {subtitle}
                  </p>
  
                  <ul
                    className="mt-[18px] space-y-[6px]"
                    style={{
                      fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "1.35",
                      paddingLeft: 18,
                    }}
                  >
                    {bullets.map((b, i) => (
                      <li key={i} style={{ listStyleType: "disc" }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* FIN responsive */}
          </div>
        </div>
      </section>
    );
  }
  