"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactSection } from "@/content/contact";
import { contentMaxWidthClass, contentPaddingX, site } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-[#08080c] py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-teal-500/[0.06] blur-[100px]"
        aria-hidden
      />

      <div
        className={cn("relative mx-auto", contentMaxWidthClass, contentPaddingX)}
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <ScrollReveal>
            <div>
              <SectionHeading
                index={contactSection.index}
                eyebrow={contactSection.eyebrow}
                title={contactSection.title}
                subtitle={contactSection.subtitle}
              />
              <div className="mt-10 space-y-4 border-t border-white/[0.06] pt-10 font-mono text-sm text-zinc-500">
                <p>
                  <span className="text-zinc-600">Email</span>
                  <br />
                  <a
                    href={`mailto:${site.email}`}
                    className="text-teal-400/90 transition-colors hover:text-teal-300"
                    data-cursor-hover
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="text-zinc-600">Phone</span>
                  <br />
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="text-teal-400/90 transition-colors hover:text-teal-300"
                    data-cursor-hover
                  >
                    {site.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white"
                    data-cursor-hover
                  >
                    Visit codelabsinfosoft.com
                    <span aria-hidden>↗</span>
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <form
              className="space-y-6 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={cn(
                    "w-full rounded-xl border border-white/[0.08] bg-[#060608]/90 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700",
                    "outline-none transition-[border,box-shadow] focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/20",
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={cn(
                    "w-full rounded-xl border border-white/[0.08] bg-[#060608]/90 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700",
                    "outline-none transition-[border,box-shadow] focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/20",
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
                >
                  Project brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Goals, stack, constraints, links…"
                  className={cn(
                    "w-full resize-none rounded-xl border border-white/[0.08] bg-[#060608]/90 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700",
                    "outline-none transition-[border,box-shadow] focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/20",
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full rounded-full bg-teal-400 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-950",
                  "transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/70",
                )}
                data-cursor-hover
              >
                Send message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
