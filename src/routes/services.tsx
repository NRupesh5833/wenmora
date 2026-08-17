import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { Icon } from "@/components/site/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { business, services } from "@/config/site";

const title = `Website Design & Development Services — ${business.name}`;
const description =
  "Website design, development, landing pages, e-commerce, redesign, SEO and maintenance services for businesses that want a stronger online presence.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything You Need to Build a Strong Online Presence"
        description="Design, development, optimization and support — delivered as one coherent engagement rather than disconnected tasks."
      />

      <section className="container-x py-16 lg:py-24">
        <ul className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} id={s.slug} delay={(i % 2) * 70} className="surface-card scroll-mt-28 p-7 lg:p-9">
              <span className="grid size-12 place-items-center rounded-xl border border-border bg-background/60 text-primary">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold sm:text-2xl">{s.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.description}</p>
              <ul className="mt-5 space-y-2.5">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="sm" className="mt-7">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection title="Not Sure Which Service You Need?" primaryLabel="Get a Free Consultation" />
    </>
  );
}
