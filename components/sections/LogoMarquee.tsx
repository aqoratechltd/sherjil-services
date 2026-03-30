"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/utils";

// Duplicate for seamless loop
const LOGOS = [...PARTNERS, ...PARTNERS];

export default function LogoMarquee() {
  return (
    <section className="relative py-16 border-y border-white/[0.04] overflow-hidden">
      {/* Label */}
      <p
        className="text-center text-xs font-mono text-smoke uppercase tracking-widest mb-10"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Trusted by brands across the globe
      </p>

      {/* Row 1 — forward */}
      <div className="marquee-container relative overflow-hidden">
        <div className="flex gap-12 animate-marquee w-max">
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-2 rounded-lg glass border border-white/[0.05] hover:border-electric/20 transition-colors duration-300 group whitespace-nowrap min-w-max"
            >
              <span
                className="text-sm font-medium text-smoke group-hover:text-mist transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="marquee-container relative overflow-hidden mt-4">
        <div className="flex gap-12 animate-marquee-reverse w-max">
          {[...LOGOS].reverse().map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-2 rounded-lg glass border border-white/[0.05] hover:border-electric/20 transition-colors duration-300 group whitespace-nowrap min-w-max"
            >
              <span
                className="text-sm font-medium text-smoke group-hover:text-mist transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
