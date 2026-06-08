"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function Services() {
  const { locale, siteContent } = useLocale();
  const services = siteContent.services;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h1 className="max-w-5xl text-balance text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          {locale === "fr"
            ? "Des interventions pensees comme une equipe produit, avec un cadre clair."
            : "Engagements shaped like product teams, priced like partnerships."}
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-muted-foreground sm:text-xl">
          {locale === "fr"
            ? "Choisissez le format qui correspond a votre contexte: objectifs nets, livrables concrets et suivi regulier."
            : "Pick a lane below — each card is a focused collaboration with clear deliverables and weekly demos."}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
