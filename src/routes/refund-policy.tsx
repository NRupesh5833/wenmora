import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/config/site";
import { refundSections } from "@/config/legal";

const title = `Refund & Cancellation Policy — ${business.name}`;
const description = "Our policy on project deposits, cancellations, maintenance plans and refunds.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Refund & Cancellation Policy" intro="How deposits, cancellations and refunds are handled on our projects." sections={refundSections} />
  ),
});
