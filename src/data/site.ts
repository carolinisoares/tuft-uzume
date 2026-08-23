// Configuração central da marca. Altere aqui e o site inteiro atualiza.
// Tudo marcado com "// TODO" precisa do dado real antes do lançamento público.

export const site = {
  name: "Tuft Uzume",
  founder: "Quim",
  location: "Florianópolis, SC",
  tagline: "Tapete não devia ser só chão.",
  description:
    "Tapetes, tapeçarias e peças têxteis autorais em tufting e punch needle, feitas à mão em Florianópolis por Quim.",

  whatsappUrl: "https://wa.me/qr/WTKWZQGFOW2TC1",

  // TODO: confirmar e-mail oficial de contato.
  email: "contato@tuftuzume.com.br",

  instagram: "https://www.instagram.com/tuft.uzume/",
  instagramHandle: "@tuft.uzume",

  // TODO: preencher se existirem outras redes ativas (TikTok, Pinterest, WhatsApp Business etc.)
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/tuft.uzume/" },
  ],

  // Prazo de resposta usado em microcopy de formulários — ajuste para o real.
  responseTime: "2 dias úteis",
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `${site.whatsappUrl}?text=${encoded}`;
}
