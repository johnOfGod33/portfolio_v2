"use client";

import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutPreview() {
  const { siteContent } = useLocale();
  const aboutIntro = siteContent.aboutSection.introColumns;

  return (
    <section className="border-b border-gray-200 bg-[#f7f7f7]">
      <SectionReveal className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          {siteContent.aboutSection.kicker}
        </p>
        <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
          {siteContent.aboutSection.title}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {aboutIntro.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-gray-600 sm:text-lg"
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
