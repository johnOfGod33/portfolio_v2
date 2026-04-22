"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/cards/BlogCard";
import type { BlogPost } from "@/lib/types";

type BlogExplorerProps = {
  posts: BlogPost[];
};

export function BlogExplorer({ posts }: BlogExplorerProps) {
  const [activeTag, setActiveTag] = useState<string>("all");

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags.map((tag) => tag.label));
    return ["all", ...Array.from(new Set(allTags)).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return activeTag === "all" || post.tags.some((tag) => tag.label === activeTag);
    });
  }, [activeTag, posts]);

  return (
    <>
      <div className="mt-10 space-y-4 border border-gray-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`border px-3 py-1 text-xs font-bold tracking-wide transition-colors ${
                  isActive
                    ? "border-sky-500 bg-sky-50 text-sky-700"
                    : "border-gray-300 bg-white text-gray-600 hover:border-sky-400"
                }`}
              >
                {tag === "all" ? "All" : tag}
              </button>
            );
          })}
        </div>
        <p className="text-xs font-semibold text-gray-500">
          {filteredPosts.length} result{filteredPosts.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <div key={post.id} id={post.id}>
              <BlogCard post={post} />
            </div>
          ))
        ) : (
          <div className="border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
            No post found for this tag.
          </div>
        )}
      </div>
    </>
  );
}
