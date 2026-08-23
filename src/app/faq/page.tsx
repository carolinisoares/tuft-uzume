import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LinkButton } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Como funciona / FAQ — Tuft Uzume" };

export default function FaqPage() {
  return (
    <section className="bg-bone px-5 py-16 text-ink sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Como funciona"
          lede="As perguntas que mais chegam sobre encomenda, entrega e cuidados com a peça."
          tone="ink"
        />
        <div className="mt-12">
          <FaqAccordion />
        </div>
        <div className="mt-16 rounded-sm border border-dashed border-ink/25 p-8 text-center">
          <p className="font-display text-xl uppercase">Ainda com dúvida?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
            Chama direto no WhatsApp ou manda uma mensagem pelo formulário de contato.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <LinkButton href="/contato" variant="secondaryOnBone">Formulário de contato</LinkButton>
            <LinkButton href={site.instagram} variant="primary">Instagram</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
