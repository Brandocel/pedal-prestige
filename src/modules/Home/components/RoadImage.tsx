import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DotMorphPagination from "./DotMorphPagination";
import fallbackImg from "../assets/gallery/carretera.webp";

type RoadImageProps = {
  py?: string;
  maxWidth?: number;
  mobileAspect?: string;
  autoplay?: boolean;
  autoplayMs?: number;
  showArrows?: boolean;
};

const galleryImages = Object.entries(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, v]) => v as string);

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="46"
      height="18"
      viewBox="0 0 46 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {dir === "left" ? (
        <>
          <path d="M10 9H44" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 9L17 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 9L17 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M2 9H36" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 9L29 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 9L29 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function RoadImage({
  py = "py-[0px]",
  maxWidth = 1280,
  mobileAspect = "16/9",
  autoplay = false,
  autoplayMs = 4500,
  showArrows = true,
}: RoadImageProps) {
  const images = useMemo(() => (galleryImages.length ? galleryImages : [fallbackImg]), []);
  const total = images.length;

  // índice objetivo (lo que quieres)
  const [active, setActive] = useState(0);
  // índice visible (lo que realmente mostramos)
  const [visible, setVisible] = useState(0);
  // si estamos esperando carga de un destino
  const [isSwitching, setIsSwitching] = useState(false);

  const loadedRef = useRef<Set<string>>(new Set());
  const pendingRef = useRef<number | null>(null);

  // ✅ Preload todas las imágenes
  useEffect(() => {
    let canceled = false;

    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        if (loadedRef.current.has(src)) return resolve();
        const img = new Image();
        img.onload = () => {
          loadedRef.current.add(src);
          resolve();
        };
        img.onerror = () => {
          loadedRef.current.add(src);
          resolve();
        };
        img.src = src;
      });

    (async () => {
      await Promise.all(images.map(preload));
      if (canceled) return;
    })();

    return () => {
      canceled = true;
    };
  }, [images]);

  const ensureLoaded = useCallback(
    (index: number) =>
      new Promise<void>((resolve) => {
        const src = images[index];
        if (!src) return resolve();
        if (loadedRef.current.has(src)) return resolve();

        const img = new Image();
        img.onload = () => {
          loadedRef.current.add(src);
          resolve();
        };
        img.onerror = () => {
          loadedRef.current.add(src);
          resolve();
        };
        img.src = src;
      }),
    [images]
  );

  // ✅ Cambia visible SOLO cuando el destino ya está cargado
  useEffect(() => {
    let canceled = false;

    const idx = Math.max(0, Math.min(active, total - 1));
    pendingRef.current = idx;

    (async () => {
      if (idx === visible) return;

      setIsSwitching(true);
      await ensureLoaded(idx);

      if (canceled) return;
      if (pendingRef.current !== idx) return;

      setVisible(idx);
      // pequeño delay para que el placeholder no parpadee
      window.setTimeout(() => {
        if (!canceled) setIsSwitching(false);
      }, 60);
    })();

    return () => {
      canceled = true;
    };
  }, [active, ensureLoaded, total, visible]);

  const goTo = useCallback(
    (index: number) => {
      if (!total) return;
      setActive(Math.max(0, Math.min(index, total - 1)));
    },
    [total]
  );

  const next = useCallback(() => {
    if (!total) return;
    setActive((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (!total) return;
    setActive((p) => (p - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const t = window.setInterval(next, autoplayMs);
    return () => window.clearInterval(t);
  }, [autoplay, autoplayMs, next, total]);

  // Swipe
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    const dx = deltaX.current;
    startX.current = null;
    deltaX.current = 0;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  };

  const arrowBtnBase =
    "absolute top-1/2 -translate-y-1/2 z-10 " +
    "p-3 md:p-4 " +
    "bg-transparent " +
    "hover:opacity-90 active:opacity-80 " +
    "transition-opacity " +
    "text-white";

  // ✅ Para el paginador: si quieres que el pill se mueva cuando ya se ve, usa visible
  const paginationIndex = active;

  // ✅ helper: el src visible actual (para placeholder)
  const visibleSrc = images[visible] ?? fallbackImg;

  return (
    <section className={`w-full bg-ivory ${py}`}>
      <div className="mx-auto max-w-[1440px] px-0 sm:px-4 md:px-10 lg:px-[80px]">
        {/* ===================== MOBILE/TABLET ===================== */}
        <div
          className="relative w-full overflow-hidden lg:hidden"
          style={{ aspectRatio: mobileAspect }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* ✅ Placeholder mientras carga: misma imagen visible con blur (NO negro, NO blanco) */}
          {isSwitching && (
            <div className="absolute inset-0 z-[0]">
              <img
                src={visibleSrc}
                alt="loading"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  filter: "blur(10px)",
                  transform: "scale(1.03)",
                  opacity: 0.9,
                }}
                draggable={false}
              />
            </div>
          )}

          {/* Track */}
          <div
            className="absolute inset-0 flex h-full w-full z-[1]"
            style={{
              transform: `translateX(-${visible * 100}%)`,
              transition: "transform 420ms ease",
            }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative h-full w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`Road ${i + 1}`}
                  draggable={false}
                  className="absolute inset-0 h-full w-full select-none object-cover"
                />
              </div>
            ))}
          </div>

          {/* Flechas */}
          {showArrows && total > 1 && (
            <>
              <button type="button" onClick={prev} className={`${arrowBtnBase} left-3`} aria-label="Previous image">
                <ArrowIcon dir="left" />
              </button>
              <button type="button" onClick={next} className={`${arrowBtnBase} right-3`} aria-label="Next image">
                <ArrowIcon dir="right" />
              </button>
            </>
          )}

          {/* Pagination */}
          {total > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <DotMorphPagination
                total={total}
                active={paginationIndex}
                onChange={goTo}
                dotSize={8}
                gap={10}
                pillHeight={8}
                backgroundColor="transparent"
                dotBorderColor="rgba(255,255,255,0.55)"
                pillBorderColor="rgba(255,255,255,1)"
                boldPill
                bottomOffset={10}
                hideActiveDotBorder={true}
              />
            </div>
          )}
        </div>

        {/* ===================== DESKTOP ===================== */}
        <div className="relative hidden lg:flex w-full justify-center overflow-hidden">
          <div className="relative w-full" style={{ maxWidth: `${maxWidth}px` }}>
            {/* ✅ Placeholder blur (sin negro) */}
            {isSwitching && (
              <div className="absolute inset-0 z-[0]">
                <img
                  src={visibleSrc}
                  alt="loading"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    objectFit: "contain",
                    filter: "blur(10px)",
                    transform: "scale(1.01)",
                    opacity: 0.9,
                  }}
                  draggable={false}
                />
              </div>
            )}

            {/* Track */}
            <div
              className="flex w-full z-[1] relative"
              style={{
                transform: `translateX(-${visible * 100}%)`,
                transition: "transform 420ms ease",
              }}
            >
              {images.map((src, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Road ${i + 1}`}
                    className="h-auto w-full select-none"
                    style={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Flechas */}
            {showArrows && total > 1 && (
              <>
                <button type="button" onClick={prev} className={`${arrowBtnBase} left-6`} aria-label="Previous image">
                  <ArrowIcon dir="left" />
                </button>
                <button type="button" onClick={next} className={`${arrowBtnBase} right-6`} aria-label="Next image">
                  <ArrowIcon dir="right" />
                </button>
              </>
            )}

            {/* Pagination */}
            {total > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <DotMorphPagination
                  total={total}
                  active={paginationIndex}
                  onChange={goTo}
                  dotSize={8}
                  gap={10}
                  pillHeight={8}
                  backgroundColor="transparent"
                  dotBorderColor="rgba(255,255,255,0.55)"
                  pillBorderColor="rgba(255,255,255,1)"
                  boldPill
                  bottomOffset={10}
                  hideActiveDotBorder={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
