import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { useCopy } from "@/lib/locale";
import { sendInquiry } from "@/lib/send-inquiry";

type FormState = {
  name: string;
  email: string;
  kind: string;
  message: string;
  website: string;
};

export function Contact() {
  const { copy } = useCopy();
  const contact = copy.contact;
  const empty: FormState = {
    name: "",
    email: "",
    kind: contact.inquiryKinds[0],
    message: "",
    website: "",
  };
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sendError, setSendError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, contact.errors.name),
        email: z.string().trim().email(contact.errors.email),
        kind: z.enum(contact.inquiryKinds),
        message: z.string().trim().min(16, contact.errors.message),
        website: z.string(),
      }),
    [contact],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof FormState]) {
          next[key as keyof FormState] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSendError(null);
    setStatus("sending");
    try {
      await sendInquiry({ data: parsed.data });
      setStatus("sent");
    } catch {
      setStatus("idle");
      setSendError(contact.errors.send);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <Shell>
        <SectionHeading number="07" kicker={contact.kicker}>
          <span id="contact-heading">{contact.heading}</span>
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-lede leading-snug text-ink">{contact.lede}</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{contact.note}</p>
            <dl className="mt-10 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">{contact.workLabel}</dt>
                <dd className="text-right text-ink">
                  {copy.site.role}
                  <br />
                  {copy.site.team}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">{contact.profileLabel}</dt>
                <dd>
                  <a
                    href="/profile_research.pdf"
                    download={contact.pdfName}
                    className="text-ink underline-offset-4 hover:underline"
                  >
                    {contact.pdfLabel}
                  </a>
                </dd>
              </div>
              {copy.links.map((link) => (
                <div key={link.href} className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted">{link.label}</dt>
                  <dd>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink underline-offset-4 hover:underline"
                    >
                      {link.label === "도서" || link.label === "Book"
                        ? "yes24"
                        : link.href.replace("https://", "")}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {status === "sent" ? (
            <div
              className="flex min-h-80 flex-col justify-between rounded-xl bg-surface px-6 py-8 shadow-[var(--shadow-border)] sm:px-8"
              role="status"
            >
              <div>
                <p className="text-xs font-medium tracking-wider text-muted">{contact.sentKicker}</p>
                <p className="mt-4 font-display text-3xl leading-snug text-ink">{contact.sentTitle}</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{contact.sentBody}</p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-10 w-fit"
                onClick={() => {
                  setForm(empty);
                  setStatus("idle");
                }}
              >
                {contact.writeAnother}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
            >
              <FieldRow label={contact.toLabel} htmlFor="contact-to">
                <p id="contact-to" className="py-3 text-base text-ink">
                  {copy.site.name}
                </p>
              </FieldRow>
              <FieldRow label={contact.fromLabel} htmlFor="contact-name" error={errors.name}>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder={contact.namePlaceholder}
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  className="rounded-none bg-transparent px-0 shadow-none focus-visible:shadow-none"
                />
              </FieldRow>
              <FieldRow label={contact.replyLabel} htmlFor="contact-email" error={errors.email}>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  className="rounded-none bg-transparent px-0 shadow-none focus-visible:shadow-none"
                />
              </FieldRow>
              <div className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-start sm:gap-6 sm:px-7">
                <p className="pt-2.5 text-xs font-medium tracking-wider text-muted whitespace-nowrap sm:w-28 sm:shrink-0">
                  {contact.subjectLabel}
                </p>
                <div className="flex min-w-0 flex-wrap gap-2" role="group" aria-label={contact.inquiryAria}>
                  {contact.inquiryKinds.map((kind) => {
                    const selected = form.kind === kind;
                    return (
                      <button
                        key={kind}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setForm((prev) => ({ ...prev, kind }))}
                        className={cn(
                          "h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] active:not-disabled:scale-[0.96]",
                          selected
                            ? "bg-ink text-paper"
                            : "bg-paper text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                        )}
                      >
                        {kind}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="px-5 py-4 sm:px-7">
                <Label htmlFor="contact-message" className="mb-3 block">
                  {contact.bodyLabel}
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder={contact.messagePlaceholder}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  className="min-h-40 rounded-md bg-paper"
                />
                {errors.message ? (
                  <p className="mt-2 text-sm text-sage" role="alert">
                    {errors.message}
                  </p>
                ) : null}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">website</label>
                  <input
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
                  />
                </div>
              </div>
              {sendError ? (
                <p className="px-5 pb-2 text-sm text-sage sm:px-7" role="alert">
                  {sendError}
                </p>
              ) : null}
              <div className="flex justify-end px-5 py-5 sm:px-7">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? contact.sending : contact.send}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Shell>
    </section>
  );
}

function FieldRow({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-border px-5 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
      <Label htmlFor={htmlFor} className="sm:w-28 sm:shrink-0">
        {label}
      </Label>
      <div className="min-w-0 flex-1">
        {children}
        {error ? (
          <p className="pb-2 text-sm text-sage" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
