"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CalendlyModal from "@/components/ui/CalendlyModal";

const HERO_WORDS = ["Software", "Systems", "Futures"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
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

      {/* Grid pattern */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
        className="absolute inset-0 grid-bg opacity-100"
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

      {/* Electric orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-electric/10 blur-[80px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24 md:pt-16 lg:pt-0"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 rounded-full glass border border-electric/20 text-xs font-mono text-electric mb-8 max-w-full"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shrink-0" />
          <span>Now onboarding new clients for April 2026</span>
          <span className="text-mist hidden sm:inline">— Limited spots available</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold leading-[0.88] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[clamp(2.5rem,8vw,7rem)] text-ghost">
            We Grow Bold
          </span>
          <span className="block text-[clamp(2.5rem,8vw,7rem)] text-gradient-electric">
            Brands
          </span>
          <span className="block text-[clamp(2.5rem,8vw,7rem)] text-ghost">
            Online.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-mist max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From ecommerce stores to global enterprises — we strategize, execute, and scale digital marketing that delivers real, measurable results.
          <span className="text-ghost font-medium"> No fluff. No excuses.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => setModalOpen(true)}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-electric text-white font-medium text-base electric-glow overflow-hidden w-full sm:w-auto whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Book a Strategy Call</span>
          </MagneticButton>

          <MagneticButton className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass border border-white/[0.08] text-ghost text-base font-medium hover:border-electric/30 transition-all duration-200 w-full sm:w-auto whitespace-nowrap">
            See Our Work
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { value: "150+", label: "Campaigns Delivered" },
            { value: "95%", label: "Client Retention Rate" },
            { value: "3x–10x", label: "Average ROAS" },
            { value: "$50M+", label: "Revenue Generated" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl md:text-4xl font-display font-bold text-gradient-electric"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-smoke mt-1 font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </p>
            </div>
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

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
