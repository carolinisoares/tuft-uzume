import { faq } from "@/data/faq";

export function FaqAccordion() {
  return (
    <div className="flex flex-col gap-10">
      {faq.map((group) => (
        <div key={group.category}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-red">{group.category}</p>
          <div className="border-t border-ink/15">
            {group.items.map((item) => (
              <details key={item.question} className="group border-b border-ink/15 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base uppercase tracking-tight text-ink marker:content-none">
                  {item.question}
                  <span className="mt-0.5 shrink-0 font-mono text-red group-open:hidden">+</span>
                  <span className="mt-0.5 hidden shrink-0 font-mono text-red group-open:block">–</span>
                </summary>
                <p className="mt-3 max-w-measure text-sm leading-relaxed text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
