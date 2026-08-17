import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/config/site";
import { privacySections } from "@/config/legal";

const title = `Privacy Policy — ${business.name}`;
const description = "How we collect, use and protect information submitted through our website enquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Privacy Policy" intro="How we collect, use and protect the information you share with us." sections={privacySections} />
  ),
});
