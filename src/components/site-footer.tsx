import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function SiteFooter() {
  const { copy } = useCopy();

  return (
    <footer className="border-t border-border bg-ink text-paper">
      <Shell className="py-14 pb-28 md:py-20 md:pb-16">
        <p className="font-display text-section leading-tight tracking-display">{copy.site.name}</p>
        <p className="mt-3 font-display text-lede text-paper/70">
          {copy.site.role}
          <span className="mx-2 text-paper/40">·</span>
          {copy.site.location}
        </p>

        <div className="mt-12 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label={copy.ui.footerAria} className="flex flex-col gap-3">
            {copy.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 w-fit items-center text-sm text-paper/80 transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-1 text-sm">
            {copy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-fit items-center text-paper/80 underline-offset-4 transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-paper hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/profile_research.pdf"
              download={copy.contact.pdfName}
              className="inline-flex min-h-11 w-fit items-center text-paper/80 underline-offset-4 transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-paper hover:underline"
            >
              {copy.footer.pdf}
            </a>
          </div>
          <div className="text-sm text-paper/60 lg:text-right">
            <p>{copy.site.availability}</p>
            <p className="mt-2">{copy.footer.typeCredit}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs tracking-wider text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sangki Kim</p>
          <p>Developer Relations · {copy.site.years}</p>
        </div>
      </Shell>
    </footer>
  );
}
