import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { business, projects } from "@/config/site";
import { projectImages } from "@/lib/project-images";

const title = `Selected Work — Website Design Portfolio | ${business.name}`;
const description =
  "Selected website design and development concepts across restaurant, real estate, IT and fitness businesses, each built around enquiries and conversions.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected Work"
        description="These are demo concepts created to demonstrate our design and development approach for different industries. They are clearly marked and are not presented as client projects."
      />

      <section className="container-x py-16 lg:py-24">
        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 70} className="surface-card group overflow-hidden">
              <div className="overflow-hidden border-b border-border">
                <img
                  src={projectImages[p.image]}
                  alt={`${p.name} ${p.businessType.toLowerCase()} design preview`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs tracking-widest text-primary uppercase">{p.businessType}</p>
                  {p.isDemo ? (
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Demo Concept
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li key={t} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="mt-6">
                  <Link to="/work/$slug" params={{ slug: p.slug }}>
                    View Project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection title="Want Something Like This for Your Business?" primaryLabel="Start Your Project" />
    </>
  );
}
