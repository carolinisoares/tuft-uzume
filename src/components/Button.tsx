import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-display text-sm uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary: "bg-red text-bone hover:bg-red-deep",
  secondary: "border border-current text-bone hover:bg-bone hover:text-ink",
  secondaryOnBone: "border border-ink text-ink hover:bg-ink hover:text-bone",
  ghost: "text-red underline underline-offset-4 decoration-2 hover:text-red-soft px-0 py-0",
};

type Variant = keyof typeof variants;

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: { href: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("https://wa.me");
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
