type Props = {
    ornamentSrc?: string;
  };
  
  export default function OurPhilosophy({ ornamentSrc }: Props) {
    return (
      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, #122736 0%, #0E1A24 60%, #0B151E 100%)",
        }}
      >
        <div className="mx-auto max-w-[1440px] h-[600px] px-[80px] max-lg:px-[40px] max-sm:px-[20px]">
          {/* ✅ subimos el contenido */}
          <div className="h-full flex flex-col items-center pt-[78px] max-sm:pt-[52px]">
            {/* Título centrado */}
            <div className="text-center text-[#F3F0E9]">
              <h2
                className="text-[56px] leading-[1.02] tracking-[-0.02em] antialiased max-sm:text-[40px]"
                style={{
                  fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                  fontWeight: 700,
                }}
              >
                Our Philosophy
              </h2>
  
              <p
                className="mt-[10px] text-[29px] leading-[1.1] antialiased opacity-90 max-sm:text-[16px]"
                style={{
                  fontFamily: "Hubballi, system-ui, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                True luxury is how it feels.
              </p>
            </div>
  
            {/* ✅ Contenedor general */}
            <div className="mt-[44px] w-full max-w-[1040px] max-sm:mt-[28px]">
              {/* ✅ BLOQUE CENTRADO con más margen (ya no se carga a la izquierda) */}
              <div className="mx-auto w-full max-w-[900px] text-left text-[#F3F0E9]">
                {/* ✅ Vive... EXACTO en 2 líneas (desktop) */}
                <p
                  className="text-[28px] leading-[1.55] antialiased italic font-bold max-sm:text-[18px]"
                  style={{
                    fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                    textWrap: "auto",
                  }}
                >
                  Vive en la comodidad sin esfuerzo, en los detalles bien pensados y en la
                  <br className="max-sm:hidden" />
                  sensación de estar exactamente donde tienes que estar.
                </p>
  
                {/* ✅ Creemos... con el mismo centrado y corte controlado */}
                <p
                  className="mt-[26px] text-[24px] leading-[1.45] antialiased opacity-90 max-sm:text-[16px]"
                  style={{
                    fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                    fontWeight: 400,
                    textWrap: "auto",
                  }}
                >
                  Creemos en viajar con intención, en reducir el ruido y en diseñar experiencias
                  <br className="max-sm:hidden" />
                  que se sientan naturales, elegantes y profundamente humanas.
                  <br />
                  Aquí, todo tiene un porqué.
                </p>
              </div>
            </div>
  
            {/* Adorno abajo */}
            <div className="mt-auto pb-[58px] flex justify-center max-sm:pb-[36px]">
              {ornamentSrc ? (
                <img
                  src={ornamentSrc}
                  alt="ornament"
                  className="h-[22px] opacity-95 select-none"
                  draggable={false}
                />
              ) : (
                <div className="h-[2px] w-[90px] rounded-full bg-[#F3F0E9]/60" />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  