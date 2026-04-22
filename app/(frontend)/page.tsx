import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedTestimonials } from "@/components/sections/FeaturedTestimonials";
import { Hero } from "@/components/sections/Hero";
import { LatestBlog } from "@/components/sections/LatestBlog";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { StackServices } from "@/components/sections/StackServices";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid limit={3} showLoadMore />
      <FeaturedTestimonials />
      <StackServices />
      <AboutPreview />
      <LatestBlog limit={3} />
      <ContactSection />
    </>
  );
}
