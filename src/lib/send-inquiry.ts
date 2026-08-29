import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const CONTACT_TO = "ksangki@gmail.com";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  kind: z.string().trim().min(1).max(40),
  message: z.string().trim().min(16).max(4000),
  website: z.string().max(200).optional(),
});

export const sendInquiry = createServerFn({ method: "POST" })
  .validator(inquirySchema)
  .handler(async ({ data }) => {
    if (data.website?.trim()) {
      return { ok: true as const };
    }

    const request = getRequest();
    const origin =
      request.headers.get("origin") ||
      request.headers.get("referer")?.replace(/\/$/, "") ||
      "https://profile-eight-alpha-72.vercel.app";

    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        kind: data.kind,
        message: data.message,
        _replyto: data.email,
        _subject: `홈페이지 문의 · ${data.kind} · ${data.name}`,
        _template: "table",
        _captcha: "false",
      }),
      signal: AbortSignal.timeout(12000),
    });

    const payload = (await response.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    const ok = payload?.success === true || payload?.success === "true";
    const activating = payload?.message?.toLowerCase().includes("activation");

    if (!ok && !activating) {
      throw new Error(payload?.message || "Mail could not be sent.");
    }

    return { ok: true as const };
  });
