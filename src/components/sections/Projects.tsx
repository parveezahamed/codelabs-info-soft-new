import StaggerCards from "@/components/animations/StaggerCards";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  PROJECT_CARD_GRID_BG,
  projectsSection,
} from "@/content/projects";
import { contentMaxWidthClass, contentPaddingX } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-[#060608] py-28 md:py-36"
    >
      <div className={cn("mx-auto", contentMaxWidthClass, contentPaddingX)}>
        <ScrollReveal>
          <SectionHeading
            index={projectsSection.index}
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            subtitle={projectsSection.subtitle}
          />
        </ScrollReveal>

        <StaggerCards className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {projectsSection.items.map((p) => (
            <article
              key={p.name}
              data-stagger
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0a0d]",
                "transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/25 hover:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]",
              )}
              data-cursor-hover
            >
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden bg-gradient-to-br",
                  p.tone,
                )}
              >
                <div
                  className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                  style={{ backgroundImage: PROJECT_CARD_GRID_BG }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  {p.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-5 md:px-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal-400/90">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                  {p.blurb}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-400/90 transition-colors group-hover:text-teal-300">
                  Case study
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </div>
            </article>
          ))}
        </StaggerCards>
      </div>
    </section>
  );
}
