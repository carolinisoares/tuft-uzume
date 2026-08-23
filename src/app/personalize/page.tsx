import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderArt } from "@/components/PlaceholderArt";
import { OrderForm } from "@/components/OrderForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Personalize seu tapete — Tuft Uzume" };

const steps = [
  {
    n: "01",
    title: "Você manda a ideia",
    text: "Desenho, foto, print de referência ou só uma ideia solta — qualquer ponto de partida serve.",
  },
  {
    n: "02",
    title: "Avaliação e orçamento",
    text: "O projeto é avaliado (desenho, nível de detalhe, tamanho necessário) e o orçamento é definido.",
  },
  {
    n: "03",
    title: "Aprovação + sinal de 50%",
    text: "Com o projeto aprovado e o pagamento de 50% confirmado, a produção entra na fila.",
  },
  {
    n: "04",
    title: "Produção",
    text: "De 7 a 25 dias úteis, variando com tamanho e complexidade, até a peça ficar pronta.",
  },
  {
    n: "05",
    title: "Acerto final + entrega",
    text: "Os 50% restantes são pagos na finalização, antes do envio (Brasil todo) ou retirada.",
  },
];

const fullProcess = [
  "Cliente envia ideia, desenho ou referência.",
  "O projeto é avaliado.",
  "São definidos tamanho e orçamento.",
  "O projeto é aprovado.",
  "É realizado o pagamento inicial de 50%.",
  "A produção começa.",
  "A peça é finalizada.",
  "Os 50% restantes são pagos.",
  "A peça é enviada ou retirada.",
];

const types = [
  { motif: "mascara" as const, title: "Tapete", text: "Pra chão, no tamanho e desenho que fizer sentido pro espaço." },
  { motif: "borboleta" as const, title: "Tapeçaria de parede", text: "Pensada pra ser pendurada — vira peça de decoração." },
  { motif: "coracao" as const, title: "Objeto têxtil", text: "Almofada, porta-treco, acessório — conforme o projeto." },
];

export default function PersonalizePage() {
  return (
    <>
      <section className="border-b border-ink-line/60 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Encomendas"
            title="Personalize seu tapete"
            lede="Encomendar aqui não é preencher um pedido — é contar uma ideia e ver ela virar peça, fio por fio. Cada projeto tem seu próprio tamanho, sua própria complexidade e seu próprio prazo."
            className="mx-auto text-center"
          />
        </div>
      </section>

      {/* O QUE DÁ PRA ENCOMENDAR */}
      <section className="border-b border-ink-line/60 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-red">O que dá pra encomendar</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {types.map((t) => (
              <div key={t.title}>
                <PlaceholderArt motif={t.motif} tone="bone" ratio="aspect-[4/3]" />
                <p className="mt-3 font-display text-lg uppercase text-bone">{t.title}</p>
                <p className="mt-1 text-sm text-bone/60">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-b border-ink-line/60 bg-bone px-5 py-20 text-ink sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Do zero à entrega" title="Como funciona" tone="ink" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="border-t-2 border-red pt-4">
                <span className="font-mono text-xs text-red">{s.n}</span>
                <p className="mt-2 font-display text-base uppercase leading-tight">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
              </div>
            ))}
          </div>

          <details className="mt-12 max-w-measure">
            <summary className="cursor-pointer font-mono text-xs uppercase tracking-wider text-ink/50 hover:text-ink">
              Ver o passo a passo completo, sem simplificação
            </summary>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/70">
              {fullProcess.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </details>
        </div>
      </section>

      {/* O QUE MUDA O VALOR */}
      <section className="border-b border-ink-line/60 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Orçamento" title="O que influencia o valor" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["Tamanho", "Quanto maior a peça, mais lã, mais horas de trabalho."],
              ["Complexidade do desenho", "Mais cores, contornos finos e detalhes pequenos pedem mais tempo de execução."],
              ["Técnica", "Tufting e punch needle têm processos diferentes — a técnica ideal depende do desenho."],
              ["Prazo", "Produção corrida fora da fila normal pode influenciar o orçamento."],
            ].map(([title, text]) => (
              <div key={title} className="border-l-2 border-gold pl-4">
                <p className="font-display text-base uppercase text-bone">{title}</p>
                <p className="mt-1 text-sm text-bone/60">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-measure text-sm text-bone/50">
            Não existe tabela fechada — cada desenho tem um tamanho mínimo pra que os detalhes funcionem bem
            na técnica, então o valor sai depois de avaliar o projeto.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="px-5 py-20 sm:px-8" id="orcamento">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Vamos começar"
            title="Peça seu orçamento"
            lede="Quanto mais referência visual você mandar, mais fácil fica de acertar de primeira — print de Pinterest, foto de parede, desenho torto: vale tudo."
          />
          <div className="mt-10 rounded-sm bg-bone p-6 sm:p-8">
            <OrderForm variant="orcamento" />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-bone/40">
            Resposta em até {site.responseTime} com um primeiro papo sobre o que dá pra fazer.
          </p>
        </div>
      </section>
    </>
  );
}
