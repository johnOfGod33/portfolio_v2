export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  display?: boolean;
};

export type BlogTag = {
  label: string;
  className: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tags: BlogTag[];
  author: {
    name: string;
    avatar: string;
    handle: string;
  };
  publishedAt: string;
  readingTimeMinutes: number;
  reactions: number;
  comments: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
  badge?: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type EducationEntry = {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
};
