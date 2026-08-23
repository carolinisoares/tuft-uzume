export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatStock(stock: number) {
  return stock === 1 ? "1 unidade disponível" : `${stock} unidades disponíveis`;
}
