import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { business, contactInfo, whatsappLink } from "@/config/site";
import { track } from "@/lib/track";

const title = `Contact — Let's Create What's Next | ${business.name}`;
const description =
  "Contact our website design and development team by form, email, phone or WhatsApp to discuss your business website project.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          description: business.description,
          email: contactInfo.email,
          telephone: contactInfo.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address,
            addressLocality: business.city,
            addressRegion: business.region,
            addressCountry: business.country,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Create What's Next."
        description="Share a few details about your business and we'll respond with the right next step — a call, a quote, or a quick strategy suggestion."
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr] lg:py-24">
        <Reveal className="space-y-4">
          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold">Direct contact</h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  onClick={() => track("email_click", { location: "contact_page" })}
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  onClick={() => track("phone_click", { location: "contact_page" })}
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { location: "contact_page" })}
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {business.address}
              </li>
            </ul>
          </div>

          <div className="surface-card p-6">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Business hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold">Follow us</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {contactInfo.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card overflow-hidden">
            {contactInfo.mapsEmbedUrl ? (
              <iframe
                src={contactInfo.mapsEmbedUrl}
                title={`Map showing the location of ${business.name}`}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-40 place-items-center p-6 text-center text-sm text-muted-foreground">
                Add a Google Maps embed URL in the site configuration to display your location here.
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="sr-only">Consultation request form</h2>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
