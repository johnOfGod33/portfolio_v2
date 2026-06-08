import type { Metadata } from "next";

import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { getBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h1 className="text-balance text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          Notes on shipping, systems, and craft.
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-muted-foreground sm:text-xl">
          Long-form writing on the tools and tradeoffs behind modern web
          products.
        </p>
        <BlogExplorer posts={posts} />
      </div>
    </section>
  );
}
