import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function Hero() {
  const { copy } = useCopy();

  return (
    <section
      id="top"
      className="relative border-b border-border"
      aria-labelledby="hero-name"
    >
      <Shell className="grid min-h-[calc(100svh-4.25rem)] grid-rows-[auto_1fr_auto] py-8 pb-24 sm:py-10 md:pb-12">
        <div className="flex items-center justify-between gap-4 text-xs font-medium tracking-wide text-muted">
          <p>{copy.site.location} · {copy.site.team}</p>
          <p>{copy.hero.kicker}</p>
        </div>

        <div className="stagger-in flex flex-col justify-center py-12 sm:py-16">
          <p className="mb-6 text-sm font-medium text-sage">{copy.site.role}</p>
          <h1
            id="hero-name"
            className="font-display text-display leading-tight tracking-display text-ink"
          >
            {copy.site.name}
          </h1>
          <p className="mt-3 font-display text-2xl italic tracking-tight text-muted">
            {copy.site.otherName}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink">
            {copy.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="w-fit pr-5">
              <a href="#about">
                {copy.hero.cta}
                <ArrowDown className="size-4" strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-fit">
              <a href="https://www.linkedin.com/in/ksangki" target="_blank" rel="noreferrer">
                {copy.hero.linkedin}
              </a>
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
          {copy.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs font-medium tracking-wide text-muted">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl tracking-tight text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}
