import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Aqora — Digital Marketing Agency",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}
