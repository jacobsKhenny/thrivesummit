import { createFileRoute } from "@tanstack/react-router";
import { SpeakersPage } from "@/components/thrive/EventPages";
const title = "Thrive Summit UK 2026 Speakers | Meet the Voices Shaping the Future";
const description = "Meet the confirmed Thrive Summit UK 2026 speakers and read their supplied biographies.";
export const Route = createFileRoute("/speakers")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: SpeakersPage,
});
