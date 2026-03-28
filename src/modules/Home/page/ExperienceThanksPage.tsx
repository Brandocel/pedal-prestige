import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import thanksArt from "../assets/tahnks/Capa 1.png";
import { useI18n } from "../../../i18n/i18n";

export default function ExperienceThanksPage() {
  const { language } = useI18n();

  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="experience-thanks-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5.55vw,80px)] py-[clamp(54px,7.63vw,110px)]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-[clamp(170px,21.32vw,307px)_1fr] items-start gap-[clamp(22px,4.16vw,60px)] max-lg:grid-cols-1 max-lg:justify-items-center">
            <img
              src={thanksArt}
              alt={language === "es" ? "Ilustracion de agradecimiento" : "Thank you illustration"}
              className="h-[clamp(176px,22.13vw,319px)] w-[clamp(170px,21.32vw,307px)] object-contain"
              draggable={false}
            />

            <div className="text-[#0E1A24] max-lg:max-w-[720px] max-lg:text-center">
              <h1
                className="text-[clamp(30px,3.33vw,48px)] leading-[1.05]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                {language === "es" ? "Gracias por tu pago" : "Thank You for Your Payment"}
              </h1>

              <div
                className="mt-[clamp(16px,2.22vw,32px)] space-y-[12px] text-[clamp(14px,1.11vw,16px)] leading-[1.35] text-[#2E3944]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
              >
                <p>
                  {language === "es"
                    ? "Hemos recibido los datos de tu pago."
                    : "We have received your payment details."}
                </p>
                <p>
                  {language === "es"
                    ? "Tu reserva quedará confirmada una vez que recibas un correo electrónico de confirmación por parte de nuestro equipo."
                    : "Your reservation will be confirmed once you receive a confirmation email from our team."}
                </p>
                <p>
                  {language === "es"
                    ? "Mientras tanto, nuestro equipo revisará la información enviada y estará disponible para acompañarte en los próximos pasos de tu experiencia."
                    : "In the meantime, our team will review your submitted information and support you through the next steps of your experience."}
                </p>
                <p>
                  {language === "es"
                    ? "Esperamos darte la bienvenida muy pronto a la experiencia Pedal Prestige."
                    : "We look forward to welcoming you soon to the Pedal Prestige experience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
