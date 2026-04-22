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
    <section className="border-b border-gray-200 bg-white">
      <SectionReveal className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.35em] text-sky-500">
              Writing
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
              Latest from the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold tracking-wide text-gray-600 underline-offset-4 hover:text-sky-600 hover:underline"
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
