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
            postalCode: business.postalCode,
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
        title="Let's Build What's Next."
        description="Have a business idea, an outdated website, or a digital experience that needs to perform better? Tell us what you're looking to build."
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
            </ul>
          </div>

          <div className="surface-card p-6">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Visit Wenmora
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
              {business.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <a
              href={contactInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Get directions →
            </a>
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

          {contactInfo.mapsEmbedUrl ? (
            <div className="surface-card overflow-hidden">
              <iframe
                src={contactInfo.mapsEmbedUrl}
                title={`Map showing the location of ${business.name}`}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={80}>
          <h2 className="sr-only">Consultation request form</h2>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
