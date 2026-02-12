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
    body = `Viajamos en grupos pequeños, formados por personas que comparten una misma sensibilidad: amor por el ciclismo, respeto por la cultura y aprecio por las experiencias bien hechas.
  Pedal Prestige es una comunidad que se encuentra en el camino, comparte la mesa y crea recuerdos juntos.`,
  }: Props) {
    return (
      <section className="w-full bg-[#F3F0E9]">
        <div className="mx-auto max-w-[1440px] px-[80px] pt-[120px] pb-0 max-lg:px-[40px] max-sm:px-[20px]">

          {/* ✅ ESCENARIO: aquí se arma todo como en Figma */}
          <div
            className="
              relative mx-auto w-full
              max-w-[1280px]
              max-lg:max-w-[900px]
            "
            style={{
              height: 640, // altura del frame del collage (como la maqueta)
            }}
          >
            {/* ✅ IMAGEN GRIS (ATRÁS) */}
            <div
              className="absolute"
              style={{
                // Posición como en tu diseño: atrás, más grande, hacia la derecha
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
                className="h-full w-full object-cover select-none"
                style={{ filter: "grayscale(1)", opacity: 0.9 }}
              />
            </div>
  
            {/* ✅ IMAGEN COLOR (ENCIMA) */}
            <div
              className="absolute"
              style={{
                // Encima de la gris, más a la izquierda y un poco más abajo
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
                className="h-full w-full object-cover select-none"
              />
            </div>
  
            {/* ✅ CARD (ENCIMA Y CENTRADA COMO EL DISEÑO) */}
            <div
              className="absolute bg-[#FFFDFB] text-[#0E1A24]"
              style={{
                width: 488,
                height: 279,
                padding: 32,
                boxSizing: "border-box",
  
                // 👇 CLAVE: NO va a la derecha,
                // va hacia el centro-derecha (como tu guía azul)
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
  
          {/* ✅ Responsive: en pantallas pequeñas (si quieres),
              hacemos stack para que no se rompa */}
          <div className="hidden max-lg:block mt-[28px]">
            <div
              className="bg-[#FFFDFB] text-[#0E1A24] mx-auto"
              style={{
                width: "100%",
                maxWidth: 488,
                padding: 32,
                boxSizing: "border-box",
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
        </div>
      </section>
    );
  }
  