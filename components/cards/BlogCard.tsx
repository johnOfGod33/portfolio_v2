import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/types";

type BlogCardProps = {
  post: BlogPost;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function BlogCard({ post }: BlogCardProps) {
  const href = post.href ?? (post.slug ? `/blog/${post.slug}` : "/blog");
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block"
    >
      <article className="group grid grid-cols-[160px_1fr] items-center gap-5 border-b border-border py-4 transition-colors last:border-b-0 hover:border-foreground/20 sm:grid-cols-[240px_1fr] sm:gap-8 sm:py-6">
        <div className="relative aspect-video w-full overflow-hidden border border-border bg-muted">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 160px, 240px"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold tracking-wide text-muted-foreground">
            {new Date(post.publishedAt).getFullYear()}
          </p>
          <h3 className="mt-1 flex items-start gap-2 text-2xl font-black leading-[1.05] text-foreground transition-colors group-hover:text-warm sm:text-3xl">
            <span className="line-clamp-2">{post.title}</span>
            <ArrowUpRight className="mt-1 size-5 shrink-0" aria-hidden />
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            {post.author.name} · {formatDate(post.publishedAt)} ·{" "}
            {post.readingTimeMinutes} min read
          </p>
        </div>
      </article>
    </Link>
  );
}
