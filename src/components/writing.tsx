import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function Writing() {
  const { copy } = useCopy();
  const writing = copy.writing;

  return (
    <section id="writing" className="border-b border-border py-20 md:py-28" aria-labelledby="writing-heading">
      <Shell>
        <SectionHeading number="06" kicker={writing.kicker}>
          <span id="writing-heading">{writing.heading}</span>
        </SectionHeading>

        <article className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="overflow-hidden rounded-lg bg-surface">
            <img
              src={writing.book.image}
              alt={writing.book.alt}
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-photo w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted">
              {writing.book.press} · {writing.book.date}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-snug tracking-tight text-ink">
              {writing.book.title}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-ink">{writing.book.body}</p>
            <Button asChild variant="outline" className="mt-8 w-fit pr-5">
              <a href={writing.book.href} target="_blank" rel="noreferrer">
                {writing.bookCta}
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </a>
            </Button>
          </div>
        </article>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="font-display text-2xl tracking-tight text-ink">{writing.pressHeading}</h3>
          <ul className="mt-6">
            {writing.press.map((item) => (
              <li key={item.href} className="border-b border-border">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-11 items-start justify-between gap-4 py-5"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-medium tracking-wide text-muted">
                      {item.outlet} · {item.date}
                    </span>
                    <span className="mt-2 block font-display text-xl leading-snug text-ink underline-offset-4 group-hover:underline">
                      {item.title}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="font-display text-2xl tracking-tight text-ink">{writing.platformsHeading}</h3>
          <ul className="mt-6 max-w-2xl">
            {writing.platforms.map((item) => (
              <li key={item.name} className="border-b border-border py-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 w-full items-start justify-between gap-4"
                >
                  <span>
                    <span className="block font-medium text-ink underline-offset-4 group-hover:underline">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{item.detail}</span>
                  </span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
