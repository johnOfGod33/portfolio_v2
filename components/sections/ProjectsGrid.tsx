"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";

type ProjectsGridProps = {
  limit?: number;
  showLoadMore?: boolean;
};

export function ProjectsGrid({ limit, showLoadMore }: ProjectsGridProps) {
  const { siteContent } = useLocale();
  const projects = siteContent.projects;
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="border-b border-gray-200 bg-white">
      <SectionReveal className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.35em] text-sky-500">
              {siteContent.projectsSection.kicker}
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
              {siteContent.projectsSection.title}
            </h2>
          </div>
          {!showLoadMore ? (
            <Link
              href="/projects"
              className="text-xs font-bold tracking-wide text-gray-600 underline-offset-4 hover:text-sky-600 hover:underline"
            >
              {siteContent.projectsSection.viewAllLabel}
            </Link>
          ) : null}
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {showLoadMore ? (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="rounded-none border-gray-300 px-8 text-xs font-black"
              asChild
            >
              <Link href="/projects">
                {siteContent.projectsSection.loadMoreLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        ) : null}
      </SectionReveal>
    </section>
  );
}
