"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database, Link as LinkIcon,
  ShoppingCart, Cloud, ShieldCheck, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database,
  Link: LinkIcon, ShoppingCart, Cloud, ShieldCheck,
};

// Bento sizes: responsive — collapse to single col on mobile to avoid implicit grid columns
const BENTO_SPANS = [
  "col-span-1 md:col-span-2 row-span-1 md:row-span-2", // ecommerce - featured
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1 md:col-span-2", // lead-generation - featured
  "col-span-1 md:col-span-2", // branding - fills last row gap
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1 md:col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
];

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Sort to put featured items first in bento positions
  const sorted = [
    SERVICES.find((s) => s.id === "ecommerce")!,
    SERVICES.find((s) => s.id === "smm")!,
    SERVICES.find((s) => s.id === "seo")!,
    SERVICES.find((s) => s.id === "development")!,
    SERVICES.find((s) => s.id === "performance-marketing")!,
    SERVICES.find((s) => s.id === "lead-generation")!,
    SERVICES.find((s) => s.id === "branding")!,
  ];

  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            What We Do
          </motion.p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-ghost leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services That
              <br />
              <span className="text-gradient-electric">Scale Your Business</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm text-mist hover:text-electric transition-colors group"
              >
                View all services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
        >
          {sorted.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Brain;
            const span = BENTO_SPANS[i] || "col-span-1";
            const isFeatured = service.featured;
            const isEcommerce = i === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className={cn(span, "relative")}
              >
                <Link
                  href={`/services/${service.id}`}
                  className={cn(
                    "service-card group relative flex flex-col h-full min-h-[180px] md:min-h-[200px] p-5 md:p-6 transition-colors duration-300 overflow-hidden",
                    isEcommerce
                      ? "bg-[#0d1f17] hover:bg-[#112a1e] border-t-2"
                      : "bg-obsidian hover:bg-graphite",
                    isFeatured && "md:min-h-[280px]"
                  )}
                  style={isEcommerce ? { borderTopColor: service.color } : undefined}
                >
                  {/* Background glow — always on for ecommerce, hover-only for others */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      isEcommerce ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                    style={{
                      background: isEcommerce
                        ? `radial-gradient(ellipse at top left, ${service.color}20 0%, transparent 55%)`
                        : `radial-gradient(ellipse at top left, ${service.color}10 0%, transparent 60%)`,
                    }}
                  />

                  {/* Category tag */}
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest mb-4 block"
                    style={{ color: service.color, fontFamily: "var(--font-mono)" }}
                  >
                    {service.category}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display font-bold text-ghost mb-2 group-hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isFeatured ? "1.4rem" : "1.1rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 mt-4 text-xs text-smoke group-hover:text-electric transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div
                      className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: service.color,
                        borderColor: `${service.color}30`,
                        backgroundColor: `${service.color}10`,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Featured
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
