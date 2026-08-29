import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function About() {
  const { copy } = useCopy();
  const about = copy.about;

  return (
    <section id="about" className="border-b border-border py-20 md:py-28" aria-labelledby="about-heading">
      <Shell>
        <SectionHeading number="02" kicker={about.kicker}>
          <span id="about-heading">{about.heading}</span>
        </SectionHeading>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <figure className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-lg bg-surface">
              <img
                src={about.portrait}
                alt={about.portraitAlt}
                width={1600}
                height={1200}
                loading="lazy"
                decoding="async"
                className="aspect-photo w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs font-medium tracking-wide text-muted">
              {about.caption}
            </figcaption>
          </figure>

          <div>
            <p className="font-display text-lede leading-snug text-ink">{about.lede}</p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-12 border-t border-border pt-8">
              <p className="font-display text-3xl leading-snug tracking-tight text-ink">
                {about.pull}
              </p>
            </blockquote>
          </div>
        </div>
      </Shell>
    </section>
  );
}
