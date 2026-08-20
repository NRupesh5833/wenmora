import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import logoAsset from "@/assets/wenmora-logo.png.asset.json";
import { CTASection } from "@/components/site/CTASection";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Icon } from "@/components/site/Icon";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  business,
  capabilities,
  faqs,
  industries,
  pillars,
  principles,
  problems,
  processSteps,
  projects,
  services,
  testimonials,
  whyChooseUs,
} from "@/config/site";
import { projectImages } from "@/lib/project-images";
import { track } from "@/lib/track";

const title = "Wenmora Technologies — Digital Experiences, Websites & AI Solutions";
const description =
  "Wenmora Technologies combines strategy, design, development and AI to create high-performance digital experiences that help modern businesses stand out and grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-primary">{num}</span>
      <span className="hairline w-8" aria-hidden="true" />
      {label}
    </p>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <Reveal>
              <img
                src={logoAsset.url}
                alt="Wenmora Technologies — Design, Develop, Elevate"
                width={976}
                height={728}
                fetchPriority="high"
                className="mb-8 h-24 w-auto sm:h-32"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Wenmora Technologies
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.1rem] leading-[1.04] font-semibold sm:text-5xl lg:text-[3.85rem]">
                We build digital experiences that{" "}
                <span className="text-gradient">move businesses forward.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Wenmora Technologies combines strategy, design, development and AI to create high-performance
                digital experiences that help modern businesses stand out, connect with customers and grow.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    to="/contact"
                    onClick={() => track("cta_click", { location: "hero", label: "Start Your Project" })}
                  >
                    Start Your Project
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/work">Explore Our Work</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="eyebrow mt-10">Design &bull; Develop &bull; Elevate</p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-10 lg:py-12">
          <Reveal>
            <p className="eyebrow text-center">Design &bull; Technology &bull; Intelligence &bull; Growth</p>
          </Reveal>
          <ul className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal
                as="li"
                key={c}
                delay={i * 60}
                className="bg-background px-5 py-6 text-center font-display text-sm font-semibold sm:text-base"
              >
                {c}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <SectionLabel num="01" label="The problem" />
        </Reveal>
        <SectionHeading
          className="mt-5"
          title="Your website should do more than exist."
          description="A modern website shouldn't simply display information. It should communicate your value, build trust, guide visitors and turn attention into action."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 4) * 50} className="group bg-background p-6 transition-colors hover:bg-surface/60">
              <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* POSITIONING */}
      <section className="hero-gradient relative overflow-hidden border-y border-border">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-x relative py-20 text-center lg:py-32">
          <Reveal>
            <p className="eyebrow">We don't just build websites.</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl leading-[1.06] font-semibold sm:text-5xl lg:text-6xl">
              We build <span className="text-gradient">digital experiences.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From strategy and brand expression to AI-powered visuals, intelligent interfaces and
              conversion-focused development, we combine creativity and technology to create digital experiences
              built around real business goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <SectionLabel num="02" label="Capability" />
        </Reveal>
        <SectionHeading
          className="mt-5"
          title="Beyond website design & development."
          description="Four connected disciplines that turn a website into a business asset."
        />
        <div className="relative mt-12">
          <span
            className="hairline absolute top-14 right-0 left-0 hidden lg:block"
            aria-hidden="true"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.num} delay={i * 70} className="edge-card relative p-6">
                <span className="relative z-10 grid size-11 place-items-center rounded-xl border border-border bg-background text-primary">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <p className="eyebrow mt-5 text-primary">{p.num} / {p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.items.map((it) => (
                    <li key={it} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <SectionLabel num="03" label="Services" />
          </Reveal>
          <SectionHeading
            className="mt-5"
            title="Design, technology and intelligence under one roof."
            description="From first wireframe to post-launch growth, handled by one team with one standard."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 4) * 60} className="edge-card group flex flex-col overflow-hidden p-6">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-background/60 text-primary transition-colors group-hover:border-primary/50">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span className="mt-5 flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map((n) => (
                    <span
                      key={n}
                      className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/60"
                      style={{ transitionDelay: `${n * 60}ms` }}
                    />
                  ))}
                </span>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Explore
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO — editorial */}
      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <SectionLabel num="04" label="Selected work" />
        </Reveal>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Selected digital experiences."
            description="A selection of concepts, websites and digital experiences designed around clarity, performance and business goals."
          />
          <Reveal delay={80}>
            <Button asChild variant="outline">
              <Link to="/work">
                View all work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <ul className="mt-14 space-y-16 lg:space-y-24">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              key={p.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="group relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)]">
                  <div className="flex items-center gap-1.5 border-b border-border bg-surface-2/70 px-4 py-2.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-foreground/20" />
                    <span className="size-2 rounded-full bg-foreground/20" />
                    <span className="size-2 rounded-full bg-foreground/20" />
                    <span className="ml-3 h-4 flex-1 rounded-full bg-background/60" />
                  </div>
                  <img
                    src={projectImages[p.image]}
                    alt={`${p.name} ${p.businessType.toLowerCase()} design preview`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div>
                <p className="eyebrow flex items-center gap-3 text-primary">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="hairline w-8" aria-hidden="true" />
                  {p.businessType}
                  {p.isDemo ? <span className="text-muted-foreground">/ Concept</span> : null}
                </p>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{p.name}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.description}
                </p>
                <dl className="mt-6 space-y-3 border-l border-border pl-5 text-sm">
                  <div>
                    <dt className="eyebrow">Challenge</dt>
                    <dd className="mt-1 text-muted-foreground">{p.caseStudy.challenge}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Approach</dt>
                    <dd className="mt-1 text-muted-foreground">{p.caseStudy.strategy}</dd>
                  </div>
                </dl>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li key={t} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="mt-7">
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

      {/* HOW WE THINK */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <SectionLabel num="05" label="How we think" />
          </Reveal>
          <SectionHeading
            className="mt-5"
            title="Design with purpose. Technology with intelligence."
          />
          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.num} delay={i * 70} className="edge-card p-8">
                <span className="font-display text-5xl font-semibold text-primary/25">{p.num}</span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <p className="max-w-2xl text-base text-muted-foreground">
              The result isn't just another website. It's a digital asset built for the business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY WENMORA */}
      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <SectionLabel num="06" label="Why us" />
        </Reveal>
        <SectionHeading className="mt-5" title="Why Wenmora?" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 60} className="flex gap-4 bg-background p-7 transition-colors hover:bg-surface/60">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-primary">
                <Icon name={w.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <SectionLabel num="07" label="Process" />
          </Reveal>
          <SectionHeading className="mt-5" title="From idea to impact." description="Seven defined stages, so you always know what is happening and what comes next." />
          <ol className="relative mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {processSteps.map((s, i) => (
              <Reveal
                as="li"
                key={s.step}
                delay={(i % 4) * 50}
                className="group grid gap-2 bg-background p-6 transition-colors hover:bg-surface/60 sm:grid-cols-[auto_14rem_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="eyebrow text-primary">{s.step}</span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <SectionLabel num="08" label="Industries" />
        </Reveal>
        <SectionHeading
          className="mt-5"
          title="Built for ambitious businesses."
          description="The structure of a digital experience should follow how customers in your sector actually decide."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.name} delay={(i % 2) * 50}>
              <details className="edge-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-medium">
                  {ind.name}
                  <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
              </details>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <SectionLabel num="09" label="Trust" />
          </Reveal>
          <SectionHeading
            className="mt-5"
            title="Trust is built through the work."
            description="Every project is an opportunity to create something useful, thoughtful and built around a real business need. We don't publish reviews we haven't received."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 70} className="edge-card p-7">
                <Quote className="size-5 text-primary/70" aria-hidden="true" />
                <p className="mt-4 font-display text-xl font-semibold">{s.value}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <Button asChild variant="outline">
              <Link to="/work">See the work</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <Reveal>
            <SectionLabel num="10" label="FAQ" />
          </Reveal>
          <SectionHeading
            className="mt-5"
            title="Questions businesses ask before starting."
            description="Still unsure about something? Send a message on WhatsApp and get a straight answer."
          />
        </div>
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* LEAD GENERATION */}
      <section id="consultation" className="border-t border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <SectionLabel num="11" label="Start a project" />
          </Reveal>
          <SectionHeading
            className="mt-5"
            title="Have an idea? Let's build it."
            description={`Tell us about your business and we'll help you identify the right digital strategy. ${business.tagline}`}
          />
          <div className="mt-12">
            <LeadForm />
          </div>
        </div>
      </section>

      <CTASection title="Let's create what's next." primaryLabel="Start a Conversation" />
    </>
  );
}
