"use client";

import {
  ArrowRight,
  Check,
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
import { TypingAnimation } from "@/components/ui/typing-animation";
import { heroTyping } from "@/lib/data/site-content";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
} as const;

export function Hero() {
  const { siteContent } = useLocale();

  return (
    <section className="border-b border-gray-200 bg-[#f7f7f7]">
      <div className="mx-auto grid max-w-384 gap-10 px-4 py-10 sm:px-6 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-8">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 border border-gray-200 bg-white px-3 py-1 text-xs font-black tracking-widest text-[#0a0a0a] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {siteContent.hero.availabilityBadge}
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-gray-500">
              {siteContent.hero.name}
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.9]  text-[#0a0a0a] sm:text-6xl lg:text-8xl">
              <TypingAnimation
                typeSpeed={heroTyping.typeSpeed}
                delay={heroTyping.delay}
                startOnView={false}
                loop={heroTyping.loop}
                cursorStyle={heroTyping.cursorStyle}
              >
                {siteContent.hero.title}
              </TypingAnimation>
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-gray-600 sm:text-xl">
              {siteContent.hero.intro}
            </p>
          </div>
          <ul className="space-y-2 text-sm font-medium text-[#0a0a0a] sm:text-base">
            {siteContent.hero.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-[#0a0a0a]" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {siteContent.hero.socialLinks.map(({ href, label }) => {
              const Icon = socialIconMap[label as keyof typeof socialIconMap];
              if (!Icon) {
                return null;
              }

              return (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center border border-gray-200 bg-white text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden />
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              className="rounded-none px-8 text-sm font-black tracking-widest"
              asChild
            >
              <Link href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-none px-8 text-sm font-black tracking-widest"
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
          <div className="relative aspect-4/5 w-full border-4 border-[#0a0a0a] bg-white shadow-sm">
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
