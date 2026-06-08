"use client";

import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutPreview() {
  const { siteContent } = useLocale();
  const aboutIntro = siteContent.aboutSection.introColumns;

  return (
    <section className="border-b border-border bg-background">
      <SectionReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          {siteContent.aboutSection.title}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {aboutIntro.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Button variant="outline" className="rounded-none" asChild>
            <Link href="/about">{siteContent.aboutSection.readMoreLabel}</Link>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
