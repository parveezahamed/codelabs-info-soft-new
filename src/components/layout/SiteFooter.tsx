import { primaryNav } from "@/content/navigation";
import { footerContent } from "@/content/footer";
import { contentMaxWidthClass, contentPaddingX, site } from "@/config/site";
import { cn } from "@/lib/utils";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050506]">
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-teal-500/[0.06] blur-[100px]"
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto py-20 md:py-28",
          contentMaxWidthClass,
          contentPaddingX,
        )}
      >
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-teal-500/90">
              {footerContent.brandLine}
            </p>
            <p className="mt-6 max-w-md font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl">
              {footerContent.headline}
            </p>
            <div className="mt-10 flex flex-col gap-3 font-mono text-sm">
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-zinc-400 underline decoration-white/10 underline-offset-8 transition-colors hover:text-teal-400 hover:decoration-teal-400/40"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="w-fit text-zinc-400 transition-colors hover:text-teal-400"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 md:items-end md:text-right">
            <nav className="flex flex-col gap-4 md:items-end" aria-label="Footer">
              {primaryNav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl font-medium text-zinc-400 transition-colors hover:text-white md:text-3xl"
                >
                  <span className="h-px w-0 bg-teal-400 transition-all duration-300 group-hover:w-8" />
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-mono text-[11px] text-zinc-600">
                <a
                  href={site.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-400"
                >
                  Privacy policy
                </a>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-400"
                >
                  Facebook
                </a>
              </div>
              <p className="font-mono text-[11px] text-zinc-600">
                © {year} {site.legalName}. {footerContent.credit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
