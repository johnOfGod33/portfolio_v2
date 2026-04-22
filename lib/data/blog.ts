import type { BlogPost } from "@/lib/types";
import config from "@payload-config";
import { getPayload } from "payload";

const fallbackPosts: BlogPost[] = [
  {
    id: "b1",
    href: "https://www.v1.jeandedieu.dev/blog/why-you-should-learn-docker",
    title: "What is docker and why every developer should learn it",
    excerpt:
      "Docker is a platform that allows you to deploy applications in an isolated environment called a container. A container encapsulates the code, configurations, and all dependencies required for the application to run.",
    coverImage:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzf1wnflcnehgy4y14ltf.jpg",
    tags: [{ label: "Docker", className: "bg-sky-100 text-sky-900" }],
    author: {
      name: "Jean de Dieu Sessou",
      avatar: "/me.jpg",
      handle: "@johnOfGod33",
    },
    publishedAt: "2024-08-18",
    readingTimeMinutes: 5,
    reactions: 0,
    comments: 0,
  },
];

type PayloadPost = {
  id: string;
  title: string;
  excerpt: string;
  slug?: string | null;
  publishedAt: string;
  readingTimeMinutes?: number | null;
  externalUrl?: string | null;
  coverImage?: {
    url?: string | null;
  } | null;
  tags?: { label?: string | null }[] | null;
};

function toBlogPost(post: PayloadPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug ?? undefined,
    href: post.externalUrl || (post.slug ? `/blog/${post.slug}` : undefined),
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage?.url || "/me.jpg",
    tags:
      post.tags?.length
        ? post.tags
            .filter((tag) => Boolean(tag?.label))
            .map((tag) => ({
              label: tag.label as string,
              className: "bg-sky-100 text-sky-900",
            }))
        : [{ label: "Article", className: "bg-sky-100 text-sky-900" }],
    author: {
      name: "Jean de Dieu Sessou",
      avatar: "/me.jpg",
      handle: "@johnOfGod33",
    },
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes ?? 5,
    reactions: 0,
    comments: 0,
  };
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    const payload = (await getPayload({ config })) as any;
    const result = await payload.find({
      collection: "posts" as any,
      where: {
        _status: {
          equals: "published",
        },
      },
      depth: 1,
      sort: "-publishedAt",
      limit: typeof limit === "number" ? limit : 20,
    });

    if (!result.docs.length) {
      return fallbackPosts.slice(0, limit ?? fallbackPosts.length);
    }

    return (result.docs as PayloadPost[]).map(toBlogPost);
  } catch {
    return fallbackPosts.slice(0, limit ?? fallbackPosts.length);
  }
}
