import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="hero-gradient relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="container-x relative py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
