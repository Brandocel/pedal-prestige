import { useMemo } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { EXPERIENCE_OPTIONS } from "../data/experienceOptions";

const BANK_DATA = {
  bank: "Nombre del banco",
  beneficiary: "Nombre del destinatario",
  clabe: "0000 0000 0000 0000",
};

export default function ExperienceCheckoutPage() {
  const selectedOption = useMemo(() => {
    if (typeof window === "undefined") return EXPERIENCE_OPTIONS[0];
    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get("option");
    return EXPERIENCE_OPTIONS.find((item) => item.id === selectedId) ?? EXPERIENCE_OPTIONS[0];
  }, []);

  const totalLabel = `$${selectedOption.priceMXN.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} MXN`;

  const formSubmitEmail = "info@pedalprestige.com.mx";
  const formSubmitAction = `https://formsubmit.co/${formSubmitEmail}`;
  const formSubmitNext =
    typeof window !== "undefined"
      ? `${window.location.origin}/experience/thanks`
      : "/experience/thanks";

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // no-op
    }
  };

  return (
    <main className="w-full bg-[var(--prestige-ivory)]" id="experience-checkout-page">
      <NavbarAlt />

      <section className="w-full bg-[var(--prestige-ivory)]">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5.55vw,80px)] py-[clamp(54px,6.9vw,100px)]">
          <div className="text-center text-[#0E1A24]">
            <h1
              className="text-[clamp(30px,3.33vw,48px)] leading-[1]"
              style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
            >
              Save your place
            </h1>
            <p
              className="mt-[8px] text-[clamp(16px,1.66vw,24px)] leading-[1] text-[#2C3742]"
              style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
            >
              Reserva tu lugar
            </p>
          </div>

          <div className="mx-auto mt-[clamp(34px,3.47vw,50px)] grid max-w-[1220px] grid-cols-[minmax(300px,520px)_minmax(320px,1fr)] gap-x-[clamp(34px,4.2vw,60px)] gap-y-[32px] max-lg:grid-cols-1">
            <form
              action={formSubmitAction}
              method="POST"
              encType="multipart/form-data"
              className="w-full"
            >
              <input type="hidden" name="_subject" value="Nueva reserva - Pedal Prestige" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={formSubmitNext} />
              <input type="hidden" name="producto" value={selectedOption.title} />
              <input type="hidden" name="opcion" value={selectedOption.subtitle} />
              <input type="hidden" name="precio_mxn" value={String(selectedOption.priceMXN)} />

              <h2
                className="text-[clamp(24px,2.22vw,32px)] leading-[1] italic text-[#0E1A24]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 600 }}
              >
                Reserva tu lugar
              </h2>

              <div className="mt-[16px] grid grid-cols-2 gap-x-[10px] gap-y-[10px]">
                <input
                  name="nombre"
                  required
                  type="text"
                  placeholder="NOMBRE COMPLETO"
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="EMAIL"
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="telefono"
                  type="tel"
                  placeholder="TELÉFONO"
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="ciudad"
                  type="text"
                  placeholder="CIUDAD"
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <textarea
                  name="informacion_adicional"
                  rows={4}
                  placeholder="ANY ADDITIONAL INFORMATION YOU WOULD LIKE US TO KNOW..."
                  className="col-span-2 h-[94px] resize-none border border-[#7A8085] bg-transparent px-[12px] py-[8px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />

                <label className="col-span-2 inline-flex h-[42px] cursor-pointer items-center justify-center border border-[#7A8085] text-[11px] tracking-[0.06em] text-[#4A525A]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                  SUBE TU COMPROBANTE &nbsp; ⤓
                  <input name="comprobante" required type="file" accept="image/*,.pdf" className="hidden" />
                </label>

                <button
                  type="submit"
                  className="col-span-2 h-[42px] bg-[#071727] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  ENVIAR
                </button>
              </div>
            </form>

            <div className="w-full text-[#0E1A24]">
              <h2
                className="text-[clamp(24px,2.22vw,32px)] leading-[1] italic"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 600 }}
              >
                Datos bancarios para transferencia
              </h2>

              <div className="mt-[20px] space-y-[14px]">
                <div>
                  <p className="text-[22px] leading-[1]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>Banco</p>
                  <div className="mt-[6px] flex items-center gap-[6px]">
                    <p className="text-[14px] leading-[1.2] text-[#3A4450]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{BANK_DATA.bank}</p>
                    <button type="button" onClick={() => copyToClipboard(BANK_DATA.bank)} className="text-[12px] text-[#6A7179]">⧉</button>
                  </div>
                </div>

                <div>
                  <p className="text-[22px] leading-[1]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>Beneficiario</p>
                  <div className="mt-[6px] flex items-center gap-[6px]">
                    <p className="text-[14px] leading-[1.2] text-[#3A4450]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{BANK_DATA.beneficiary}</p>
                    <button type="button" onClick={() => copyToClipboard(BANK_DATA.beneficiary)} className="text-[12px] text-[#6A7179]">⧉</button>
                  </div>
                </div>

                <div>
                  <p className="text-[22px] leading-[1]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>CLABE</p>
                  <div className="mt-[6px] flex items-center gap-[6px]">
                    <p className="text-[14px] leading-[1.2] text-[#3A4450]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{BANK_DATA.clabe}</p>
                    <button type="button" onClick={() => copyToClipboard(BANK_DATA.clabe)} className="text-[12px] text-[#6A7179]">⧉</button>
                  </div>
                </div>
              </div>

              <div className="mt-[44px] flex items-end justify-between gap-[20px] max-sm:flex-col max-sm:items-start">
                <p className="text-[clamp(34px,3.33vw,48px)] leading-[1]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>TOTAL</p>
                <div className="text-right max-sm:text-left">
                  <p className="text-[clamp(36px,3.61vw,52px)] leading-[1]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{totalLabel}</p>
                  <p className="mt-[4px] text-[14px] leading-[1] tracking-[0.08em] text-[#6A7179]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>IVA INCLUIDO</p>
                </div>
              </div>

              <p
                className="mt-[24px] max-w-[760px] text-[13px] leading-[1.25] text-[#3D4751]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
              >
                El envío del comprobante de transferencia inicia el proceso de validación, pero no garantiza la confirmación inmediata de tu lugar. La reserva se considerará formalizada y definitiva únicamente cuando nuestros sistemas verifiquen la recepción de los fondos en la cuenta bancaria señalada.
                <br />
                Por favor, asegúrate de realizar la transferencia por el monto exacto ($00,000 MXN) dentro de las próximas 24 horas (o el tiempo que tú decidas) para evitar la liberación automática de tu cupo. En caso de discrepancias o falta de disponibilidad posterior al pago, se aplicará nuestra política de reembolso total.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
