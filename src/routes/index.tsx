import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { COPY } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: COPY.ko.meta.title },
      { name: "description", content: COPY.ko.meta.description },
    ],
  }),
  component: KoreanHome,
});

function KoreanHome() {
  return <HomePage locale="ko" />;
}
