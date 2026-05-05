"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Target, Zap, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABanner from "@/components/sections/CTABanner";
import { STATS } from "@/lib/utils";

const VALUES = [
  {
    icon: Target,
    title: "Results First",
    description:
      "Every campaign, every strategy, every decision is measured against one question: does it grow your business?",
  },
  {
    icon: Zap,
    title: "Radical Transparency",
    description:
      "No smoke and mirrors. You'll always know exactly what we're doing, why we're doing it, and what it's delivering.",
  },
  {
    icon: Shield,
    title: "Strategic Thinking",
    description:
      "We don't execute blindly. We diagnose your business, identify your biggest opportunities, and build strategies that fit your goals.",
  },
  {
    icon: Globe,
    title: "Long-Term Partnership",
    description:
      "We don't chase quick wins. We build sustainable growth systems that compound over time.",
  },
];

const TEAM = [
  { name: "Alex Reeves", role: "CTO & Co-Founder", specialty: "Systems Architecture" },
  { name: "Yuna Park", role: "Head of AI", specialty: "Machine Learning & LLMs" },
  { name: "Marcus T.", role: "Lead Engineer", specialty: "Full-Stack & DevOps" },
  { name: "Sofia Rios", role: "Head of Design", specialty: "UX Systems & Motion" },
  { name: "Kai Nakamura", role: "Blockchain Lead", specialty: "Web3 & DeFi" },
  { name: "Priya D.", role: "Engineering Manager", specialty: "Team Leadership" },
];

export default function AboutClient() {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(400px,60vw)] bg-electric/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Who We Are
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Brands
            <br />
            <span className="text-gradient-electric">That Mean Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-mist max-w-2xl leading-relaxed"
          >
            Aqora is a results-driven digital marketing agency helping businesses grow online through bold strategy, creative execution, and data-backed decisions. We don&apos;t believe in vanity metrics — we care about revenue, leads, and real growth.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gradient-electric mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-smoke">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            {/* Visual */}
            <motion.div style={{ y: imageY }} className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80"
                  alt="Aqora agency office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              </div>

              {/* Floating stat card — hidden on mobile to avoid overflow */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-5 -right-5 lg:-top-6 lg:-right-6 bg-obsidian border border-electric/20 rounded-2xl p-4"
              >
                <p className="text-2xl font-display font-bold text-gradient-electric" style={{ fontFamily: "var(--font-display)" }}>
                  50+
                </p>
                <p className="text-xs text-smoke">Happy Clients</p>
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Our Story
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-ghost mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aqora was founded with one mission: to give businesses access to the kind of marketing that actually works.
              </motion.h2>

              <div className="space-y-4 text-mist leading-relaxed">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                  We saw too many brands getting burned by agencies promising the world and delivering nothing. So we built something different — a team of specialists obsessed with outcomes, not outputs.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Today, we partner with ecommerce brands, startups, and established businesses across industries to help them grow faster, smarter, and more profitably online.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Core Principles
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-ghost"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Believe
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 md:p-6 rounded-2xl glass border border-white/[0.06] hover:border-electric/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-4 group-hover:bg-electric/15 transition-colors">
                  <v.icon className="w-5 h-5 text-electric" />
                </div>
                <h3 className="font-display font-bold text-ghost mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-smoke leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
