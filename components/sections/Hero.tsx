"use client";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ParallaxY } from "@/components/ui/parallax-y";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
} as const;

export function Hero() {
  const { siteContent } = useLocale();

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wider text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteContent.hero.availabilityBadge}
          </span>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.12em] text-muted-foreground">
              {siteContent.hero.name}
            </p>
            <h1
              className="text-balance text-4xl font-normal italic leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {siteContent.hero.title}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteContent.hero.intro}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {siteContent.hero.socialLinks.map(({ href, label }) => {
              const Icon = socialIconMap[label as keyof typeof socialIconMap];
              if (!Icon) return null;

              return (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-border bg-card text-foreground/60 transition-colors duration-200 hover:border-warm hover:text-warm"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden />
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              className="rounded-none px-7 text-sm font-semibold tracking-wide"
              asChild
            >
              <Link href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-none px-7 text-sm font-semibold tracking-wide"
              asChild
            >
              <Link href={siteContent.hero.secondaryCta.href} target="_blank">
                {siteContent.hero.secondaryCta.label}
                <Download className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <ParallaxY className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end">
          <div className="relative aspect-4/5 w-full border border-border bg-card">
            <Image
              src={siteContent.hero.portraitImage}
              alt="Portrait"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </ParallaxY>
      </div>
    </section>
  );
}
