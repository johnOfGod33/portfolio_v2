"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import type { CareerEntry } from "@/lib/types";

export function Career() {
  const { locale, siteContent } = useLocale();
  const careerEntries = siteContent.career as CareerEntry[];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
              {locale === "fr" ? "Ou je suis passe" : "Where I've been"}
            </h2>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground">
            {locale === "fr"
              ? "Un apercu de mes experiences recentes, chacune a renforce ma vision produit et la rigueur technique."
              : "A horizontal slice of recent roles — each stop sharpened product sense and platform discipline."}
          </p>
        </div>
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-full gap-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {careerEntries.map((entry, index) => (
              <article
                key={entry.id}
                className="min-w-[280px] shrink-0 border border-border bg-background p-5 transition-colors hover:border-foreground/25 md:min-w-0"
              >
                <p className="text-[10px] font-black tracking-widest text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-black leading-tight text-foreground">
                  {entry.role}
                </h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-muted-foreground">
                  {entry.company}
                </p>
                <p className="mt-2 text-xs font-semibold text-warm">
                  {entry.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
