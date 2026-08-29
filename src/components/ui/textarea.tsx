import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full resize-y rounded-lg border-0 bg-surface px-4 py-3 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-border)] placeholder:text-muted transition-[box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
