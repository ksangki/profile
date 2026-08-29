import type { ReactNode } from "react";

export function SectionHeading({
  number,
  kicker,
  children,
}: {
  number: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <header className="mb-10 flex flex-col gap-4 border-b border-border pb-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="font-sans text-xs font-medium uppercase tracking-wide text-muted">
          {number}
        </span>
        <h2 className="font-display text-section leading-tight tracking-display text-ink">
          {children}
        </h2>
      </div>
      {kicker ? (
        <p className="font-sans text-sm text-muted sm:pb-2">{kicker}</p>
      ) : null}
    </header>
  );
}
