// Catálogo de peças prontas.
// ⚠️ Os itens abaixo são EXEMPLOS DE ESTRUTURA para o site já nascer funcional —
// substitua nome, preço, medidas e fotos pelas peças reais antes de publicar de verdade.
// Para adicionar uma peça nova: copie um objeto, mude os campos e dê um "slug" único.

export type ProductStatus = "disponivel" | "reservada" | "vendida";
export type Motif =
  | "borboleta"
  | "mascara"
  | "isqueiro"
  | "coracao"
  | "joystick"
  | "peixe"
  | "flor"
  | "teia";

export type Product = {
  slug: string;
  name: string;
  technique: "Tufting" | "Punch needle";
  category: "Tapete" | "Tapeçaria" | "Objeto";
  sizeCm: string;
  materials: string;
  price: number;
  status: ProductStatus;
  motif: Motif;
  description: string;
};

export const products: Product[] = [
  {
    slug: "borboleta-azul",
    name: "Borboleta Azul",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "45 × 38 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 280,
    status: "disponivel",
    motif: "borboleta",
    description:
      "Peça única com contorno em preto fechado e recorte no formato da própria asa — pensada pra sair do chão comum e ir pra parede também.",
  },
  {
    slug: "mascara-hannya",
    name: "Máscara Hannya",
    technique: "Tufting",
    category: "Tapeçaria",
    sizeCm: "70 × 55 cm",
    materials: "Lã 100% acrílica, acabamento para pendurar",
    price: 520,
    status: "disponivel",
    motif: "mascara",
    description:
      "Releitura têxtil da máscara oriental clássica — traço grosso, cores fechadas, feita pra ficar na parede como uma peça de arte.",
  },
  {
    slug: "isqueiro-pop",
    name: "Isqueiro Pop",
    technique: "Tufting",
    category: "Objeto",
    sizeCm: "30 × 12 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 190,
    status: "reservada",
    motif: "isqueiro",
    description:
      "Ícone do dia a dia em formato de tapete pequeno — série de objetos cotidianos que viram peça de decoração.",
  },
  {
    slug: "coracao-partido",
    name: "Coração Partido",
    technique: "Punch needle",
    category: "Objeto",
    sizeCm: "25 × 22 cm",
    materials: "Lã 100% acrílica, acabamento em feltro",
    price: 150,
    status: "disponivel",
    motif: "coracao",
    description:
      "Traço de adesivo/tattoo flash em punch needle — detalhe fino, ideal pra quem quer uma peça pequena com bastante personalidade.",
  },
  {
    slug: "joystick-arcade",
    name: "Joystick Arcade",
    technique: "Tufting",
    category: "Objeto",
    sizeCm: "35 × 35 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 260,
    status: "vendida",
    motif: "joystick",
    description:
      "Almofada/tapete inspirado em fliperama antigo — mostra bem como referência de cultura pop vira peça têxtil.",
  },
  {
    slug: "peixe-tropical",
    name: "Peixe Tropical",
    technique: "Tufting",
    category: "Tapete",
    sizeCm: "90 × 45 cm",
    materials: "Lã 100% acrílica, base antiderrapante",
    price: 430,
    status: "disponivel",
    motif: "peixe",
    description:
      "Recorte orgânico colorido, ótimo exemplo de como um desenho com curvas ganha volume e textura na técnica.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
