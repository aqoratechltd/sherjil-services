import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import MotionProvider from "@/components/ui/MotionProvider";

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
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6177021193345099"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-ghost antialiased">
        <MotionProvider>
        <ThemeProvider>
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
        </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
