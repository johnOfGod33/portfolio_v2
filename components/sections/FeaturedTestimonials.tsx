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
    <section className="border-b border-gray-200 bg-[#f7f7f7]">
      <SectionReveal className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          {siteContent.testimonialsSection.kicker}
        </p>
        <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
          {siteContent.testimonialsSection.title}
        </h2>
        <div className="mt-10">
          <Marquee className="[--duration:42s] [--gap:1.25rem] p-0">
            {testimonials.map((item) => (
              <Card
                key={item.id}
                className="w-[320px] shrink-0 bg-white transition-colors hover:border-sky-400 sm:w-[360px]"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <p className="text-xs font-bold tracking-wide text-gray-500">
                    {item.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-gray-600">
                    “{item.quote}”
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
