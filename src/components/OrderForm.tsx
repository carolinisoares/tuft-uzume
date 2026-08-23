"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";
import { Button } from "./Button";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const fieldCls =
  "w-full rounded-sm border border-ink/20 bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-red focus:outline-none";
const labelCls = "mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink/60";

export function OrderForm({ variant }: { variant: "orcamento" | "contato" }) {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("origem", variant === "orcamento" ? "Formulário de orçamento" : "Formulário de contato");

    const summary = Array.from(data.entries())
      .filter(([key, value]) => key !== "referencias" && String(value).trim() !== "")
      .map(([key, value]) => `*${key}*: ${value}`)
      .join("\n");

    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("Falha no envio");
        setStatus("sent");
        form.reset();
        return;
      } catch {
        setStatus("error");
      }
    }

    // Fallback: sem endpoint configurado (ou falha no envio) — abre o WhatsApp com um resumo pronto.
    const intro =
      variant === "orcamento"
        ? "Oi! Quero pedir um orçamento pela Tuft Uzume:\n\n"
        : "Oi! Vim pelo site da Tuft Uzume:\n\n";
    window.open(whatsappLink(intro + summary + "\n\n(se tiver referência em imagem, mando aqui em seguida)"), "_blank");
    setStatus("fallback");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-gold/40 bg-gold/10 p-6">
        <p className="font-display text-lg uppercase text-ink">Recebido!</p>
        <p className="mt-2 text-sm text-ink/70">
          Sua mensagem chegou. A resposta costuma sair em até {site.responseTime}.
        </p>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="rounded-sm border border-gold/40 bg-gold/10 p-6">
        <p className="font-display text-lg uppercase text-ink">Quase lá!</p>
        <p className="mt-2 text-sm text-ink/70">
          Abrimos o WhatsApp com o resumo do que você preencheu — é só conferir e enviar por lá (e anexar
          referência em imagem, se tiver). Se não abriu automaticamente,{" "}
          <a className="underline" href={whatsappLink("Oi! Vim pelo site da Tuft Uzume.")} target="_blank" rel="noopener noreferrer">
            clique aqui
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {!endpoint && (
        <p className="rounded-sm border border-dashed border-ink/25 bg-ink/5 px-4 py-3 font-mono text-[0.7rem] uppercase tracking-wider text-ink/50">
          Envio automático ainda não configurado — este formulário abre o WhatsApp com os dados preenchidos.
        </p>
      )}

      <div>
        <label className={labelCls} htmlFor="nome">Nome</label>
        <input id="nome" name="Nome" required className={fieldCls} placeholder="Como podemos te chamar" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="contatoTipo">Prefere contato por</label>
          <select id="contatoTipo" name="Contato preferido" className={fieldCls} defaultValue="WhatsApp">
            <option>WhatsApp</option>
            <option>Instagram</option>
            <option>E-mail</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="contatoValor">Seu contato</label>
          <input id="contatoValor" name="Dado de contato" required className={fieldCls} placeholder="Número, @ ou e-mail" />
        </div>
      </div>

      {variant === "orcamento" ? (
        <>
          <div>
            <label className={labelCls} htmlFor="tipoPeca">Tipo de peça</label>
            <select id="tipoPeca" name="Tipo de peça" className={fieldCls} defaultValue="Tapete">
              <option>Tapete</option>
              <option>Tapeçaria de parede</option>
              <option>Objeto têxtil</option>
              <option>Ainda não sei</option>
            </select>
          </div>

          <div>
            <label className={labelCls} htmlFor="ideia">Sua ideia</label>
            <textarea
              id="ideia"
              name="Descrição da ideia"
              required
              rows={5}
              className={fieldCls}
              placeholder="Conte a ideia, o desenho que tem em mente, onde a peça vai ficar..."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="tamanho">Tamanho aproximado</label>
              <input id="tamanho" name="Tamanho aproximado" className={fieldCls} placeholder="Sem noção? pode deixar em branco" />
            </div>
            <div>
              <label className={labelCls} htmlFor="prazo">Prazo desejado</label>
              <select id="prazo" name="Prazo desejado" className={fieldCls} defaultValue="Sem pressa">
                <option>Sem pressa</option>
                <option>Tenho uma data em mente</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="linkReferencia">Link de referência (opcional)</label>
            <input id="linkReferencia" name="Link de referência" className={fieldCls} placeholder="Pinterest, Instagram, Google Drive..." />
          </div>

          <div>
            <label className={labelCls} htmlFor="referencias">Imagens de referência (opcional)</label>
            <input
              id="referencias"
              name="referencias"
              type="file"
              accept="image/*"
              multiple
              className="block w-full text-sm text-ink/70 file:mr-4 file:rounded-sm file:border-0 file:bg-ink file:px-4 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-bone hover:file:bg-ink/80"
            />
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink/40">
              Sem envio automático configurado? Sem problema — combine o envio das imagens direto no WhatsApp.
            </p>
          </div>

          <div>
            <label className={labelCls} htmlFor="orcamento">Faixa de orçamento (opcional)</label>
            <select id="orcamento" name="Faixa de orçamento" className={fieldCls} defaultValue="Prefiro decidir depois de ver o projeto">
              <option>Até R$ 300</option>
              <option>R$ 300 – R$ 600</option>
              <option>R$ 600 – R$ 1.000</option>
              <option>Acima de R$ 1.000</option>
              <option>Prefiro decidir depois de ver o projeto</option>
            </select>
          </div>

          <div>
            <label className={labelCls} htmlFor="extra">Mais alguma coisa? (opcional)</label>
            <textarea id="extra" name="Outras informações" rows={3} className={fieldCls} />
          </div>
        </>
      ) : (
        <>
          <div>
            <label className={labelCls} htmlFor="assunto">Assunto</label>
            <input id="assunto" name="Assunto" required className={fieldCls} placeholder="Sobre o que você quer falar" />
          </div>
          <div>
            <label className={labelCls} htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="Mensagem" required rows={5} className={fieldCls} />
          </div>
        </>
      )}

      <label className="flex items-start gap-2 text-xs text-ink/60">
        <input type="checkbox" name="Consentimento" required className="mt-0.5" />
        Autorizo a Tuft Uzume a usar essas informações só para responder essa solicitação.
      </label>

      <Button type="submit" variant="primary" disabled={status === "sending"} className="!bg-red !text-bone hover:!bg-red-deep self-start">
        {status === "sending" ? "Enviando..." : variant === "orcamento" ? "Enviar pedido de orçamento" : "Enviar mensagem"}
      </Button>

      {status === "error" && (
        <p className="font-mono text-xs uppercase tracking-wider text-red">
          Não conseguimos enviar automaticamente — abrindo o WhatsApp como alternativa.
        </p>
      )}
    </form>
  );
}
