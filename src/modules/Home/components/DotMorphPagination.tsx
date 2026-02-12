import { useEffect, useRef, useState } from "react";

type Props = {
  total: number;
  active: number;
  onChange: (index: number) => void;
  dotSize?: number; // px
  gap?: number; // px
  pillHeight?: number; // px
  backgroundColor?: string; // mismo color exacto del fondo
  boldPill?: boolean; // ✅ para remarcado
};

export default function DotMorphPagination({
  total,
  active,
  onChange,
  dotSize = 8,
  gap = 10,
  pillHeight = 8,
  backgroundColor = "#F3F0E9",
  boldPill = true,
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

    // 2) Encoger al punto final
    const t = window.setTimeout(() => {
      setPillLeft(xOf(next));
      setPillWidth(dotSize);
      prevRef.current = next;
    }, 180);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, dotSize, gap]);

  const trackWidth = total * dotSize + (total - 1) * gap;

  // ✅ “Overpaint” extra para tapar antialias del borde del dot
  const bleed = 3; // px extra para que NO se vea nada

  // ✅ Si está estirado o quieto, el pill puede ir más “negrito”
  const pillBorder = boldPill ? 2 : 1;

  return (
    <div className="relative flex items-center" style={{ height: Math.max(pillHeight, dotSize) }}>
      <div
        className="relative"
        style={{
          width: trackWidth,
          height: Math.max(pillHeight, dotSize),
        }}
      >
        {/* 1) Dots base (abajo) */}
        <div className="absolute inset-0 flex items-center z-[1]">
          {Array.from({ length: total }).map((_, i) => (
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
                className="block rounded-full border border-midnight/50"
                style={{
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: "transparent",
                }}
              />
            </button>
          ))}
        </div>

        {/* 2) ✅ MÁSCARA ARRIBA de los dots (los “borra” cuando el pill pasa)
              pointer-events-none para que sigan clickeables */}
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-[3]"
          style={{
            left: pillLeft - bleed,
            width: pillWidth + bleed * 2,
            height: Math.max(dotSize, pillHeight) + bleed * 2,
            borderRadius: 999,
            backgroundColor,
          }}
        />

        {/* 3) PILL arriba de todo (borde más grueso) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-transparent pointer-events-none z-[4]"
          style={{
            height: pillHeight,
            left: pillLeft,
            width: pillWidth,
            border: `${pillBorder}px solid rgba(17, 24, 39, 1)`, // midnight fuerte
            transition: "left 220ms ease, width 220ms ease",
          }}
        />
      </div>
    </div>
  );
}
