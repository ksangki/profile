import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-md border-0 bg-surface px-4 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-border)] placeholder:text-muted transition-[box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
