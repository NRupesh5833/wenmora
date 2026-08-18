import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import heroImage from "@/assets/hero-devices.jpg";
import logoAsset from "@/assets/wenmora-logo.png.asset.json";
import { CTASection } from "@/components/site/CTASection";
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
  faqs,
  industries,
  problems,
  processSteps,
  projects,
  services,
  testimonials,
  trustStats,
  whyChooseUs,
} from "@/config/site";
import { projectImages } from "@/lib/project-images";
import { track } from "@/lib/track";

const title = `${business.name} — Website Design & Development for Businesses`;
const description =
  "We design and develop modern, high-performance business websites that build credibility, generate enquiries and turn visitors into customers.";

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

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <Reveal>
              <img
                src={logoAsset.url}
                alt={`${business.name} — Design, Develop, Elevate`}
                width={976}
                height={728}
                fetchPriority="high"
                className="mb-8 h-28 w-auto sm:h-36"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Design &bull; Develop &bull; Elevate
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
                Websites Built to <span className="text-gradient">Turn Visitors Into Customers.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                We design and develop modern, high-performance websites that help businesses build credibility,
                generate enquiries and grow online.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/contact" onClick={() => track("cta_click", { location: "hero", label: "Start Your Project" })}>
                    Start Your Project
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/work">View Our Work</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {["Conversion-focused design", "Mobile-first build", "SEO foundations included"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Check className="size-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <img
              src={heroImage}
              alt="Responsive website design shown on a desktop monitor, tablet and smartphone"
              width={1440}
              height={1088}
              fetchPriority="high"
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
            />
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-14 lg:py-16">
          <Reveal>
            <p className="text-center text-sm tracking-widest text-muted-foreground uppercase">
              Built for businesses that take their online presence seriously.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustStats.map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={i * 70} className="text-center">
                <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Figures shown as placeholders until verified business data is published.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="The problem"
          title="Your Website Should Do More Than Look Good."
          description="Most business websites quietly lose customers every day. Not because of one big flaw, but because of small friction that adds up between arriving and enquiring."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 4) * 60} className="surface-card p-6">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="surface-card mt-8 p-8 lg:p-10">
          <h3 className="text-xl font-semibold sm:text-2xl">How we solve it</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We start with your customers and the decision they need to make. Then we rebuild the structure, the
            messaging, the visual language and the technical foundation around a single outcome: making it obvious what
            you offer and effortless to get in touch. Fast pages, clean mobile layouts, visible calls to action and
            search-ready markup are the baseline, not an upsell.
          </p>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <SectionHeading
            eyebrow="Services"
            title="Everything You Need to Build a Strong Online Presence"
            description="From first wireframe to post-launch support, handled by one team with one standard."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 4) * 60} className="surface-card group flex flex-col p-6">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-background/60 text-primary">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Selected Work"
            description="Demo concepts built to show how we approach design, structure and conversion for different industries."
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
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 80} className="surface-card group overflow-hidden">
              <div className="relative overflow-hidden border-b border-border">
                <img
                  src={projectImages[p.image]}
                  alt={`${p.name} ${p.businessType.toLowerCase()} design preview`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {p.isDemo ? (
                  <span className="absolute top-4 left-4 rounded-full border border-border bg-background/85 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    Demo Concept
                  </span>
                ) : null}
              </div>
              <div className="p-6 lg:p-7">
                <p className="text-xs tracking-widest text-primary uppercase">{p.businessType}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li key={t} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="mt-6">
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

      {/* WHY CHOOSE US */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <SectionHeading
            eyebrow="Why us"
            title="Why Businesses Choose Us"
            description="A studio process built on clarity, craft and accountability."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal as="li" key={w.title} delay={(i % 3) * 60} className="surface-card flex gap-4 p-6">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background/60 text-primary">
                  <Icon name={w.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From Idea to Launch"
          description="Seven defined stages, so you always know what is happening and what comes next."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={(i % 4) * 60} className="surface-card p-6">
              <span className="font-display text-sm font-semibold text-primary">{s.step}</span>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 lg:py-28">
          <SectionHeading
            eyebrow="Industries"
            title="Built Around How Your Industry Sells"
            description="The structure of a website should follow how customers in your sector actually decide."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.name} delay={(i % 2) * 50}>
                <details className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium">
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Real client feedback will be published here. We don't display reviews we haven't received."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 70} className="surface-card p-7">
              <Quote className="size-6 text-primary/70" aria-hidden="true" />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 place-items-center rounded-full border border-border bg-surface-2 text-xs text-muted-foreground">
                  —
                </span>
                <div className="text-sm">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-muted-foreground">
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Businesses Ask Before Starting"
            description="Still unsure about something? Send a message on WhatsApp and get a straight answer."
          />
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
        </div>
      </section>

      {/* LEAD GENERATION */}
      <section id="consultation" className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Free consultation"
          title="Ready to Build a Better Website?"
          description="Tell us about your business and we'll help you identify the right website strategy."
        />
        <div className="mt-12">
          <LeadForm />
        </div>
      </section>

      <CTASection title="Let's Discuss Your Project" primaryLabel="Book a Call" />
    </>
  );
}
