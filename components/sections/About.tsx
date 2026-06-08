"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const social = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "X", icon: Twitter },
];

export function About() {
  const { locale, siteContent } = useLocale();
  const aboutIntro = siteContent.aboutSection.introColumns;
  const skillTags = siteContent.aboutSection.skillTags;
  const careerEntries = siteContent.career;
  const educationEntries = siteContent.education;

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:h-[calc(100dvh-72px)] lg:px-10 lg:py-6">
        <h1 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          {locale === "fr"
            ? "Ingenierie solide. Produits utiles."
            : "Editorial code. Reliable systems."}
        </h1>
        <div className="mt-5 grid gap-6 lg:h-[calc(100%-96px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-7">
          <div className="space-y-6 lg:overflow-y-auto lg:pr-2">
            <div>
              <h2 className="text-lg font-black tracking-wide text-foreground">
                {locale === "fr" ? "Parcours professionnel" : "Career timeline"}
              </h2>
              <ol className="mt-3 space-y-4 border-l-2 border-border pl-4">
                {careerEntries.map((entry) => (
                  <li key={entry.id} className="relative">
                    <span className="absolute -left-[19px] top-1 h-2.5 w-2.5 border-2 border-warm/60 bg-background" />
                    <p className="text-xs font-black tracking-wider text-warm">
                      {entry.period}
                    </p>
                    <h3 className="mt-0.5 text-sm font-black text-foreground sm:text-base">
                      {entry.role}
                    </h3>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground sm:text-sm">
                      {entry.company}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {entry.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-lg font-black tracking-wide text-foreground">
                {locale === "fr" ? "Parcours academique" : "Education timeline"}
              </h2>
              <ol className="mt-3 space-y-4 border-l-2 border-border pl-4">
                {educationEntries.map((entry) => (
                  <li key={entry.id} className="relative">
                    <span className="absolute -left-[19px] top-1 h-2.5 w-2.5 border-2 border-warm/60 bg-background" />
                    <p className="text-xs font-black tracking-wider text-warm">
                      {entry.period}
                    </p>
                    <h3 className="mt-0.5 text-sm font-black text-foreground sm:text-base">
                      {entry.degree}
                    </h3>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground sm:text-sm">
                      {entry.school}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {entry.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="space-y-5 border border-border bg-card p-5 sm:p-6 lg:overflow-y-auto">
            <div className="space-y-3">
              {aboutIntro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-black tracking-wide text-foreground">
                {locale === "fr" ? "Competences & outils" : "Skills & tools"}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillTags.map((skill) => (
                  <Badge key={skill} variant="outline" className="rounded-none">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {social.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-border bg-card text-foreground/70 transition-colors hover:border-warm hover:text-warm"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
            <div>
              <Button
                className="rounded-none px-6 text-sm font-black tracking-wide"
                asChild
              >
                <Link href="/contact">
                  {locale === "fr" ? "Me contacter" : "Contact me"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
