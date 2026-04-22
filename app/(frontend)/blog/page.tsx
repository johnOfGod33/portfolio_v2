import type { Metadata } from "next";

import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { getBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase  text-[#0a0a0a] sm:text-5xl lg:text-6xl">
          Notes on shipping, systems, and craft.
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-gray-600 sm:text-xl">
          Long-form writing on the tools and tradeoffs behind modern web
          products.
        </p>
        <BlogExplorer posts={posts} />
      </div>
    </section>
  );
}
