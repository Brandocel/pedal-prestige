import entradaImg from "../assets/whatis/entrada.webp";

export default function WhatIs() {
  return (
    <section className="w-full bg-ivory">
      <div className="mx-auto max-w-[1440px] px-[80px] py-[80px]">
        <div className="grid grid-cols-12 items-center justify-items-center gap-x-[40px]">
          {/* IZQUIERDA */}
          <div className="col-span-5 flex w-full justify-center">
            <img
              src={entradaImg}
              alt="Pedal Prestige Entrance"
              className="select-none w-[287px] h-auto"
              draggable={false}
            />
          </div>

          {/* DERECHA */}
          <div className="col-span-7 flex w-full justify-center text-midnight">
            <div className="w-[550px] text-left">
              {/* TÍTULO (más pequeño + “negrita” visual sin deformar W) */}
              <h2
                className="text-[36px] leading-[1] antialiased"
                style={{
                  fontFamily: "BaskervvilleLocal, Baskervville, serif",
                  fontWeight: 600,
                  textShadow: "0 0 0 currentColor",
                }}
              >
                What is Pedal Prestige?
              </h2>

              {/* SUBTÍTULO (más pequeño) */}
              <p
                className="mt-[6px] text-[20px] leading-[1.1] antialiased"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                More than a ride. A way of traveling.
              </p>

              {/* TEXTO (más pequeño) */}
              <div
                className="mt-[20px] text-[16px] leading-[1.3] antialiased"
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 400,
                }}
              >
                <p className="m-0">
                  Pedal Prestige es una experiencia de travel cycling diseñada para
                  personas que disfrutan el ciclismo, la Convivencia y la buena mesa.
                </p>

                <p className="m-0 mt-[14px]">
                  Cada viaje es una combinación precisa de ciclismo, cultura,
                  hospitalidad y comunidad.
                </p>

                <p className="m-0 mt-[14px]">
                  Nada es genérico. Nada es improvisado.
                  <br />
                  Todo está pensado para crear recuerdos memorables.
                </p>

                <p className="m-0 mt-[14px]">
                  No vendemos tours. Diseñamos experiencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
