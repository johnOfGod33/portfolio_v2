import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
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
