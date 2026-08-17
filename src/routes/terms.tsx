import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/config/site";
import { termsSections } from "@/config/legal";

const title = `Terms & Conditions — ${business.name}`;
const description = "The terms that govern our website design and development services and engagements.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" intro="The terms that govern our website design and development engagements." sections={termsSections} />
  ),
});
