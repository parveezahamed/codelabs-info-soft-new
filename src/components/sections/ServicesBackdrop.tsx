import { servicesBackdrop } from "@/content/services";

/**
 * Pure CSS / static typography — no WebGL. Sits behind “What we deliver” content.
 */
export default function ServicesBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft vertical wash — matches previous section treatment */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0)_0%,rgba(45,212,191,0.035)_50%,rgba(6,6,8,0)_100%)]" />

      {/* Ambient blobs */}
      <div className="absolute -left-32 top-[8%] h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-teal-500/[0.07] blur-[110px]" />
      <div className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-500/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-teal-900/20 blur-[90px]" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 15%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 15%, transparent 72%)",
        }}
      />

      {/* Diagonal sheen */}
      <div
        className="absolute -left-1/4 top-0 h-full w-[70%] rotate-[12deg] opacity-[0.04]"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(94,234,212,0.5) 45%, transparent 70%)",
        }}
      />

      {/* Giant watermark word */}
      <div className="absolute inset-x-0 top-[6%] flex justify-center md:justify-end md:pr-[5%]">
        <span
          className="select-none font-[family-name:var(--font-display)] font-extrabold leading-none tracking-[-0.06em] text-white/[0.035] max-md:translate-x-4"
          style={{ fontSize: "clamp(4.5rem, 18vw, 13rem)" }}
        >
          {servicesBackdrop.watermark}
        </span>
      </div>

      {/* Secondary outline echo — lighter, offset */}
      <div className="absolute -right-[10%] top-[18%] hidden md:block">
        <span
          className="select-none font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          02
        </span>
      </div>

      {/* Keyword rail — sits in reserved bottom padding of the section */}
      <div className="absolute bottom-8 left-0 right-0 px-6 md:bottom-10">
        <p className="mx-auto max-w-4xl text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.42em] text-zinc-500/[0.2] sm:text-[10px] sm:tracking-[0.36em]">
          {servicesBackdrop.keywords.join(" · ")}
        </p>
      </div>
    </div>
  );
}
