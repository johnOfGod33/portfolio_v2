import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase  text-[#0a0a0a] sm:text-5xl lg:text-6xl">
          Start a conversation.
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-gray-600 sm:text-xl">
          Share a short brief, links to your product, and what success looks
          like in the next 90 days. I typically respond within two business
          days.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="hover:border-sky-400">
            <CardHeader>
              <CardTitle className="text-xl">Direct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 text-sm text-gray-600">
                <Mail className="mt-0.5 size-4 shrink-0 text-sky-500" />
                <div>
                  <p className="text-xs font-black tracking-wide text-[#0a0a0a]">
                    Email
                  </p>
                  <Link
                    href="mailto:hello@example.com"
                    className="font-semibold text-sky-600 hover:underline"
                  >
                    hello@example.com
                  </Link>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-gray-600">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-500" />
                <div>
                  <p className="text-xs font-black tracking-wide text-[#0a0a0a]">
                    Location
                  </p>
                  <p>Remote — EU / US time zones</p>
                </div>
              </div>
              <Button className="mt-4 w-full rounded-none" asChild>
                <Link href="mailto:hello@example.com">Send an email</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-dashed hover:border-sky-400">
            <CardHeader>
              <CardTitle className="text-xl">Project form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <p>
                Wire up your own form action or provider here. For now this card
                is a placeholder that keeps the brutal layout consistent.
              </p>
              <ul className="list-inside list-disc space-y-1 text-left">
                <li>Company / product name</li>
                <li>Problem statement & constraints</li>
                <li>Ideal start date & budget range</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
