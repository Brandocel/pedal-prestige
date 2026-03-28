import { type SyntheticEvent, useEffect, useMemo, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Footer from "../components/Footer";
import { getExperienceOptions } from "../data/experienceOptions";
import { useI18n } from "../../../i18n/i18n";

const BANK_DATA = {
  bank: "Nombre del banco",
  beneficiary: "Nombre del destinatario",
  clabe: "0000 0000 0000 0000",
};

const CHECKLIST_BODY_ES = `CHECKLIST PRE-VIAJE
Pedal Prestige
Este checklist es obligatorio para todos los participantes previo al viaje.

Documentación
- Pasaporte vigente (mínimo 6 meses antes de vencimiento)
- Visas (si aplica)
- Copia digital de documentos importantes
- Seguro médico internacional activo

Pagos
- Depósito realizado
- Pago total liquidado
- Servicios adicionales confirmados

Formularios (obligatorio)
- Carta de liberación de responsabilidad firmada
- Ficha médica completa
- Información personal enviada

Salud y preparación
- Condición física adecuada para el nivel del viaje
- Entrenamiento previo realizado
- Medicamentos personales suficientes
- Alergias y condiciones informadas previamente

Equipamiento de ciclismo
- Casco (obligatorio)
- Lentes
- Guantes
- Kit de reparación básico (si llevas bicicleta propia)
- Ropa adecuada para ciclismo
- Calzado especializado

Equipaje
- Ropa para clima variable
- Ropa casual para cenas
- Traje de baño (si aplica)
- Artículos personales
- Adaptadores de corriente (Europa)

Logística de viaje
- Vuelos confirmados
- Horarios alineados con itinerario
- Transporte al punto de encuentro confirmado

Consideraciones importantes
- Pedal Prestige no se hace responsable por vuelos, equipaje o retrasos
- El itinerario puede cambiar por razones operativas o climáticas
- Es obligatorio seguir las indicaciones del equipo durante el viaje
- El consumo de alcohol debe ser responsable durante las actividades

Confirmacion final
Declaro que he leído y completado todos los requisitos necesarios para participar en el viaje.`;

const CHECKLIST_BODY_EN = `PRE-TRIP CHECKLIST
Pedal Prestige
This checklist is mandatory for all participants before travel.

Documentation
- Valid passport (minimum 6 months before expiration)
- Visas (if applicable)
- Digital copy of important documents
- Active international medical insurance

Payments
- Deposit completed
- Full payment settled
- Additional services confirmed

Forms (mandatory)
- Liability release accepted
- Medical form completed
- Personal information submitted

Health and preparation
- Physical condition suitable for trip level
- Pre-trip training completed
- Sufficient personal medication
- Allergies and conditions previously reported

Cycling equipment
- Helmet (mandatory)
- Glasses
- Gloves
- Basic repair kit (if you bring your own bike)
- Proper cycling apparel
- Specialized footwear

Luggage
- Clothing for variable weather
- Casual clothing for dinners
- Swimsuit (if applicable)
- Personal items
- Power adapters (Europe)

Travel logistics
- Flights confirmed
- Schedules aligned with itinerary
- Transportation to meeting point confirmed

Important considerations
- Pedal Prestige is not responsible for flights, luggage or delays
- Itinerary may change for operational or weather reasons
- Team instructions must be followed during the trip
- Alcohol use must be responsible during activities

Final confirmation
I declare that I have read and completed all requirements to participate in the trip.`;

const RELEASE_BODY_ES = `CARTA DE LIBERACIÓN DE RESPONSABILIDAD
Pedal Prestige

1. Declaración de conocimiento y aceptación de riesgos
Yo, el participante, reconozco que la participación en actividades de ciclismo de ruta, viajes internacionales y experiencias al aire libre implica riesgos inherentes.

2. Condición física y estado de salud
Declaro que me encuentro en condiciones físicas, mentales y médicas adecuadas para participar en este viaje.

3. Seguro médico y responsabilidad personal
Reconozco que es mi responsabilidad contar con seguro médico internacional vigente.

4. Equipaje y pertenencias personales
Soy responsable de mi equipaje personal y deportivo en todo momento.

5. Transporte y vuelos
Pedal Prestige no es responsable por retrasos, cancelaciones o modificaciones en vuelos o transportes contratados por mi cuenta.

6. Cambios de itinerario
El itinerario puede ser modificado por razones logísticas, climáticas, operativas o de seguridad.

7. Daños materiales y accidentes
Asumo total responsabilidad por cualquier daño que cause a terceros, propiedades o instalaciones.

8. Liberación de responsabilidad
Libero expresa y voluntariamente a Pedal Prestige y terceros involucrados de cualquier responsabilidad legal derivada de mi participacion, salvo dolo comprobado.

9. Conducta y cumplimiento
Me comprometo a seguir indicaciones del equipo y mantener conducta responsable.

10. Autorización de asistencia
En caso de emergencia, autorizo coordinación de asistencia médica, entendiendo que los costos corren por mi cuenta.

11. Uso de imagen
Autorizo el uso de fotografías y material audiovisual con fines promocionales, sin compensación adicional.

12. Aceptacion total
Declaro que he leído, entendido y aceptado completamente este documento.`;

const RELEASE_BODY_EN = `LIABILITY RELEASE LETTER
Pedal Prestige

1. Risk acknowledgment
I acknowledge that participation in road cycling activities, international travel, and outdoor experiences involves inherent risks.

2. Physical and health condition
I declare that I am in adequate physical, mental and medical condition to participate in this trip.

3. Medical insurance and personal responsibility
I acknowledge that I am responsible for maintaining valid international medical insurance.

4. Luggage and personal belongings
I am responsible for my personal and sports luggage at all times.

5. Transportation and flights
Pedal Prestige is not responsible for delays, cancellations, or changes in flights or transportation booked on my own.

6. Itinerary changes
The itinerary may be modified for logistical, weather, operational or safety reasons.

7. Property damage and accidents
I assume full responsibility for any damage caused to third parties, property or facilities.

8. Liability release
I expressly and voluntarily release Pedal Prestige and involved third parties from any legal liability arising from my participation, except in cases of proven willful misconduct.

9. Conduct and compliance
I agree to follow team instructions and maintain responsible behavior.

10. Assistance authorization
In case of emergency, I authorize coordination of medical assistance, understanding that all costs are my responsibility.

11. Image use
I authorize the use of photographs and audiovisual material for promotional purposes, without additional compensation.

12. Full acceptance
I declare that I have read, understood and fully accepted this document.`;

const MEDICAL_BODY_ES = `FICHA MÉDICA DEL PARTICIPANTE
Pedal Prestige

1. Contacto de emergencia
2. Información médica general
3. Alergias y restricciones
4. Condición física
5. Seguro
6. Declaración

Declaro que la información proporcionada es veraz y completa.
Autorizo a Pedal Prestige a utilizar esta información únicamente con fines operativos y de seguridad durante el viaje.`;

const MEDICAL_BODY_EN = `PARTICIPANT MEDICAL FORM
Pedal Prestige

1. Emergency contact
2. General medical information
3. Allergies and restrictions
4. Physical condition
5. Insurance
6. Declaration

I declare that the information provided is true and complete.
I authorize Pedal Prestige to use this information only for operational and safety purposes during the trip.`;

const formatAcceptanceDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
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
  const { language } = useI18n();
  const isEs = language === "es";
  const locale = isEs ? "es-MX" : "en-US";

  const text = {
    noticeTitle: isEs ? "Aviso" : "Notice",
    close: isEs ? "CERRAR" : "CLOSE",
    cancel: isEs ? "CANCELAR" : "CANCEL",
    understood: isEs ? "ENTENDIDO" : "UNDERSTOOD",
    yes: isEs ? "SÍ" : "YES",
    no: isEs ? "NO" : "NO",
    datePrefix: isEs ? "FECHA:" : "DATE:",
    automaticOnAccept: isEs ? "AUTOMÁTICA AL ACEPTAR" : "AUTOMATIC ON ACCEPT",
  };

  const selectedOption = useMemo(() => {
    const options = getExperienceOptions(language);
    if (typeof window === "undefined") return options[0];
    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get("option");
    return options.find((item) => item.id === selectedId) ?? options[0];
  }, [language]);

  const totalLabel = `$${selectedOption.priceMXN.toLocaleString(isEs ? "es-MX" : "en-US", {
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
  const checklistBody = isEs ? CHECKLIST_BODY_ES : CHECKLIST_BODY_EN;
  const digitalForms = isEs
    ? ["CHECKLIST PRE-VIAJE", "CARTA DE LIBERACIÓN DE RESPONSABILIDAD", "FICHA MÉDICA"]
    : ["PRE-TRIP CHECKLIST", "LIABILITY RELEASE", "MEDICAL FORM"];
  const checklistEvidence = checklistAccepted
    ? isEs
      ? `${checklistBody}\n\nNombre: ${checklistEffectiveName}\nFecha: ${checklistAcceptedAt}\nAceptación digital: SÍ`
      : `${checklistBody}\n\nName: ${checklistEffectiveName}\nDate: ${checklistAcceptedAt}\nDigital acceptance: YES`
    : "";

  const releaseEffectiveName = (releaseName || fullName).trim();
  const releaseAccepted = releaseAcceptedAt.length > 0;
  const releaseBody = isEs ? RELEASE_BODY_ES : RELEASE_BODY_EN;
  const releaseEvidence = releaseAccepted
    ? isEs
      ? `${releaseBody}\n\nNombre completo del participante: ${releaseEffectiveName}\nFecha de nacimiento: ${releaseBirthDate}\nNacionalidad: ${releaseNationality}\nPasaporte vigente: ${releasePassportHas}\nNúmero de pasaporte: ${releasePassportHas === "SI" ? releasePassportNumber : "NO APLICA"}\nNombre del viaje: Pedal Prestige Toscana\nFechas del viaje: ${releaseTravelDates}\nFecha de aceptación digital: ${releaseAcceptedAt}\nAceptación digital: SÍ`
      : `${releaseBody}\n\nParticipant full name: ${releaseEffectiveName}\nDate of birth: ${releaseBirthDate}\nNationality: ${releaseNationality}\nValid passport: ${releasePassportHas === "SI" ? "YES" : releasePassportHas === "NO" ? "NO" : ""}\nPassport number: ${releasePassportHas === "SI" ? releasePassportNumber : "N/A"}\nTrip name: Pedal Prestige Toscana\nTravel dates: ${releaseTravelDates}\nDigital acceptance date: ${releaseAcceptedAt}\nDigital acceptance: YES`
    : "";

  const medicalEffectiveName = (medicalName || fullName).trim();
  const medicalAccepted = medicalAcceptedAt.length > 0;
  const medicalBody = isEs ? MEDICAL_BODY_ES : MEDICAL_BODY_EN;
  const medicalEvidence = medicalAccepted
    ? isEs
      ? `${medicalBody}\n\nNombre completo: ${medicalEffectiveName}\nEdad: ${medicalAge}\nFecha de nacimiento: ${medicalBirthDate}\nNacionalidad: ${medicalNationality}\nTeléfono: ${medicalPhone}\nCorreo electrónico: ${medicalEmail}\nContacto de emergencia - Nombre: ${emergencyName}\nContacto de emergencia - Relación: ${emergencyRelationship}\nContacto de emergencia - Teléfono: ${emergencyPhone}\nEnfermedad crónica: ${chronicHas} (${chronicHas === "SI" ? chronicDetail : "NO APLICA"})\nProblemas cardíacos: ${heartHas} (${heartHas === "SI" ? heartDetail : "NO APLICA"})\nLesiones recientes: ${injuryHas} (${injuryHas === "SI" ? injuryDetail : "NO APLICA"})\nTratamiento médico actual: ${treatmentHas} (${treatmentHas === "SI" ? treatmentDetail : "NO APLICA"})\nMedicamentos regulares: ${medicationHas} (${medicationHas === "SI" ? medicationDetail : "NO APLICA"})\nAlergias: ${allergyHas} (${allergyHas === "SI" ? allergyDetail : "NO APLICA"})\nRestricciones alimenticias: ${dietHas} (${dietHas === "SI" ? dietDetail : "NO APLICA"})\nPractica ciclismo regularmente: ${cyclingHas}\nNivel percibido: ${cyclingLevel}\nKm por sesión: ${cyclingKm}\nParticipación en rutas largas o montaña: ${mountainHas}\nSeguro médico internacional: ${insuranceHas}\nCompañía de seguro: ${insuranceHas === "SI" ? insuranceCompany : "NO APLICA"}\nNúmero de póliza: ${insuranceHas === "SI" ? insurancePolicy : "NO APLICA"}\nFecha de aceptación digital: ${medicalAcceptedAt}\nAceptación digital: SÍ`
      : `${medicalBody}\n\nFull name: ${medicalEffectiveName}\nAge: ${medicalAge}\nDate of birth: ${medicalBirthDate}\nNationality: ${medicalNationality}\nPhone: ${medicalPhone}\nEmail: ${medicalEmail}\nEmergency contact - Name: ${emergencyName}\nEmergency contact - Relationship: ${emergencyRelationship}\nEmergency contact - Phone: ${emergencyPhone}\nChronic disease: ${chronicHas === "SI" ? "YES" : chronicHas === "NO" ? "NO" : ""} (${chronicHas === "SI" ? chronicDetail : "N/A"})\nHeart issues: ${heartHas === "SI" ? "YES" : heartHas === "NO" ? "NO" : ""} (${heartHas === "SI" ? heartDetail : "N/A"})\nRecent injuries: ${injuryHas === "SI" ? "YES" : injuryHas === "NO" ? "NO" : ""} (${injuryHas === "SI" ? injuryDetail : "N/A"})\nCurrent medical treatment: ${treatmentHas === "SI" ? "YES" : treatmentHas === "NO" ? "NO" : ""} (${treatmentHas === "SI" ? treatmentDetail : "N/A"})\nRegular medication: ${medicationHas === "SI" ? "YES" : medicationHas === "NO" ? "NO" : ""} (${medicationHas === "SI" ? medicationDetail : "N/A"})\nAllergies: ${allergyHas === "SI" ? "YES" : allergyHas === "NO" ? "NO" : ""} (${allergyHas === "SI" ? allergyDetail : "N/A"})\nDietary restrictions: ${dietHas === "SI" ? "YES" : dietHas === "NO" ? "NO" : ""} (${dietHas === "SI" ? dietDetail : "N/A"})\nCycles regularly: ${cyclingHas === "SI" ? "YES" : cyclingHas === "NO" ? "NO" : ""}\nPerceived level: ${cyclingLevel}\nKm per session: ${cyclingKm}\nParticipated in long/mountain routes: ${mountainHas === "SI" ? "YES" : mountainHas === "NO" ? "NO" : ""}\nInternational medical insurance: ${insuranceHas === "SI" ? "YES" : insuranceHas === "NO" ? "NO" : ""}\nInsurance company: ${insuranceHas === "SI" ? insuranceCompany : "N/A"}\nPolicy number: ${insuranceHas === "SI" ? insurancePolicy : "N/A"}\nDigital acceptance date: ${medicalAcceptedAt}\nDigital acceptance: YES`
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
      showNotice(isEs ? "Por favor, escribe tu nombre para aceptar el checklist." : "Please enter your name to accept the checklist.");
      return;
    }

    setFullName((prev) => prev || name);
    setChecklistName(name);
    setChecklistAcceptedAt(formatAcceptanceDate(new Date(), locale));
    setIsChecklistModalOpen(false);
  };

  const handleAcceptRelease = () => {
    const name = (releaseName || fullName).trim();
    if (!name) {
      showNotice(isEs ? "Por favor, escribe tu nombre para aceptar la carta." : "Please enter your name to accept the release letter.");
      return;
    }
    if (!releaseBirthDate.trim() || !releaseNationality.trim() || !releaseTravelDates.trim()) {
      showNotice(isEs ? "Completa fecha de nacimiento, nacionalidad y fechas del viaje." : "Complete date of birth, nationality, and travel dates.");
      return;
    }
    if (!releasePassportHas) {
      showNotice(isEs ? "Confirma si cuentas con pasaporte vigente." : "Please confirm whether you have a valid passport.");
      return;
    }
    if (releasePassportHas === "SI" && !releasePassportNumber.trim()) {
      showNotice(isEs ? "Si indicaste que sí tienes pasaporte, agrega el número." : "If you selected yes for passport, please provide the passport number.");
      return;
    }

    setFullName((prev) => prev || name);
    setReleaseName(name);
    setReleaseAcceptedAt(formatAcceptanceDate(new Date(), locale));
    setIsReleaseModalOpen(false);
  };

  const handleAcceptMedical = () => {
    const name = (medicalName || fullName).trim();
    if (!name) {
      showNotice(isEs ? "Por favor, escribe tu nombre para aceptar la ficha médica." : "Please enter your name to accept the medical form.");
      return;
    }
    if (!medicalAge.trim() || !medicalBirthDate.trim() || !medicalNationality.trim() || !medicalPhone.trim() || !medicalEmail.trim()) {
      showNotice(isEs ? "Completa nombre, edad, fecha de nacimiento, nacionalidad, teléfono y correo en la ficha médica." : "Complete name, age, date of birth, nationality, phone, and email in the medical form.");
      return;
    }
    if (!emergencyName.trim() || !emergencyRelationship.trim() || !emergencyPhone.trim()) {
      showNotice(isEs ? "Completa los datos del contacto de emergencia." : "Complete all emergency contact details.");
      return;
    }
    if (!chronicHas || !heartHas || !injuryHas || !treatmentHas || !medicationHas || !allergyHas || !dietHas || !cyclingHas || !cyclingLevel || !mountainHas || !insuranceHas) {
      showNotice(isEs ? "Responde todas las preguntas de SÍ/NO y el nivel percibido de ciclismo." : "Answer all YES/NO questions and select your cycling level.");
      return;
    }
    if (chronicHas === "SI" && !chronicDetail.trim()) {
      showNotice(isEs ? "Indica cuál es la enfermedad crónica." : "Specify the chronic condition.");
      return;
    }
    if (heartHas === "SI" && !heartDetail.trim()) {
      showNotice(isEs ? "Agrega el detalle de problemas cardíacos." : "Add details of heart issues.");
      return;
    }
    if (injuryHas === "SI" && !injuryDetail.trim()) {
      showNotice(isEs ? "Agrega el detalle de lesiones recientes." : "Add details of recent injuries.");
      return;
    }
    if (treatmentHas === "SI" && !treatmentDetail.trim()) {
      showNotice(isEs ? "Especifica el tratamiento médico actual." : "Specify current medical treatment.");
      return;
    }
    if (medicationHas === "SI" && !medicationDetail.trim()) {
      showNotice(isEs ? "Indica qué medicamentos tomas regularmente." : "Specify your regular medications.");
      return;
    }
    if (allergyHas === "SI" && !allergyDetail.trim()) {
      showNotice(isEs ? "Especifica las alergias reportadas." : "Specify reported allergies.");
      return;
    }
    if (dietHas === "SI" && !dietDetail.trim()) {
      showNotice(isEs ? "Especifica las restricciones alimenticias." : "Specify dietary restrictions.");
      return;
    }
    if (!cyclingKm.trim()) {
      showNotice(isEs ? "Indica cuántos kilómetros sueles rodar por sesión." : "Indicate how many kilometers you usually ride per session.");
      return;
    }
    if (insuranceHas === "SI" && (!insuranceCompany.trim() || !insurancePolicy.trim())) {
      showNotice(isEs ? "Si cuentas con seguro, completa compañía y número de póliza." : "If you have insurance, complete company and policy number.");
      return;
    }

    setFullName((prev) => prev || name);
    setMedicalName(name);
    setMedicalAcceptedAt(formatAcceptanceDate(new Date(), locale));
    setIsMedicalModalOpen(false);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    if (!checklistAccepted || !releaseAccepted || !medicalAccepted) {
      event.preventDefault();
      showNotice(
        isEs
          ? "Debes leer y aceptar CHECKLIST PRE-VIAJE, CARTA DE LIBERACIÓN y FICHA MÉDICA antes de enviar."
          : "You must read and accept PRE-TRIP CHECKLIST, LIABILITY RELEASE, and MEDICAL FORM before submitting."
      );
      return;
    }

    if (!fullName.trim() || !mainEmail.trim() || !mainPhone.trim() || !mainCity.trim() || !mainAdditionalInfo.trim()) {
      event.preventDefault();
      showNotice(isEs ? "Completa todos los campos del formulario principal antes de enviar." : "Complete all fields in the main form before submitting.");
      return;
    }

    if (!proofFileName) {
      event.preventDefault();
      showNotice(isEs ? "Debes cargar el comprobante de pago para poder enviar." : "You must upload payment proof before submitting.");
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
              {isEs ? "Reserva tu lugar" : "Save your place"}
            </h1>
            <p
              className="mt-[8px] text-[clamp(16px,1.66vw,24px)] leading-[1] text-[#2C3742]"
              style={{ fontFamily: "Hubballi, system-ui, sans-serif", fontWeight: 400 }}
            >
              {isEs ? "Completa tu reserva" : "Complete your reservation"}
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
                className="text-[clamp(24px,2.22vw,32px)] leading-[1]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 600 }}
              >
                {isEs ? "Reserva tu lugar" : "Save your place"}
              </h2>

              <div className="mt-[16px] border border-[#D1D6DB] bg-[#F6F3EE] p-[12px]">
                <p
                  className="text-[13px] leading-[1] text-[#0E1A24]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  {isEs ? "Formularios digitales" : "Digital forms"}
                </p>
                <p
                  className="mt-[4px] text-[11px] leading-[1.2] text-[#4F5861]"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                >
                  {isEs
                    ? "Debes revisar y aceptar los 3 documentos antes de viajar."
                    : "You must review and accept all 3 documents before traveling."}
                </p>
                <div className="mt-[10px] grid gap-[8px]">
                  {digitalForms.map((formName, index) => {
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
                              ? isEs
                                ? "ACEPTADO"
                                : "ACCEPTED"
                              : isEs
                                ? "LEER"
                                : "READ"
                            : isSecond
                              ? releaseAccepted
                                ? isEs
                                  ? "ACEPTADO"
                                  : "ACCEPTED"
                                : isEs
                                  ? "LEER"
                                  : "READ"
                              : isThird
                                ? medicalAccepted
                                  ? isEs
                                    ? "ACEPTADO"
                                    : "ACCEPTED"
                                  : isEs
                                    ? "LEER"
                                    : "READ"
                                : isEs
                                  ? "PROXIMAMENTE"
                                  : "COMING SOON"}
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
                  placeholder={isEs ? "NOMBRE COMPLETO" : "FULL NAME"}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder={isEs ? "EMAIL" : "EMAIL"}
                  value={mainEmail}
                  onChange={(event) => setMainEmail(event.target.value)}
                  className="col-span-2 h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="telefono"
                  type="tel"
                  placeholder={isEs ? "TELEFONO" : "PHONE"}
                  value={mainPhone}
                  onChange={(event) => setMainPhone(event.target.value)}
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <input
                  name="ciudad"
                  type="text"
                  placeholder={isEs ? "CIUDAD" : "CITY"}
                  value={mainCity}
                  onChange={(event) => setMainCity(event.target.value)}
                  className="h-[42px] border border-[#7A8085] bg-transparent px-[12px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />
                <textarea
                  name="informacion_adicional"
                  rows={4}
                  placeholder={
                    isEs
                      ? "INFORMACION ADICIONAL QUE QUIERAS COMPARTIR..."
                      : "ANY ADDITIONAL INFORMATION YOU WOULD LIKE US TO SHARE..."
                  }
                  value={mainAdditionalInfo}
                  onChange={(event) => setMainAdditionalInfo(event.target.value)}
                  className="col-span-2 h-[94px] resize-none border border-[#7A8085] bg-transparent px-[12px] py-[8px] text-[11px] tracking-[0.04em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />

                <label className="col-span-2 inline-flex h-[42px] cursor-pointer items-center justify-center border border-[#7A8085] text-[11px] tracking-[0.06em] text-[#4A525A]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                  {proofFileName
                    ? `${isEs ? "COMPROBANTE CARGADO" : "PROOF UPLOADED"}: ${proofFileName}`
                    : isEs
                      ? "SUBE TU COMPROBANTE  ⤓"
                      : "UPLOAD YOUR PAYMENT PROOF  ⤓"}
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
                  {isEs ? "ENVIAR" : "SUBMIT"}
                </button>
              </div>
            </form>

            <div className="w-full text-[#0E1A24]">
              <h2
                className="text-[clamp(24px,2.22vw,32px)] leading-[1] italic"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 600 }}
              >
                {isEs ? "Datos bancarios para transferencia" : "Bank details for transfer"}
              </h2>

              <div className="mt-[20px] space-y-[14px]">
                <div>
                  <p className="text-[22px] leading-[1]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>{isEs ? "Banco" : "Bank"}</p>
                  <div className="mt-[6px] flex items-center gap-[6px]">
                    <p className="text-[14px] leading-[1.2] text-[#3A4450]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{BANK_DATA.bank}</p>
                    <button type="button" onClick={() => copyToClipboard(BANK_DATA.bank)} className="text-[12px] text-[#6A7179]">⧉</button>
                  </div>
                </div>

                <div>
                  <p className="text-[22px] leading-[1]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>{isEs ? "Beneficiario" : "Beneficiary"}</p>
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
                  <p className="mt-[4px] text-[14px] leading-[1] tracking-[0.08em] text-[#6A7179]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "IVA INCLUIDO" : "VAT INCLUDED"}</p>
                </div>
              </div>

              <p
                className="mt-[24px] max-w-[760px] text-[13px] leading-[1.25] text-[#3D4751]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 400 }}
              >
                {isEs
                  ? "El envio del comprobante de transferencia inicia el proceso de validacion, pero no garantiza la confirmacion inmediata de tu lugar. La reserva se formaliza cuando verificamos la recepcion de fondos en la cuenta indicada."
                  : "Submitting your transfer proof starts the validation process, but does not guarantee immediate confirmation of your spot. Your reservation is finalized once we verify funds in the specified bank account."}
                <br />
                {isEs
                  ? "Asegúrate de realizar la transferencia por el monto exacto dentro de las próximas 24 horas para evitar la liberación automática de tu cupo. En caso de discrepancias o falta de disponibilidad posterior al pago, aplicará nuestra política de reembolso."
                  : "Please complete the transfer for the exact amount within the next 24 hours to avoid automatic release of your spot. In case of discrepancies or lack of availability after payment, our refund policy will apply."}
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
                {isEs ? "CHECKLIST PRE-VIAJE" : "PRE-TRIP CHECKLIST"}
              </h3>
              <button
                type="button"
                onClick={() => setIsChecklistModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                {text.close}
              </button>
            </div>

            <div className="max-h-[calc(90vh-54px)] overflow-y-auto px-[18px] py-[16px]">
              <p
                className="text-[13px] leading-[1.3]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                Pedal Prestige
                <br />
                {isEs
                  ? "Este checklist es obligatorio para todos los participantes previo al viaje."
                  : "This checklist is mandatory for all participants before travel."}
              </p>

              <div
                className="mt-[14px] space-y-[10px] text-[13px] leading-[1.25] text-[#22303D]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                <p><strong>{isEs ? "Documentación" : "Documentation"}</strong></p>
                <p>{isEs ? "- Pasaporte vigente (mínimo 6 meses antes de vencimiento)" : "- Valid passport (minimum 6 months before expiration)"}</p>
                <p>{isEs ? "- Visas (si aplica)" : "- Visas (if applicable)"}</p>
                <p>{isEs ? "- Copia digital de documentos importantes" : "- Digital copy of important documents"}</p>
                <p>{isEs ? "- Seguro médico internacional activo" : "- Active international medical insurance"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Pagos" : "Payments"}</strong></p>
                <p>{isEs ? "- Depósito realizado" : "- Deposit completed"}</p>
                <p>{isEs ? "- Pago total liquidado" : "- Full payment settled"}</p>
                <p>{isEs ? "- Servicios adicionales confirmados" : "- Additional services confirmed"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Formularios (obligatorio)" : "Forms (mandatory)"}</strong></p>
                <p>{isEs ? "- Carta de liberación de responsabilidad aceptada" : "- Liability release accepted"}</p>
                <p>{isEs ? "- Ficha médica completa" : "- Medical form completed"}</p>
                <p>{isEs ? "- Información personal enviada" : "- Personal information submitted"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Salud y preparación" : "Health and preparation"}</strong></p>
                <p>{isEs ? "- Condición física adecuada para el nivel del viaje" : "- Physical condition suitable for trip level"}</p>
                <p>{isEs ? "- Entrenamiento previo realizado" : "- Pre-trip training completed"}</p>
                <p>{isEs ? "- Medicamentos personales suficientes" : "- Sufficient personal medication"}</p>
                <p>{isEs ? "- Alergias y condiciones informadas previamente" : "- Allergies and conditions previously reported"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Equipamiento de ciclismo" : "Cycling equipment"}</strong></p>
                <p>{isEs ? "- Casco (obligatorio)" : "- Helmet (mandatory)"}</p>
                <p>{isEs ? "- Lentes" : "- Glasses"}</p>
                <p>{isEs ? "- Guantes" : "- Gloves"}</p>
                <p>{isEs ? "- Kit de reparación básico (si llevas bicicleta propia)" : "- Basic repair kit (if you bring your own bike)"}</p>
                <p>{isEs ? "- Ropa adecuada para ciclismo" : "- Proper cycling apparel"}</p>
                <p>{isEs ? "- Calzado especializado" : "- Specialized footwear"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Equipaje" : "Luggage"}</strong></p>
                <p>{isEs ? "- Ropa para clima variable" : "- Clothing for variable weather"}</p>
                <p>{isEs ? "- Ropa casual para cenas" : "- Casual clothing for dinners"}</p>
                <p>{isEs ? "- Traje de baño (si aplica)" : "- Swimsuit (if applicable)"}</p>
                <p>{isEs ? "- Artículos personales" : "- Personal items"}</p>
                <p>{isEs ? "- Adaptadores de corriente (Europa)" : "- Power adapters (Europe)"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Logística de viaje" : "Travel logistics"}</strong></p>
                <p>{isEs ? "- Vuelos confirmados" : "- Flights confirmed"}</p>
                <p>{isEs ? "- Horarios alineados con itinerario" : "- Schedules aligned with itinerary"}</p>
                <p>{isEs ? "- Transporte al punto de encuentro confirmado" : "- Transportation to meeting point confirmed"}</p>

                <p className="pt-[6px]"><strong>{isEs ? "Consideraciones importantes" : "Important considerations"}</strong></p>
                <p>{isEs ? "- Pedal Prestige no se hace responsable por vuelos, equipaje o retrasos" : "- Pedal Prestige is not responsible for flights, luggage or delays"}</p>
                <p>{isEs ? "- El itinerario puede cambiar por razones operativas o climáticas" : "- Itinerary may change for operational or weather reasons"}</p>
                <p>{isEs ? "- Es obligatorio seguir las indicaciones del equipo durante el viaje" : "- Team instructions must be followed during the trip"}</p>
                <p>{isEs ? "- El consumo de alcohol debe ser responsable durante las actividades" : "- Alcohol use must be responsible during activities"}</p>
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p
                  className="text-[13px] leading-[1.2]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  {isEs ? "Confirmación final" : "Final confirmation"}
                </p>
                <p
                  className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
                >
                  {isEs
                    ? "Declaro que he leído y completado todos los requisitos necesarios para participar en el viaje."
                    : "I declare that I have read and completed all requirements to participate in the trip."}
                </p>

                <input
                  type="text"
                  value={checklistName || fullName}
                  onChange={(event) => setChecklistName(event.target.value)}
                  placeholder={isEs ? "NOMBRE" : "NAME"}
                  className="mt-[10px] h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                  style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                />

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    {text.datePrefix} {checklistAcceptedAt || text.automaticOnAccept}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptChecklist}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {isEs ? "ACEPTAR CHECKLIST" : "ACCEPT CHECKLIST"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChecklistModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {text.cancel}
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
                {isEs ? "CARTA DE LIBERACIÓN DE RESPONSABILIDAD" : "LIABILITY RELEASE LETTER"}
              </h3>
              <button
                type="button"
                onClick={() => setIsReleaseModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                {text.close}
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
                    {isEs ? "NOMBRE COMPLETO DEL PARTICIPANTE" : "PARTICIPANT FULL NAME"}
                  </p>
                  <input
                    type="text"
                    value={releaseName || fullName}
                    onChange={(event) => setReleaseName(event.target.value)}
                    placeholder={isEs ? "NOMBRE COMPLETO" : "FULL NAME"}
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    {isEs ? "FECHA DE NACIMIENTO (DD/MM/AAAA)" : "DATE OF BIRTH (DD/MM/YYYY)"}
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
                    {isEs ? "NACIONALIDAD" : "NATIONALITY"}
                  </p>
                  <input
                    type="text"
                    value={releaseNationality}
                    onChange={(event) => setReleaseNationality(event.target.value)}
                    placeholder={isEs ? "NACIONALIDAD" : "NATIONALITY"}
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    {isEs ? "FECHAS DEL VIAJE / PERÍODO" : "TRAVEL DATES / PERIOD"}
                  </p>
                  <input
                    type="text"
                    value={releaseTravelDates}
                    onChange={(event) => setReleaseTravelDates(event.target.value)}
                    placeholder={isEs ? "Ej: Toscana marzo 2026 o 10-17 marzo 2026" : "Ex: Tuscany March 2026 or March 10-17, 2026"}
                    className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                </div>
              </div>

              <div className="mt-[10px] border border-[#7A8085] p-[10px]">
                <p className="text-[11px] tracking-[0.05em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                  {isEs ? "PASAPORTE VIGENTE" : "VALID PASSPORT"}
                </p>
                <div className="mt-[8px] flex gap-[8px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={() => setReleasePassportHas("SI")}
                    className={`h-[34px] border px-[12px] text-[11px] tracking-[0.05em] ${releasePassportHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {text.yes}
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
                    {text.no}
                  </button>
                </div>
                {releasePassportHas === "SI" ? (
                  <input
                    type="text"
                    value={releasePassportNumber}
                    onChange={(event) => setReleasePassportNumber(event.target.value)}
                    placeholder={isEs ? "NÚMERO DE PASAPORTE" : "PASSPORT NUMBER"}
                    className="mt-[8px] h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  />
                ) : null}
              </div>

              <div
                className="mt-[14px] space-y-[10px] text-[13px] leading-[1.25] text-[#22303D]"
                style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
              >
                <p><strong>{isEs ? "1. Declaración de conocimiento y aceptación de riesgos" : "1. Risk acknowledgment"}</strong></p>
                <p>{isEs ? "- Caídas, colisiones y accidentes." : "- Falls, collisions and accidents."}</p>
                <p>{isEs ? "- Condiciones variables del terreno y clima." : "- Variable terrain and weather conditions."}</p>
                <p>{isEs ? "- Interacción con vehículos, peatones u otros ciclistas." : "- Interaction with vehicles, pedestrians or other cyclists."}</p>
                <p>{isEs ? "- Fallas mecánicas del equipo." : "- Mechanical equipment failures."}</p>
                <p>{isEs ? "- Acceso limitado a servicios médicos en ciertas zonas." : "- Limited access to medical services in certain areas."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "2. Condición física y estado de salud" : "2. Physical and health condition"}</strong></p>
                <p>{isEs ? "Declaro que me encuentro en condiciones físicas, mentales y médicas adecuadas para participar en este viaje." : "I declare that I am in adequate physical, mental and medical condition to participate in this trip."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "3. Seguro médico y responsabilidad personal" : "3. Medical insurance and personal responsibility"}</strong></p>
                <p>{isEs ? "Es mi responsabilidad contar con seguro médico internacional vigente." : "I acknowledge that I am responsible for maintaining valid international medical insurance."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "4. Equipaje y pertenencias personales" : "4. Luggage and personal belongings"}</strong></p>
                <p>{isEs ? "Soy responsable de mi equipaje personal y deportivo en todo momento." : "I am responsible for my personal and sports luggage at all times."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "5. Transporte y vuelos" : "5. Transportation and flights"}</strong></p>
                <p>{isEs ? "Pedal Prestige no es responsable por retrasos, cancelaciones o modificaciones en vuelos o transportes contratados por mi cuenta." : "Pedal Prestige is not responsible for delays, cancellations, or changes in flights or transportation booked on my own."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "6. Cambios de itinerario" : "6. Itinerary changes"}</strong></p>
                <p>{isEs ? "El itinerario puede ser modificado por razones logísticas, climáticas, operativas o de seguridad." : "The itinerary may be modified for logistical, weather, operational or safety reasons."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "7. Daños materiales y accidentes" : "7. Property damage and accidents"}</strong></p>
                <p>{isEs ? "Asumo total responsabilidad por cualquier daño que cause a terceros, propiedades o instalaciones." : "I assume full responsibility for any damage caused to third parties, property or facilities."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "8. Liberación de responsabilidad" : "8. Liability release"}</strong></p>
                <p>{isEs ? "Libero expresa y voluntariamente a Pedal Prestige y terceros involucrados de cualquier responsabilidad legal derivada de mi participación, salvo dolo comprobado." : "I expressly and voluntarily release Pedal Prestige and involved third parties from any legal liability arising from my participation, except in cases of proven willful misconduct."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "9. Conducta y cumplimiento" : "9. Conduct and compliance"}</strong></p>
                <p>{isEs ? "Me comprometo a seguir las indicaciones del equipo organizador y mantener una conducta responsable." : "I agree to follow team instructions and maintain responsible behavior."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "10. Autorización de asistencia" : "10. Assistance authorization"}</strong></p>
                <p>{isEs ? "En caso de emergencia, autorizo coordinación de asistencia médica o traslado, entendiendo que todos los costos corren por mi cuenta." : "In case of emergency, I authorize coordination of medical assistance or transfer, understanding that all costs are my responsibility."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "11. Uso de imagen" : "11. Image use"}</strong></p>
                <p>{isEs ? "Autorizo a Pedal Prestige a utilizar fotografías y material audiovisual con fines promocionales, sin compensación adicional." : "I authorize the use of photographs and audiovisual material for promotional purposes, without additional compensation."}</p>

                <p className="pt-[6px]"><strong>{isEs ? "12. Aceptación total" : "12. Full acceptance"}</strong></p>
                <p>{isEs ? "Declaro que he leído, entendido y aceptado completamente este documento." : "I declare that I have read, understood and fully accepted this document."}</p>
                <p>{isEs ? "He tenido la oportunidad de hacer preguntas y resolver dudas." : "I have had the opportunity to ask questions and clarify doubts."}</p>
                <p>{isEs ? "Acepto de manera libre y voluntaria." : "I accept freely and voluntarily."}</p>
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p
                  className="text-[13px] leading-[1.2]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}
                >
                  {isEs ? "Confirmación final" : "Final confirmation"}
                </p>
                <p
                  className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]"
                  style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}
                >
                  {isEs
                    ? "Esta aceptación digital sustituye firma manuscrita y queda registrada como evidencia."
                    : "This digital acceptance replaces a handwritten signature and is recorded as evidence."}
                </p>

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    {text.datePrefix} {releaseAcceptedAt || text.automaticOnAccept}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptRelease}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {isEs ? "ACEPTAR CARTA" : "ACCEPT RELEASE"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsReleaseModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {text.cancel}
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
                {isEs ? "FICHA MÉDICA DEL PARTICIPANTE" : "PARTICIPANT MEDICAL FORM"}
              </h3>
              <button
                type="button"
                onClick={() => setIsMedicalModalOpen(false)}
                className="h-[30px] border border-[#8B939A] px-[12px] text-[11px] tracking-[0.05em]"
                style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
              >
                {text.close}
              </button>
            </div>

            <div className="max-h-[calc(90vh-54px)] overflow-y-auto px-[18px] py-[16px]">
              <p className="text-[13px] leading-[1.3]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>Pedal Prestige</p>

              <div className="mt-[10px] grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "NOMBRE COMPLETO" : "FULL NAME"}</p>
                  <input type="text" value={medicalName || fullName} onChange={(event) => setMedicalName(event.target.value)} placeholder={isEs ? "NOMBRE COMPLETO" : "FULL NAME"} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "EDAD (AUTOMÁTICA, EDITABLE)" : "AGE (AUTO, EDITABLE)"}</p>
                  <div className="grid grid-cols-[1fr_auto] gap-[6px]">
                    <input
                      type="number"
                      min="0"
                      value={medicalAge}
                      onChange={(event) => {
                        setMedicalAge(event.target.value);
                        setMedicalAgeManuallyEdited(true);
                      }}
                      placeholder={isEs ? "EDAD" : "AGE"}
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
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "FECHA DE NACIMIENTO (DD/MM/AAAA)" : "DATE OF BIRTH (DD/MM/YYYY)"}</p>
                  <input type="date" value={medicalBirthDate} onChange={(event) => handleMedicalBirthDateChange(event.target.value)} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "NACIONALIDAD" : "NATIONALITY"}</p>
                  <input type="text" value={medicalNationality} onChange={(event) => setMedicalNationality(event.target.value)} placeholder={isEs ? "NACIONALIDAD" : "NATIONALITY"} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "TELÉFONO" : "PHONE"}</p>
                  <input type="tel" value={medicalPhone} onChange={(event) => setMedicalPhone(event.target.value)} placeholder={isEs ? "TELÉFONO" : "PHONE"} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
                <div>
                  <p className="mb-[5px] text-[10px] tracking-[0.06em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "CORREO ELECTRÓNICO" : "EMAIL"}</p>
                  <input type="email" value={medicalEmail} onChange={(event) => setMedicalEmail(event.target.value)} placeholder={isEs ? "CORREO ELECTRÓNICO" : "EMAIL"} className="h-[40px] w-full border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
              </div>

              <div className="mt-[14px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "1. CONTACTO DE EMERGENCIA" : "1. EMERGENCY CONTACT"}</p>
                <div className="mt-[8px] grid grid-cols-3 gap-[8px] max-sm:grid-cols-1">
                  <input type="text" value={emergencyName} onChange={(event) => setEmergencyName(event.target.value)} placeholder={isEs ? "NOMBRE" : "NAME"} className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                  <input type="text" value={emergencyRelationship} onChange={(event) => setEmergencyRelationship(event.target.value)} placeholder={isEs ? "RELACIÓN" : "RELATIONSHIP"} className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                  <input type="tel" value={emergencyPhone} onChange={(event) => setEmergencyPhone(event.target.value)} placeholder={isEs ? "TELÉFONO" : "PHONE"} className="h-[38px] border border-[#7A8085] bg-transparent px-[10px] text-[11px] tracking-[0.05em] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }} />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "2. INFORMACIÓN MÉDICA GENERAL" : "2. GENERAL MEDICAL INFORMATION"}</p>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Enfermedad crónica" : "Chronic disease"}</p>
                  <button type="button" onClick={() => setChronicHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${chronicHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setChronicHas("NO"); setChronicDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${chronicHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={chronicDetail} onChange={(event) => setChronicDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Problemas cardíacos" : "Heart issues"}</p>
                  <button type="button" onClick={() => setHeartHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${heartHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setHeartHas("NO"); setHeartDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${heartHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={heartDetail} onChange={(event) => setHeartDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Lesiones recientes (6 meses)" : "Recent injuries (6 months)"}</p>
                  <button type="button" onClick={() => setInjuryHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${injuryHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setInjuryHas("NO"); setInjuryDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${injuryHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={injuryDetail} onChange={(event) => setInjuryDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Tratamiento médico actual" : "Current medical treatment"}</p>
                  <button type="button" onClick={() => setTreatmentHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${treatmentHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setTreatmentHas("NO"); setTreatmentDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${treatmentHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={treatmentDetail} onChange={(event) => setTreatmentDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Medicamentos regulares" : "Regular medication"}</p>
                  <button type="button" onClick={() => setMedicationHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${medicationHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setMedicationHas("NO"); setMedicationDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${medicationHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={medicationDetail} onChange={(event) => setMedicationDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "3. ALERGIAS Y RESTRICCIONES" : "3. ALLERGIES AND RESTRICTIONS"}</p>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Alergias" : "Allergies"}</p>
                  <button type="button" onClick={() => setAllergyHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${allergyHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setAllergyHas("NO"); setAllergyDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${allergyHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={allergyDetail} onChange={(event) => setAllergyDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Restricciones alimenticias" : "Dietary restrictions"}</p>
                  <button type="button" onClick={() => setDietHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${dietHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setDietHas("NO"); setDietDetail(""); }} className={`h-[34px] border px-[10px] text-[11px] ${dietHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                  <input type="text" value={dietDetail} onChange={(event) => setDietDetail(event.target.value)} placeholder={isEs ? "Detalle (si aplica)" : "Detail (if applicable)"} className="h-[34px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "4. CONDICIÓN FÍSICA" : "4. PHYSICAL CONDITION"}</p>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "¿Prácticas ciclismo regularmente?" : "Do you cycle regularly?"}</p>
                  <button type="button" onClick={() => setCyclingHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${cyclingHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => setCyclingHas("NO")} className={`h-[34px] border px-[10px] text-[11px] ${cyclingHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                </div>
                <div className="grid grid-cols-2 gap-[8px] max-sm:grid-cols-1">
                  <select value={cyclingLevel} onChange={(event) => setCyclingLevel(event.target.value as "" | "BASICO" | "INTERMEDIO" | "AVANZADO")} className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] focus:outline-none" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    <option value="">{isEs ? "NIVEL PERCIBIDO" : "PERCEIVED LEVEL"}</option>
                    <option value="BASICO">{isEs ? "BÁSICO" : "BASIC"}</option>
                    <option value="INTERMEDIO">{isEs ? "INTERMEDIO" : "INTERMEDIATE"}</option>
                    <option value="AVANZADO">{isEs ? "AVANZADO" : "ADVANCED"}</option>
                  </select>
                  <input type="text" value={cyclingKm} onChange={(event) => setCyclingKm(event.target.value)} placeholder={isEs ? "KM POR SESIÓN" : "KM PER SESSION"} className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                </div>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Has participado en rutas largas o montaña" : "Have you participated in long or mountain routes"}</p>
                  <button type="button" onClick={() => setMountainHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${mountainHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => setMountainHas("NO")} className={`h-[34px] border px-[10px] text-[11px] ${mountainHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                </div>
              </div>

              <div className="mt-[12px] space-y-[8px] border border-[#7A8085] p-[10px]">
                <p className="text-[12px] tracking-[0.06em] text-[#0E1A24]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>{isEs ? "5. SEGURO" : "5. INSURANCE"}</p>
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[8px] max-sm:grid-cols-1">
                  <p className="text-[11px] text-[#22303D]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>{isEs ? "Cuentas con seguro médico internacional" : "Do you have international medical insurance"}</p>
                  <button type="button" onClick={() => setInsuranceHas("SI")} className={`h-[34px] border px-[10px] text-[11px] ${insuranceHas === "SI" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.yes}</button>
                  <button type="button" onClick={() => { setInsuranceHas("NO"); setInsuranceCompany(""); setInsurancePolicy(""); }} className={`h-[34px] border px-[10px] text-[11px] ${insuranceHas === "NO" ? "border-[#071727] bg-[#071727] text-[var(--prestige-ivory)]" : "border-[#7A8085] text-[#0E1A24]"}`}>{text.no}</button>
                </div>
                {insuranceHas === "SI" ? (
                  <div className="grid grid-cols-2 gap-[8px] max-sm:grid-cols-1">
                    <input type="text" value={insuranceCompany} onChange={(event) => setInsuranceCompany(event.target.value)} placeholder={isEs ? "COMPAÑÍA" : "COMPANY"} className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                    <input type="text" value={insurancePolicy} onChange={(event) => setInsurancePolicy(event.target.value)} placeholder={isEs ? "NÚMERO DE PÓLIZA" : "POLICY NUMBER"} className="h-[36px] border border-[#7A8085] bg-transparent px-[9px] text-[11px] text-[#0E1A24] placeholder:text-[#6A7179] focus:outline-none" />
                  </div>
                ) : null}
              </div>

              <div className="mt-[18px] border border-[#7A8085] p-[12px]">
                <p className="text-[13px] leading-[1.2]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif", fontWeight: 700 }}>{isEs ? "6. Declaración" : "6. Declaration"}</p>
                <p className="mt-[6px] text-[12px] leading-[1.3] text-[#3F4952]" style={{ fontFamily: "BaskervilleLocal, Libre Baskerville, serif" }}>
                  {isEs
                    ? "Declaro que la información proporcionada es veraz y completa. Esta aceptación digital sustituye firma manuscrita y queda registrada como evidencia."
                    : "I declare that the information provided is true and complete. This digital acceptance replaces a handwritten signature and is recorded as evidence."}
                </p>

                <div className="mt-[10px] grid grid-cols-1 gap-[10px]">
                  <div className="h-[40px] border border-[#B3B8BD] px-[10px] text-[11px] leading-[40px] tracking-[0.05em] text-[#4D5660]" style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}>
                    {text.datePrefix} {medicalAcceptedAt || text.automaticOnAccept}
                  </div>
                </div>

                <div className="mt-[12px] flex gap-[10px] max-sm:flex-col">
                  <button
                    type="button"
                    onClick={handleAcceptMedical}
                    className="h-[40px] flex-1 bg-[#071727] px-[14px] text-[11px] tracking-[0.08em] text-[var(--prestige-ivory)]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {isEs ? "ACEPTAR FICHA MÉDICA" : "ACCEPT MEDICAL FORM"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMedicalModalOpen(false)}
                    className="h-[40px] flex-1 border border-[#7A8085] px-[14px] text-[11px] tracking-[0.08em] text-[#0E1A24]"
                    style={{ fontFamily: "Hubballi, system-ui, sans-serif" }}
                  >
                    {text.cancel}
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
                {text.noticeTitle}
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
                  {text.understood}
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
