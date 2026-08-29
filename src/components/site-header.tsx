import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function SiteHeader() {
  const { locale, copy } = useCopy();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = copy.nav
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [copy.nav]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {copy.ui.skip}
      </a>
      <Shell className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink transition-opacity duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:opacity-70"
        >
          {copy.site.name}
        </a>
        <nav aria-label={copy.ui.navAria} className="hidden items-center gap-5 lg:flex">
          {copy.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-2 text-sm tracking-tight transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                active === link.href ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-px bg-ink transition-opacity duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                  active === link.href ? "opacity-100" : "opacity-0",
                )}
              />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LanguageSwitch locale={locale} ariaLabel={copy.ui.langAria} />
          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? copy.ui.menuClose : copy.ui.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative size-5">
              <Menu
                className={cn(
                  "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
                )}
                strokeWidth={1.75}
              />
              <X
                className={cn(
                  "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  open ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
                )}
                strokeWidth={1.75}
              />
            </span>
          </button>
        </div>
      </Shell>
      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-paper lg:hidden">
          <Shell className="flex flex-col py-6">
            {copy.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border font-display text-3xl tracking-tight text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </Shell>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitch({ locale, ariaLabel }: { locale: "ko" | "en"; ariaLabel: string }) {
  return (
    <nav aria-label={ariaLabel} className="flex items-center text-sm font-medium">
      <Link
        to="/"
        aria-current={locale === "ko" ? "page" : undefined}
        className={cn(
          "inline-flex h-11 items-center px-2.5 transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)]",
          locale === "ko" ? "text-ink" : "text-muted hover:text-ink",
        )}
      >
        KR
      </Link>
      <span className="text-muted/50" aria-hidden="true">
        /
      </span>
      <Link
        to="/en"
        aria-current={locale === "en" ? "page" : undefined}
        className={cn(
          "inline-flex h-11 items-center px-2.5 transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)]",
          locale === "en" ? "text-ink" : "text-muted hover:text-ink",
        )}
      >
        EN
      </Link>
    </nav>
  );
}
