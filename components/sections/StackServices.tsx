import Link from "next/link";

import { ServiceCard } from "@/components/cards/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { services, siteContent, skillTags } from "@/lib/data/site-content";
import { Marquee } from "../ui/marquee";

export function StackServices() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <SectionReveal className="mx-auto max-w-384 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          {siteContent.servicesSection.kicker}
        </p>
        <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
          {siteContent.servicesSection.title}
        </h2>
        <Marquee className="[--duration:42s] [--gap:1.25rem] p-0">
          <div className="mt-8 flex flex-wrap gap-2">
            {skillTags.map((skill) => (
              <Badge key={skill} variant="outline" className="rounded-none">
                {skill}
              </Badge>
            ))}
          </div>
        </Marquee>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" className="rounded-none" asChild>
            <Link href="/services">
              {siteContent.servicesSection.viewAllLabel}
            </Link>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
