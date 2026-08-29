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
          <p className="text-xs font-medium tracking-wider text-muted">{writing.ebooksKicker}</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{writing.ebooksHeading}</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{writing.ebooksLede}</p>

          <div className="mt-10 space-y-12">
            {writing.ebookSeries.map((series) => (
              <div key={series.heading}>
                <h4 className="text-xs font-medium tracking-wider text-muted">{series.heading}</h4>
                <ul className="mt-4">
                  {series.books.map((book) => (
                    <li key={book.href} className="border-b border-border py-5">
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block min-h-11"
                      >
                        <span className="font-display text-xl leading-snug text-ink underline-offset-4 group-hover:underline">
                          {book.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">{book.subtitle}</span>
                      </a>
                      {book.note ? (
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{book.note}</p>
                      ) : null}
                      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a
                          href={book.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-ink underline-offset-4 hover:underline"
                        >
                          {writing.readLabel}
                        </a>
                        <a
                          href={book.epub}
                          download
                          className="text-ink underline-offset-4 hover:underline"
                        >
                          {writing.epubLabel}
                        </a>
                        {book.extras?.map((extra) => (
                          <a
                            key={extra.href}
                            href={extra.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-ink underline-offset-4 hover:underline"
                          >
                            {extra.label}
                          </a>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

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
