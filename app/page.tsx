import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesSlider from "@/components/sections/ServicesSlider";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <ServicesSlider />
      <Testimonials />
      <CTABanner />
    </>
  );
}
