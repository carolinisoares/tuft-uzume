// Acervo do portfólio — trabalhos realizados, à venda ou não.
// ⚠️ EXEMPLOS DE ESTRUTURA: troque por fotos e legendas reais do trabalho da Tuft Uzume.
import type { Motif } from "./products";

export type PortfolioCategory = "Tapetes" | "Tapeçarias" | "Objetos" | "Experimentos";

export type PortfolioItem = {
  slug: string;
  title: string;
  year: string;
  technique: "Tufting" | "Punch needle";
  category: PortfolioCategory;
  motif: Motif;
  note: string;
};

export const portfolio: PortfolioItem[] = [
  { slug: "p1", title: "Borboleta Azul", year: "2025", technique: "Tufting", category: "Tapetes", motif: "borboleta", note: "Peça do catálogo atual." },
  { slug: "p2", title: "Máscara Hannya", year: "2025", technique: "Tufting", category: "Tapeçarias", motif: "mascara", note: "Encomenda com referência oriental." },
  { slug: "p3", title: "Isqueiro Pop", year: "2024", technique: "Tufting", category: "Objetos", motif: "isqueiro", note: "Série de ícones do cotidiano." },
  { slug: "p4", title: "Coração Partido", year: "2024", technique: "Punch needle", category: "Objetos", motif: "coracao", note: "Traço estilo tattoo flash." },
  { slug: "p5", title: "Joystick Arcade", year: "2024", technique: "Tufting", category: "Objetos", motif: "joystick", note: "Referência de cultura pop/games." },
  { slug: "p6", title: "Peixe Tropical", year: "2025", technique: "Tufting", category: "Tapetes", motif: "peixe", note: "Recorte orgânico, cores saturadas." },
  { slug: "p7", title: "Flor em Linha", year: "2024", technique: "Punch needle", category: "Tapeçarias", motif: "flor", note: "Contorno fino em preto e branco." },
  { slug: "p8", title: "Teia de Parede", year: "2023", technique: "Tufting", category: "Experimentos", motif: "teia", note: "Estudo de recorte vazado." },
  { slug: "p9", title: "Máscara II", year: "2023", technique: "Tufting", category: "Tapeçarias", motif: "mascara", note: "Segunda versão, paleta alternativa." },
  { slug: "p10", title: "Coração de Bolso", year: "2023", technique: "Punch needle", category: "Experimentos", motif: "coracao", note: "Teste de escala reduzida." },
];
