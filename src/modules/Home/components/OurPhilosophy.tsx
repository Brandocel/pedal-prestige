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
      <div className="mx-auto max-w-[1440px] h-[500px] px-4 sm:px-6 md:px-10 lg:px-[80px]">
        <div className="h-full flex flex-col items-center pt-[78px] max-sm:pt-[52px]">
          {/* Título centrado */}
          <div className="text-center text-[#F3F0E9]">
            <h2
              className="
                text-[30px]
                sm:text-[32px]
                md:text-[34px]
                lg:text-[36px]
                leading-[1]
                antialiased
              "
              style={{
                fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                fontWeight: 700,
              }}
            >
              Our Philosophy
            </h2>

            <p
              className="
                mt-2
                sm:mt-[10px]
                lg:mt-3
                text-[18px]
                sm:text-[19px]
                lg:text-[20px]
                leading-[1.1]
                antialiased
                opacity-90
              "
              style={{
                fontFamily: "Hubballi, system-ui, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              True luxury is how it feels.
            </p>
          </div>

          {/* Contenedor general */}
          <div className="mt-7 sm:mt-8 lg:mt-9 w-full max-w-[1040px]">
            {/* ✅ BLOQUE: centrado sin justificación */}
            <div className="mx-auto w-full max-w-[900px] text-center text-[#F3F0E9]">
              {/* Párrafo 1 */}
              <p
                className="
                  text-[13.5px]
                  sm:text-[14px]
                  md:text-[14.5px]
                  lg:text-[15px]
                  leading-[1.6]
                  sm:leading-[1.55]
                  lg:leading-[1.5]
                  antialiased
                  italic
                  font-semibold
                  tracking-[0.01em]
                "
                style={{
                  fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                  textWrap: "auto",
                }}
              >
                Pedal Prestige cuida los detalles y enfoca tu experiencia en la
                sensación de estar exactamente donde tienes que estar.
                <br className="max-sm:hidden" />
                Nuestro propósito es diseñar momentos que se sientan naturales,
                cercanos y profundamente humanos.
              </p>

              {/* Párrafo 2 */}
              <p
                className="
                  mt-5
                  sm:mt-6
                  lg:mt-7
                  text-[13.5px]
                  sm:text-[14px]
                  md:text-[14.5px]
                  lg:text-[15px]
                  leading-[1.6]
                  sm:leading-[1.55]
                  lg:leading-[1.5]
                  antialiased
                  opacity-90
                  tracking-[0.01em]
                "
                style={{
                  fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                  fontWeight: 400,
                  textWrap: "auto",
                  whiteSpace: "pre-line",
                }}
              >
                Aquí, todo tiene un porqué.
                <br className="max-sm:hidden" />
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
