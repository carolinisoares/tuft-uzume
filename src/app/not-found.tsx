import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-red">Erro 404</p>
      <h1 className="mt-3 font-display text-4xl uppercase text-bone sm:text-5xl">Esse fio se perdeu</h1>
      <p className="mt-4 max-w-sm text-sm text-bone/60">
        A página que você procurava não existe ou mudou de lugar.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href="/" variant="primary">Voltar pro início</LinkButton>
        <LinkButton href="/loja" variant="secondary">Ver a loja</LinkButton>
      </div>
    </section>
  );
}
