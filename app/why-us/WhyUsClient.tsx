"use client";

import { motion } from "framer-motion";
import {
  Zap, Shield, Brain, Clock, Users, TrendingUp,
  Code2, GitBranch, Star, Award, Globe, Lock, Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import Testimonials from "@/components/sections/Testimonials";

// Bento grid items with varying sizes
const BENTO_ITEMS = [
  {
    icon: Layers,
    title: "Full-Service, One Roof",
    description: "From branding and web development to SEO, paid ads, and lead generation — you get everything under one roof. No juggling five agencies. No communication gaps.",
    color: "#0066FF",
    span: "col-span-2 row-span-2",
    big: true,
    metric: "1 Roof",
    metricLabel: "Everything You Need",
  },
  {
    icon: Brain,
    title: "Strategy Before Execution",
    description: "We start with a deep audit of your business, your competition, and your market. Every campaign is built on research and strategy — not guesswork.",
    color: "#10B981",
    span: "col-span-1 row-span-1",
    metric: "100%",
    metricLabel: "Strategy-Backed",
  },
  {
    icon: TrendingUp,
    title: "Transparent Reporting",
    description: "You get real-time access to your campaign dashboards. No waiting for monthly reports. No surprises. Just clear data, all the time.",
    color: "#8B5CF6",
    span: "col-span-1 row-span-1",
    metric: "24/7",
    metricLabel: "Dashboard Access",
  },
  {
    icon: Users,
    title: "Dedicated Account Managers",
    description: "You'll never feel like just another client. Every Aqora partner gets a dedicated account manager who knows your business inside out.",
    color: "#F59E0B",
    span: "col-span-2 row-span-1",
    metric: "1-on-1",
    metricLabel: "Direct Support",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "150+ campaigns delivered. 95% client retention. Over $50M in revenue generated for our clients. The numbers speak for themselves.",
    color: "#06B6D4",
    span: "col-span-1 row-span-2",
    metric: "$50M+",
    metricLabel: "Revenue Generated",
  },
  {
    icon: Lock,
    title: "No Lock-In Contracts",
    description: "We earn your business every month. Our clients stay because of results — not because they're trapped in a contract.",
    color: "#EC4899",
    span: "col-span-1 row-span-1",
    metric: "0",
    metricLabel: "Lock-in Contracts",
  },
];

const COMPARISONS = [
  { feature: "Strategy Before Execution", us: true, others: false },
  { feature: "No Lock-In Contracts", us: true, others: false },
  { feature: "Real-time Dashboards", us: true, others: false },
  { feature: "Dedicated Account Managers", us: true, others: false },
  { feature: "Full-service capabilities", us: true, others: false },
  { feature: "Focus on Revenue and ROAS", us: true, others: false },
];

export default function WhyUsClient() {
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
            Why Aqora
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Agency That Treats Your Business
            <br />
            <span className="text-gradient-electric">Like Its Own.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist max-w-2xl leading-relaxed"
          >
            We&apos;re not here to impress you with buzzwords and pretty reports. We&apos;re here to grow your business. Here&apos;s why hundreds of brands choose Aqora.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-8 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {BENTO_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={cn(
                  "group relative rounded-2xl p-6 glass border border-white/[0.06] hover:border-opacity-30 transition-all duration-300 overflow-hidden flex flex-col",
                  item.span
                )}
                style={{ borderColor: item.big ? `${item.color}25` : undefined }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${item.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                {/* Metric (bottom for big tiles) */}
                {item.big && (
                  <div className="mt-4">
                    <p
                      className="text-5xl font-display font-extrabold mb-1"
                      style={{ color: item.color, fontFamily: "var(--font-display)" }}
                    >
                      {item.metric}
                    </p>
                    <p className="text-xs text-smoke font-mono uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                      {item.metricLabel}
                    </p>
                  </div>
                )}

                <div className={item.big ? "" : "mt-auto"}>
                  <h3
                    className="font-display font-bold text-ghost mb-1.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: item.big ? "1.4rem" : "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed">{item.description}</p>

                  {!item.big && (
                    <div className="flex items-baseline gap-2 mt-3">
                      <span
                        className="text-xl font-display font-bold"
                        style={{ color: item.color, fontFamily: "var(--font-display)" }}
                      >
                        {item.metric}
                      </span>
                      <span className="text-xs text-smoke">{item.metricLabel}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-extrabold text-ghost mb-16 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Aqora vs. The Rest
          </motion.h2>

          <div className="glass border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="text-sm text-smoke">Feature</span>
              <span className="text-sm font-medium text-electric text-center">Aqora</span>
              <span className="text-sm text-mist text-center">Typical Agency</span>
            </div>

            {COMPARISONS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm text-mist">{c.feature}</span>
                <div className="flex items-center justify-center">
                  {c.us ? (
                    <div className="w-5 h-5 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center">
                      <span className="text-electric text-xs">✓</span>
                    </div>
                  ) : (
                    <span className="text-smoke text-lg">—</span>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {c.others ? (
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                  ) : (
                    <span className="text-smoke/40 text-lg">✗</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
