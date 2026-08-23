import type { Motif } from "@/data/products";
import { cn } from "@/lib/utils";

const icons: Record<Motif, JSX.Element> = {
  borboleta: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 30 C 30 5, 5 15, 10 40 C 13 58, 35 55, 50 42" />
      <path d="M50 30 C 70 5, 95 15, 90 40 C 87 58, 65 55, 50 42" />
      <path d="M50 42 C 34 55, 15 60, 18 78 C 20 90, 38 88, 50 70" />
      <path d="M50 42 C 66 55, 85 60, 82 78 C 80 90, 62 88, 50 70" />
      <line x1="50" y1="28" x2="50" y2="82" />
      <path d="M46 28 L 40 18 M54 28 L 60 18" />
    </g>
  ),
  mascara: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 40 C 20 20, 35 8, 50 8 C 65 8, 80 20, 78 40 C 82 60, 70 88, 50 92 C 30 88, 18 60, 22 40 Z" />
      <path d="M30 20 L 22 6 M70 20 L 78 6" />
      <circle cx="37" cy="42" r="6" />
      <circle cx="63" cy="42" r="6" />
      <path d="M28 66 Q 38 78 50 66 Q 62 78 72 66" />
      <path d="M30 66 L 34 72 M40 68 L 44 74 M60 68 L 56 74 M70 66 L 66 72" />
    </g>
  ),
  isqueiro: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="32" y="30" width="36" height="60" rx="6" />
      <line x1="32" y1="46" x2="68" y2="46" />
      <rect x="44" y="16" width="12" height="16" rx="3" />
      <path d="M50 16 C 44 8, 46 2, 50 -2 C 54 4, 58 10, 50 16 Z" />
      <path d="M42 60 L 58 60 M42 70 L 58 70 M42 80 L 58 80" opacity=".5" />
    </g>
  ),
  coracao: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 88 C 20 66, 8 44, 22 28 C 33 16, 48 22, 50 36 C 52 22, 67 16, 78 28 C 92 44, 80 66, 50 88 Z" />
      <path d="M50 36 L 44 50 L 54 58 L 46 74" />
    </g>
  ),
  joystick: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="66" width="64" height="20" rx="6" />
      <line x1="50" y1="66" x2="50" y2="30" />
      <circle cx="50" cy="20" r="12" />
      <circle cx="32" cy="76" r="5" />
      <circle cx="50" cy="76" r="5" />
      <circle cx="68" cy="76" r="5" />
    </g>
  ),
  peixe: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 52 C 24 32, 58 26, 74 40 C 84 30, 92 34, 92 42 C 88 48, 88 56, 92 62 C 92 70, 84 74, 74 64 C 58 78, 24 72, 14 52 Z" />
      <circle cx="34" cy="46" r="3" fill="currentColor" />
      <path d="M40 52 Q 50 58 60 52" opacity=".6" />
    </g>
  ),
  flor: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="28" r="16" />
      <circle cx="72" cy="42" r="16" />
      <circle cx="64" cy="68" r="16" />
      <circle cx="36" cy="68" r="16" />
      <circle cx="28" cy="42" r="16" />
      <circle cx="50" cy="50" r="10" fill="currentColor" stroke="none" />
    </g>
  ),
  teia: (
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <circle cx="50" cy="50" r="12" />
      <circle cx="50" cy="50" r="26" />
      <circle cx="50" cy="50" r="40" />
      <line x1="50" y1="10" x2="50" y2="90" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="21" y1="21" x2="79" y2="79" />
      <line x1="79" y1="21" x2="21" y2="79" />
    </g>
  ),
};

const labels: Record<Motif, string> = {
  borboleta: "borboleta",
  mascara: "máscara",
  isqueiro: "isqueiro",
  coracao: "coração",
  joystick: "joystick",
  peixe: "peixe",
  flor: "flor",
  teia: "teia",
};

export function PlaceholderArt({
  motif,
  tone = "bone",
  ratio = "aspect-[4/5]",
  className,
}: {
  motif: Motif;
  tone?: "bone" | "ink";
  ratio?: string;
  className?: string;
}) {
  const isBone = tone === "bone";
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-sm border border-dashed",
        ratio,
        isBone
          ? "border-ink/25 bg-bone text-ink/70"
          : "border-bone/25 bg-ink-soft text-bone/70",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, currentColor 0, currentColor 1.5px, transparent 1.5px, transparent 14px)`,
        }}
      />
      <svg
        viewBox="0 0 100 100"
        className="w-2/5 max-w-[7.5rem] transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      >
        {icons[motif]}
      </svg>
      <span
        className={cn(
          "pointer-events-none absolute bottom-2 left-2 rounded-sm px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider",
          isBone ? "bg-ink/80 text-bone" : "bg-bone/90 text-ink"
        )}
      >
        {labels[motif]} · foto em breve
      </span>
    </div>
  );
}
