"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Globe, FileText, Clipboard, CreditCard, ShieldCheck, Award, BadgeCheck,
  Users, Building2, ArrowLeftRight, TrendingUp, BarChart2,
  Sparkles, Briefcase, ArrowRight, Brain, BookOpen, FileSignature,
  Plane, Map, BedDouble,
} from "lucide-react";
import { SERVICES } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Globe, FileText, Clipboard, CreditCard, ShieldCheck, Award, BadgeCheck,
  Users, Building2, ArrowLeftRight, TrendingUp, BarChart2,
  Sparkles, Briefcase, Brain, BookOpen, FileSignature,
  Plane, Map, BedDouble,
};

const CATEGORIES = ["All", "Immigration", "Pakistan Docs", "Travel", "Financial", "Career"] as const;

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const CATEGORY_COLORS: Record<string, string> = {
    "Immigration": "#0066FF",
    "Pakistan Docs": "#10B981",
    "Financial": "#F59E0B",
    "Career": "#EC4899",
  };

  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Our Services
          </motion.p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-ghost leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services Built
              <br />
              <span className="text-gradient-electric">Around Your Needs</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm text-mist hover:text-electric transition-colors group whitespace-nowrap"
              >
                View all services
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200",
                activeCategory === cat
                  ? "bg-electric text-white"
                  : "bg-white/[0.04] text-smoke hover:text-ghost border border-white/[0.06] hover:border-white/[0.12]"
              )}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
        >
          {filtered.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Brain;
            const isFeatured = service.featured ?? false;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(i * 0.05, 0.5), duration: 0.5 }}
                className={cn(isFeatured && "md:col-span-2 lg:col-span-1")}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="service-card group relative flex flex-col h-full min-h-[180px] p-5 md:p-6 transition-colors duration-300 overflow-hidden bg-obsidian hover:bg-graphite"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${service.color}10 0%, transparent 60%)`,
                    }}
                  />

                  {/* Category + Price row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: service.color, fontFamily: "var(--font-mono)" }}
                    >
                      {service.category}
                    </span>
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        color: service.color,
                        borderColor: `${service.color}30`,
                        backgroundColor: `${service.color}10`,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display font-bold text-ghost mb-2 group-hover:text-white transition-colors text-[1.05rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed flex-1">{service.description}</p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 mt-4 text-xs text-smoke group-hover:text-electric transition-colors whitespace-nowrap">
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
