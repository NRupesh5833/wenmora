import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { track } from "@/lib/track";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Ready to Build a Better Website?",
  text = "Tell us about your business and we'll help you identify the right website strategy.",
  primaryLabel = "Get a Free Consultation",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal className="hero-gradient surface-card relative overflow-hidden px-6 py-14 text-center sm:px-12 lg:py-20">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact" onClick={() => track("cta_click", { location: "cta_section", label: primaryLabel })}>
                {primaryLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "cta_section" })}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
