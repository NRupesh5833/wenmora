import { useEffect, useRef, useState } from "react";
import engine from "@/assets/hero-engine.jpg";

const stages = ["Idea", "Design", "Code", "AI", "Experience", "Growth"];

/**
 * Signature hero visual — the "Digital Experience Engine".
 * One AI artwork, layered with CSS/SVG panels, orbits and labels.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setOffset({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative isolate select-none" aria-hidden="true">
      <div
        className="absolute -inset-10 -z-10 rounded-[3rem] blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 60% 40%, color-mix(in oklab, var(--primary) 26%, transparent), transparent 70%)",
        }}
      />

      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-elevated)]"
        style={{
          transform: `perspective(1200px) rotateY(${offset.x * 2.5}deg) rotateX(${-offset.y * 2}deg)`,
          transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <img
          src={engine}
          alt="Abstract composition of layered interface panels, orbital lines and connected data nodes representing Wenmora's digital experience engine"
          width={1280}
          height={1280}
          fetchPriority="high"
          className="aspect-square w-full object-cover"
        />

        {/* orbital system */}
        <svg
          viewBox="0 0 100 100"
          className="orbit-slow pointer-events-none absolute inset-0 h-full w-full opacity-70"
          preserveAspectRatio="none"
        >
          <ellipse
            cx="50"
            cy="50"
            rx="44"
            ry="20"
            fill="none"
            stroke="color-mix(in oklab, var(--primary) 45%, transparent)"
            strokeWidth="0.25"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="20"
            ry="44"
            fill="none"
            stroke="color-mix(in oklab, var(--accent) 40%, transparent)"
            strokeWidth="0.25"
          />
        </svg>

        {/* floating interface fragments */}
        <div
          className="float-slow glass-panel absolute top-[12%] left-[6%] w-36 p-3"
          style={{ transform: `translate3d(${offset.x * -10}px, ${offset.y * -8}px, 0)` }}
        >
          <p className="eyebrow">Experience</p>
          <div className="mt-2 space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-primary/70" />
            <span className="block h-1.5 w-2/3 rounded-full bg-foreground/20" />
            <span className="block h-1.5 w-1/2 rounded-full bg-foreground/15" />
          </div>
        </div>

        <div
          className="float-slower glass-panel absolute right-[6%] bottom-[16%] w-40 p-3"
          style={{ transform: `translate3d(${offset.x * 12}px, ${offset.y * 10}px, 0)` }}
        >
          <div className="flex items-center justify-between">
            <p className="eyebrow">Growth</p>
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
          <div className="mt-3 flex h-10 items-end gap-1">
            {[35, 55, 45, 70, 85, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/25 to-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent p-4 pt-16">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {stages.map((s, i) => (
              <li key={s} className="eyebrow flex items-center gap-2">
                {s}
                {i < stages.length - 1 ? <span className="text-primary">→</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}