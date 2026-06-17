"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WA_URL } from "@/lib/utils";

const CATEGORIES = [
  { label: "US Immigration & Travel", color: "#0066FF" },
  { label: "Pakistan Documents", color: "#10B981" },
  { label: "Financial Services", color: "#F59E0B" },
  { label: "Career Services", color: "#EC4899" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax background layers */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 bg-hero-gradient"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
        className="absolute inset-0 grid-bg opacity-100"
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-electric/10 blur-[80px] pointer-events-none"
      />

      {/* Content */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24 md:pt-16 lg:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 rounded-full bg-electric/[0.08] border border-electric/20 text-xs font-mono text-electric mb-8 max-w-full"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shrink-0" />
          <span>Now accepting new clients</span>
          <span className="text-mist hidden sm:inline">— Book your service today</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold leading-[0.88] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[clamp(2.25rem,7vw,5rem)] text-ghost">
            Your Trusted <span className="text-gradient-electric">Partner</span>
          </span>
          <span className="block text-[clamp(2.25rem,7vw,5rem)] text-ghost">
            for Every Service.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-xl text-mist max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 sm:px-0"
        >
          From U.S. immigration to Pakistani documents, financial setup, and career growth —{" "}
          <span className="text-ghost font-medium">Sherjil Services</span> handles it all with expertise and care.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => window.open(WA_URL, "_blank")}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-electric text-white font-medium text-base electric-glow overflow-hidden w-full sm:w-auto whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Book a Service</span>
          </MagneticButton>

          <MagneticButton
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-obsidian border border-white/[0.08] text-ghost text-base font-medium hover:border-electric/30 transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
          >
            Browse Services
          </MagneticButton>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10 md:mt-16"
        >
          {CATEGORIES.map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium border"
              style={{
                color: cat.color,
                borderColor: `${cat.color}30`,
                backgroundColor: `${cat.color}10`,
                fontFamily: "var(--font-mono)",
              }}
            >
              {cat.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-smoke" />
        </motion.div>
        <span
          className="text-[10px] text-smoke font-mono tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
