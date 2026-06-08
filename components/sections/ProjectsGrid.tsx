"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { useLocale } from "@/components/providers/LocaleProvider";
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
    <section className="border-b border-border bg-card">
      <SectionReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
            {siteContent.projectsSection.title}
          </h2>
          {!showLoadMore ? (
            <Link
              href="/projects"
              className="text-xs font-semibold tracking-wide text-muted-foreground underline-offset-4 hover:text-warm hover:underline"
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
              className="rounded-none border-border px-8 text-xs font-bold"
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
