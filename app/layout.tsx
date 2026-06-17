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
    default: "Sherjil Services — Immigration, Documents, Financial & Career",
    template: "%s | Sherjil Services",
  },
  description:
    "Sherjil Services helps you navigate U.S. immigration, Pakistani documents, financial account setup, and career services — all in one place. Book now.",
  keywords: [
    "US immigration assistance",
    "Pakistan documents",
    "NICOP",
    "Nadra",
    "green card renewal",
    "citizenship application",
    "resume writing",
    "stock market training",
    "money transfer setup",
  ],
  openGraph: {
    type: "website",
    title: "Sherjil Services — Immigration, Documents, Financial & Career",
    description: "Professional assistance for immigration, Pakistani documents, financial services, and career support.",
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
        <link rel="icon" href="/logo2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo2.png" />
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
          <div className="noise-overlay" aria-hidden="true" />
          <CustomCursor />
          <Navbar />
          <main className="page-transition">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
