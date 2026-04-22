import rawSiteContent from "@/lib/data/site-content.json";
import rawSiteContentFr from "@/lib/data/site-content.fr.json";
import type {
  CareerEntry,
  EducationEntry,
  Project,
  Service,
  Testimonial,
} from "@/lib/types";
import type { Locale } from "@/lib/i18n";

type HeroTypingConfig = {
  typeSpeed: number;
  delay: number;
  loop: boolean;
  cursorStyle: "line" | "block" | "underscore";
};

export type SiteContent = typeof rawSiteContent;

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

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

function isObject(value: JsonValue | undefined): value is JsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base: JsonObject, override: JsonObject): JsonObject {
  const merged: JsonObject = { ...base };

  for (const key of Object.keys(override)) {
    const baseValue = merged[key];
    const overrideValue = override[key];

    if (Array.isArray(overrideValue)) {
      merged[key] = overrideValue;
      continue;
    }

    if (isObject(baseValue) && isObject(overrideValue)) {
      merged[key] = deepMerge(baseValue, overrideValue);
      continue;
    }

    merged[key] = overrideValue;
  }

  return merged;
}

const localizedContent = {
  en: rawSiteContent,
  fr: deepMerge(rawSiteContent as JsonObject, rawSiteContentFr as JsonObject),
} as const;

export function getSiteContent(locale: Locale = "en") {
  return localizedContent[locale] as SiteContent;
}
