import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />
      <section className="container-x py-16 lg:py-24">
        <div className="max-w-3xl space-y-8">
          <p className="rounded-xl border border-border bg-surface/50 p-4 text-sm text-muted-foreground">
            This page is a configurable template. Review and adapt the wording with a legal advisor so it reflects your
            business&apos;s actual policies and local requirements.
          </p>
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={(i % 3) * 50}>
              <h2 className="text-xl font-semibold sm:text-2xl">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
