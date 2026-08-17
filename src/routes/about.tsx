import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, processSteps } from "@/config/site";

const title = `About Us — Website Design Studio | ${business.name}`;
const description =
  "We are a website design and development studio helping businesses build modern, credible websites that generate enquiries and support growth.";

const values = [
  { title: "Quality", text: "Considered design and clean, maintainable code on every project." },
  { title: "Transparency", text: "Clear scope, clear timelines and honest answers, including when something isn't needed." },
  { title: "Creativity", text: "Design that reflects the business, not a template someone else is already using." },
  { title: "Performance", text: "Fast pages and lean builds, because speed is part of the experience." },
  { title: "Customer satisfaction", text: "Success is measured by what the website does for the business." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Studio Built Around Business Outcomes"
        description="We design and develop websites for businesses that need their online presence to actually work — not just exist."
      />

      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="surface-card p-8">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {business.name} is a website design and development practice working with small businesses, startups and
              established local brands. We handle strategy, design, development and post-launch support so business
              owners have one accountable partner instead of several disconnected vendors.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Team details, founding year and project history are shown as placeholders in this configuration and will
              be published here once confirmed.
            </p>
          </Reveal>
          <Reveal delay={80} className="surface-card p-8">
            <h2 className="text-2xl font-semibold">What We Believe</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              A website should not only look beautiful — it should help a business grow.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Beautiful design earns attention. Structure, speed, clarity and a visible next step are what turn that
              attention into enquiries, bookings and customers. We treat both as non-negotiable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-16 lg:py-24">
          <SectionHeading eyebrow="Approach" title="Our Approach" description="Strategy → Design → Development → Optimization → Launch → Support" />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.step} delay={(i % 4) * 50} className="surface-card p-5">
                <span className="font-display text-xs font-semibold text-primary">{s.step}</span>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="Values" title="Our Values" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 3) * 60} className="surface-card p-6">
              <h3 className="text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection title="Let's Discuss Your Project" primaryLabel="Get a Free Consultation" />
    </>
  );
}
