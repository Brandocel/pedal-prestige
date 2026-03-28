import { type SyntheticEvent, useEffect, useMemo, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { EXPERIENCE_OPTIONS } from "../data/experienceOptions";

const BANK_DATA = {
  bank: "Nombre del banco",
  beneficiary: "Nombre del destinatario",
  clabe: "0000 0000 0000 0000",
};

const DIGITAL_FORMS = [
  "CHECKLIST PRE-VIAJE",
  "CARTA DE LIBERACION DE RESPONSABILIDAD",
  "FICHA MEDICA",
] as const;

const CHECKLIST_BODY = `CHECKLIST PRE-VIAJE
Pedal Prestige
Este checklist es obligatorio para todos los participantes previo al viaje.

Documentacion
- Pasaporte vigente (minimo 6 meses antes de vencimiento)
- Visas (si aplica)
- Copia digital de documentos importantes
- Seguro medico internacional activo

Pagos
- Deposito realizado
- Pago total liquidado
- Servicios adicionales confirmados

Formularios (obligatorio)
- Carta de liberacion de responsabilidad firmada
- Ficha medica completa
- Informacion personal enviada

Salud y preparacion
- Condicion fisica adecuada para el nivel del viaje
- Entrenamiento previo realizado
- Medicamentos personales suficientes
- Alergias y condiciones informadas previamente

Equipamiento de ciclismo
- Casco (obligatorio)
- Lentes
- Guantes
- Kit de reparacion basico (si llevas bicicleta propia)
- Ropa adecuada para ciclismo
- Calzado especializado

Equipaje
- Ropa para clima variable
- Ropa casual para cenas
- Traje de bano (si aplica)
- Articulos personales
- Adaptadores de corriente (Europa)

Logistica de viaje
- Vuelos confirmados
- Horarios alineados con itinerario
- Transporte al punto de encuentro confirmado

Consideraciones importantes
- Pedal Prestige no se hace responsable por vuelos, equipaje o retrasos
- El itinerario puede cambiar por razones operativas o climaticas
- Es obligatorio seguir las indicaciones del equipo durante el viaje
- El consumo de alcohol debe ser responsable durante las actividades

Confirmacion final
Declaro que he leido y completado todos los requisitos necesarios para participar en el viaje.`;

const RELEASE_BODY = `CARTA DE LIBERACION DE RESPONSABILIDAD
Pedal Prestige

1. Declaracion de conocimiento y aceptacion de riesgos
Yo, el participante, reconozco que la participacion en actividades de ciclismo de ruta, viajes internacionales y experiencias al aire libre implica riesgos inherentes.

2. Condicion fisica y estado de salud
Declaro que me encuentro en condiciones fisicas, mentales y medicas adecuadas para participar en este viaje.

3. Seguro medico y responsabilidad personal
Reconozco que es mi responsabilidad contar con seguro medico internacional vigente.

4. Equipaje y pertenencias personales
Soy responsable de mi equipaje personal y deportivo en todo momento.

5. Transporte y vuelos
Pedal Prestige no es responsable por retrasos, cancelaciones o modificaciones en vuelos o transportes contratados por mi cuenta.

6. Cambios de itinerario
El itinerario puede ser modificado por razones logisticas, climaticas, operativas o de seguridad.

7. Danos materiales y accidentes
Asumo total responsabilidad por cualquier dano que cause a terceros, propiedades o instalaciones.

8. Liberacion de responsabilidad
Libero expresa y voluntariamente a Pedal Prestige y terceros involucrados de cualquier responsabilidad legal derivada de mi participacion, salvo dolo comprobado.

9. Conducta y cumplimiento
Me comprometo a seguir indicaciones del equipo y mantener conducta responsable.

10. Autorizacion de asistencia
En caso de emergencia, autorizo coordinacion de asistencia medica, entendiendo que los costos corren por mi cuenta.

11. Uso de imagen
Autorizo el uso de fotografias y material audiovisual con fines promocionales, sin compensacion adicional.

12. Aceptacion total
Declaro que he leido, entendido y aceptado completamente este documento.`;

const MEDICAL_BODY = `FICHA MEDICA DEL PARTICIPANTE
Pedal Prestige

1. Contacto de emergencia
2. Informacion medica general
3. Alergias y restricciones
4. Condicion fisica
5. Seguro
6. Declaracion

Declaro que la informacion proporcionada es veraz y completa.
Autorizo a Pedal Prestige a utilizar esta informacion unicamente con fines operativos y de seguridad durante el viaje.`;

const formatAcceptanceDate = (date: Date) =>
  date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const calculateAgeFromBirthDate = (birthDate: string) => {
  if (!birthDate) return "";
  const birth = new Date(birthDate);
  if (Number.isNaN(birth.getTime())) return "";

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age >= 0 ? String(age) : "";
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

  const [fullName, setFullName] = useState("");
  const [mainEmail, setMainEmail] = useState("");
  const [mainPhone, setMainPhone] = useState("");
  const [mainCity, setMainCity] = useState("");
  const [mainAdditionalInfo, setMainAdditionalInfo] = useState("");
  const [proofFileName, setProofFileName] = useState("");
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [isReleaseModalOpen, setIsReleaseModalOpen] = useState(false);
  const [isMedicalModalOpen, setIsMedicalModalOpen] = useState(false);
  const [checklistName, setChecklistName] = useState("");
  const [checklistAcceptedAt, setChecklistAcceptedAt] = useState("");
  const [releaseName, setReleaseName] = useState("");
  const [releaseBirthDate, setReleaseBirthDate] = useState("");
  const [releaseNationality, setReleaseNationality] = useState("");
  const [releasePassportHas, setReleasePassportHas] = useState<"" | "SI" | "NO">("");
  const [releasePassportNumber, setReleasePassportNumber] = useState("");
  const [releaseTravelDates, setReleaseTravelDates] = useState("");
  const [releaseAcceptedAt, setReleaseAcceptedAt] = useState("");
  const [medicalName, setMedicalName] = useState("");
  const [medicalAge, setMedicalAge] = useState("");
  const [medicalAgeManuallyEdited, setMedicalAgeManuallyEdited] = useState(false);
  const [medicalBirthDate, setMedicalBirthDate] = useState("");
  const [medicalNationality, setMedicalNationality] = useState("");
  const [medicalPhone, setMedicalPhone] = useState("");
  const [medicalEmail, setMedicalEmail] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [chronicHas, setChronicHas] = useState<"" | "SI" | "NO">("");
  const [chronicDetail, setChronicDetail] = useState("");
  const [heartHas, setHeartHas] = useState<"" | "SI" | "NO">("");
  const [heartDetail, setHeartDetail] = useState("");
  const [injuryHas, setInjuryHas] = useState<"" | "SI" | "NO">("");
  const [injuryDetail, setInjuryDetail] = useState("");
  const [treatmentHas, setTreatmentHas] = useState<"" | "SI" | "NO">("");
  const [treatmentDetail, setTreatmentDetail] = useState("");
  const [medicationHas, setMedicationHas] = useState<"" | "SI" | "NO">("");
  const [medicationDetail, setMedicationDetail] = useState("");
  const [allergyHas, setAllergyHas] = useState<"" | "SI" | "NO">("");
  const [allergyDetail, setAllergyDetail] = useState("");
  const [dietHas, setDietHas] = useState<"" | "SI" | "NO">("");
  const [dietDetail, setDietDetail] = useState("");
  const [cyclingHas, setCyclingHas] = useState<"" | "SI" | "NO">("");
  const [cyclingLevel, setCyclingLevel] = useState<"" | "BASICO" | "INTERMEDIO" | "AVANZADO">("");
  const [cyclingKm, setCyclingKm] = useState("");
  const [mountainHas, setMountainHas] = useState<"" | "SI" | "NO">("");
  const [insuranceHas, setInsuranceHas] = useState<"" | "SI" | "NO">("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [insurancePolicy, setInsurancePolicy] = useState("");
  const [medicalAcceptedAt, setMedicalAcceptedAt] = useState("");
  const [noticeMessage, setNoticeMessage] = useState("");
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  useEffect(() => {
    if (!isChecklistModalOpen && !isReleaseModalOpen && !isMedicalModalOpen && !isNoticeModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isChecklistModalOpen, isReleaseModalOpen, isMedicalModalOpen, isNoticeModalOpen]);

  const checklistEffectiveName = (checklistName || fullName).trim();
  const checklistAccepted = checklistAcceptedAt.length > 0;
  const checklistEvidence = checklistAccepted
    ? `${CHECKLIST_BODY}\n\nNombre: ${checklistEffectiveName}\nFecha: ${checklistAcceptedAt}\nAceptacion digital: SI`
    : "";

  const releaseEffectiveName = (releaseName || fullName).trim();
  const releaseAccepted = releaseAcceptedAt.length > 0;
  const releaseEvidence = releaseAccepted
    ? `${RELEASE_BODY}\n\nNombre completo del participante: ${releaseEffectiveName}\nFecha de nacimiento: ${releaseBirthDate}\nNacionalidad: ${releaseNationality}\nPasaporte vigente: ${releasePassportHas}\nNumero de pasaporte: ${releasePassportHas === "SI" ? releasePassportNumber : "NO APLICA"}\nNombre del viaje: Pedal Prestige Toscana\nFechas del viaje: ${releaseTravelDates}\nFecha de aceptacion digital: ${releaseAcceptedAt}\nAceptacion digital: SI`
    : "";

  const medicalEffectiveName = (medicalName || fullName).trim();
  const medicalAccepted = medicalAcceptedAt.length > 0;
  const medicalEvidence = medicalAccepted
    ? `${MEDICAL_BODY}\n\nNombre completo: ${medicalEffectiveName}\nEdad: ${medicalAge}\nFecha de nacimiento: ${medicalBirthDate}\nNacionalidad: ${medicalNationality}\nTelefono: ${medicalPhone}\nCorreo electronico: ${medicalEmail}\nContacto emergencia - Nombre: ${emergencyName}\nContacto emergencia - Relacion: ${emergencyRelationship}\nContacto emergencia - Telefono: ${emergencyPhone}\nEnfermedad cronica: ${chronicHas} (${chronicHas === "SI" ? chronicDetail : "NO APLICA"})\nProblemas cardiacos: ${heartHas} (${heartHas === "SI" ? heartDetail : "NO APLICA"})\nLesiones recientes: ${injuryHas} (${injuryHas === "SI" ? injuryDetail : "NO APLICA"})\nTratamiento medico actual: ${treatmentHas} (${treatmentHas === "SI" ? treatmentDetail : "NO APLICA"})\nMedicamentos regulares: ${medicationHas} (${medicationHas === "SI" ? medicationDetail : "NO APLICA"})\nAlergias: ${allergyHas} (${allergyHas === "SI" ? allergyDetail : "NO APLICA"})\nRestricciones alimenticias: ${dietHas} (${dietHas === "SI" ? dietDetail : "NO APLICA"})\nPractica ciclismo regularmente: ${cyclingHas}\nNivel percibido: ${cyclingLevel}\nKm por sesion: ${cyclingKm}\nParticipacion en rutas largas o montana: ${mountainHas}\nSeguro medico internacional: ${insuranceHas}\nCompania seguro: ${insuranceHas === "SI" ? insuranceCompany : "NO APLICA"}\nNumero de poliza: ${insuranceHas === "SI" ? insurancePolicy : "NO APLICA"}\nFecha de aceptacion digital: ${medicalAcceptedAt}\nAceptacion digital: SI`
    : "";

  const submissionSummary = [
    "RESUMEN GENERAL DE RESERVA",
    "",
    `Producto: ${selectedOption.title}`,
    `Opcion: ${selectedOption.subtitle}`,
    `Precio MXN: ${selectedOption.priceMXN}`,
    "",
    "DATOS PRINCIPALES",
    `Nombre: ${fullName || "-"}`,
    `Email: ${mainEmail || "-"}`,
    `Telefono: ${mainPhone || "-"}`,
    `Ciudad: ${mainCity || "-"}`,
    `Informacion adicional: ${mainAdditionalInfo || "-"}`,
    `Comprobante cargado: ${proofFileName || "NO"}`,
    "",
    "ESTADO DE DOCUMENTOS DIGITALES",
    `Checklist pre-viaje: ${checklistAccepted ? "ACEPTADO" : "PENDIENTE"}`,
    `Carta liberacion: ${releaseAccepted ? "ACEPTADO" : "PENDIENTE"}`,
    `Ficha medica: ${medicalAccepted ? "ACEPTADO" : "PENDIENTE"}`,
    "",
    "EVIDENCIA CHECKLIST",
    checklistEvidence || "Sin evidencia",
    "",
    "EVIDENCIA CARTA",
    releaseEvidence || "Sin evidencia",
    "",
    "EVIDENCIA FICHA MEDICA",
    medicalEvidence || "Sin evidencia",
  ].join("\n");

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // no-op
    }
  };

  const showNotice = (message: string) => {
    setNoticeMessage(message);
    setIsNoticeModalOpen(true);
  };

  const handleAcceptChecklist = () => {
    const name = (checklistName || fullName).trim();
    if (!name) {
      showNotice("Por favor escribe tu nombre para aceptar el checklist.");
      return;
    }

    setFullName((prev) => prev || name);
    setChecklistName(name);
    setChecklistAcceptedAt(formatAcceptanceDate(new Date()));
    setIsChecklistModalOpen(false);
  };

  const handleAcceptRelease = () => {
    const name = (releaseName || fullName).trim();
    if (!name) {
      showNotice("Por favor escribe tu nombre para aceptar la carta.");
      return;
    }
    if (!releaseBirthDate.trim() || !releaseNationality.trim() || !releaseTravelDates.trim()) {
      showNotice("Completa fecha de nacimiento, nacionalidad y fechas del viaje.");
      return;
    }
    if (!releasePassportHas) {
      showNotice("Confirma si cuentas con pasaporte vigente.");
      return;
    }
    if (releasePassportHas === "SI" && !releasePassportNumber.trim()) {
      showNotice("Si indicaste que si tienes pasaporte, agrega el numero.");
      return;
    }

    setFullName((prev) => prev || name);
    setReleaseName(name);
    setReleaseAcceptedAt(formatAcceptanceDate(new Date()));
    setIsReleaseModalOpen(false);
  };

  const handleAcceptMedical = () => {
    const name = (medicalName || fullName).trim();
    if (!name) {
      showNotice("Por favor escribe tu nombre para aceptar la ficha medica.");
      return;
    }
    if (!medicalAge.trim() || !medicalBirthDate.trim() || !medicalNationality.trim() || !medicalPhone.trim() || !medicalEmail.trim()) {
      showNotice("Completa nombre, edad, fecha de nacimiento, nacionalidad, telefono y correo en la ficha medica.");
      return;
    }
    if (!emergencyName.trim() || !emergencyRelationship.trim() || !emergencyPhone.trim()) {
      showNotice("Completa los datos del contacto de emergencia.");
      return;
    }
    if (!chronicHas || !heartHas || !injuryHas || !treatmentHas || !medicationHas || !allergyHas || !dietHas || !cyclingHas || !cyclingLevel || !mountainHas || !insuranceHas) {
      showNotice("Responde todas las preguntas SI/NO y el nivel percibido de ciclismo.");
      return;
    }
    if (chronicHas === "SI" && !chronicDetail.trim()) {
      showNotice("Indica cual es la enfermedad cronica.");
      return;
    }
    if (heartHas === "SI" && !heartDetail.trim()) {
      showNotice("Agrega el detalle de problemas cardiacos.");
      return;
    }
    if (injuryHas === "SI" && !injuryDetail.trim()) {
      showNotice("Agrega el detalle de lesiones recientes.");
      return;
    }
    if (treatmentHas === "SI" && !treatmentDetail.trim()) {
      showNotice("Especifica el tratamiento medico actual.");
      return;
    }
    if (medicationHas === "SI" && !medicationDetail.trim()) {
      showNotice("Indica que medicamentos tomas regularmente.");
      return;
    }
    if (allergyHas === "SI" && !allergyDetail.trim()) {
      showNotice("Especifica las alergias reportadas.");
      return;
    }
    if (dietHas === "SI" && !dietDetail.trim()) {
      showNotice("Especifica las restricciones alimenticias.");
      return;
    }
    if (!cyclingKm.trim()) {
      showNotice("Indica cuantos kilometros sueles rodar por sesion.");
      return;
    }
    if (insuranceHas === "SI" && (!insuranceCompany.trim() || !insurancePolicy.trim())) {
      showNotice("Si cuentas con seguro, completa compania y numero de poliza.");
      return;
    }

    setFullName((prev) => prev || name);
    setMedicalName(name);
    setMedicalAcceptedAt(formatAcceptanceDate(new Date()));
    setIsMedicalModalOpen(false);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    if (!checklistAccepted || !releaseAccepted || !medicalAccepted) {
      event.preventDefault();
      showNotice("Debes leer y aceptar CHECKLIST PRE-VIAJE, CARTA DE LIBERACION y FICHA MEDICA antes de enviar.");
      return;
    }

    if (!fullName.trim() || !mainEmail.trim() || !mainPhone.trim() || !mainCity.trim() || !mainAdditionalInfo.trim()) {
      event.preventDefault();
      showNotice("Completa todos los campos del formulario principal antes de enviar.");
      return;
    }

    if (!proofFileName) {
      event.preventDefault();
      showNotice("Debes cargar el comprobante de pago para poder enviar.");
    }
  };

  const handleMedicalBirthDateChange = (value: string) => {
    setMedicalBirthDate(value);
    if (!medicalAgeManuallyEdited || !medicalAge.trim()) {
      setMedicalAge(calculateAgeFromBirthDate(value));
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
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="_subject" value="Nueva reserva - Pedal Prestige" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={formSubmitNext} />
              <input type="hidden" name="producto" value={selectedOption.title} />
              <input type="hidden" name="opcion" value={selectedOption.subtitle} />
              <input type="hidden" name="precio_mxn" value={String(selectedOption.priceMXN)} />
              <input
                type="hidden"
                name="checklist_pre_viaje_aceptado"
                value={checklistAccepted ? "SI" : "NO"}
              />
              <input
                type="hidden"
                name="checklist_pre_viaje_nombre"
                value={checklistEffectiveName}
              />
              <input
                type="hidden"
                name="checklist_pre_viaje_fecha"
                value={checklistAcceptedAt}
              />
              <textarea
                name="checklist_pre_viaje_evidencia"
                className="hidden"
                readOnly
                value={checklistEvidence}
              />
              <input
                type="hidden"
                name="carta_liberacion_aceptada"
                value={releaseAccepted ? "SI" : "NO"}
              />
              <input
                type="hidden"
                name="carta_liberacion_nombre"
                value={releaseEffectiveName}
              />
              <input
                type="hidden"
                name="carta_liberacion_fecha"
                value={releaseAcceptedAt}
              />
              <textarea
                name="carta_liberacion_evidencia"
                className="hidden"
                readOnly
                value={releaseEvidence}
              />
              <input
                type="hidden"
                name="ficha_medica_aceptada"
                value={medicalAccepted ? "SI" : "NO"}
              />
              <input
                type="hidden"
                name="ficha_medica_nombre"
                value={medicalEffectiveName}
              />
              <input
                type="hidden"
                name="ficha_medica_fecha"
                value={medicalAcceptedAt}
              />
              <textarea
                name="ficha_medica_evidencia"
                className="hidden"
                readOnly
                value={medicalEvidence}
              />
              <textarea
                name="resumen_general_envio"
                className="hidden"
                readOnly
                value={submissionSummary}
              />

              <h2
                className="text-[clamp(24px,2.22vw,32px)] leading-[1] italic text-[#0E1A24]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 600 }}
              >
                Reserva tu lugar
              </h2>

              <div className="mt-[14px] border border-[#7A8085] p-[12px]">
                <p
                  className="text-[13px] leading-[1] text-[#0E1A24]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  Formularios digitales
                </p>
                <p
                  className="mt-[4px] text-[11px] leading-[1.2] text-[#4F5861]"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  Debes revisar y aceptar los 3 documentos antes de viajar.
                </p>
                <div className="mt-[10px] grid gap-[8px]">
                  {DIGITAL_FORMS.map((formName, index) => {
                    const isFirst = index === 0;
                    const isSecond = index === 1;
                    const isThird = index === 2;
                    const isAccepted =
                      (isFirst && checklistAccepted) ||
                      (isSecond && releaseAccepted) ||
                      (isThird && medicalAccepted);
                    return (
                      <button
                        key={formName}
                        type="button"
                        onClick={
                          isFirst
                            ? () => setIsChecklistModalOpen(true)
                            : isSecond
                              ? () => setIsReleaseModalOpen(true)
                              : isThird
                                ? () => setIsMedicalModalOpen(true)
                                : undefined
                        }
                        className={`flex items-center justify-between border px-[10px] py-[8px] text-left text-[11px] tracking-[0.05em] ${
                          isFirst || isSecond || isThird
                            ? isAccepted
                              ? "border-[#8FA996] bg-[#E8F0EA] text-[#2E4A36]"
                              : "border-[#7A8085] text-[#0E1A24]"
                            : "cursor-not-allowed border-[#B3B8BD] text-[#8F98A1]"
                        }`}
                        style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                        disabled={!isFirst && !isSecond && !isThird}
                      >
                        <span>{formName}</span>
                        <span className={isAccepted ? "text-[#345840]" : ""}>
                          {isFirst
                            ? checklistAccepted
                              ? "ACEPTADO"
                              : "LEER"
                            : isSecond
                              ? releaseAccepted
                                ? "ACEPTADO"
                                : "LEER"
                              : isThird
                                ? medicalAccepted
                                  ? "ACEPTADO"
                                  : "LEER"
                                : "PROXIMAMENTE"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-[16px] grid grid-cols-2 gap-x-[10px] gap-y-[10px]">
                <input
                  name="nombre"
                  type="text"
                  placeholder="NOMBRE COMPLETO"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL"
                  value={mainEmail}
                  onChange={(event) => setMainEmail(event.target.value)}
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="telefono"
                  type="tel"
                  placeholder="TELÉFONO"
                  value={mainPhone}
                  onChange={(event) => setMainPhone(event.target.value)}
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="ciudad"
                  type="text"
                  placeholder="CIUDAD"
                  value={mainCity}
                  onChange={(event) => setMainCity(event.target.value)}
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <textarea
                  name="informacion_adicional"
                  rows={4}
                  placeholder="ANY ADDITIONAL INFORMATION YOU WOULD LIKE US TO KNOW..."
                  value={mainAdditionalInfo}
                  onChange={(event) => setMainAdditionalInfo(event.target.value)}
                  className="col-span-2 h-[94px] resize-none border border-[#7A8085] bg-transparent px-[12px] py-[8px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />

                <label className="col-span-2 inline-flex h-[42px] cursor-pointer items-center justify-center border border-[#7A8085] text-[11px] tracking-[0.06em] text-[#4A525A]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                  {proofFileName ? `COMPROBANTE CARGADO: ${proofFileName}` : "SUBE TU COMPROBANTE  ⤓"}
                  <input
                    name="comprobante"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(event) => {
                      const fileName = event.target.files?.[0]?.name ?? "";
                      setProofFileName(fileName);
                    }}
                  />
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

      {isChecklistModalOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06121ccc] px-[16px]">
          <div className="max-h-[90vh] w-full max-w-[900px] overflow-hidden border border-[#7A8085] bg-[var(--prestige-ivory)] text-[#0E1A24] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between border-b border-[#B3B8BD] px-[16px] py-[12px]">
              <h3
                className="text-[19px] leading-[1] italic"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                CHECKLIST PRE-VIAJE
              </h3>
              <button
                type="button"
                onClick={() => setIsChecklistModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                CERRAR
              </button>
            </div>

            <div className="max-h-[calc(90vh-54px)] overflow-y-auto px-[18px] py-[16px]">
              <p
                className="text-[13px] leading-[1.3]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                Pedal Prestige
                <br />
                Este checklist es obligatorio para todos los participantes previo al viaje.
              </p>

              <div
                className="mt-[14px] space-y-[10px] text-[13px] leading-[1.25] text-[#22303D]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                <p><strong>Documentacion</strong></p>
                <p>- Pasaporte vigente (minimo 6 meses antes de vencimiento)</p>
                <p>- Visas (si aplica)</p>
                <p>- Copia digital de documentos importantes</p>
                <p>- Seguro medico internacional activo</p>

                <p className="pt-[6px]"><strong>Pagos</strong></p>
                <p>- Deposito realizado</p>
                <p>- Pago total liquidado</p>
                <p>- Servicios adicionales confirmados</p>

                <p className="pt-[6px]"><strong>Formularios (obligatorio)</strong></p>
                <p>- Carta de liberacion de responsabilidad firmada</p>
                <p>- Ficha medica completa</p>
                <p>- Informacion personal enviada</p>

                <p className="pt-[6px]"><strong>Salud y preparacion</strong></p>
                <p>- Condicion fisica adecuada para el nivel del viaje</p>
                <p>- Entrenamiento previo realizado</p>
                <p>- Medicamentos personales suficientes</p>
                <p>- Alergias y condiciones informadas previamente</p>

                <p className="pt-[6px]"><strong>Equipamiento de ciclismo</strong></p>
                <p>- Casco (obligatorio)</p>
                <p>- Lentes</p>
                <p>- Guantes</p>
                <p>- Kit de reparacion basico (si llevas bicicleta propia)</p>
                <p>- Ropa adecuada para ciclismo</p>
                <p>- Calzado especializado</p>

                <p className="pt-[6px]"><strong>Equipaje</strong></p>
                <p>- Ropa para clima variable</p>
                <p>- Ropa casual para cenas</p>
                <p>- Traje de bano (si aplica)</p>
                <p>- Articulos personales</p>
                <p>- Adaptadores de corriente (Europa)</p>

                <p className="pt-[6px]"><strong>Logistica de viaje</strong></p>
                <p>- Vuelos confirmados</p>
                <p>- Horarios alineados con itinerario</p>
                <p>- Transporte al punto de encuentro confirmado</p>

                <p className="pt-[6px]"><strong>Consideraciones importantes</strong></p>
                <p>- Pedal Prestige no se hace responsable por vuelos, equipaje o retrasos</p>
                <p>- El itinerario puede cambiar por razones operativas o climaticas</p>
                <p>- Es obligatorio seguir las indicaciones del equipo durante el viaje</p>
                <p>- El consumo de alcohol debe ser responsable durante las actividades</p>
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p
                  className="text-[13px] leading-[1.2]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  Confirmacion final
                </p>
                <p
                  className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
                >
                  Declaro que he leido y completado todos los requisitos necesarios para participar en el viaje.
                </p>

                <input
                  type="text"
                  value={checklistName || fullName}
                  onChange={(event) => setChecklistName(event.target.value)}
                  placeholder="NOMBRE"
                  className="mt-[10px] h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    FECHA: {checklistAcceptedAt || "AUTOMATICA AL ACEPTAR"}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptChecklist}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    ACEPTAR CHECKLIST
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChecklistModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isReleaseModalOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06121ccc] px-[16px]">
          <div className="max-h-[90vh] w-full max-w-[940px] overflow-hidden border border-[#7A8085] bg-[var(--prestige-ivory)] text-[#0E1A24] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between border-b border-[#B3B8BD] px-[16px] py-[12px]">
              <h3
                className="text-[19px] leading-[1] italic"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                CARTA DE LIBERACION DE RESPONSABILIDAD
              </h3>
              <button
                type="button"
                onClick={() => setIsReleaseModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                CERRAR
              </button>
            </div>

            <div className="max-h-[calc(90vh-54px)] overflow-y-auto px-[18px] py-[16px]">
              <p
                className="text-[13px] leading-[1.3]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                Pedal Prestige
              </p>

              <div className="mt-[10px] grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    NOMBRE COMPLETO DEL PARTICIPANTE
                  </p>
                  <input
                    type="text"
                    value={releaseName || fullName}
                    onChange={(event) => setReleaseName(event.target.value)}
                    placeholder="NOMBRE COMPLETO"
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    FECHA DE NACIMIENTO (DD/MM/AAAA)
                  </p>
                  <input
                    type="date"
                    value={releaseBirthDate}
                    onChange={(event) => setReleaseBirthDate(event.target.value)}
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    NACIONALIDAD
                  </p>
                  <input
                    type="text"
                    value={releaseNationality}
                    onChange={(event) => setReleaseNationality(event.target.value)}
                    placeholder="NACIONALIDAD"
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    FECHAS DEL VIAJE / PERIODO
                  </p>
                  <input
                    type="text"
                    value={releaseTravelDates}
                    onChange={(event) => setReleaseTravelDates(event.target.value)}
                    placeholder="Ej: Toscana Marzo 2026 o 10-17 Marzo 2026"
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
              </div>

              <div className="mt-[10px] border border-[#7A8085] p-[10px]">
                <p className="text-[11px] tracking-[0.05em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                  PASAPORTE VIGENTE
                </p>
                <div className="mt-[8px] flex gap-[8px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={() => setReleasePassportHas("SI")}
                    className={`h-[34px] border px-[12px] text-[11px] tracking-[0.05em] ${releasePassportHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    SI
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReleasePassportHas("NO");
                      setReleasePassportNumber("");
                    }}
                    className={`h-[34px] border px-[12px] text-[11px] tracking-[0.05em] ${releasePassportHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    NO
                  </button>
                </div>
                {releasePassportHas === "SI" ? (
                  <input
                    type="text"
                    value={releasePassportNumber}
                    onChange={(event) => setReleasePassportNumber(event.target.value)}
                    placeholder="NUMERO DE PASAPORTE"
                    className="mt-[8px] h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                ) : null}
              </div>

              <div
                className="mt-[14px] space-y-[10px] text-[13px] leading-[1.25] text-[#22303D]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                <p><strong>1. Declaracion de conocimiento y aceptacion de riesgos</strong></p>
                <p>- Caidas, colisiones y accidentes.</p>
                <p>- Condiciones variables del terreno y clima.</p>
                <p>- Interaccion con vehiculos, peatones u otros ciclistas.</p>
                <p>- Fallas mecanicas del equipo.</p>
                <p>- Limitado acceso a servicios medicos en ciertas zonas.</p>

                <p className="pt-[6px]"><strong>2. Condicion fisica y estado de salud</strong></p>
                <p>Declaro que me encuentro en condiciones fisicas, mentales y medicas adecuadas para participar en este viaje.</p>

                <p className="pt-[6px]"><strong>3. Seguro medico y responsabilidad personal</strong></p>
                <p>Es mi responsabilidad contar con seguro medico internacional vigente.</p>

                <p className="pt-[6px]"><strong>4. Equipaje y pertenencias personales</strong></p>
                <p>Soy responsable de mi equipaje personal y deportivo en todo momento.</p>

                <p className="pt-[6px]"><strong>5. Transporte y vuelos</strong></p>
                <p>Pedal Prestige no es responsable por retrasos, cancelaciones o modificaciones en vuelos o transportes contratados por mi cuenta.</p>

                <p className="pt-[6px]"><strong>6. Cambios de itinerario</strong></p>
                <p>El itinerario puede ser modificado por razones logisticas, climaticas, operativas o de seguridad.</p>

                <p className="pt-[6px]"><strong>7. Danos materiales y accidentes</strong></p>
                <p>Asumo total responsabilidad por cualquier dano que cause a terceros, propiedades o instalaciones.</p>

                <p className="pt-[6px]"><strong>8. Liberacion de responsabilidad</strong></p>
                <p>Libero expresa y voluntariamente a Pedal Prestige y terceros involucrados de cualquier responsabilidad legal derivada de mi participacion, salvo dolo comprobado.</p>

                <p className="pt-[6px]"><strong>9. Conducta y cumplimiento</strong></p>
                <p>Me comprometo a seguir las indicaciones del equipo organizador y mantener una conducta responsable.</p>

                <p className="pt-[6px]"><strong>10. Autorizacion de asistencia</strong></p>
                <p>En caso de emergencia, autorizo coordinacion de asistencia medica o traslado, entendiendo que todos los costos corren por mi cuenta.</p>

                <p className="pt-[6px]"><strong>11. Uso de imagen</strong></p>
                <p>Autorizo a Pedal Prestige a utilizar fotografias y material audiovisual con fines promocionales, sin compensacion adicional.</p>

                <p className="pt-[6px]"><strong>12. Aceptacion total</strong></p>
                <p>Declaro que he leido, entendido y aceptado completamente este documento.</p>
                <p>He tenido la oportunidad de hacer preguntas y resolver dudas.</p>
                <p>Acepto de manera libre y voluntaria.</p>
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p
                  className="text-[13px] leading-[1.2]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  Confirmacion final
                </p>
                <p
                  className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
                >
                  Esta aceptacion digital sustituye firma manuscrita y queda registrada como evidencia.
                </p>

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    FECHA: {releaseAcceptedAt || "AUTOMATICA AL ACEPTAR"}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptRelease}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    ACEPTAR CARTA
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsReleaseModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isMedicalModalOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06121ccc] px-[16px]">
          <div className="max-h-[90vh] w-full max-w-[980px] overflow-hidden border border-[#7A8085] bg-[var(--prestige-ivory)] text-[#0E1A24] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between border-b border-[#B3B8BD] px-[16px] py-[12px]">
              <h3 className="text-[19px] leading-[1] italic" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>
                FICHA MEDICA DEL PARTICIPANTE
              </h3>
              <button
                type="button"
                onClick={() => setIsMedicalModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                CERRAR
              </button>
            </div>

            <div className="max-h-[calc(90vh-54px)] overflow-y-auto px-[18px] py-[16px]">
              <p className="text-[13px] leading-[1.3]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Pedal Prestige</p>

              <div className="mt-[10px] grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>NOMBRE COMPLETO</p>
                  <input type="text" value={medicalName || fullName} onChange={(event) => setMedicalName(event.target.value)} placeholder="NOMBRE COMPLETO" className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>EDAD (AUTOMATICA, EDITABLE)</p>
                  <div className="grid grid-cols-[1fr_auto] gap-[6px]">
                    <input
                      type="number"
                      min="0"
                      value={medicalAge}
                      onChange={(event) => {
                        setMedicalAge(event.target.value);
                        setMedicalAgeManuallyEdited(true);
                      }}
                      placeholder="EDAD"
                      className="h-[40px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                      style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setMedicalAge(calculateAgeFromBirthDate(medicalBirthDate));
                        setMedicalAgeManuallyEdited(false);
                      }}
                      className="h-[40px] border border-[#7A8085] px-[10px] text-[10px] tracking-[0.06em] text-[#0E1A24]"
                      style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                    >
                      AUTO
                    </button>
                  </div>
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>FECHA DE NACIMIENTO (DD/MM/AAAA)</p>
                  <input type="date" value={medicalBirthDate} onChange={(event) => handleMedicalBirthDateChange(event.target.value)} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>NACIONALIDAD</p>
                  <input type="text" value={medicalNationality} onChange={(event) => setMedicalNationality(event.target.value)} placeholder="NACIONALIDAD" className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>TELEFONO</p>
                  <input type="tel" value={medicalPhone} onChange={(event) => setMedicalPhone(event.target.value)} placeholder="TELEFONO" className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>CORREO ELECTRONICO</p>
                  <input type="email" value={medicalEmail} onChange={(event) => setMedicalEmail(event.target.value)} placeholder="CORREO ELECTRONICO" className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
              </div>

              <div className="mt-[14px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>1. CONTACTO DE EMERGENCIA</p>
                <div className="mt-[8px] grid grid-cols-3 gap-[8px] max-sm:grid-cols-1">
                  <input type="text" value={emergencyName} onChange={(event) => setEmergencyName(event.target.value)} placeholder="NOMBRE" className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                  <input type="text" value={emergencyRelationship} onChange={(event) => setEmergencyRelationship(event.target.value)} placeholder="RELACION" className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                  <input type="tel" value={emergencyPhone} onChange={(event) => setEmergencyPhone(event.target.value)} placeholder="TELEFONO" className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>2. INFORMACION MEDICA GENERAL</p>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Enfermedad cronica</p>
                  <button type="button" onClick={() => setChronicHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${chronicHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setChronicHas("NO"); setChronicDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${chronicHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={chronicDetail} onChange={(event) => setChronicDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Problemas cardiacos</p>
                  <button type="button" onClick={() => setHeartHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${heartHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setHeartHas("NO"); setHeartDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${heartHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={heartDetail} onChange={(event) => setHeartDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Lesiones recientes (6 meses)</p>
                  <button type="button" onClick={() => setInjuryHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${injuryHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setInjuryHas("NO"); setInjuryDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${injuryHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={injuryDetail} onChange={(event) => setInjuryDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Tratamiento medico actual</p>
                  <button type="button" onClick={() => setTreatmentHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${treatmentHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setTreatmentHas("NO"); setTreatmentDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${treatmentHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={treatmentDetail} onChange={(event) => setTreatmentDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Medicamentos regulares</p>
                  <button type="button" onClick={() => setMedicationHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${medicationHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setMedicationHas("NO"); setMedicationDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${medicationHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={medicationDetail} onChange={(event) => setMedicationDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>3. ALERGIAS Y RESTRICCIONES</p>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Alergias</p>
                  <button type="button" onClick={() => setAllergyHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${allergyHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setAllergyHas("NO"); setAllergyDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${allergyHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={allergyDetail} onChange={(event) => setAllergyDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Restricciones alimenticias</p>
                  <button type="button" onClick={() => setDietHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${dietHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setDietHas("NO"); setDietDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${dietHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                  <input type="text" value={dietDetail} onChange={(event) => setDietDetail(event.target.value)} placeholder="Detalle (si aplica)" className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>4. CONDICION FISICA</p>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Practicas ciclismo regularmente</p>
                  <button type="button" onClick={() => setCyclingHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${cyclingHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => setCyclingHas("NO")} className={`h-[34px] border px-[10px] text-[11px] ${cyclingHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                </div>
                <div className="grid grid-cols-2 gap-[8px] max-sm:grid-cols-1">
                  <select value={cyclingLevel} onChange={(event) => setCyclingLevel(event.target.value as "" | "BASICO" | "INTERMEDIO" | "AVANZADO")} className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    <option value="">NIVEL PERCIBIDO</option>
                    <option value="BASICO">BASICO</option>
                    <option value="INTERMEDIO">INTERMEDIO</option>
                    <option value="AVANZADO">AVANZADO</option>
                  </select>
                  <input type="text" value={cyclingKm} onChange={(event) => setCyclingKm(event.target.value)} placeholder="KM POR SESION" className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Has participado en rutas largas o montana</p>
                  <button type="button" onClick={() => setMountainHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${mountainHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => setMountainHas("NO")} className={`h-[34px] border px-[10px] text-[11px] ${mountainHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>5. SEGURO</p>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Cuentas con seguro medico internacional</p>
                  <button type="button" onClick={() => setInsuranceHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${insuranceHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>SI</button>
                  <button type="button" onClick={() => { setInsuranceHas("NO"); setInsuranceCompany(""); setInsurancePolicy(""); }} className={`h-[34px] border px-[10px] text-[11px] ${insuranceHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>NO</button>
                </div>
                {insuranceHas === "SI" ? (
                  <div className="grid grid-cols-2 gap-[8px] max-sm:grid-cols-1">
                    <input type="text" value={insuranceCompany} onChange={(event) => setInsuranceCompany(event.target.value)} placeholder="COMPANIA" className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                    <input type="text" value={insurancePolicy} onChange={(event) => setInsurancePolicy(event.target.value)} placeholder="NUMERO DE POLIZA" className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                  </div>
                ) : null}
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p className="text-[13px] leading-[1.2]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>6. Declaracion</p>
                <p className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  Declaro que la informacion proporcionada es veraz y completa. Esta aceptacion digital sustituye firma manuscrita y queda registrada como evidencia.
                </p>

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    FECHA: {medicalAcceptedAt || "AUTOMATICA AL ACEPTAR"}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptMedical}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    ACEPTAR FICHA MEDICA
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMedicalModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isNoticeModalOpen ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#06121ccc] px-[16px]">
          <div className="w-full max-w-[520px] border border-[#7A8085] bg-[var(--prestige-ivory)] text-[#0E1A24] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="border-b border-[#B3B8BD] px-[16px] py-[12px]">
              <h3
                className="text-[18px] leading-[1] italic"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
              >
                Aviso
              </h3>
            </div>

            <div className="px-[16px] py-[14px]">
              <p
                className="text-[13px] leading-[1.35] text-[#22303D]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                {noticeMessage}
              </p>

              <div className="mt-[14px] flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsNoticeModalOpen(false)}
                  className="h-[40px] border border-[#071727] bg-[#071727] px-[20px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  ENTENDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
}
