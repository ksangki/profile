import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function Work() {
  const { copy } = useCopy();
  const work = copy.work;
  const filters = [work.all, ...work.categories];
  const [filter, setFilter] = useState(work.all);

  const visible = useMemo(
    () => (filter === work.all ? work.projects : work.projects.filter((project) => project.category === filter)),
    [filter, work],
  );

  return (
    <section id="work" className="border-b border-border py-20 md:py-28" aria-labelledby="work-heading">
      <Shell>
        <SectionHeading number="04" kicker={work.kicker}>
          <span id="work-heading">{work.heading}</span>
        </SectionHeading>

        <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink">{work.intro}</p>

        <fieldset className="mb-10">
          <legend className="sr-only">{work.filterLegend}</legend>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => {
              const selected = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(item)}
                  className={cn(
                    "h-11 min-w-11 rounded-full px-5 text-sm font-medium transition-[background-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] active:not-disabled:scale-[0.96]",
                    selected
                      ? "bg-ink text-paper"
                      : "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">{work.programsHeading}</h3>
            <ul className="mt-6">
              {work.programs.map((program) => (
                <li
                  key={program.name}
                  className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-medium text-ink">{program.name}</span>
                  <span className="text-sm text-muted sm:text-right">{program.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">{work.impactHeading}</h3>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {work.impact.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-medium tracking-wide text-muted">{stat.label}</dt>
                  <dd className="mt-1 font-display text-3xl tracking-tight text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="font-display text-2xl tracking-tight text-ink">{work.talksHeading}</h3>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {work.talks.map((talk) => (
              <li key={talk.title} className="border-b border-border pb-6">
                <p className="text-xs font-medium tracking-wide text-muted">
                  {talk.date} · {talk.event}
                </p>
                <p className="mt-2 font-display text-xl leading-snug text-ink">{talk.title}</p>
                <p className="mt-2 text-sm text-muted">{talk.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="relative overflow-hidden rounded-lg bg-surface">
        <img
          src={project.image}
          alt={project.alt}
          width={1600}
          height={1200}
          loading={project.number === "01" || project.number === "02" ? "eager" : "lazy"}
          decoding="async"
          className="aspect-photo w-full object-cover"
        />
        <div className="project-overlay pointer-events-none absolute inset-0 flex items-end p-6">
          <p className="max-w-md font-display text-xl leading-snug text-paper">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wide text-muted">
            {project.number} · {project.category} · {project.year}
          </p>
          <h3 className="mt-1 font-display text-2xl leading-snug tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.client}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        </div>
        {project.href ? (
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted" strokeWidth={1.5} />
        ) : null}
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="project-card group block rounded-xl"
      >
        {inner}
      </a>
    );
  }

  return (
    <article tabIndex={0} className="project-card group rounded-xl">
      {inner}
    </article>
  );
}
