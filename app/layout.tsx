import type { Metadata } from "next";
import { Geist, Schibsted_Grotesk } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteContent } from "@/lib/data/site-content";

import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteContent.site.metadata.defaultTitle,
    template: siteContent.site.metadata.titleTemplate,
  },
  description: siteContent.site.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "scroll-smooth",
        "antialiased",
        schibsted.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <link rel="icon" href="/me.jpg" />
      </head>
      <body className="min-h-full bg-[#f7f7f7] font-sans text-[#0a0a0a]">
        <div className="flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
