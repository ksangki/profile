import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { COPY } from "@/lib/portfolio";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: COPY.en.meta.title },
      { name: "description", content: COPY.en.meta.description },
    ],
  }),
  component: EnglishHome,
});

function EnglishHome() {
  return <HomePage locale="en" />;
}
