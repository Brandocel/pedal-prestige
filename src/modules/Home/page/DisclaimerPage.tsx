import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <main className=" bg-[var(--prestige-ivory)]" id="disclaimer-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto box-border w-full max-w-[1440px] px-[clamp(20px,5.55vw,80px)] py-[clamp(40px,4.86vw,70px)] text-[#0E1A24]">
          <div className="mx-auto max-w-[1320px]">
            <h1
              className="text-[clamp(38px,3.33vw,48px)] leading-[1]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              DISCLAIMER
            </h1>

            <p
              className="mt-[clamp(24px,2.5vw,36px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              Última actualización:&nbsp;17 de febrero de 2026.
            </p>

            <p
              className="mt-[clamp(22px,2.2vw,32px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              La presente declaración de <strong>Deslinde de Responsabilidad</strong> (en adelante, el "Disclaimer") rige el uso del sitio web de <strong>PEDAL PRESTIGE</strong> y la contratación de sus servicios de <em>travel experience</em> y turismo deportivo. Al acceder, navegar o realizar una reserva a través de nuestros canales, el usuario (en adelante, el "Usuario" o "Participante") reconoce haber leído, comprendido y aceptado las siguientes limitaciones de responsabilidad:
            </p>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                1. NATURALEZA DE ALTO RIESGO DE LA ACTIVIDAD
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                El Usuario reconoce expresamente que el ciclismo de ruta, el cicloturismo y las actividades al aire libre en terrenos variados y vías públicas (incluso en destinos desarrollados como Italia) son actividades que conllevan <strong>riesgos inherentes, previsibles e imprevisibles</strong>. Estos riesgos incluyen, de manera enunciativa más no limitativa: caídas, colisiones con vehículos o peatones, fallas mecánicas repentinas, condiciones climáticas adversas, terrenos irregulares, fatiga extrema y lesiones físicas que pueden ir desde leves hasta graves, incluyendo la invalidez o el fallecimiento. <strong>Pedal Prestige no garantiza la seguridad absoluta del Participante</strong> y este último asume voluntaria e irrevocablemente todos los riesgos asociados a su participación.
              </p>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                2. CONDICIÓN FÍSICA Y MÉDICA
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                La información proporcionada en este sitio web sobre los niveles de dificultad de las rutas (ej. "Intermedio", "Avanzado") es meramente referencial. Es <strong>responsabilidad exclusiva del Usuario</strong> asegurarse de que goza de una salud óptima y una condición física adecuada para soportar el esfuerzo cardiovascular y muscular requerido. <strong>Pedal Prestige se deslinda de cualquier responsabilidad</strong> por problemas de salud, infartos, lesiones musculares, descompensaciones o cualquier evento médico que el Participante sufra antes, durante o después del viaje, derivado de su falta de preparación física o de condiciones preexistentes no reportadas. Se recomienda encarecidamente una evaluación médica completa antes de reservar.
              </p>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                3. INTERMEDIACIÓN Y SERVICIOS DE TERCEROS
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                Pedal Prestige actúa únicamente en calidad de agente organizador e intermediario entre el Usuario y los proveedores finales de servicios en Italia (hoteles, compañías de transporte, guías locales, arrendadoras de bicicletas, aerolíneas, restaurantes, etc.). En consecuencia, <strong>Pedal Prestige no asume responsabilidad alguna, ni solidaria ni subsidiaria, por:</strong>
              </p>
              <ul className="list-disc space-y-[4px] pl-[24px] text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                <li>Incumplimientos, cancelaciones, sobreventas (overbooking) o quiebras de dichos proveedores.</li>
                <li>Pérdida, robo o daño de equipaje bajo custodia de aerolíneas u hoteles.</li>
                <li>Accidentes ocurridos en vehículos de transporte terrestre contratados a terceros.</li>
                <li>La calidad o seguridad de las bicicletas rentadas a proveedores locales (aunque la empresa velará por seleccionar proveedores de prestigio).</li>
              </ul>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                4. EXACTITUD DE LA INFORMACIÓN Y DERECHO DE MODIFICACIÓN
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                Aunque nos esforzamos por mantener la precisión del contenido, <strong>Pedal Prestige no garantiza</strong> que las descripciones de las rutas, fotografías de hoteles, mapas o itinerarios mostrados en el sitio web sean representaciones exactas o estén libres de errores tipográficos. La empresa se reserva el derecho absoluto de <strong>modificar, alterar o cancelar</strong> cualquier itinerario, fecha, precio o ruta publicada en el sitio web sin previo aviso, cuando las circunstancias operativas, climáticas o de seguridad así lo requieran. Las imágenes utilizadas son ilustrativas y pueden no reflejar las condiciones exactas al momento del viaje.
              </p>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                5. SEGUROS Y AUTO-RESPONSABILIDAD
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                El Usuario entiende que <strong>es obligatorio viajar con un seguro de gastos médicos mayores internacional</strong> que cubra específicamente accidentes deportivos y ciclismo. <strong>Pedal Prestige se deslinda de cualquier gasto</strong> médico, hospitalario, farmacéutico, de repatriación o funerario en el que incurra el Usuario. La falta de contratación de dicho seguro es imputable únicamente al Usuario.
              </p>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                6. JURISDICCIÓN Y LEGISLACIÓN APLICABLE
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                Para la interpretación y cumplimiento de este Deslinde de Responsabilidad, así como para cualquier controversia que se derive del uso de este sitio web o de los servicios contratados, las partes se someten expresamente a las leyes federales vigentes en los <strong>Estados Unidos Mexicanos</strong> y a la jurisdicción de los tribunales competentes en la ciudad de <strong>Cancún, Quintana Roo</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros, o por la ubicación donde ocurran los hechos (incluyendo Italia).
              </p>
            </article>

            <p
              className="mt-[clamp(28px,2.9vw,42px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              Este sitio web y sus contenidos se ofrecen "tal cual" (as is), sin garantías de ningún tipo, expresas o implícitas. Al continuar navegando, usted libera a Pedal Prestige, sus socios, empleados y representantes de cualquier reclamo o demanda.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
