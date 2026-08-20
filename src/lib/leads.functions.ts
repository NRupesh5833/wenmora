import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadInput = z.object({
  name: z.string().trim().min(2).max(100),
  businessName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(20),
  businessType: z.string().trim().max(80).optional().or(z.literal("")),
  websiteUrl: z.string().trim().max(255).optional().or(z.literal("")),
  need: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  details: z.string().trim().max(1500).optional().or(z.literal("")),
  preferredContact: z.string().trim().max(40).optional().or(z.literal("")),
  /** Honeypot — must stay empty. */
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadInput.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Silent success for bots that fill the honeypot.
    if (data.company_website) return { ok: true as const };

    // Lightweight rate limit: max 3 submissions per email in 10 minutes.
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", since);
    if ((count ?? 0) >= 3) {
      throw new Error("Too many requests. Please try again in a few minutes.");
    }

    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      business_name: data.businessName || null,
      email: data.email,
      phone: data.phone,
      business_type: data.businessType || null,
      website_url: data.websiteUrl || null,
      need: data.need || null,
      budget: data.budget || null,
      details: data.details || null,
      preferred_contact: data.preferredContact || null,
      source: "website",
    });

    if (error) {
      console.error("lead insert failed", error.message);
      throw new Error("Could not save your request");
    }

    return { ok: true as const };
  });
