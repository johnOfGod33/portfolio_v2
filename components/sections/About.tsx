import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aboutIntro, skillTags } from "@/lib/data/about";
import { careerEntries } from "@/lib/data/career";
import { educationEntries } from "@/lib/data/education";

const social = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "X", icon: Twitter },
];

export function About() {
  return (
    <section className="border-b border-gray-200 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[96rem] px-4 py-8 sm:px-6 lg:h-[calc(100dvh-72px)] lg:px-10 lg:py-6">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          About
        </p>
        <h1 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
          Editorial code. Reliable systems.
        </h1>
        <div className="mt-5 grid gap-6 lg:h-[calc(100%-96px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-7">
          <div className="space-y-6 lg:overflow-y-auto lg:pr-2">
            <div>
              <h2 className="text-lg font-black tracking-wide text-[#0a0a0a]">
                Career timeline
              </h2>
              <ol className="mt-3 space-y-4 border-l-2 border-gray-200 pl-4">
                {careerEntries.map((entry) => (
                  <li key={entry.id} className="relative">
                    <span className="absolute -left-[19px] top-1 h-2.5 w-2.5 border-2 border-sky-400 bg-white" />
                    <p className="text-xs font-black tracking-wider text-sky-500">
                      {entry.period}
                    </p>
                    <h3 className="mt-0.5 text-sm font-black text-[#0a0a0a] sm:text-base">
                      {entry.role}
                    </h3>
                    <p className="text-xs font-semibold tracking-wide text-gray-600 sm:text-sm">
                      {entry.company}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {entry.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-lg font-black tracking-wide text-[#0a0a0a]">
                Education timeline
              </h2>
              <ol className="mt-3 space-y-4 border-l-2 border-gray-200 pl-4">
                {educationEntries.map((entry) => (
                  <li key={entry.id} className="relative">
                    <span className="absolute -left-[19px] top-1 h-2.5 w-2.5 border-2 border-sky-400 bg-white" />
                    <p className="text-xs font-black tracking-wider text-sky-500">
                      {entry.period}
                    </p>
                    <h3 className="mt-0.5 text-sm font-black text-[#0a0a0a] sm:text-base">
                      {entry.degree}
                    </h3>
                    <p className="text-xs font-semibold tracking-wide text-gray-600 sm:text-sm">
                      {entry.school}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {entry.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="space-y-5 border border-gray-200 bg-white p-5 sm:p-6 lg:overflow-y-auto">
            <div className="space-y-3">
              {aboutIntro.columns.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-black tracking-wide text-[#0a0a0a]">
                Skills & tools
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
                  className="inline-flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-[#0a0a0a] transition-colors hover:border-sky-400 hover:text-sky-600"
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
                <Link href="/contact">Contact me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
