"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CalendlyModal from "@/components/ui/CalendlyModal";

export default function CTABanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass border border-electric/20 rounded-3xl p-6 sm:p-10 md:p-14 lg:p-20 text-center overflow-hidden"
        >
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-electric/20 blur-[60px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-60 h-40 bg-electric/10 blur-[80px] rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-xs font-mono text-electric mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Start Your Project
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-ghost mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Scale
            <br />
            <span className="text-gradient-electric">Your Business?</span>
          </h2>

          <p className="text-mist text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s talk about your goals. We&apos;ll map out a strategy, timeline, and plan — all in a free 30-minute discovery call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-electric text-white font-medium text-base electric-glow overflow-hidden w-full sm:w-auto whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Book Your Free Call</span>
            </MagneticButton>

            <p className="text-sm text-smoke">
              No commitment. No spam. Just clarity.
            </p>
          </div>
        </motion.div>
      </div>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
