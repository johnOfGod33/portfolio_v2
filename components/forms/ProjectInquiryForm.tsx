"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/button";

type FormState = {
  firstName: string;
  lastName: string;
  projectDetails: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  projectDetails: "",
};

export function ProjectInquiryForm() {
  const { locale, siteContent } = useLocale();
  const [formState, setFormState] = useState<FormState>(initialState);
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    const subject = encodeURIComponent(
      locale === "fr"
        ? `Nouvelle demande: ${formState.firstName} ${formState.lastName}`
        : `New inquiry: ${formState.firstName} ${formState.lastName}`,
    );
    const body = encodeURIComponent(
      locale === "fr"
        ? `Nom: ${formState.firstName}\nPrenom: ${formState.lastName}\n\nDetails du projet:\n${formState.projectDetails}`
        : `First name: ${formState.firstName}\nLast name: ${formState.lastName}\n\nProject details:\n${formState.projectDetails}`,
    );
    window.location.href = `mailto:${siteContent.contactSection.form.recipientEmail}?subject=${subject}&body=${body}`;

    setMessage(siteContent.contactSection.form.successMessage);
    setFormState(initialState);
  }

  useEffect(() => {
    if (!message) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setMessage(null);
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              {locale === "fr" ? "Nom" : "First name"}
            </span>
            <input
              required
              value={formState.firstName}
              onChange={(event) =>
                setFormState((current) => ({ ...current, firstName: event.target.value }))
              }
              className="w-full border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors focus:border-warm"
              autoComplete="given-name"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              {locale === "fr" ? "Prenom" : "Last name"}
            </span>
            <input
              required
              value={formState.lastName}
              onChange={(event) =>
                setFormState((current) => ({ ...current, lastName: event.target.value }))
              }
              className="w-full border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors focus:border-warm"
              autoComplete="family-name"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            {locale === "fr" ? "Details du projet" : "Project details"}
          </span>
          <textarea
            required
            value={formState.projectDetails}
            onChange={(event) =>
              setFormState((current) => ({ ...current, projectDetails: event.target.value }))
            }
            rows={4}
            className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors focus:border-warm"
          />
        </label>

        <Button
          type="submit"
          variant="secondary"
          className="rounded-none px-8 text-xs font-black uppercase tracking-[0.2em]"
        >
          {siteContent.contactSection.form.submitLabel}
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>
      </form>

      {message ? (
        <div className="fixed bottom-6 right-6 z-50 border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm">
          {message}
        </div>
      ) : null}
    </>
  );
}
