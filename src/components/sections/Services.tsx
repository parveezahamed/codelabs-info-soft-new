import StaggerCards from "@/components/animations/StaggerCards";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesSection } from "@/content/services";
import { contentMaxWidthClass, contentPaddingX } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-[#08080c] py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0)_0%,rgba(45,212,191,0.03)_50%,rgba(6,6,8,0)_100%)]"
        aria-hidden
      />

      <div
        className={cn("relative mx-auto", contentMaxWidthClass, contentPaddingX)}
      >
        <ScrollReveal>
          <SectionHeading
            index={servicesSection.index}
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
          />
        </ScrollReveal>

        <StaggerCards className="mt-20 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {servicesSection.items.map((s, i) => (
            <article
              key={s.title}
              data-stagger
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c10]/80 p-9 md:p-10",
                "transition-all duration-500 hover:border-teal-500/30 hover:bg-teal-500/[0.03]",
              )}
              data-cursor-hover
            >
              <span className="font-mono text-[10px] text-teal-500/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-teal-100 md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-[15px]">
                {s.body}
              </p>
              <span
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 transition-colors group-hover:text-teal-400"
                aria-hidden
              >
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </article>
          ))}
        </StaggerCards>
      </div>
    </section>
  );
}
