const CONTACT_TO = "ksangki@gmail.com";

export type InquiryInput = {
  name: string;
  email: string;
  kind: string;
  message: string;
  website?: string;
};

export async function sendInquiry(data: InquiryInput) {
  if (data.website?.trim()) {
    return { ok: true as const };
  }

  const body = new FormData();
  body.set("name", data.name);
  body.set("email", data.email);
  body.set("kind", data.kind);
  body.set("message", data.message);
  body.set("_replyto", data.email);
  body.set("_subject", `홈페이지 문의 · ${data.kind} · ${data.name}`);
  body.set("_template", "table");
  body.set("_captcha", "false");
  body.set("_honey", "");

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
    signal: AbortSignal.timeout(15000),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  const ok = payload?.success === true || payload?.success === "true";
  const activating = (payload?.message ?? "").toLowerCase().includes("activation");

  if (!ok && !activating) {
    throw new Error(payload?.message || "Mail could not be sent.");
  }

  return { ok: true as const };
}
