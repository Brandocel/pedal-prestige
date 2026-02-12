type Props = {
    imageSrc: string;
  
    // Logos (pueden ser PNG/SVG)
    centerLogoSrc: string;
  
    // textos laterales (si quieres cambiarlos)
    leftText?: string;
    rightText?: string;
  
    // alto del banner (opcional)
    height?: number; // px
  };
  
  export default function BrandBanner({
    imageSrc,
    centerLogoSrc,
    height = 360,
  }: Props) {
    return (
      <section className="w-full bg-[#F3F0E9]">
        <div className="mx-auto max-w-[1440px] px-0">
          {/* Banner */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              height,
            }}
          >
            {/* Imagen */}
            <img
              src={imageSrc}
              alt="Brand banner"
              className="absolute inset-0 h-full w-full select-none object-cover"
              draggable={false}
            />
  
            {/* Overlay para que el blanco se lea (muy sutil) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.25) 100%)",
              }}
            />
  
            {/* Contenido centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[900px] px-[24px]">
                {/* Centro: logo */}
                <div className="flex items-center justify-center">
                  <img
                    src={centerLogoSrc}
                    alt="center logo"
                    className="h-[110px] w-auto opacity-95 select-none"
                    draggable={false}
                  />
                </div>
  
                {/* Izq / Der */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
                  <span
                    className="text-white/90 text-[14px] tracking-[0.28em] uppercase"
                    style={{
                      fontFamily: "Hubballi, system-ui, sans-serif",
                    }}
                  >
                  </span>
  
                  <span
                    className="text-white/90 text-[14px] tracking-[0.28em] uppercase"
                    style={{
                      fontFamily: "Hubballi, system-ui, sans-serif",
                    }}
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Responsive tweaks */}
          <style>{`
            @media (max-width: 768px) {
              .brand-banner-logo { height: 78px; }
            }
          `}</style>
        </div>
      </section>
    );
  }
  