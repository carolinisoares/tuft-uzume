import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "bone",
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "bone" | "ink";
  className?: string;
}) {
  return (
    <div className={cn("max-w-measure", className)}>
      {eyebrow && (
        <span className="mb-3 block font-mono text-xs uppercase tracking-[0.18em] text-red">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl",
          tone === "bone" ? "text-bone" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p className={cn("mt-4 max-w-xl text-base leading-relaxed", tone === "bone" ? "text-bone/70" : "text-ink/70")}>
          {lede}
        </p>
      )}
    </div>
  );
}
