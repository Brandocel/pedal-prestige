import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="terms-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto box-border w-full max-w-[1440px] px-[clamp(20px,5.55vw,80px)] py-[clamp(40px,4.86vw,70px)] text-[#0E1A24]">
          <div className="mx-auto max-w-[1320px]">
            <h1
              className="text-[clamp(38px,3.33vw,48px)] leading-[1]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              TÉRMINOS Y CONDICIONES
            </h1>

            <p
              className="mt-[clamp(24px,2.5vw,36px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              Última actualización:&nbsp;16 de febrero de 2026.
            </p>

            <p
              className="mt-[clamp(22px,2.2vw,32px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              Los presentes Términos y Condiciones (en adelante, los "Términos") constituyen un acuerdo legal vinculante entre <strong>PEDAL PRESTIGE</strong> (en adelante, el "Organizador" o la "Empresa") y la persona física o jurídica que contrata los servicios (en adelante, el "Cliente" o el "Viajero"). La adquisición de cualquier paquete turístico, experiencia de ciclismo o servicio relacionado implica la lectura, comprensión y aceptación incondicional de las siguientes cláusulas:
            </p>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                1. ACEPTACIÓN DE CONDICIONES Y NATURALEZA DEL SERVICIO
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>1.1. Perfeccionamiento del Contrato:</strong> Al efectuar una reserva con el Organizador, el Cliente acepta expresamente someterse a los presentes Términos. Se entiende que el pago del depósito de reserva constituye la prueba fehaciente de la aceptación total de estas condiciones.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>1.2. Reconocimiento de Riesgo:</strong> El Cliente reconoce y acepta que las experiencias de "cycling travel" (viajes de ciclismo) involucran actividades físicas exigentes y riesgos inherentes, incluyendo, pero no limitándose a: caídas, colisiones, tráfico vehicular, condiciones climáticas adversas y fatiga física.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>1.3. Requisitos de Participación:</strong> Para la participación efectiva en el viaje, es condición sine qua non que el Cliente:
                </p>
                <ul className="list-disc space-y-[4px] pl-[24px] text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <li>Firme el documento de "Liberación y Exención de Responsabilidad Civil".</li>
                  <li>Acepte íntegramente los presentes Términos.</li>
                  <li>Realice el pago del depósito correspondiente en los plazos estipulados.</li>
                </ul>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                2. POLÍTICA DE RESERVAS Y RÉGIMEN DE PAGOS
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>2.1. Depósito de Confirmación:</strong> Para garantizar la reserva de una plaza, el Cliente deberá abonar un depósito por persona. Este monto tiene carácter no reembolsable y se considera una contraprestación por los servicios administrativos, logísticos y de planificación previa ejecutados por el Organizador desde el momento de la reserva. Dicho monto será deducido del costo total del viaje.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>2.2. Liquidación Total:</strong> El pago del saldo restante del viaje deberá estar cubierto en su totalidad antes de la fecha de salida programada, recomendándose un plazo de noventa (90) días previos. Reservas de Última Hora: Para reservas efectuadas dentro del periodo de 90 días previos a la salida, el pago total será exigible de manera inmediata al momento de la confirmación.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>2.3. Incumplimiento de Pago:</strong> La falta de recepción del pago final en los plazos establecidos facultará a Pedal Prestige para cancelar la reserva unilateralmente, reteniendo el depósito en concepto de penalización por incumplimiento de contrato.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>2.4. Medios de Pago:</strong> Se aceptarán transferencias bancarias, tarjetas de crédito/débito y otros métodos digitales expresamente autorizados por la Empresa. Queda estrictamente prohibido el pago en efectivo para reservas de carácter internacional, en cumplimiento con las normativas de prevención de lavado de activos.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                3. PRECIOS Y TARIFAS
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>3.1. Base de Cotización:</strong> Todos los precios publicados son por persona y están calculados en base a ocupación doble, salvo que se especifique lo contrario. Los costos están sujetos a variaciones dependientes de la categoría hotelera, complejidad de la ruta y el número final de integrantes del grupo.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>3.2. Suplemento Individual:</strong> Aquellos viajeros que requieran habitación privada deberán abonar el "Suplemento Individual" (Single Supplement) vigente al momento de la reserva.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>3.3. Inexistencia de Reembolsos Parciales:</strong> No se realizarán ajustes, descuentos ni reembolsos por servicios no utilizados voluntariamente por el Cliente, incluyendo: llegadas tardías, salidas anticipadas o la decisión de no participar en determinadas rodadas o actividades programadas.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                4. POLÍTICA DE CANCELACIÓN POR PARTE DEL CLIENTE
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>4.1. Naturaleza de los Servicios:</strong> Dado que los viajes de ciclismo requieren la contratación anticipada de proveedores, hoteles y transporte, las políticas de cancelación son estrictas e inamovibles.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>4.2. Esquema de Penalización:</strong> En caso de desistimiento por parte del Cliente, se aplicarán los siguientes cargos o créditos según la antelación de la notificación escrita:
                </p>
                <ul className="list-disc space-y-[4px] pl-[24px] text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <li><strong>Más de 90 días antes de la salida:</strong> Se otorgará un Crédito de Viaje por el monto abonado (menos gastos administrativos, si aplicaren).</li>
                  <li><strong>Entre 60 y 90 días antes de la salida:</strong> Reembolso parcial sujeto a las deducciones por gastos incurridos.</li>
                  <li><strong>Menos de 60 días antes de la salida:</strong> Tarifa 100% no reembolsable. El Cliente perderá la totalidad de los montos abonados.</li>
                </ul>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>4.3. Condiciones del Crédito de Viaje:</strong> Los créditos otorgados son personales e intransferibles y deberán ser utilizados en un nuevo servicio de Pedal Prestige dentro de un plazo perentorio de doce (12) meses contados a partir de la fecha de cancelación original.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                5. MODIFICACIONES Y CAMBIOS DE FECHA
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>5.1. Solicitud de Cambios:</strong> Cualquier solicitud de cambio de fecha o destino estará sujeta a disponibilidad y a la aprobación discrecional de Pedal Prestige.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>5.2. Costos Asociados:</strong> Dichos cambios podrán generar cargos administrativos adicionales y el Cliente deberá cubrir cualquier diferencia tarifaria vigente al momento del cambio.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>5.3. Limitación:</strong> Se permite únicamente un (1) cambio por reserva. Cambios subsiguientes serán tratados como una cancelación y nueva reserva.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                6. MODIFICACIONES O CANCELACIONES POR PARTE DEL ORGANIZADOR
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>6.1. Derecho de Modificación:</strong> Pedal Prestige se reserva el derecho de alterar rutas, itinerarios, alojamientos, horarios y actividades sin previo aviso cuando circunstancias de fuerza mayor, clima, seguridad, logística o causas ajenas a la empresa lo justifiquen.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>6.2. Fuerza Mayor:</strong> En el supuesto de que el viaje deba cancelarse en su totalidad por causas de fuerza mayor (pandemias, disturbios civiles, desastres naturales, etc.), la Empresa ofrecerá un Crédito de Viaje para futuras reservas. No procederán reembolsos en efectivo bajo estas circunstancias.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>6.3. Limitación de Responsabilidad por Terceros:</strong> Pedal Prestige no será responsable, bajo ninguna circunstancia, por los costos incurridos por el Cliente en relación con vuelos aéreos, alojamientos externos al tour, o gastos personales adicionales derivados de dichas modificaciones o cancelaciones.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                7. DOCUMENTACIÓN MIGRATORIA Y LEGAL
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>7.1. Responsabilidad Exclusiva:</strong> Es responsabilidad exclusiva e indelegable del Cliente contar con pasaporte vigente (con la validez requerida por las autoridades italianas/europeas), visas, permisos sanitarios y seguros personales necesarios.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>7.2. Consecuencias:</strong> La imposibilidad de realizar el viaje por falta o irregularidad en la documentación será considerada una "Cancelación Voluntaria" por parte del Cliente, aplicándose las penalizaciones descritas en la Cláusula 4.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                8. DECLARACIÓN DE APTITUD FÍSICA Y PERFIL DEL VIAJERO
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>8.1. Garantía de Aptitud:</strong> Al reservar, el Cliente declara y garantiza que posee la condición física y técnica necesaria para completar las rutas estipuladas y que su estado de salud es compatible con la exigencia del ciclismo en carretera.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>8.2. Obligación de Informar:</strong> El Cliente está obligado a notificar a la Empresa sobre cualquier condición médica, alergia o restricción dietética relevante antes del viaje.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>8.3. Asunción de Competencia:</strong> El Cliente asume la total responsabilidad de su capacidad para participar en las actividades, eximiendo a Pedal Prestige de cualquier perjuicio derivado de su falta de condición física.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                9. CÓDIGO DE CONDUCTA Y SEGURIDAD EN RUTA
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>9.1. Normas de Convivencia:</strong> El Cliente se compromete a mantener una conducta respetuosa hacia el personal de Pedal Prestige, otros participantes, y las comunidades locales, acatando las leyes y costumbres vigentes en Italia.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>9.2. Seguridad Vial:</strong> Es obligatorio seguir estrictamente las indicaciones de los guías. El uso de casco homologado es obligatorio en todo momento durante las rodadas. Se prohíbe estrictamente el uso de audífonos o dispositivos que aíslen al ciclista del entorno mientras conduce.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>9.3. Consumo de Sustancias:</strong> El consumo de alcohol deberá realizarse con moderación y exclusivamente fuera de los horarios de actividad física. Queda prohibido el consumo de sustancias ilegales.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>9.4. Derecho de Admisión y Permanencia:</strong> Pedal Prestige se reserva el derecho irrevocable de retirar del viaje a cualquier participante cuyo comportamiento ponga en peligro la seguridad, armonía o bienestar del grupo, sin que ello genere derecho a reembolso alguno ni compensación por gastos de retorno.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                10. LIMITACIÓN DE RESPONSABILIDAD CIVIL
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>10.1. Exención:</strong> Pedal Prestige actúa como intermediario y organizador. La Empresa no será responsable por lesiones corporales, daños materiales, accidentes derivados de la práctica del ciclismo, condiciones climáticas, tráfico, fallas mecánicas de equipos propios o rentados, ni por actos u omisiones de terceros proveedores.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>10.2. Documento Vinculante:</strong> La firma del formulario de "Liberación de Responsabilidad" es un requisito previo indispensable para el inicio de las actividades. La negativa a firmarlo impedirá la participación del Cliente sin derecho a reembolso.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                11. EQUIPAJE Y BICICLETAS
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>11.1. Custodia:</strong> El Cliente es el único responsable de la custodia, integridad y seguridad de su equipaje y efectos personales durante todo el viaje.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>11.2. Equipamiento Deportivo:</strong> Ya sea que el Cliente transporte su propia bicicleta o alquile una en el destino, será responsable del cuidado y uso adecuado de la misma. Pedal Prestige no asume responsabilidad por daños, pérdidas, robos o averías sufridas por el equipo deportivo durante el transporte o la ejecución del viaje.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                12. SALUD, SEGUROS Y EMERGENCIAS
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>12.1. Seguro Obligatorio:</strong> El Cliente declara contar con una póliza de seguro médico internacional vigente con cobertura amplia para actividades deportivas y repatriación sanitaria.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>12.2. Acceso Médico:</strong> El Cliente reconoce y acepta que ciertas rutas pueden transcurrir por zonas remotas donde el acceso a servicios médicos de urgencia puede ser limitado o demorado, asumiendo los riesgos asociados a dicha situación.
                </p>
              </div>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                13. DERECHOS DE IMAGEN Y PROPIEDAD INTELECTUAL
              </h2>
              <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                <strong>13.1. Autorización:</strong> El Cliente otorga a Pedal Prestige una licencia gratuita, mundial y perpetua para utilizar, reproducir y publicar fotografías, videos o testimonios tomados durante el viaje en los que aparezca su imagen, con fines promocionales, publicitarios y de marketing en cualquier medio o formato, renunciando a cualquier compensación económica o derecho de inspección previa.
              </p>
            </article>

            <article className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
              <h2
                className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                14. DINÁMICA DE GRUPO
              </h2>
              <div className="space-y-[12px]">
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>14.1. Adaptabilidad:</strong> Los viajes de Pedal Prestige son experiencias colectivas. El Cliente acepta la necesidad de flexibilidad y adaptación a las circunstancias cambiantes del viaje.
                </p>
                <p className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  <strong>14.2. Autoridad del Guía:</strong> El Cliente acepta respetar y acatar las decisiones tomadas por el guía líder o representante de la Empresa en beneficio de la seguridad y el buen desarrollo del viaje para la totalidad del grupo.
                </p>
              </div>
            </article>

            <p
              className="mt-[clamp(28px,2.9vw,42px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              Al hacer clic en "Acepto", o al efectuar el pago del depósito, usted certifica que ha leído, entendido y aceptado todos los términos y condiciones anteriormente expuestos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
