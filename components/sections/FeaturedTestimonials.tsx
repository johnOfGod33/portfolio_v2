"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { SectionReveal } from "@/components/ui/section-reveal";
import type { Testimonial } from "@/lib/types";

export function FeaturedTestimonials() {
  const { siteContent } = useLocale();
  const testimonials = siteContent.testimonials as Testimonial[];

  return (
    <section className="border-b border-border bg-background">
      <SectionReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="text-balance text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl">
          {siteContent.testimonialsSection.title}
        </h2>
        <div className="mt-10">
          <Marquee className="[--duration:42s] [--gap:1.25rem] p-0">
            {testimonials.map((item) => (
              <Card
                key={item.id}
                className="w-[320px] shrink-0 bg-card transition-colors hover:border-foreground/20 sm:w-[360px]"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    {item.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </SectionReveal>
    </section>
  );
}
