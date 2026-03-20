import { memo, useMemo } from "react";
import { marqueeLabels } from "@/content/marquee";

/**
 * Infinite horizontal band — labels from `content/marquee.ts`.
 */
function MarqueeStrip() {
  const row = useMemo(
    () =>
      marqueeLabels.map((label) => (
        <span
          key={label}
          className="flex shrink-0 items-center gap-3 px-6 font-mono text-[11px] font-medium uppercase leading-[1.7] tracking-[0.35em] text-muted-foreground"
        >
          <span className="h-1 w-1 shrink-0 rounded-full bg-teal-600/80 dark:bg-teal-400/80" aria-hidden />
          {label}
        </span>
      )),
    [],
  );

  return (
    <div
      className="relative z-20 border-y border-[0.5px] border-black/[0.06] bg-page-secondary/90 backdrop-blur-sm dark:border-white/[0.05]"
      aria-hidden
    >
      {/* overflow-x-clip: horizontal scroll only; avoids glyph clip vs overflow-hidden */}
      <div className="flex min-h-[3.25rem] items-center overflow-x-clip py-4 sm:min-h-[3.5rem] sm:py-5">
        <div className="flex w-max animate-marquee items-center">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}

export default memo(MarqueeStrip);
