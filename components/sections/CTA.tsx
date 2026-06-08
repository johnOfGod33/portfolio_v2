import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-y border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-balance text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="text-base font-medium text-background/70 sm:text-lg">
            Tell me about your product, your timeline, and the outcomes you
            need. I will reply with a clear plan and next steps.
          </p>
        </div>
        <div className="shrink-0">
          <Button
            className="rounded-none border border-background/20 bg-background px-8 text-xs font-black tracking-widest text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact">
              Start a project
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
