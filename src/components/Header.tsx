"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/loja", label: "Loja" },
  { href: "/personalize", label: "Personalize" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "Como funciona" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/60 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-xl uppercase tracking-tight text-bone" onClick={() => setOpen(false)}>
          Tuft <span className="text-red">Uzume</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-wider text-bone/70 transition-colors hover:text-bone",
                pathname === link.href && "text-red hover:text-red-soft"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-gold hover:text-gold-soft"
          >
            Instagram ↗
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 bg-bone transition-transform", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-bone transition-opacity", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-bone transition-transform", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-line/60 bg-ink px-5 pb-5 pt-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-sm px-2 py-3 font-mono text-sm uppercase tracking-wider text-bone/80",
                pathname === link.href && "text-red"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm px-2 py-3 font-mono text-sm uppercase tracking-wider text-gold"
          >
            Instagram ↗
          </a>
        </nav>
      )}
    </header>
  );
}
