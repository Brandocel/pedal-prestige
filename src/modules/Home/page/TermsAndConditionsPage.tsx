import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { useI18n } from "../../../i18n/i18n";

export default function TermsAndConditionsPage() {
  const { language } = useI18n();
  const isEs = language === "es";

  const sections = isEs
    ? [
        {
          title: "1. Aceptacion de terminos",
          paragraphs: [
            "Al realizar el pago del deposito, el participante acepta estos Terminos y reconoce los riesgos inherentes a actividades de ciclismo y viajes internacionales.",
            "Antes del viaje, todos los participantes deben completar los formularios requeridos por Pedal Prestige para la correcta operacion de la experiencia.",
          ],
        },
        {
          title: "2. Reserva y pagos",
          paragraphs: [
            "Para confirmar la reserva se requiere un deposito del 30% del valor total.",
            "El saldo restante debe liquidarse 45 dias antes de la salida. En caso de incumplimiento, Pedal Prestige podra cancelar la reserva sin reembolso del deposito.",
            "Los precios estan expresados en EUR por persona en ocupacion doble, salvo indicacion contraria.",
          ],
        },
        {
          title: "3. Politica de cancelacion",
          paragraphs: [
            "El deposito del 30% es no reembolsable.",
            "Las cancelaciones aplican segun anticipacion y condiciones operativas vigentes, pudiendo contemplar reembolso parcial o credito para viaje futuro.",
            "Toda cancelacion debe solicitarse por escrito y aplica desde su fecha de recepcion.",
          ],
        },
        {
          title: "4. Cambios por parte del participante",
          paragraphs: [
            "Los cambios de fecha o tour estan sujetos a disponibilidad y aprobacion, y pueden generar cargos administrativos o diferencias tarifarias.",
          ],
        },
        {
          title: "5. Cambios por parte de Pedal Prestige",
          paragraphs: [
            "Pedal Prestige puede ajustar rutas, hospedaje, actividades y horarios por razones operativas, climaticas o de seguridad, procurando mantener el estandar de calidad.",
          ],
        },
        {
          title: "6. Fuerza mayor",
          paragraphs: [
            "Pedal Prestige no sera responsable por modificaciones o interrupciones derivadas de circunstancias fuera de su control, como clima extremo, restricciones sanitarias, conflictos sociales o cancelaciones de proveedores.",
          ],
        },
        {
          title: "7. Responsabilidad y riesgo",
          paragraphs: [
            "El participante reconoce los riesgos fisicos del ciclismo de ruta y declara participar bajo su propia responsabilidad y en condiciones adecuadas.",
          ],
        },
        {
          title: "8. Seguro de viaje",
          paragraphs: [
            "Es obligatorio contar con seguro medico internacional y cobertura para actividades deportivas. Pedal Prestige no cubre gastos medicos del participante.",
          ],
        },
        {
          title: "9. Logistica y operacion",
          paragraphs: [
            "El participante debe respetar horarios y lineamientos del itinerario. Traslados fuera de horario o servicios no incluidos pueden generar costos adicionales.",
          ],
        },
        {
          title: "10. Conducta del participante",
          paragraphs: [
            "Se requiere conducta respetuosa con el grupo, equipo y comunidades locales. Pedal Prestige puede retirar participantes que comprometan la seguridad o la experiencia.",
          ],
        },
        {
          title: "11. Requisitos del participante",
          paragraphs: [
            "El participante declara contar con condicion fisica adecuada, documentacion necesaria y disposicion para cumplir normas de seguridad.",
          ],
        },
        {
          title: "12. No incluye",
          paragraphs: [
            "El viaje no incluye vuelos internacionales, seguro de viaje, traslados fuera de itinerario, propinas, gastos personales ni equipo personal de ciclismo.",
          ],
        },
        {
          title: "13. Uso de imagen",
          paragraphs: [
            "El participante autoriza el uso de material fotografico y audiovisual del viaje con fines promocionales, sin compensacion adicional.",
          ],
        },
        {
          title: "14. Exencion de responsabilidad",
          paragraphs: [
            "El participante es responsable de entregar informacion veraz, informar condiciones medicas y cumplir los requisitos operativos y de seguridad.",
            "Pedal Prestige no sera responsable por hechos atribuibles a terceros, omisiones medicas del participante o situaciones fuera de su control razonable.",
          ],
        },
      ]
    : [
        {
          title: "1. Acceptance of terms",
          paragraphs: [
            "By paying the deposit, the participant accepts these Terms and acknowledges the inherent risks of cycling activities and international travel.",
            "Before departure, all participants must complete the forms required by Pedal Prestige for proper operation of the experience.",
          ],
        },
        {
          title: "2. Booking and payments",
          paragraphs: [
            "A 30% deposit is required to confirm the booking.",
            "The remaining balance must be paid 45 days before departure. Failure to pay may result in cancellation without refund of the deposit.",
            "Prices are listed in EUR per person based on double occupancy unless otherwise stated.",
          ],
        },
        {
          title: "3. Cancellation policy",
          paragraphs: [
            "The 30% deposit is non-refundable.",
            "Cancellation terms depend on how far in advance cancellation occurs and current operational conditions, and may include partial refund or future travel credit.",
            "All cancellations must be submitted in writing and become effective on the date received.",
          ],
        },
        {
          title: "4. Changes requested by participant",
          paragraphs: [
            "Date or tour changes are subject to availability and approval, and may generate administrative fees or fare differences.",
          ],
        },
        {
          title: "5. Changes by Pedal Prestige",
          paragraphs: [
            "Pedal Prestige may adjust routes, accommodations, activities and schedules for operational, weather or safety reasons while seeking to maintain quality standards.",
          ],
        },
        {
          title: "6. Force majeure",
          paragraphs: [
            "Pedal Prestige is not liable for cancellations, modifications or interruptions caused by circumstances beyond its control, including weather, health restrictions, social conflicts or supplier disruptions.",
          ],
        },
        {
          title: "7. Liability and risk",
          paragraphs: [
            "Participants acknowledge the physical risks of road cycling and confirm they join the experience at their own responsibility and in suitable condition.",
          ],
        },
        {
          title: "8. Travel insurance",
          paragraphs: [
            "International medical insurance with sports coverage is mandatory. Pedal Prestige does not cover participant medical expenses.",
          ],
        },
        {
          title: "9. Logistics and operations",
          paragraphs: [
            "Participants must follow itinerary schedules and operational guidelines. Transfers outside scheduled windows and non-included services may incur extra costs.",
          ],
        },
        {
          title: "10. Participant conduct",
          paragraphs: [
            "Respectful behavior toward the group, staff and local communities is required. Pedal Prestige may remove participants who jeopardize safety or the overall experience.",
          ],
        },
        {
          title: "11. Participant requirements",
          paragraphs: [
            "Participants confirm adequate physical condition, required travel documentation and commitment to follow safety instructions.",
          ],
        },
        {
          title: "12. Not included",
          paragraphs: [
            "The trip does not include international flights, travel insurance, off-itinerary transfers, tips, personal expenses or personal cycling equipment.",
          ],
        },
        {
          title: "13. Image rights",
          paragraphs: [
            "Participants authorize use of photos and audiovisual materials captured during the trip for promotional purposes, without additional compensation.",
          ],
        },
        {
          title: "14. Release of liability",
          paragraphs: [
            "Participants are responsible for providing accurate information, disclosing relevant medical conditions and meeting all operational and safety requirements.",
            "Pedal Prestige is not liable for third-party actions, undisclosed participant conditions, or events outside reasonable control.",
          ],
        },
      ];

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
              {isEs ? "TERMINOS Y CONDICIONES" : "TERMS AND CONDITIONS"}
            </h1>

            <p
              className="mt-[clamp(24px,2.5vw,36px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              {isEs ? "Ultima actualizacion:" : "Last updated:"}&nbsp;
              {isEs ? "26 de marzo de 2026." : "March 26, 2026."}
            </p>

            <p
              className="mt-[clamp(22px,2.2vw,32px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              {isEs
                ? "Estos Terminos constituyen un acuerdo legal vinculante entre PEDAL PRESTIGE SAPI de CV y la persona que contrata sus servicios. Al adquirir cualquier paquete o experiencia, el viajero declara haber leido, entendido y aceptado estas condiciones."
                : "These Terms constitute a binding legal agreement between PEDAL PRESTIGE SAPI de CV and the person contracting its services. By purchasing any package or experience, the traveler confirms they have read, understood and accepted these conditions."}
            </p>

            {sections.map((section) => (
              <article key={section.title} className="mt-[clamp(22px,2.2vw,32px)] space-y-[10px]">
                <h2
                  className="text-[clamp(20px,1.66vw,28px)] leading-[1.08]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
                    style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
