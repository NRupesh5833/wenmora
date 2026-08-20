import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { track } from "@/lib/track";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location: "floating_button" })}
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/95 px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-elevated)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] sm:right-6 sm:bottom-6"
    >
      <span
        className="absolute inset-0 -z-10 rounded-full border border-primary/40 opacity-70 motion-safe:animate-ping [animation-duration:2.8s]"
        aria-hidden="true"
      />
      <MessageCircle className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
