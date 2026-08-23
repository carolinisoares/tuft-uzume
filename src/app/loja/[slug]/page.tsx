import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { PlaceholderArt } from "@/components/PlaceholderArt";
import { ProductImage } from "@/components/ProductImage";
import { StatusPill } from "@/components/StatusPill";
import { LinkButton } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { formatBRL, formatStock } from "@/lib/utils";
import { site, whatsappLink } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} — Tuft Uzume` : "Peça não encontrada" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const canBuy = product.status === "disponivel";

  const buyMessage = `Oi! Vim pelo site e quero comprar a peça "${product.name}" (${formatBRL(product.price)}).`;
  const notifyMessage = `Oi! Vim pelo site — quero saber se vocês fazem algo parecido com "${product.name}" ou se ela volta a ficar disponível.`;

  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/loja" className="font-mono text-xs uppercase tracking-wider text-bone/50 hover:text-bone">
          ← Voltar pra loja
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {product.images && product.images.length > 0 ? (
              <>
                <ProductImage
                  src={product.images[0]}
                  alt={product.name}
                  ratio="aspect-square"
                  className="col-span-2"
                />
                {product.images.slice(1, 3).map((src) => (
                  <ProductImage key={src} src={src} alt={product.name} ratio="aspect-square" />
                ))}
                {product.images.length === 1 && (
                  <PlaceholderArt motif={product.motif} tone="ink" ratio="aspect-square" />
                )}
              </>
            ) : (
              <>
                <PlaceholderArt motif={product.motif} tone="bone" ratio="aspect-square" className="col-span-2" />
                <PlaceholderArt motif={product.motif} tone="ink" ratio="aspect-square" />
                <PlaceholderArt motif={product.motif} tone="bone" ratio="aspect-square" />
              </>
            )}
          </div>

          <div>
            <StatusPill status={product.status} />
            <h1 className="mt-4 font-display text-4xl uppercase leading-none text-bone sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-mono text-2xl text-gold">{formatBRL(product.price)}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/70">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-y-3 border-t border-ink-line/60 pt-6 font-mono text-xs uppercase tracking-wider">
              <dt className="text-bone/40">Técnica</dt>
              <dd className="text-bone">{product.technique}</dd>
              <dt className="text-bone/40">Categoria</dt>
              <dd className="text-bone">{product.category}</dd>
              <dt className="text-bone/40">Medidas</dt>
              <dd className="text-bone">{product.sizeCm}</dd>
              <dt className="text-bone/40">Materiais</dt>
              <dd className="text-bone">{product.materials}</dd>
              <dt className="text-bone/40">Estoque</dt>
              <dd className="text-bone">{formatStock(product.stock)}</dd>
              {product.variations && (
                <>
                  <dt className="text-bone/40">Variações</dt>
                  <dd className="text-bone">{product.variations.join(" e ")}</dd>
                </>
              )}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              {canBuy ? (
                <LinkButton href={whatsappLink(buyMessage)} variant="primary">Comprar via WhatsApp</LinkButton>
              ) : (
                <LinkButton href={whatsappLink(notifyMessage)} variant="secondary">Avise-me de peças parecidas</LinkButton>
              )}
              <LinkButton href="/personalize" variant="ghost">Prefiro encomendar algo parecido →</LinkButton>
            </div>

            <p className="mt-6 max-w-md text-xs leading-relaxed text-bone/40">
              Cuidados com a peça e detalhes de envio estão no{" "}
              <Link href="/faq" className="underline hover:text-bone">FAQ</Link>.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t border-ink-line/60 pt-12">
            <p className="mb-6 font-mono text-xs uppercase tracking-wider text-red">Outras peças</p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
