"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";
import { useLocale } from "@/components/providers/LocaleProvider";
import { SectionReveal } from "@/components/ui/section-reveal";

const iconByChannel = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function ContactSection() {
  const { siteContent } = useLocale();

  return (
    <section className="border-y border-border bg-background">
      <SectionReveal className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <h2
            className="text-4xl font-normal italic leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {siteContent.contactSection.titleLine1}
            <br />
            {siteContent.contactSection.titleLine2}
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            {siteContent.contactSection.intro}
          </p>

          <div className="mt-10 border-y border-border">
            {siteContent.contactSection.channels.map((channel, index) => {
              const Icon =
                iconByChannel[channel.label as keyof typeof iconByChannel] ??
                Mail;
              const isLast =
                index === siteContent.contactSection.channels.length - 1;

              return (
                <Link
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className={`flex items-center justify-between py-4 transition-colors hover:text-warm ${
                    isLast ? "" : "border-b border-border"
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {channel.value}
                    </p>
                  </div>
                  <Icon className="size-4 text-muted-foreground" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border border-border bg-card p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            {siteContent.contactSection.form.kicker}
          </p>
          <h3 className="mt-3 text-2xl font-black text-foreground">
            {siteContent.contactSection.form.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteContent.contactSection.form.description}
          </p>
          <div className="mt-8">
            <ProjectInquiryForm />
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <ArrowUpRight className="size-3.5" aria-hidden />
            {siteContent.contactSection.footerNote}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
