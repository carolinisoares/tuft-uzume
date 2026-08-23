import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderArt } from "@/components/PlaceholderArt";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { portfolio } from "@/data/portfolio";
import { site } from "@/data/site";

export default function HomePage() {
  const available = products.filter((p) => p.status === "disponivel").slice(0, 4);
  const featured = portfolio.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line/60 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="mb-5 inline-block rounded-full border border-red/50 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-red">
              Tufting · Punch needle · Florianópolis
            </span>
            <h1 className="font-display text-[13vw] uppercase leading-[0.9] text-bone sm:text-6xl lg:text-7xl">
              Tapete não devia
              <br /> ser só <span className="text-red">chão.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70">
              Tapetes, tapeçarias e objetos têxteis autorais — feitos fio por fio com a arma de tufting e a
              agulha de punch needle. Peça pronta pra levar ou feita do zero pra você.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/loja" variant="primary">Ver peças disponíveis</LinkButton>
              <LinkButton href="/personalize" variant="secondary">Personalizar minha peça</LinkButton>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-sm sm:block">
            <div className="absolute -left-4 top-6 w-40 rotate-[-8deg]">
              <PlaceholderArt motif="mascara" tone="bone" ratio="aspect-[4/5]" />
            </div>
            <div className="ml-24 w-44 rotate-[6deg]">
              <PlaceholderArt motif="borboleta" tone="ink" ratio="aspect-square" />
            </div>
            <div className="absolute -bottom-10 left-2 w-32 rotate-[10deg]">
              <PlaceholderArt motif="coracao" tone="bone" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="border-b border-ink-line/60 bg-bone px-5 py-16 text-ink sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl uppercase leading-snug sm:text-3xl">
            Aqui tapete não é item de prateleira. É peça feita à mão, uma de cada vez — se existe na sua
            cabeça, dá pra tentar tuftar.
          </p>
        </div>
      </section>

      {/* DISPONÍVEL AGORA */}
      <section className="border-b border-ink-line/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Loja" title="Disponível agora" />
            <Link href="/loja" className="font-mono text-xs uppercase tracking-wider text-red hover:text-red-soft">
              Ver loja completa →
            </Link>
          </div>
          {available.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {available.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          ) : (
            <p className="font-mono text-sm uppercase tracking-wider text-bone/50">
              Sem peças prontas no momento — novas peças voltam em breve. Acompanhe no Instagram.
            </p>
          )}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-b border-ink-line/60 bg-bone px-5 py-20 text-ink sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="O ofício" title="Como nasce uma peça" tone="ink" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">
              Cada peça começa com um desenho, ganha contorno preso fio a fio na base de tecido com a arma de
              tufting ou a agulha de punch needle, e só sai do ateliê depois de tosada, alinhada e com o
              acabamento fechado por trás. É processo lento — e é isso que faz a peça ser única.
            </p>
            <div className="mt-6">
              <LinkButton href="/sobre" variant="secondaryOnBone">Conhecer o processo</LinkButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderArt motif="joystick" tone="ink" ratio="aspect-square" />
            <PlaceholderArt motif="flor" tone="ink" ratio="aspect-square" className="mt-8" />
          </div>
        </div>
      </section>

      {/* DO ACERVO */}
      <section className="border-b border-ink-line/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Portfólio" title="Do acervo" />
            <Link href="/portfolio" className="font-mono text-xs uppercase tracking-wider text-red hover:text-red-soft">
              Ver portfólio completo →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {featured.map((item) => (
              <figure key={item.slug}>
                <PlaceholderArt motif={item.motif} tone="bone" ratio="aspect-square" />
                <figcaption className="mt-2 font-mono text-[0.65rem] uppercase tracking-wider text-bone/50">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZE */}
      <section className="border-b border-ink-line/60 bg-red px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center text-bone">
          <SectionHeading eyebrow="Encomendas" title="Tem uma ideia? A gente tufta." className="mx-auto text-center" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-bone/85">
            Manda um desenho, uma referência ou só uma ideia solta. A gente avalia, define tamanho e
            orçamento, e a peça sai do papel pro fio — do jeito que só existe pra você.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/personalize" variant="secondary" className="border-bone">
              Personalizar meu tapete
            </LinkButton>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Bastidor"
            title={`Direto do ${site.instagramHandle}`}
            lede="É lá que a Tuft Uzume mora todo dia — peça nova, processo, encomenda saindo do forno."
            className="mx-auto text-center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-6">
            {portfolio.slice(0, 6).map((item) => (
              <PlaceholderArt key={item.slug} motif={item.motif} tone="bone" ratio="aspect-square" />
            ))}
          </div>
          <div className="mt-8">
            <LinkButton href={site.instagram} variant="primary">Seguir no Instagram</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
