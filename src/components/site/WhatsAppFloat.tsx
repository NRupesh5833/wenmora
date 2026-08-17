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
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/95 px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-elevated)] backdrop-blur transition-colors hover:border-primary/60 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5 text-primary" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
