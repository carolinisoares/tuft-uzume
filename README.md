# Tuft Uzume — site

Site oficial da Tuft Uzume (tufting e punch needle autorais), construído em Next.js + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Onde editar cada coisa

Tudo que muda com frequência fica em arquivos de dados simples, sem precisar mexer em componente:

| O que editar | Arquivo |
| --- | --- |
| Peças da loja (nome, preço, medidas, status) | `src/data/products.ts` |
| Trabalhos do portfólio | `src/data/portfolio.ts` |
| Perguntas do FAQ | `src/data/faq.ts` |
| WhatsApp, e-mail, Instagram, prazo de resposta | `src/data/site.ts` |

### Adicionar uma peça nova na loja

Abra `src/data/products.ts`, copie um dos objetos dentro do array `products`, cole no fim da lista e
ajuste os campos (`slug` precisa ser único e sem espaços). A página `/loja/[slug]` é gerada
automaticamente — não precisa criar nenhuma página nova.

### Adicionar um trabalho no portfólio

Mesma lógica em `src/data/portfolio.ts`, dentro do array `portfolio`.

### Trocar fotos pelas reais

Hoje as peças usam um componente de espaço reservado (`PlaceholderArt`) com um ícone e a etiqueta
"foto em breve" — assim o site já nasce navegável mesmo sem fotografia pronta. Para usar fotos reais,
troque `<PlaceholderArt motif="..." />` por `<img>` ou `next/image` apontando pra imagem real dentro de
`public/`. Isso aparece em `src/components/ProductCard.tsx`, `src/components/PortfolioGrid.tsx`,
`src/app/loja/[slug]/page.tsx` e nas seções da home.

### Identidade visual (cores e tipografia)

As cores ficam centralizadas em `tailwind.config.ts` (`ink`, `bone`, `red`, `gold`, `thread`) e as fontes
em `src/app/layout.tsx` (Anton, Archivo, Space Mono via `next/font/google`). Mudar um valor ali atualiza
o site inteiro.

## Formulários (orçamento e contato)

Os formulários (`src/components/OrderForm.tsx`) já funcionam sem nenhuma configuração: ao enviar, abrem o
WhatsApp com um resumo do que foi preenchido.

Para envio automático (sem depender do visitante abrir o WhatsApp), crie uma conta gratuita em um serviço
como [Web3Forms](https://web3forms.com), [Formspree](https://formspree.io) ou [Getform](https://getform.io),
copie a URL/endpoint de envio e cole em uma variável de ambiente `NEXT_PUBLIC_FORM_ENDPOINT` (veja
`.env.example`) — tanto localmente quanto nas Environment Variables do projeto na Vercel.

## Compra de peças

O botão "Comprar" nas peças disponíveis abre o WhatsApp com uma mensagem pronta citando a peça e o preço.
Quando quiser evoluir para checkout com pagamento direto no site (cartão/Pix automatizado), o caminho mais
simples é integrar Nuvemshop, Shopify ou links de pagamento do Mercado Pago por peça — sem precisar refazer
o restante do site.

## Deploy

O projeto está publicado na Vercel. Qualquer alteração nos arquivos, se o projeto estiver conectado a um
repositório Git, gera um novo deploy automaticamente ao dar `git push`. Sem repositório conectado, rode:

```bash
vercel --prod
```

na raiz do projeto.
