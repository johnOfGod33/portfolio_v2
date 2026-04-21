import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Shipping faster with feature flags you can trust",
    excerpt:
      "A practical playbook for staged rollouts, guardrails, and observability when every deploy counts.",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: [
      { label: "Engineering", className: "bg-sky-100 text-sky-900" },
      { label: "DX", className: "bg-violet-100 text-violet-900" },
    ],
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      handle: "@alexm",
    },
    publishedAt: "2026-03-12",
    readingTimeMinutes: 8,
    reactions: 142,
    comments: 18,
  },
  {
    id: "b2",
    title: "Design tokens in production: what actually breaks",
    excerpt:
      "Color spaces, contrast, and build-time transforms — lessons from migrating a multi-brand system.",
    coverImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    tags: [
      { label: "Design Systems", className: "bg-amber-100 text-amber-900" },
      { label: "CSS", className: "bg-emerald-100 text-emerald-900" },
    ],
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      handle: "@alexm",
    },
    publishedAt: "2026-02-02",
    readingTimeMinutes: 12,
    reactions: 96,
    comments: 9,
  },
  {
    id: "b3",
    title: "Postgres patterns for SaaS billing at scale",
    excerpt:
      "Idempotency keys, ledger tables, and reconciliation jobs without losing your weekends.",
    coverImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    tags: [
      { label: "Backend", className: "bg-slate-200 text-slate-900" },
      { label: "Postgres", className: "bg-blue-100 text-blue-900" },
    ],
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      handle: "@alexm",
    },
    publishedAt: "2026-01-18",
    readingTimeMinutes: 15,
    reactions: 201,
    comments: 27,
  },
  {
    id: "b4",
    title: "Why your RSC boundaries are costing you latency",
    excerpt:
      "A measured look at waterfalls, caching headers, and when to push logic to the edge.",
    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tags: [
      { label: "Next.js", className: "bg-neutral-200 text-neutral-900" },
      { label: "Performance", className: "bg-rose-100 text-rose-900" },
    ],
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      handle: "@alexm",
    },
    publishedAt: "2025-12-05",
    readingTimeMinutes: 10,
    reactions: 88,
    comments: 14,
  },
];
