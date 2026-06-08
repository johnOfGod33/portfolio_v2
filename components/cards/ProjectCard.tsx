import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  if (!project.display) return null;
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border bg-card transition-colors duration-200 hover:border-foreground/25">
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image}
          alt=""
          aria-hidden
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="pointer-events-none scale-110 object-cover object-center blur-2xl"
        />
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-10 object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <CardHeader className="gap-4 p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-none border-border bg-transparent px-2 py-0 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="line-clamp-2 text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-warm">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 px-5 pb-5 pt-0">
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto items-center justify-between gap-3 border-t border-border bg-muted/40 p-5">
        {project.liveUrl && (
          <Button
            variant="outline"
            size="sm"
            className="rounded-none border-border px-4 font-bold uppercase tracking-[0.08em] hover:border-foreground/30"
            asChild
          >
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              Live
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-border px-4 font-bold uppercase tracking-[0.08em] hover:border-foreground/30"
              asChild
            >
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-none border-border bg-card text-foreground/60 transition-colors hover:border-foreground/30 hover:text-warm"
                asChild
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
