import Link from "next/link";

import { BlogCard } from "@/components/cards/BlogCard";
import { SectionReveal } from "@/components/ui/section-reveal";
import { getBlogPosts } from "@/lib/data/blog";

type LatestBlogProps = {
  limit?: number;
};

export async function LatestBlog({ limit = 3 }: LatestBlogProps) {
  const posts = await getBlogPosts(limit);

  return (
    <section className="border-b border-border bg-card">
      <SectionReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
            Latest from the blog
          </h2>
          <Link
            href="/blog"
            className="text-xs font-semibold tracking-wide text-muted-foreground underline-offset-4 hover:text-warm hover:underline"
          >
            Browse all posts
          </Link>
        </div>
        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
