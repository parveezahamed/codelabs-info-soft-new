import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqSection } from "@/content/faq";
import { contentMaxWidthClass, contentPaddingX } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-[#060608] py-28 md:py-36"
    >
      <div className={cn("mx-auto", contentMaxWidthClass, contentPaddingX)}>
        <ScrollReveal>
          <SectionHeading
            index={faqSection.index}
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal className="mt-14" delay={0.06}>
          <dl className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-[#0a0a0d]/50">
            {faqSection.items.map((item) => (
              <div key={item.q} className="px-6 py-7 md:px-8 md:py-8">
                <dt className="font-[family-name:var(--font-display)] text-lg font-semibold text-white md:text-xl">
                  {item.q}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-zinc-500 md:text-[15px]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
