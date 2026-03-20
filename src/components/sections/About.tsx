import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutSection } from "@/content/about";
import { contentMaxWidthClass, contentPaddingX } from "@/config/site";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-[#060608] py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/[0.05] blur-[120px]"
        aria-hidden
      />

      <div
        className={cn("relative mx-auto", contentMaxWidthClass, contentPaddingX)}
      >
        <ScrollReveal>
          <SectionHeading
            index={aboutSection.index}
            eyebrow={aboutSection.eyebrow}
            title={aboutSection.title}
            subtitle={aboutSection.subtitle}
          />
        </ScrollReveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-20">
          <ScrollReveal className="space-y-8 text-zinc-500" delay={0.05}>
            {aboutSection.paragraphs.map((p, i) => (
              <p
                key={i}
                className={cn(
                  i === 0
                    ? "text-lg leading-[1.8] md:text-xl"
                    : "leading-[1.85]",
                )}
              >
                {p}
              </p>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {aboutSection.stats.map((s) => (
                <li
                  key={s.label}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-6",
                    "transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/25 hover:shadow-[0_20px_60px_-24px_rgba(45,212,191,0.15)]",
                  )}
                  data-cursor-hover
                >
                  <span
                    className="absolute -right-4 -top-4 font-mono text-6xl font-bold text-white/[0.03] transition-colors group-hover:text-teal-400/10"
                    aria-hidden
                  >
                    {s.value}
                  </span>
                  <p className="relative font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white md:text-[2.75rem]">
                    {s.value}
                  </p>
                  <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
