import { useEffect, useRef, useState } from "react";

type Props = {
  total: number;
  active: number;
  onChange: (index: number) => void;

  dotSize?: number; // px
  gap?: number; // px
  pillHeight?: number; // px

  /** Color de máscara (si va sobre imagen, usa "transparent") */
  backgroundColor?: string;

  boldPill?: boolean;

  /** Colores custom */
  dotBorderColor?: string;
  pillBorderColor?: string;

  /** margen abajo para que no quede al ras */
  bottomOffset?: number;

  /** ✅ NUEVO: oculta el borde del dot cuando el pill está encima (normalmente el active) */
  hideActiveDotBorder?: boolean;
};

export default function DotMorphPagination({
  total,
  active,
  onChange,
  dotSize = 8,
  gap = 10,
  pillHeight = 8,
  backgroundColor = "transparent",
  boldPill = true,

  dotBorderColor = "rgba(255,255,255,0.55)",
  pillBorderColor = "rgba(255,255,255,1)",

  bottomOffset = 10,
  hideActiveDotBorder = true,
}: Props) {
  const prevRef = useRef(active);

  const [pillLeft, setPillLeft] = useState(0);
  const [pillWidth, setPillWidth] = useState(dotSize);

  const xOf = (i: number) => i * (dotSize + gap);

  useEffect(() => {
    const prev = prevRef.current;
    const next = active;

    if (prev === next) {
      setPillLeft(xOf(next));
      setPillWidth(dotSize);
      return;
    }

    const left = Math.min(xOf(prev), xOf(next));
    const right = Math.max(xOf(prev), xOf(next));
    const distance = right - left;

    // 1) Estirar
    setPillLeft(left);
    setPillWidth(distance + dotSize);

    // 2) Encoger al final
    const t = window.setTimeout(() => {
      setPillLeft(xOf(next));
      setPillWidth(dotSize);
      prevRef.current = next;
    }, 180);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, dotSize, gap]);

  const trackWidth = total * dotSize + (total - 1) * gap;
  const bleed = 3;
  const pillBorder = boldPill ? 2 : 1;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        height: Math.max(pillHeight, dotSize) + bottomOffset,
        paddingBottom: bottomOffset,
      }}
    >
      <div
        className="relative"
        style={{
          width: trackWidth,
          height: Math.max(pillHeight, dotSize),
        }}
      >
        {/* 1) Dots base */}
        <div className="absolute inset-0 flex items-center justify-center z-[1]">
          {Array.from({ length: total }).map((_, i) => {
            const isActiveDot = i === active;

            // ✅ Si el pill está sobre este dot (normalmente el active),
            // ocultamos el borde para que "no se vea el contorno"
            const border =
              hideActiveDotBorder && isActiveDot
                ? "1px solid transparent"
                : `1px solid ${dotBorderColor}`;

            return (
              <button
                key={i}
                onClick={() => onChange(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative"
                style={{
                  width: dotSize,
                  height: dotSize,
                  marginRight: i === total - 1 ? 0 : gap,
                }}
              >
                <span
                  className="block rounded-full"
                  style={{
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: "transparent",
                    border,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* 2) Máscara (opcional) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-[3]"
          style={{
            left: pillLeft - bleed,
            width: pillWidth + bleed * 2,
            height: Math.max(dotSize, pillHeight) + bleed * 2,
            borderRadius: 999,
            backgroundColor, // ✅ en imagen: "transparent"
          }}
        />

        {/* 3) Pill */}
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-transparent pointer-events-none z-[4]"
          style={{
            height: pillHeight,
            left: pillLeft,
            width: pillWidth,
            border: `${pillBorder}px solid ${pillBorderColor}`,
            transition: "left 220ms ease, width 220ms ease",
          }}
        />
      </div>
    </div>
  );
}
