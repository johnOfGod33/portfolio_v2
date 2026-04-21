import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";
import { SectionReveal } from "@/components/ui/section-reveal";
import { siteContent } from "@/lib/data/site-content";

const iconByChannel = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function ContactSection() {
  return (
    <section className="border-y border-gray-200 bg-[#f7f7f7]">
      <SectionReveal className="mx-auto grid max-w-384 gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div>
          <h2 className="uppercase text-5xl font-black leading-[0.9]  text-[#0a0a0a] sm:text-6xl lg:text-7xl">
            {siteContent.contactSection.titleLine1}
            <br />
            <span className="uppercase text-[#0a0a0a]">
              {siteContent.contactSection.titleLine2}
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-gray-600">
            {siteContent.contactSection.intro}
          </p>

          <div className="mt-10 border-y border-gray-200">
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
                  className={`flex items-center justify-between py-4 transition-colors hover:text-sky-600 ${
                    isLast ? "" : "border-b border-gray-200"
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0a0a0a]">
                      {channel.value}
                    </p>
                  </div>
                  <Icon className="size-4 text-gray-500" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            {siteContent.contactSection.form.kicker}
          </p>
          <h3 className="mt-3 text-2xl font-black  text-[#0a0a0a]">
            {siteContent.contactSection.form.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {siteContent.contactSection.form.description}
          </p>
          <div className="mt-8">
            <ProjectInquiryForm />
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-500">
            <ArrowUpRight className="size-3.5" aria-hidden />
            {siteContent.contactSection.footerNote}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
