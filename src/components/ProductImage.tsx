import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductImage({
  src,
  alt,
  ratio = "aspect-[4/5]",
  className,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-sm border border-ink/25 bg-bone", ratio, className)}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
    </div>
  );
}
