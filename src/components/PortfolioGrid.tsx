"use client";

import { useMemo, useState } from "react";
import { portfolio, type PortfolioCategory } from "@/data/portfolio";
import { PlaceholderArt } from "./PlaceholderArt";
import { cn } from "@/lib/utils";

const categories: Array<PortfolioCategory | "Tudo"> = [
  "Tudo",
  "Tapetes",
  "Tapeçarias",
  "Objetos",
  "Experimentos",
];

const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]"];

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tudo");

  const items = useMemo(
    () => (active === "Tudo" ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
              active === cat
                ? "border-red bg-red text-bone"
                : "border-bone/25 text-bone/60 hover:border-bone/60 hover:text-bone"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {items.map((item, i) => (
          <figure key={item.slug} className="group">
            <PlaceholderArt motif={item.motif} tone="bone" ratio={ratios[i % ratios.length]} />
            <figcaption className="mt-2 flex items-baseline justify-between gap-2">
              <span className="font-display text-sm uppercase tracking-tight text-bone group-hover:text-red">
                {item.title}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-bone/40">
                {item.year} · {item.technique}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 && (
        <p className="py-16 text-center font-mono text-sm uppercase tracking-wider text-bone/50">
          Nenhuma peça nessa categoria ainda.
        </p>
      )}
    </div>
  );
}
