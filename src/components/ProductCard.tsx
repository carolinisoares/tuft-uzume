import Link from "next/link";
import type { Product } from "@/data/products";
import { PlaceholderArt } from "./PlaceholderArt";
import { StatusPill } from "./StatusPill";
import { formatBRL } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/loja/${product.slug}`} className="group block">
      <div className="relative">
        <PlaceholderArt motif={product.motif} tone="bone" />
        <StatusPill status={product.status} className="absolute right-2 top-2" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg uppercase leading-tight text-bone group-hover:text-red">
            {product.name}
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-bone/50">
            {product.technique} · {product.sizeCm}
          </p>
        </div>
        <p className="whitespace-nowrap font-mono text-sm text-gold">{formatBRL(product.price)}</p>
      </div>
    </Link>
  );
}
