import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAProps = {
  variant?: "sky" | "dark";
};

export function CTA({ variant = "sky" }: CTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "border-y border-gray-200",
        isDark ? "bg-[#0a0a0a] text-white" : "bg-sky-400 text-white",
      )}
    >
      <div className="mx-auto flex max-w-[96rem] flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl font-black uppercase leading-tight  sm:text-4xl lg:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p
            className={cn(
              "text-base font-medium sm:text-lg",
              isDark ? "text-neutral-300" : "text-sky-50",
            )}
          >
            Tell me about your product, your timeline, and the outcomes you
            need. I will reply with a clear plan and next steps.
          </p>
        </div>
        <div className="shrink-0">
          <Button
            variant="secondary"
            className={cn(
              "rounded-none border border-white/20 px-8 text-xs font-black tracking-widest",
              isDark
                ? "bg-white text-[#0a0a0a] hover:bg-neutral-200"
                : "bg-white text-[#0a0a0a] hover:bg-neutral-100",
            )}
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
