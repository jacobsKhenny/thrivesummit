import { createFileRoute } from "@tanstack/react-router";
import { PartnerWithUsPage } from "@/components/thrive/EventPages";

const title = "Partner With Us | Thrive Summit UK 2026";
const description = "Explore partnership and volunteer opportunities with Thrive Summit UK 2026.";

export const Route = createFileRoute("/partner-with-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnerWithUsPage,
});