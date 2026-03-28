import entradaImg from "../assets/whatis/entrada.webp";
import { useI18n } from "../../../i18n/i18n";

export default function WhatIs() {
  const { language } = useI18n();

  return (
    <section className="w-full bg-ivory">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[80px] py-10 sm:py-14 lg:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-items-center gap-y-10 lg:gap-y-0 lg:gap-x-[40px]">
          {/* IZQUIERDA */}
          <div className="lg:col-span-5 flex w-full justify-center">
            <img
              src={entradaImg}
              alt={language === "es" ? "Entrada Pedal Prestige" : "Pedal Prestige Entrance"}
              className="
                select-none
                h-auto
                w-[220px]
                sm:w-[250px]
                md:w-[270px]
                lg:w-[287px]
              "
              draggable={false}
            />
          </div>

          {/* DERECHA */}
          <div className="lg:col-span-7 flex w-full justify-center text-midnight">
            <div className="w-full max-w-[560px] lg:w-[550px] text-left">
              {/* TÍTULO (igual) */}
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
                  fontFamily: "BaskervvilleLocal, Baskervville, serif",
                  fontWeight: 600,
                  textShadow: "0 0 0 currentColor",
                }}
              >
                {language === "es" ? "Qué es Pedal Prestige?" : "What is Pedal Prestige?"}
              </h2>

{/* SUBTÍTULO (cerca del título) */}
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
  "
  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
>
  {language === "es" ? "Más que una rodada. Una forma de viajar." : "More than a ride. A way of traveling."}
</p>

{/* ✅ BODY (más espacio desde el subtítulo) */}
<div
  className="
    mt-7
    sm:mt-8
    lg:mt-9

    text-[13.5px]
    sm:text-[14px]
    md:text-[14.5px]
    lg:text-[15px]

    leading-[1.6]
    sm:leading-[1.55]
    lg:leading-[1.5]

    text-midnight/75
    sm:text-midnight/80
    lg:text-midnight/85

    tracking-[0.01em]
    antialiased
  "
  style={{
    fontFamily: "Libre Baskerville, serif",
    fontWeight: 400,
  }}
>
  {/* párrafos */}
</div>


              {/* TEXTO (más ligero + más pequeño) */}
              <div
                className="
                  mt-4
                  sm:mt-[18px]
                  lg:mt-[20px]

                  text-[13.5px]
                  sm:text-[14px]
                  md:text-[14.5px]
                  lg:text-[15px]

                  leading-[1.6]
                  sm:leading-[1.55]
                  lg:leading-[1.5]

                  text-midnight/75
                  sm:text-midnight/80
                  lg:text-midnight/85

                  tracking-[0.01em]
                  antialiased
                "
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 400,
                }}
              >
                <p className="m-0">
                {language === "es"
                  ? "Pedal Prestige ofrece una experiencia de travel cycling para personas que disfrutan el ciclismo, la comodidad, la convivencia y la buena mesa."
                  : "Pedal Prestige offers a travel cycling experience for people who value cycling, comfort, community and great dining."}
                </p>

                <p className="m-0 mt-3 lg:mt-[14px]">
                {language === "es"
                  ? "Cada viaje es una combinación precisa de cultura, hospitalidad y comunidad."
                  : "Each journey is a precise blend of culture, hospitality and community."}
                </p>

                <p className="m-0 mt-3 lg:mt-[14px]">
                {language === "es"
                  ? "Nada es genérico. Nada es improvisado."
                  : "Nothing is generic. Nothing is improvised."}
                  <br />
                  {language === "es"
                    ? "Todo está pensado para crear recuerdos memorables sobre la bicicleta y fuera de ella."
                    : "Everything is designed to create memorable moments on and off the bike."}
                </p>

                <p className="m-0 mt-3 lg:mt-[14px]">
                {language === "es"
                  ? 'No "organizamos tours". Diseñamos experiencias únicas.'
                  : 'We do not "run tours". We design unique experiences.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
