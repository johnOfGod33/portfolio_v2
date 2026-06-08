"use client";

import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Marquee } from "../ui/marquee";

export function StackServices() {
  const { siteContent } = useLocale();
  const services = siteContent.services;
  const skillTags = siteContent.aboutSection.skillTags;

  return (
    <section className="border-b border-border bg-card">
      <SectionReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          {siteContent.servicesSection.title}
        </h2>
        <Marquee className="[--duration:42s] [--gap:1.25rem] p-0">
          <div className="mt-8 flex flex-wrap gap-2">
            {skillTags.map((skill) => (
              <Badge key={skill} variant="outline" className="rounded-none">
                {skill}
              </Badge>
            ))}
          </div>
        </Marquee>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" className="rounded-none" asChild>
            <Link href="/services">
              {siteContent.servicesSection.viewAllLabel}
            </Link>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
