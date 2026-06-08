import type { Metadata } from "next";
import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { siteContent } from "@/lib/data/site-content";

import { cn } from "@/lib/utils";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: "400",
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
        instrumentSerif.variable,
        "font-sans",
      )}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" href="/me.jpg" />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <LocaleProvider>
          <div className="flex min-h-full flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
