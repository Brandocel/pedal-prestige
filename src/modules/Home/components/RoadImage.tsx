import roadImg from "../assets/carretera.webp";

type RoadImageProps = {
  /** Controla el padding vertical de la sección */
  py?: string;
  /** Máximo ancho de la imagen (si la quieres limitar) */
  maxWidth?: number;
};

export default function RoadImage({
  py = "py-[0px]",
  maxWidth = 1280,
}: RoadImageProps) {
  return (
    <section className={`w-full bg-ivory ${py}`}>
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <div className="flex w-full justify-center">
          <img
            src={roadImg}
            alt="Road"
            className="h-auto w-full select-none"
            style={{
              maxWidth: `${maxWidth}px`,
              objectFit: "contain",
            }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
