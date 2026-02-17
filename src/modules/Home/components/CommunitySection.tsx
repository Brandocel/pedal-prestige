type Props = {
  imageFront: string; // color (encima)
  imageBack: string;  // gris (atrás)
  title?: string;
  subtitle?: string;
  body?: string;
};

export default function CommunitySection({
  imageFront,
  imageBack,
  title = "Community",
  subtitle = "Like-minded travelers.",
  body = `Convocamos grupos pequeños, formados por personas que comparten una misma sensibilidad: pasión por el ciclismo, respeto por la cultura y que saben disfrutar de la vida.
Pedal Prestige te invita a formar parte del camino, a sentarte a la mesa y a crear recuerdos juntos.`,
}: Props) {
  return (
    <section className="w-full bg-[#F3F0E9]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[80px] pt-16 sm:pt-20 lg:pt-[120px] pb-0">

        {/* ========================= */}
        {/* ✅ DESKTOP (lg+) EXACTO */}
        {/* ========================= */}
        <div
          className="relative mx-auto hidden lg:block w-full max-w-[1280px]"
          style={{ height: 640 }}
        >
          {/* IMAGEN GRIS (ATRÁS) */}
          <div
            className="absolute"
            style={{
              left: "9%",
              top: "0%",
              width: "60%",
              height: "85%",
              zIndex: 1,
            }}
          >
            <img
              src={imageBack}
              alt="background"
              draggable={false}
              className="h-full w-full select-none object-cover"
              style={{ filter: "grayscale(1)", opacity: 0.9 }}
            />
          </div>

          {/* IMAGEN COLOR (ENCIMA) */}
          <div
            className="absolute"
            style={{
              left: "3%",
              top: "9%",
              width: "50%",
              height: "62%",
              zIndex: 3,
            }}
          >
            <img
              src={imageFront}
              alt="front"
              draggable={false}
              className="h-full w-full select-none object-cover"
            />
          </div>

          {/* CARD */}
          <div
            className="absolute bg-[#FFFDFB] text-[#0E1A24]"
            style={{
              width: 488,
              height: 279,
              padding: 32,
              boxSizing: "border-box",
              left: "56%",
              top: "20%",
              zIndex: 10,
            }}
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

            <p
              className="mt-[18px]"
              style={{
                fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.35",
                textAlign: "justify",
                whiteSpace: "pre-line",
              }}
            >
              {body}
            </p>
          </div>
        </div>

        {/* ================================= */}
        {/* ✅ MOBILE/TABLET ( < lg ) STACK */}
        {/* ================================= */}
        <div className="block lg:hidden">
          {/* Collage en vertical pero con estética similar */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* Fondo gris */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <img
                src={imageBack}
                alt="background"
                draggable={false}
                className="absolute inset-0 h-full w-full select-none object-cover"
                style={{ filter: "grayscale(1)", opacity: 0.9 }}
              />
            </div>

            {/* Imagen color encima (tipo “overlap”) */}
            <div className="-mt-10 sm:-mt-12 px-3 sm:px-4">
              <div className="relative w-full overflow-hidden shadow-sm" style={{ aspectRatio: "16/11" }}>
                <img
                  src={imageFront}
                  alt="front"
                  draggable={false}
                  className="absolute inset-0 h-full w-full select-none object-cover"
                />
              </div>
            </div>

            {/* Card debajo */}
            <div className="mt-6 sm:mt-7 bg-[#FFFDFB] text-[#0E1A24] px-5 py-6 sm:px-7 sm:py-7">
              <h3
                className="leading-none text-[26px] sm:text-[28px]"
                style={{
                  fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                  fontWeight: 600,
                  lineHeight: "100%",
                }}
              >
                {title}
              </h3>

              <p
                className="mt-[6px] text-[18px] sm:text-[20px]"
                style={{
                  fontFamily: "Hubballi, system-ui, sans-serif",
                  fontWeight: 400,
                  lineHeight: "100%",
                }}
              >
                {subtitle}
              </p>

              <p
                className="mt-4 text-[15px] sm:text-[16px]"
                style={{
                  fontFamily: "BaskervilleLocal, Libre Baskerville, serif",
                  fontWeight: 400,
                  lineHeight: "1.35",
                  textAlign: "justify",
                  whiteSpace: "pre-line",
                }}
              >
                {body}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
