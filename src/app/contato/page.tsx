import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { OrderForm } from "@/components/OrderForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contato — Tuft Uzume" };

export default function ContatoPage() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Fala com a gente"
            title="Contato"
            lede="Dúvida que não é bem orçamento e não é bem compra? Manda aqui. Ou, mais rápido ainda, chama no Instagram."
          />
          <ul className="mt-10 flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-soft">
                Instagram — {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-bone/70 hover:text-bone">{site.email}</a>
            </li>
          </ul>
          <p className="mt-8 max-w-measure text-xs text-bone/40">
            Resposta em até {site.responseTime}. Pra encomendas, o formulário de{" "}
            <a href="/personalize" className="underline hover:text-bone">Personalize</a> reúne as perguntas
            certas e agiliza o orçamento.
          </p>
        </div>

        <div className="rounded-sm bg-bone p-6 sm:p-8">
          <OrderForm variant="contato" />
        </div>
      </div>
    </section>
  );
}
