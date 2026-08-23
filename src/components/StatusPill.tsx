import type { ProductStatus } from "@/data/products";
import { cn } from "@/lib/utils";

const config: Record<ProductStatus, { label: string; cls: string }> = {
  disponivel: { label: "Disponível", cls: "bg-gold text-ink" },
  reservada: { label: "Reservada", cls: "bg-thread text-ink" },
  vendida: { label: "Vendida", cls: "bg-ink-line text-bone" },
};

export function StatusPill({ status, className }: { status: ProductStatus; className?: string }) {
  const { label, cls } = config[status];
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider",
        cls,
        className
      )}
    >
      {label}
    </span>
  );
}
