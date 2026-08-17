type TrackableEvent =
  | "cta_click"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "contact_form_submit"
  | "consultation_request";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires an analytics event if GA / GTM is configured. Safe no-op otherwise. */
export function track(event: TrackableEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event, ...params });
  window.gtag?.("event", event, params);
}
