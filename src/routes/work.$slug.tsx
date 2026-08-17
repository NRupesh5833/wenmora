import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { business, projects } from "@/config/site";
import { projectImages } from "@/lib/project-images";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.businessType} Case Study | ${business.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: p.description },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <div className="container-x py-28 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This case study doesn&apos;t exist or has been moved.</p>
      <Button asChild className="mt-6">
        <Link to="/work">Back to work</Link>
      </Button>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const cs = project.caseStudy;
  const sections = [
    { label: "Challenge", text: cs.challenge },
    { label: "Strategy", text: cs.strategy },
    { label: "Design", text: cs.design },
    { label: "Development", text: cs.development },
  ];

  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-x py-14 lg:py-20">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden="true" />
            All work
          </Link>
          <Reveal className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs tracking-widest text-primary uppercase">{project.businessType}</p>
              {project.isDemo ? (
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  Demo Concept — not a client project
                </span>
              ) : null}
            </div>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-14 lg:py-20">
        <Reveal>
          <img
            src={projectImages[project.image]}
            alt={`${project.name} website design preview`}
            width={1200}
            height={900}
            className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-elevated)]"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.label} delay={(i % 2) * 70} className="surface-card p-7">
              <h2 className="text-sm tracking-widest text-primary uppercase">{s.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="surface-card mt-4 p-7">
          <h2 className="text-sm tracking-widest text-primary uppercase">Outcome</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{cs.outcome}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            Performance metrics are published only when real analytics from a live project are available.
          </p>
        </Reveal>
      </section>

      <CTASection title="Planning a Similar Website?" primaryLabel="Discuss Your Website" />
    </>
  );
}
