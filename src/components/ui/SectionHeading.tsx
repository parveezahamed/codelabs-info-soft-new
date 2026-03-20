import { memo } from "react";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
};

function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  className,
  titleClassName,
}: Props) {
  return (
    <div className={cn("relative max-w-3xl", className)}>
      {index ? (
        <span
          className="pointer-events-none absolute -left-1 top-1/2 z-0 -translate-x-[120%] -translate-y-1/2 font-[family-name:var(--font-display)] text-[clamp(4rem,14vw,10rem)] font-extrabold leading-none text-white/[0.04] select-none max-lg:hidden"
          aria-hidden
        >
          {index}
        </span>
      ) : null}
      <div className="relative z-10">
        {eyebrow ? (
          <p className="mb-4 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-teal-400/90">
            <span className="h-px w-8 bg-teal-500/40" aria-hidden />
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-white",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default memo(SectionHeading);
