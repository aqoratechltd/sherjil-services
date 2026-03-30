"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import CalendlyModal from "@/components/ui/CalendlyModal";
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
  const [modalOpen, setModalOpen] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      {/* Hero */}
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
            Who We Are
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-8"
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
            className="text-xl text-mist max-w-2xl leading-relaxed"
          >
            Aqora is a results-driven digital marketing agency helping businesses grow online through bold strategy, creative execution, and data-backed decisions. We don&apos;t believe in vanity metrics — we care about revenue, leads, and real growth.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="text-4xl md:text-5xl font-display font-extrabold text-gradient-electric mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-smoke">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual */}
            <motion.div style={{ y: imageY }} className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] glass border border-white/[0.08]">
                {/* Abstract geometric composition */}
                <div className="absolute inset-0 bg-gradient-to-br from-graphite to-obsidian" />
                <div className="absolute inset-0 grid-bg opacity-50" />

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl border border-electric/20 bg-electric/5 backdrop-blur-sm" />
                <div className="absolute top-1/3 left-1/3 w-24 h-24 rounded-xl border border-electric/30 bg-electric/10 backdrop-blur-sm" />
                <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />

                {/* Code snippet decoration */}
                <div className="absolute bottom-8 left-6 right-6 p-4 rounded-xl bg-void/80 border border-white/[0.08] font-mono text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="text-electric">const</span>{" "}
                  <span className="text-ghost">aqora</span>{" "}
                  <span className="text-mist">= </span>
                  <span className="text-electric">{"{"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-smoke">mission:</span>{" "}
                  <span className="text-ghost">&apos;Growth&apos;</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-smoke">standard:</span>{" "}
                  <span className="text-ghost">&apos;Bold&apos;</span>
                  <br />
                  <span className="text-electric">{"}"}</span>
                </div>

                <div className="absolute top-6 right-6 text-xs font-mono text-electric opacity-60" style={{ fontFamily: "var(--font-mono)" }}>
                  EST. 2019
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass border border-electric/20 rounded-2xl p-4"
              >
                <p className="text-2xl font-display font-bold text-gradient-electric" style={{ fontFamily: "var(--font-display)" }}>
                  50+
                </p>
                <p className="text-xs text-smoke">Senior Engineers</p>
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
                className="text-4xl font-display font-extrabold text-ghost mb-6 leading-tight"
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

              {/* Removed CEO Link */}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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
              className="text-4xl font-display font-extrabold text-ghost"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Believe
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl glass border border-white/[0.06] hover:border-electric/20 transition-all duration-300"
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

      {/* Team */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-extrabold text-ghost"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Leadership Team
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl glass border border-white/[0.06] hover:border-electric/15 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center text-white font-bold font-display text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-ghost">{member.name}</p>
                  <p className="text-sm text-electric">{member.role}</p>
                  <p className="text-xs text-smoke mt-0.5">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
