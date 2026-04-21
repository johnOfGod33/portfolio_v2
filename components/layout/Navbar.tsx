import Link from "next/link";

import { siteContent } from "@/lib/data/site-content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-384 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-black tracking-widest text-[#0a0a0a] transition-colors hover:text-sky-600"
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
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none border border-gray-200 bg-white px-3 py-2 text-xs font-black tracking-wide text-[#0a0a0a] transition-colors hover:border-sky-400 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 border border-gray-200 bg-white shadow-sm">
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
    </header>
  );
}
