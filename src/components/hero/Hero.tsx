"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { contentMaxWidthClass, contentPaddingX, site } from "@/config/site";
import { cn } from "@/lib/utils";
import { ease, duration, stagger, heroOverlap } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,#134e4a_0%,#060608_55%,#060608_100%)]" />
  ),
});

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      gsap.set(
        [".hero-line", ".hero-sub", ".hero-cta", ".hero-aside"],
        { clearProps: "all" },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: ease.outExpo, force3D: true },
        delay: 0.12,
      });

      tl.from(".hero-line", {
        y: 36,
        autoAlpha: 0,
        duration: duration.heroLine,
        stagger: stagger.heroLines,
      })
        .from(
          ".hero-sub",
          {
            y: 18,
            autoAlpha: 0,
            duration: duration.heroSub,
            ease: ease.outExpo,
          },
          heroOverlap.afterLines,
        )
        .from(
          ".hero-cta",
          {
            y: 18,
            autoAlpha: 0,
            duration: duration.heroCta,
            ease: ease.outExpo,
          },
          heroOverlap.afterSub,
        )
        .from(
          ".hero-aside",
          {
            x: 18,
            autoAlpha: 0,
            duration: duration.heroAside,
            ease: ease.outExpo,
          },
          heroOverlap.afterCta,
        );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#060608] pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <HeroCanvas />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060608]/40 via-transparent to-[#060608]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_28%,rgba(45,212,191,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(6,6,8,0.9),transparent)]"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          contentMaxWidthClass,
          contentPaddingX,
        )}
      >
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="hero-line mb-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.42em] text-teal-400/95">
              <span
                className="h-px w-10 bg-gradient-to-r from-teal-500/60 to-transparent"
                aria-hidden
              />
              {site.name} — AI, SaaS & full‑stack delivery
            </p>

            <h1 className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-white">
              <span className="hero-line block text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02]">
                We build
              </span>
              <span className="hero-line block text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02]">
                <span className="text-gradient">scalable digital</span>
              </span>
              <span className="hero-line block text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02] text-zinc-200">
                solutions
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-2xl text-base leading-[1.75] text-zinc-500 md:text-lg">
              We engineer AI agents and automations, SaaS products, native and hybrid
              mobile apps, and cross‑platform desktop software — with cloud, DevOps, and
              managed services — so you can ship faster with confidence.
            </p>

            <div className="hero-cta mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className={cn(
                  "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
                  "bg-teal-400 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-950",
                  "motion-safe:transition-transform motion-safe:duration-[680ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/80",
                )}
                data-cursor-hover
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a project
                  <span
                    className="inline-block motion-safe:transition-transform motion-safe:duration-[680ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
                <span
                  className="absolute inset-0 translate-y-full bg-white/25 motion-safe:transition-transform motion-safe:duration-[720ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-y-0"
                  aria-hidden
                />
              </a>
              <a
                href="#projects"
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-8 py-4",
                  "text-[13px] font-medium uppercase tracking-[0.14em] text-zinc-200",
                  "motion-safe:transition-all motion-safe:duration-[680ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:border-teal-400/35 motion-safe:hover:bg-white/[0.04]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/60",
                )}
                data-cursor-hover
              >
                View work
                <span
                  className="text-teal-400/90 motion-safe:transition-transform motion-safe:duration-[680ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-1"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          <aside className="hero-aside hidden flex-col items-start justify-end gap-10 border-l border-white/[0.08] pl-8 lg:col-span-4 lg:flex">
            <p className="max-w-[220px] font-[family-name:var(--font-instrument)] text-lg italic leading-relaxed text-zinc-500">
              Clarity in the stack. Calm in the process.
            </p>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
              <span
                className="h-12 w-px bg-gradient-to-b from-teal-500/50 to-transparent"
                aria-hidden
              />
              <span>Scroll to explore</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
