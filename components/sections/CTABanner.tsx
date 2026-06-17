"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WA_URL } from "@/lib/utils";

export default function CTABanner() {
  return (
    <section className="w-full relative overflow-hidden border-y border-electric/20 bg-electric/[0.06]">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-electric shrink-0" />
          <div>
            <span
              className="font-display font-bold text-ghost text-base sm:text-lg leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Get Started?
            </span>
            <span className="hidden sm:inline text-smoke text-sm ml-3">
              Message us on WhatsApp — quick response guaranteed.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <p className="text-xs text-smoke sm:hidden text-center">
            Message us on WhatsApp for a quick response.
          </p>
          <MagneticButton
            onClick={() => window.open(WA_URL, "_blank")}
            className="group relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-electric text-white font-medium text-sm electric-glow overflow-hidden whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2 whitespace-nowrap">
              Chat on WhatsApp
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
