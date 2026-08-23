import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderArt } from "@/components/PlaceholderArt";
import { LinkButton } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Sobre — Tuft Uzume" };

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-ink-line/60 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Quem tufta" title="Sobre a Tuft Uzume" />
            <p className="mt-6 max-w-measure text-base leading-relaxed text-bone/75">
              A Tuft Uzume é feita por <strong className="text-bone">{site.founder}</strong>, em{" "}
              <strong className="text-bone">{site.location}</strong>. Aqui, tufting e punch needle viram
              tapete, tapeçaria e objeto — sempre peça única, sempre pensada fio por fio.
            </p>
            <p className="mt-4 max-w-measure text-base leading-relaxed text-bone/50">
              [Placeholder — completar com a história real: desde quando trabalha com tufting/punch needle,
              o que fazia antes, e o que despertou o interesse pela técnica.]
            </p>
          </div>
          <PlaceholderArt motif="mascara" tone="bone" ratio="aspect-[4/5]" />
        </div>
      </section>

      <section className="border-b border-ink-line/60 bg-bone px-5 py-16 text-ink sm:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <PlaceholderArt motif="joystick" tone="ink" ratio="aspect-[4/5]" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="O ofício" title="Tufting e punch needle" tone="ink" />
            <p className="mt-5 max-w-measure text-sm leading-relaxed text-ink/70">
              Tufting é feito com uma arma de tufting: a lã é disparada fio a fio através de uma base de
              tecido esticada, formando o desenho em relevo. Punch needle usa uma agulha vazada que "borda"
              a lã manualmente, criando textura mais fina e detalhada. As duas técnicas podem aparecer juntas
              numa mesma peça, dependendo do que o desenho pede.
            </p>
            <p className="mt-4 max-w-measure text-sm leading-relaxed text-ink/50">
              Depois de tufado, o trabalho ainda passa por tosa, alinhamento dos fios e fechamento do avesso
              com tecido e base antiderrapante — é essa parte que não aparece na foto, mas é boa parte do
              tempo de produção.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-line/60 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Território criativo" title="De onde vêm as referências" />
            <p className="mt-5 max-w-measure text-sm leading-relaxed text-bone/70">
              Cultura pop, anime, estética oriental, tattoo flash, objeto do dia a dia — tudo isso passa pelo
              filtro da Tuft Uzume e pode virar tapete. Mas a marca não fica presa a nenhuma dessas
              referências sozinha: cada encomenda também traz a referência de quem pediu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderArt motif="peixe" tone="bone" ratio="aspect-square" />
            <PlaceholderArt motif="flor" tone="bone" ratio="aspect-square" className="mt-6" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl uppercase text-bone">Quer ver mais?</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <LinkButton href="/portfolio" variant="secondary">Ver portfólio</LinkButton>
            <LinkButton href={site.instagram} variant="primary">Seguir no Instagram</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
