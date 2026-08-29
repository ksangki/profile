import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function Experience() {
  const { copy } = useCopy();
  const experience = copy.experience;

  return (
    <section
      id="experience"
      className="border-b border-border py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <Shell>
        <SectionHeading number="03" kicker={experience.kicker}>
          <span id="experience-heading">{experience.heading}</span>
        </SectionHeading>

        <div className="space-y-12">
          {experience.jobs.map((job) => (
            <article
              key={job.org}
              className="grid gap-6 border-b border-border pb-12 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-12"
            >
              <div>
                <p className="text-xs font-medium tracking-wide text-muted">{job.period}</p>
                <h3 className="mt-2 font-display text-3xl tracking-tight text-ink">{job.org}</h3>
                <p className="mt-2 text-sm leading-normal text-sage">{job.role}</p>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-b border-border py-3 text-base leading-relaxed text-ink last:border-b-0"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-xs font-medium tracking-wide text-muted">{experience.educationKicker}</p>
          <p className="mt-2 font-display text-2xl tracking-tight text-ink">
            {experience.education.school}
          </p>
          <p className="mt-1 text-sm text-sage">{experience.education.field}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {experience.education.note}
          </p>
        </div>
      </Shell>
    </section>
  );
}
