const ACCESS_KEY = "10b308fa-a850-4a38-9a7c-bcb92b9d9f5b";

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

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: data.name,
      email: data.email,
      kind: data.kind,
      message: data.message,
      subject: `홈페이지 문의 · ${data.kind} · ${data.name}`,
      from_name: data.name,
      replyto: data.email,
    }),
    signal: AbortSignal.timeout(15000),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!payload?.success) {
    throw new Error(payload?.message || "Mail could not be sent.");
  }

  return { ok: true as const };
}
