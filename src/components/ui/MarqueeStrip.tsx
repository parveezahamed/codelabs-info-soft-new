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
          className="flex shrink-0 items-center gap-3 px-6 font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500"
        >
          <span className="h-1 w-1 rounded-full bg-teal-400/80" aria-hidden />
          {label}
        </span>
      )),
    [],
  );

  return (
    <div
      className="relative z-20 border-y border-white/[0.06] bg-[#08080a]/90 backdrop-blur-sm"
      aria-hidden
    >
      <div className="overflow-hidden py-3.5">
        <div className="flex w-max animate-marquee">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}

export default memo(MarqueeStrip);
