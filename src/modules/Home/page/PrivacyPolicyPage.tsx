import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { useI18n } from "../../../i18n/i18n";

export default function PrivacyPolicyPage() {
  const { language } = useI18n();
  const isEs = language === "es";

  const sections = isEs
    ? [
        {
          title: "1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE",
          paragraphs: [
            "El responsable del tratamiento de los datos personales recabados es PEDAL PRESTIGE SAPI de CV para la gestion de servicios turisticos deportivos y experiencias de viaje en Italia.",
          ],
        },
        {
          title: "2. DATOS PERSONALES QUE RECABAMOS",
          paragraphs: [
            "Podemos recabar datos de identificacion y contacto, datos patrimoniales para facturacion y pago, datos sensibles de salud necesarios para la operacion del viaje, y datos de navegacion digital.",
            "La informacion se obtiene por canales directos e indirectos y se trata con medidas de seguridad adecuadas a su naturaleza.",
          ],
        },
        {
          title: "3. FINALIDADES DEL TRATAMIENTO",
          paragraphs: [
            "Usamos la informacion para gestionar reservas, pagos, logistica con proveedores, seguridad del viajero, atencion al cliente, facturacion y cumplimiento de obligaciones legales.",
            "Con consentimiento, tambien podemos usar datos para comunicaciones promocionales, analisis de mercado y uso de imagen institucional.",
          ],
        },
        {
          title: "4. TRANSFERENCIA DE DATOS",
          paragraphs: [
            "Por la naturaleza internacional del servicio, ciertos datos pueden compartirse con proveedores turisticos, aseguradoras y autoridades cuando corresponda legalmente.",
          ],
        },
        {
          title: "5. MEDIDAS DE SEGURIDAD",
          paragraphs: [
            "Implementamos medidas administrativas, tecnicas y fisicas para proteger la informacion contra acceso no autorizado, perdida, alteracion o destruccion.",
          ],
        },
        {
          title: "6. DERECHOS ARCO",
          paragraphs: [
            "El titular puede ejercer sus derechos de acceso, rectificacion, cancelacion y oposicion mediante solicitud al correo de contacto oficial de la empresa.",
          ],
        },
        {
          title: "7. COOKIES Y RASTREADORES",
          paragraphs: [
            "Nuestro sitio utiliza cookies y tecnologias similares para mejorar la experiencia, obtener metricas de uso y optimizar contenidos y servicios.",
          ],
        },
        {
          title: "8. CONSERVACION DE DATOS",
          paragraphs: [
            "Conservamos los datos durante la relacion comercial y el tiempo requerido por obligaciones legales, para luego proceder con su bloqueo y eliminacion segura.",
          ],
        },
        {
          title: "9. CAMBIOS A ESTA POLITICA",
          paragraphs: [
            "Esta politica puede actualizarse por cambios legales, operativos o de negocio. Las actualizaciones se publicaran en este sitio web.",
          ],
        },
      ]
    : [
        {
          title: "1. IDENTITY OF THE DATA CONTROLLER",
          paragraphs: [
            "PEDAL PRESTIGE SAPI de CV is the controller responsible for processing personal data collected for sports tourism services and travel experiences in Italy.",
          ],
        },
        {
          title: "2. PERSONAL DATA WE COLLECT",
          paragraphs: [
            "We may collect identification and contact data, financial information for billing and payment, health-related sensitive data required for trip operations, and digital navigation data.",
            "Information may be obtained through direct and indirect channels and processed with safeguards appropriate to its sensitivity.",
          ],
        },
        {
          title: "3. PURPOSES OF PROCESSING",
          paragraphs: [
            "Data is used to manage bookings, payments, logistics with providers, traveler safety, customer support, invoicing and legal compliance.",
            "With consent, data may also be used for promotional communications, market analytics and authorized image use.",
          ],
        },
        {
          title: "4. DATA TRANSFERS",
          paragraphs: [
            "Due to the international nature of our services, certain data may be shared with travel providers, insurers and authorities when legally required.",
          ],
        },
        {
          title: "5. SECURITY MEASURES",
          paragraphs: [
            "We implement administrative, technical and physical safeguards to prevent unauthorized access, loss, alteration or destruction of personal information.",
          ],
        },
        {
          title: "6. DATA SUBJECT RIGHTS",
          paragraphs: [
            "Data subjects may exercise their access, rectification, cancellation and objection rights by contacting the company's official email address.",
          ],
        },
        {
          title: "7. COOKIES AND TRACKERS",
          paragraphs: [
            "Our website uses cookies and similar technologies to improve experience, obtain usage metrics and optimize content and services.",
          ],
        },
        {
          title: "8. DATA RETENTION",
          paragraphs: [
            "Data is retained during the commercial relationship and for legally required periods, then blocked and securely deleted.",
          ],
        },
        {
          title: "9. POLICY CHANGES",
          paragraphs: [
            "This policy may be updated due to legal, operational or business changes. Updates will be published on this website.",
          ],
        },
      ];

  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="privacy-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto box-border w-full max-w-[1440px] px-[clamp(20px,5.55vw,80px)] py-[clamp(40px,4.86vw,70px)] text-[#0E1A24]">
          <div className="mx-auto max-w-[1320px]">
            <h1
              className="text-[clamp(38px,3.33vw,48px)] leading-[1]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              {isEs
                ? "POLITICA DE PRIVACIDAD Y PROTECCION DE DATOS PERSONALES"
                : "PRIVACY POLICY AND PERSONAL DATA PROTECTION"}
            </h1>

            <p
              className="mt-[clamp(24px,2.5vw,36px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              {isEs ? "Ultima actualizacion:" : "Last updated:"}&nbsp;
              {isEs ? "17 de febrero de 2026." : "February 17, 2026."}
            </p>

            <p
              className="mt-[clamp(22px,2.2vw,32px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
            >
              {isEs
                ? "PEDAL PRESTIGE SAPI de CV, comprometido con la proteccion de la privacidad y el cumplimiento normativo, pone a disposicion esta Politica de Privacidad para explicar como se recaba, usa, almacena y protege la informacion personal."
                : "PEDAL PRESTIGE SAPI de CV, committed to privacy protection and regulatory compliance, provides this Privacy Policy to explain how personal information is collected, used, stored and protected."}
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

            <p
              className="mt-[clamp(28px,2.9vw,42px)] text-[clamp(14px,1.15vw,18px)] leading-[1.22]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              {isEs
                ? "Al proporcionar sus datos a Pedal Prestige, usted reconoce haber leido y entendido esta Politica y otorga su consentimiento para el tratamiento conforme a estos terminos."
                : "By providing your data to Pedal Prestige, you acknowledge that you have read and understood this Policy and consent to processing under these terms."}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
