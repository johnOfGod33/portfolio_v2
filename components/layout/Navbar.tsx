"use client";

import Link from "next/link";

import { useLocale } from "@/components/providers/LocaleProvider";

export function Navbar() {
  const { locale, setLocale, siteContent } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-384 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="justify-self-start text-sm font-black tracking-widest text-[#0a0a0a] transition-colors hover:text-sky-600"
        >
          {siteContent.navigation.brandLabel}
        </Link>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {siteContent.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-xs font-bold tracking-wide text-gray-600 transition-colors hover:text-[#0a0a0a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="justify-self-end">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2 py-1 text-xs font-black tracking-wider transition-colors ${
                locale === "en" ? "text-[#0a0a0a]" : "text-gray-400 hover:text-gray-600"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <span className="text-gray-300">/</span>
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`px-2 py-1 text-xs font-black tracking-wider transition-colors ${
                locale === "fr" ? "text-[#0a0a0a]" : "text-gray-400 hover:text-gray-600"
              }`}
              aria-pressed={locale === "fr"}
            >
              FR
            </button>
          </div>
          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none border border-gray-200 bg-white px-3 py-2 text-xs font-black tracking-wide text-[#0a0a0a] transition-colors hover:border-sky-400 [&::-webkit-details-marker]:hidden">
              {locale === "fr" ? "Menu" : "Menu"}
            </summary>
            <div className="absolute right-0 mt-2 w-52 border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center justify-end gap-2 border-b border-gray-100 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`text-xs font-black tracking-wider ${
                    locale === "en" ? "text-[#0a0a0a]" : "text-gray-400"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">/</span>
                <button
                  type="button"
                  onClick={() => setLocale("fr")}
                  className={`text-xs font-black tracking-wider ${
                    locale === "fr" ? "text-[#0a0a0a]" : "text-gray-400"
                  }`}
                >
                  FR
                </button>
              </div>
              {siteContent.navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-gray-100 px-4 py-3 text-xs font-bold tracking-wide text-gray-600 last:border-b-0 hover:bg-neutral-50 hover:text-[#0a0a0a]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
