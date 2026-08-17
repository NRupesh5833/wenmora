import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { budgetRanges, businessTypes, projectNeeds } from "@/config/site";
import { track } from "@/lib/track";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  businessName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  businessType: z.string().trim().max(80).optional().or(z.literal("")),
  websiteUrl: z.string().trim().max(255).optional().or(z.literal("")),
  need: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  details: z.string().trim().max(1500).optional().or(z.literal("")),
});

const selectClass =
  "h-11 w-full rounded-lg border border-input bg-surface px-3 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none";

export function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = leadSchema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    track("contact_form_submit", { form: "lead" });
    track("consultation_request", { form: "lead" });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="surface-card p-8 text-center sm:p-12" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold">Thank you — your request has been received.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          We&apos;ll review your requirements and get back to you with next steps and a suggested website strategy. If
          it&apos;s urgent, message us on WhatsApp and we&apos;ll respond faster.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors["name"]}>
          <Input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Your full name" />
        </Field>
        <Field id="businessName" label="Business name" error={errors["businessName"]}>
          <Input id="businessName" name="businessName" maxLength={120} placeholder="Your business" />
        </Field>
        <Field id="email" label="Email" error={errors["email"]}>
          <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@business.com" />
        </Field>
        <Field id="phone" label="Phone" error={errors["phone"]}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+91 00000 00000" />
        </Field>
        <Field id="businessType" label="Business type" error={errors["businessType"]}>
          <select id="businessType" name="businessType" className={selectClass} defaultValue="">
            <option value="">Select a category</option>
            {businessTypes.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field id="websiteUrl" label="Website URL (optional)" error={errors["websiteUrl"]}>
          <Input id="websiteUrl" name="websiteUrl" inputMode="url" placeholder="https://" maxLength={255} />
        </Field>
        <Field id="need" label="What do you need?" error={errors["need"]}>
          <select id="need" name="need" className={selectClass} defaultValue="">
            <option value="">Select an option</option>
            {projectNeeds.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Budget range" error={errors["budget"]}>
          <select id="budget" name="budget" className={selectClass} defaultValue="">
            <option value="">Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field id="details" label="Project details" error={errors["details"]} className="sm:col-span-2">
          <Textarea
            id="details"
            name="details"
            rows={5}
            maxLength={1500}
            placeholder="Tell us about your business, your customers and what the website needs to achieve."
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Request a Free Consultation
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
