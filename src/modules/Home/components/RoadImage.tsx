import roadImg from "../assets/carretera.webp";

type RoadImageProps = {
  py?: string;
  maxWidth?: number;
  /** Aspect ratio en mobile/tablet (ej: "16/9", "4/3", "3/2") */
  mobileAspect?: string;
};

export default function RoadImage({
  py = "py-[0px]",
  maxWidth = 1280,
  mobileAspect = "16/9",
}: RoadImageProps) {
  return (
    <section className={`w-full bg-ivory ${py}`}>
      <div className="mx-auto max-w-[1440px] px-0 sm:px-4 md:px-10 lg:px-[80px]">
        {/* ✅ Mobile/Tablet: más alto y ancho */}
        <div
          className="relative w-full overflow-hidden lg:hidden"
          style={{ aspectRatio: mobileAspect }}
        >
          <img
            src={roadImg}
            alt="Road"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover"
          />
        </div>

        {/* ✅ Desktop: igual a tu diseño original */}
        <div className="hidden lg:flex w-full justify-center">
          <img
            src={roadImg}
            alt="Road"
            className="h-auto w-full select-none"
            style={{ maxWidth: `${maxWidth}px`, objectFit: "contain" }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
