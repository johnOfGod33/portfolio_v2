export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeStorageKey = "portfolio-locale";
export const localeCookieName = "portfolio-locale";
