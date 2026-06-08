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
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[96rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h1 className="text-balance text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          Start a conversation.
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-muted-foreground sm:text-xl">
          Share a short brief, links to your product, and what success looks
          like in the next 90 days. I typically respond within two business
          days.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="hover:border-foreground/25">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Direct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 size-4 shrink-0 text-foreground/40" />
                <div>
                  <p className="text-xs font-black tracking-wide text-foreground">
                    Email
                  </p>
                  <Link
                    href="mailto:hello@example.com"
                    className="font-semibold text-warm hover:underline"
                  >
                    hello@example.com
                  </Link>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-foreground/40" />
                <div>
                  <p className="text-xs font-black tracking-wide text-foreground">
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
          <Card className="border-dashed hover:border-foreground/25">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Project form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Wire up your own form action or provider here. For now this card
                is a placeholder that keeps the brutal layout consistent.
              </p>
              <ul className="list-inside list-disc space-y-1 text-left">
                <li>Company / product name</li>
                <li>Problem statement &amp; constraints</li>
                <li>Ideal start date &amp; budget range</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
