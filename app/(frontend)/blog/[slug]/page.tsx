import Image from "next/image";
import { notFound } from "next/navigation";

import { RichText } from "@payloadcms/richtext-lexical/react";
import config from "@payload-config";
import { getPayload } from "payload";

type BlogPostDoc = {
  title: string;
  excerpt: string;
  content?: unknown;
  publishedAt: string;
  coverImage?: {
    url?: string | null;
  } | null;
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const payload = (await getPayload({ config })) as any;

  const result = await payload.find({
    collection: "posts" as any,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          _status: {
            equals: "published",
          },
        },
      ],
    },
    depth: 1,
    limit: 1,
  });

  const post = result.docs[0] as BlogPostDoc | undefined;

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">Blog</p>
        <h1 className="mt-3 text-4xl font-black text-[#0a0a0a] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm font-medium text-gray-500">
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(post.publishedAt))}
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden border border-gray-200 bg-white">
          <Image
            src={post.coverImage?.url || "/me.jpg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-black prose-a:text-sky-600 prose-strong:text-[#0a0a0a]">
          {post.content ? (
            <RichText data={post.content as any} />
          ) : (
            <p className="text-lg leading-relaxed text-gray-700">{post.excerpt}</p>
          )}
        </div>
      </div>
    </article>
  );
}
