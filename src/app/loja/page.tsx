import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Loja — Tuft Uzume" };

export default function LojaPage() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Peças prontas"
          title="Loja"
          lede="Cada peça aqui é única — quando vende, não volta a existir do mesmo jeito. Peças vendidas continuam visíveis, como registro do acervo."
        />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  );
}
