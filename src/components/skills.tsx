import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";

export function Skills() {
  const { copy } = useCopy();

  return (
    <section id="skills" className="border-b border-border py-20 md:py-28" aria-labelledby="skills-heading">
      <Shell>
        <SectionHeading number="05" kicker={copy.skills.kicker}>
          <span id="skills-heading">{copy.skills.heading}</span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {copy.skills.groups.map((group, index) => (
            <div key={group.heading}>
              <p className="text-xs font-medium tracking-wide text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 border-b border-border pb-4 font-display text-2xl tracking-tight text-ink">
                {group.heading}
              </h3>
              <ul className="mt-2">
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-border py-4">
                    <p className="text-base font-medium text-ink">{item.name}</p>
                    <p className="mt-1 text-sm leading-normal text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
