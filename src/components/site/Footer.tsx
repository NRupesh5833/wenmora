import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import logoAsset from "@/assets/wenmora-logo.png.asset.json";
import { business, contactInfo, services, whatsappLink } from "@/config/site";
import { track } from "@/lib/track";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund & Cancellation", to: "/refund-policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={logoAsset.url}
            alt={`${business.name} — Design, Develop, Elevate`}
            width={976}
            height={728}
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="eyebrow mt-3">Design &bull; Develop &bull; Elevate</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Wenmora Technologies combines strategy, design, development and AI to create digital experiences for
            modern businesses.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {contactInfo.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-flex rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Explore">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Connect</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => track("email_click", { location: "footer" })}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                onClick={() => track("phone_click", { location: "footer" })}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "footer" })}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li className="pt-1 text-muted-foreground">
              {business.city}, {business.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
