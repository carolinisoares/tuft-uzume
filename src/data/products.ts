// Catálogo de peças prontas.
// Para adicionar uma peça nova: copie um objeto, mude os campos e dê um "slug" único.
// Fotos reais ficam em /public/produtos — quando um produto ainda não tem foto,
// o site mostra o aviso "foto em breve" (ver PlaceholderArt).

export type ProductStatus = "disponivel" | "reservada" | "vendida";
export type Motif =
  | "borboleta"
  | "mascara"
  | "isqueiro"
  | "coracao"
  | "joystick"
  | "peixe"
  | "flor"
  | "teia"
  | "croissant"
  | "chaveiro"
  | "collab";

export type Product = {
  slug: string;
  name: string;
  technique: "Tufting" | "Punch needle";
  category: "Tapete" | "Tapeçaria" | "Objeto";
  sizeCm: string;
  materials: string;
  price: number;
  stock: number;
  status: ProductStatus;
  motif: Motif;
  images?: string[];
  variations?: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "borboleta-azul",
    name: "Borboleta Azul",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "35 × 30 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 240,
    stock: 1,
    status: "disponivel",
    motif: "borboleta",
    images: ["/produtos/borboleta-azul.jpeg"],
    description:
      "Peça única com contorno em preto fechado e recorte no formato da própria asa — pensada pra sair do chão comum e ir pra parede também.",
  },
  {
    slug: "isqueiro-bic",
    name: "Isqueiro Bic",
    technique: "Tufting",
    category: "Objeto",
    sizeCm: "77 × 26 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 350,
    stock: 1,
    status: "disponivel",
    motif: "isqueiro",
    images: ["/produtos/isqueiro-bic-1.jpeg", "/produtos/isqueiro-bic-2.jpeg"],
    description:
      "Ícone do dia a dia em formato de tapete — série de objetos cotidianos que viram peça de decoração, com o recorte fiel até no detalhe da chama.",
  },
  {
    slug: "collab-cris",
    name: "Collab Cris",
    technique: "Tufting",
    category: "Objeto",
    sizeCm: "57 × 37 cm",
    materials: "Lã 100% acrílica, acabamento para pendurar",
    price: 390,
    stock: 1,
    status: "disponivel",
    motif: "collab",
    images: ["/produtos/collab-cris.jpeg"],
    description:
      "Peça feita em parceria com a Cris — duas carinhas lado a lado, traço divertido e cores fechadas em preto e vermelho.",
  },
  {
    slug: "peixe-amarelo",
    name: "Peixe Amarelo",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "55 × 20 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 260,
    stock: 1,
    status: "disponivel",
    motif: "peixe",
    images: ["/produtos/peixe-amarelo-1.jpeg", "/produtos/peixe-amarelo-2.jpeg"],
    description:
      "Recorte orgânico com cauda e barbatanas em amarelo vivo sobre corpo vermelho — parte da mesma leva de peixes, cada um com sua própria paleta.",
  },
  {
    slug: "peixe-verde",
    name: "Peixe Verde",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "55 × 25 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 290,
    stock: 1,
    status: "disponivel",
    motif: "peixe",
    images: ["/produtos/peixe-verde-1.jpeg", "/produtos/peixe-verde-2.jpeg"],
    description:
      "Recorte orgânico em verde e vermelho, com detalhes em azul na nadadeira — ótimo exemplo de como um desenho com curvas ganha volume e textura na técnica.",
  },
  {
    slug: "croissant",
    name: "Croissant",
    technique: "Punch needle",
    category: "Objeto",
    sizeCm: "20 × 12 cm",
    materials: "Lã 100% acrílica, acabamento em feltro",
    price: 60,
    stock: 4,
    status: "disponivel",
    motif: "croissant",
    description:
      "Peça pequena em formato de croissant — ideal pra quem quer começar a colecionar ou dar de presente sem gastar muito.",
  },
  {
    slug: "flor-old-school",
    name: "Flor Old School",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "30 × 25 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 170,
    stock: 2,
    status: "disponivel",
    motif: "flor",
    variations: ["Rosa", "Vermelho"],
    images: ["/produtos/flor-old-school-1.jpeg", "/produtos/flor-old-school-2.jpeg"],
    description:
      "Flor de traço grosso inspirada em tatuagem old school, com folhas verdes e miolo marcado — disponível nas variações rosa e vermelho.",
  },
  {
    slug: "chaveiro-miffy",
    name: "Chaveiro Miffy",
    technique: "Punch needle",
    category: "Objeto",
    sizeCm: "10 × 8 cm cada",
    materials: "Fio texturizado, argola de metal",
    price: 45,
    stock: 5,
    status: "disponivel",
    motif: "chaveiro",
    images: ["/produtos/chaveiro-miffy.jpeg"],
    description:
      "Carinha fofa inspirada na Miffy, em punch needle bem fechado — pendurada com argola de metal, pronta pra ir na bolsa ou mochila.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
