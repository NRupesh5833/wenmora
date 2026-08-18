import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { business, processSteps } from "@/config/site";

const title = `Our Process — From Idea to Impact | ${business.name}`;
const description =
  "Discovery, strategy, design, development, testing, launch and support — a transparent seven-stage process for every website project.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="From Idea to Impact."
        description="You always know which stage the project is in, what is expected from you, and what happens next."
      />

      <section className="container-x py-16 lg:py-24">
        <ol className="relative border-l border-border pl-6 sm:pl-10">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={(i % 3) * 60} className="relative pb-10 last:pb-0">
              <span
                className="absolute top-1.5 -left-[1.65rem] size-3 rounded-full border-2 border-primary bg-background sm:-left-[2.65rem]"
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold text-primary">{s.step}</span>
              <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{s.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <CTASection title="Start With a Discovery Call" primaryLabel="Book a Call" />
    </>
  );
}
