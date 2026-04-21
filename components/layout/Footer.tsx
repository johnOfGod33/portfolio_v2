import { siteContent } from "@/lib/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-neutral-50">
      <div className="mx-auto max-w-384 px-4 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-10">
        {siteContent.site.copyright}
      </div>
    </footer>
  );
}
