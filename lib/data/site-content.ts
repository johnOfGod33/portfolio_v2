import rawSiteContent from "@/lib/data/site-content.json";
import type {
  CareerEntry,
  EducationEntry,
  Project,
  Service,
  Testimonial,
} from "@/lib/types";

type HeroTypingConfig = {
  typeSpeed: number;
  delay: number;
  loop: boolean;
  cursorStyle: "line" | "block" | "underscore";
};

export const siteContent = rawSiteContent;

export const projects = siteContent.projects as Project[];
export const services = siteContent.services as Service[];
export const testimonials = siteContent.testimonials as Testimonial[];
export const careerEntries = siteContent.career as CareerEntry[];
export const educationEntries = siteContent.education as EducationEntry[];

export const aboutIntro = {
  columns: siteContent.aboutSection.introColumns,
};

export const skillTags = siteContent.aboutSection.skillTags;
export const heroTyping = siteContent.hero.typingAnimation as HeroTypingConfig;
