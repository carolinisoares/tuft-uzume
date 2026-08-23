import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = { title: "Portfólio — Tuft Uzume" };

export default function PortfolioPage() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Acervo"
          title="Portfólio"
          lede="Tapetes, tapeçarias, objetos e experimentos — o registro visual do trabalho, técnica por técnica."
        />
        <div className="mt-12">
          <PortfolioGrid />
        </div>
        <div className="mt-16 rounded-sm border border-dashed border-bone/25 p-8 text-center">
          <p className="font-display text-xl uppercase text-bone">Gostou de um estilo assim?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-bone/60">
            Dá pra fazer algo parecido pra você — com o seu desenho, do seu jeito.
          </p>
          <div className="mt-5 flex justify-center">
            <LinkButton href="/personalize" variant="primary">Personalizar minha peça</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
