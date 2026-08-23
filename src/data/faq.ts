// Conteúdo oficial da marca — mantenha o significado ao editar a redação.

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { category: string; items: FaqItem[] };

export const faq: FaqCategory[] = [
  {
    category: "Encomendas",
    items: [
      {
        question: "Como funciona uma encomenda personalizada?",
        answer:
          "Você envia sua ideia, desenho ou referência e o projeto é avaliado — considerando o desenho, o nível de detalhe e o tamanho necessário para que ele funcione bem na técnica. Depois é definido o orçamento e, com a aprovação do projeto e o pagamento de 50%, a produção começa.",
      },
      {
        question: "Qual o prazo de produção?",
        answer:
          "De 7 a 25 dias úteis, contados após a confirmação do pagamento e a aprovação do projeto. O tempo pode variar de acordo com o tamanho e a complexidade da peça.",
      },
      {
        question: "Quais tamanhos você faz?",
        answer:
          "Trabalho com diferentes tamanhos, mas não existe uma medida mínima igual para todos os desenhos. Cada desenho precisa de um tamanho mínimo para que seus detalhes, proporções e acabamento funcionem bem no tapete — por isso o tamanho é definido de acordo com o projeto.",
      },
      {
        question: "Quais materiais são utilizados?",
        answer:
          "Os tapetes são produzidos principalmente com lã 100% acrílica e recebem base antiderrapante no acabamento. Outros materiais podem variar de acordo com a técnica e o tipo de peça.",
      },
      {
        question: "Posso enviar meu próprio desenho?",
        answer:
          "Sim. Você pode enviar seu próprio desenho, ilustração, logo ou referência. A partir dele, é avaliado como adaptar a arte para o tufting ou punch needle e qual seria o tamanho adequado para a peça.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "Para iniciar uma encomenda, é feito o pagamento de 50% do valor. Os 50% restantes são pagos na finalização da peça, antes do envio ou retirada.",
      },
    ],
  },
  {
    category: "Entrega e uso",
    items: [
      {
        question: "Você envia para outros estados?",
        answer:
          "Sim, a Tuft Uzume envia para todo o Brasil. O frete é calculado de acordo com o destino e as dimensões da peça.",
      },
      {
        question: "Posso usar o tapete na parede?",
        answer:
          "Sim. Além de serem usados no chão, alguns tapetes podem ser utilizados como decoração de parede. Nesse caso, o acabamento e a forma de instalação são definidos de acordo com a peça.",
      },
    ],
  },
  {
    category: "Cuidados",
    items: [
      {
        question: "Como cuidar e limpar o tapete?",
        answer:
          "Para conservar a peça, evite excesso de água e não coloque na máquina de lavar. A limpeza deve ser feita delicadamente, removendo a poeira e pequenas sujeiras sem esfregar ou puxar os fios. Para uma limpeza mais profunda, o ideal é procurar um serviço especializado em peças têxteis.",
      },
    ],
  },
];
