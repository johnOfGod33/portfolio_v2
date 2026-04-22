import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
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
  return (
    <Link
      href={post.href ? post.href : `/blog`}
      target="_blank"
      className="block"
    >
      <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100/30">
        <article className="grid grid-cols-[160px_1fr] items-center gap-5 p-4 sm:grid-cols-[280px_1fr] sm:gap-8 sm:p-6">
          <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-neutral-100">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 160px, 280px"
            />
          </div>
          <div className="min-w-0">
            <p className="text-base font-black tracking-wide text-gray-500 sm:text-lg">
              {new Date(post.publishedAt).getFullYear()}
            </p>
            <h3 className="mt-1 flex items-start gap-2 text-2xl font-black leading-[1.05]  text-[#0a0a0a] transition-colors group-hover:text-sky-600 sm:text-3xl">
              <span className="line-clamp-2">{post.title}</span>
              <ArrowUpRight className="mt-1 size-5 shrink-0" aria-hidden />
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 sm:text-base">
              {post.excerpt}
            </p>
            <p className="mt-3 text-sm font-medium text-gray-600 sm:text-base">
              {post.author.name} · {formatDate(post.publishedAt)} ·{" "}
              {post.readingTimeMinutes} min read
            </p>
          </div>
        </article>
      </Card>
    </Link>
  );
}
