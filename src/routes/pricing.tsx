import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { business, faqs, pricingPlans } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { track } from "@/lib/track";

const title = `Website Design Pricing & Packages — ${business.name}`;
const description =
  "Transparent website design and development packages for small businesses, growing companies and businesses needing custom functionality.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Packages Built Around What Your Business Needs"
        description="Every engagement is quoted after a short discovery conversation. These packages show what each level of engagement typically includes."
      />

      <section className="container-x py-16 lg:py-24">
        <ul className="grid items-start gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.name}
              delay={i * 80}
              className={cn(
                "surface-card relative flex h-full flex-col p-7 lg:p-8",
                plan.featured && "border-primary/50 shadow-[var(--shadow-glow)]",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              ) : null}
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.subtitle}</p>
              <p className="mt-6 font-display text-3xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
              <ul className="mt-7 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                <Link to="/contact" onClick={() => track("cta_click", { location: "pricing", label: plan.name })}>
                  {plan.cta}
                </Link>
              </Button>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices shown as placeholders and are configurable. Final pricing depends on pages, functionality and
          integrations.
        </p>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="container-x py-16 lg:py-24">
          <h2 className="text-3xl font-semibold sm:text-4xl">Pricing FAQ</h2>
          <Reveal className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`p-faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTASection title="Get an Exact Quote for Your Project" primaryLabel="Get a Quote" />
    </>
  );
}
