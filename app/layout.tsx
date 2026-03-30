import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "Aqora — Digital Marketing Agency",
    template: "%s | Aqora",
  },
  description:
    "We Grow Bold Brands Online. From ecommerce stores to global enterprises — we strategize, execute, and scale digital marketing that delivers real, measurable results.",
  keywords: [
    "digital marketing",
    "ecommerce solutions",
    "SEO",
    "performance marketing",
    "lead generation",
    "branding",
  ],
  openGraph: {
    type: "website",
    title: "Aqora — Digital Marketing Agency",
    description: "We Grow Bold Brands Online. Strategy, execution, and real results.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-ghost antialiased">
        {/* Animated noise overlay — cinematic grain */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="page-transition">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating booking CTA */}
        <FloatingCTA />
      </body>
    </html>
  );
}
