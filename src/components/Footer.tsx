import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-line/60 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase tracking-tight text-bone">
            Tuft <span className="text-red">Uzume</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-bone/60">
            Tapetes, tapeçarias e peças têxteis autorais em tufting e punch needle. Feito à mão por {site.founder}, em {site.location}.
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">Navegar</p>
          <ul className="flex flex-col gap-2 text-sm text-bone/70">
            <li><Link href="/loja" className="hover:text-bone">Loja</Link></li>
            <li><Link href="/personalize" className="hover:text-bone">Personalize</Link></li>
            <li><Link href="/portfolio" className="hover:text-bone">Portfólio</Link></li>
            <li><Link href="/faq" className="hover:text-bone">Como funciona / FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">Fala com a gente</p>
          <ul className="flex flex-col gap-2 text-sm text-bone/70">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-bone">
                Instagram — {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-bone">{site.email}</a>
            </li>
            <li><Link href="/contato" className="hover:text-bone">Formulário de contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line/60 px-5 py-5 text-center font-mono text-[0.65rem] uppercase tracking-wider text-bone/40 sm:px-8">
        © {new Date().getFullYear()} Tuft Uzume — peças únicas, feitas fio por fio.
      </div>
    </footer>
  );
}
