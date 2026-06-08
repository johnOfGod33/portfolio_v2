"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function Footer() {
  const { siteContent } = useLocale();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-10">
        {siteContent.site.copyright}
      </div>
    </footer>
  );
}
