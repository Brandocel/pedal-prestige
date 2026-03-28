import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { useI18n } from "../../../i18n/i18n";

export default function DisclaimerPage() {
  const { language } = useI18n();
  const isEs = language === "es";

  const sections = isEs
    ? [
        {
          title: "1. NATURALEZA DE ALTO RIESGO DE LA ACTIVIDAD",
          paragraphs: [
            "El Usuario reconoce expresamente que el ciclismo de ruta, el cicloturismo y las actividades al aire libre en terrenos variados y vias publicas son actividades con riesgos inherentes, previsibles e imprevisibles.",
            "Estos riesgos incluyen caidas, colisiones, fallas mecanicas, clima adverso, fatiga extrema y lesiones de distinta gravedad. Pedal Prestige no garantiza seguridad absoluta y el participante asume voluntariamente dichos riesgos.",
          ],
        },
        {
          title: "2. CONDICION FISICA Y MEDICA",
          paragraphs: [
            "Los niveles de dificultad publicados son referenciales. Es responsabilidad exclusiva del usuario confirmar su aptitud fisica y medica para participar.",
            "Pedal Prestige se deslinda de responsabilidad por eventos medicos derivados de preparacion insuficiente o condiciones preexistentes no reportadas.",
          ],
        },
        {
          title: "3. INTERMEDIACION Y SERVICIOS DE TERCEROS",
          paragraphs: [
            "Pedal Prestige actua como organizador e intermediario ante proveedores finales (hoteles, transportes, guias, aerolineas, restaurantes, etc.).",
            "No asume responsabilidad solidaria ni subsidiaria por incumplimientos, cancelaciones, perdidas de equipaje o accidentes atribuibles a terceros.",
          ],
        },
        {
          title: "4. EXACTITUD DE LA INFORMACION Y DERECHO DE MODIFICACION",
          paragraphs: [
            "Aunque se procura mantener la precision del contenido, no se garantiza ausencia total de errores en descripciones, fotografias, mapas o itinerarios.",
            "Pedal Prestige puede modificar itinerarios, fechas, precios o rutas por motivos operativos, climaticos o de seguridad.",
          ],
        },
        {
          title: "5. SEGUROS Y AUTO-RESPONSABILIDAD",
          paragraphs: [
            "Es obligatorio viajar con seguro medico internacional que cubra ciclismo y actividades deportivas.",
            "Pedal Prestige no cubre gastos medicos, hospitalarios, farmaceuticos, repatriacion ni funerarios del participante.",
          ],
        },
        {
          title: "6. JURISDICCION Y LEGISLACION APLICABLE",
          paragraphs: [
            "Para cualquier controversia, las partes se someten a la legislacion federal de los Estados Unidos Mexicanos y a los tribunales competentes de Cancun, Quintana Roo.",
          ],
        },
      ]
    : [
        {
          title: "1. HIGH-RISK NATURE OF THE ACTIVITY",
          paragraphs: [
            "The user acknowledges that road cycling, cycling tourism and outdoor activities involve inherent, foreseeable and unforeseeable risks.",
            "These risks include falls, collisions, sudden mechanical failures, adverse weather, extreme fatigue and injuries of varying severity. Pedal Prestige does not guarantee absolute safety, and participants voluntarily assume these risks.",
          ],
        },
        {
          title: "2. PHYSICAL AND MEDICAL CONDITION",
          paragraphs: [
            "Difficulty levels shown on the website are for reference only. Each participant is solely responsible for confirming they are medically and physically fit.",
            "Pedal Prestige disclaims liability for medical events caused by insufficient preparation or unreported pre-existing conditions.",
          ],
        },
        {
          title: "3. INTERMEDIATION AND THIRD-PARTY SERVICES",
          paragraphs: [
            "Pedal Prestige acts as an organizer and intermediary with final service providers (hotels, transportation, guides, airlines, restaurants, etc.).",
            "Pedal Prestige is not jointly or subsidiarily liable for provider defaults, cancellations, luggage incidents or third-party accidents.",
          ],
        },
        {
          title: "4. INFORMATION ACCURACY AND RIGHT TO MODIFY",
          paragraphs: [
            "While we strive for accuracy, route descriptions, photos, maps and itineraries may include differences or unintended errors.",
            "Pedal Prestige may modify itineraries, dates, prices or routes when operational, weather-related or safety conditions require it.",
          ],
        },
        {
          title: "5. INSURANCE AND PERSONAL RESPONSIBILITY",
          paragraphs: [
            "Travelers must hold international medical insurance covering cycling and sports-related incidents.",
            "Pedal Prestige does not cover medical, hospital, pharmaceutical, repatriation or funeral expenses for participants.",
          ],
        },
        {
          title: "6. GOVERNING LAW AND JURISDICTION",
          paragraphs: [
            "Any dispute is subject to the federal laws of the United Mexican States and the competent courts of Cancun, Quintana Roo.",
          ],
        },
      ];

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
              {isEs ? "DESLINDE DE RESPONSABILIDAD" : "DISCLAIMER"}
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
                ? "La presente declaracion de Deslinde de Responsabilidad rige el uso del sitio web de PEDAL PRESTIGE SAPI de CV y la contratacion de sus servicios de travel experience y turismo deportivo."
                : "This Disclaimer governs the use of PEDAL PRESTIGE SAPI de CV website and the contracting of its travel experience and sports tourism services."}
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
                ? 'Este sitio web y sus contenidos se ofrecen "tal cual", sin garantias expresas ni implicitas. Al continuar navegando, usted libera a Pedal Prestige de reclamaciones derivadas de su participacion.'
                : 'This website and its contents are provided "as is", without express or implied warranties. By continuing to browse, you release Pedal Prestige from claims arising from your participation.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
