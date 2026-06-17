"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono text-electric uppercase tracking-widest mb-6"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          What We Offer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          4 Categories.
          <br />
          <span className="text-gradient-electric">15 Services. One Team.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-mist max-w-2xl leading-relaxed"
        >
          From navigating U.S. immigration paperwork to opening a Pakistani bank account remotely — we handle the complexity so you don&apos;t have to.
        </motion.p>
      </div>
    </section>
  );
}
