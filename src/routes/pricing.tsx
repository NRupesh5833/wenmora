import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { addOns, business, faqs, maintenancePlans, pricingPlans } from "@/config/site";
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
        <div className="mx-auto mt-10 max-w-3xl space-y-2 text-center text-xs leading-relaxed text-muted-foreground">
          <p>
            All packages are starting prices. Final pricing depends on project scope, content, integrations,
            functionality and design requirements.
          </p>
          <p>
            Domain, hosting, paid APIs, premium services, third-party subscriptions and external platform charges are
            billed separately unless specifically included in the proposal.
          </p>
          <p>Prices shown are exclusive of applicable taxes.</p>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="container-x py-16 lg:py-24">
          <p className="eyebrow">Add-ons</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Optional services.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal
                as="li"
                key={a.name}
                delay={(i % 3) * 60}
                className="edge-card flex items-center justify-between gap-4 p-5"
              >
                <span className="text-sm">{a.name}</span>
                <span className="shrink-0 text-sm font-medium text-primary">{a.price}</span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            More complex requirements are scoped under custom pricing after a discovery conversation.
          </p>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <p className="eyebrow">Maintenance</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Keep your website evolving.</h2>
        <ul className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {maintenancePlans.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 80} className="surface-card flex h-full flex-col p-7">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-5 font-display text-2xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
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
