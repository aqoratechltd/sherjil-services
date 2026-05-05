"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle2, MessageCircle,
  Palette, Video, Search, Package, TrendingUp, Globe, Film,
  Star, Code, Award, Camera, Layers, ShoppingBag, Share2, Zap,
  Brain, Server, Cloud, Network, Database, Sparkles,
} from "lucide-react";

const WA_URL = "https://wa.me/923273001777";
import CTABanner from "@/components/sections/CTABanner";
import { type PricingService, type PricingPackage } from "@/lib/pricing-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Palette, Video, Search, Package, TrendingUp, Globe, Film,
  Star, Code, Award, Camera, Layers, ShoppingBag, Share2, Zap,
  Brain, Server, Cloud, Network, Database, Sparkles,
};

function PricingCard({
  pkg,
  color,
  index,
  onQuote,
}: {
  pkg: PricingPackage;
  color: string;
  index: number;
  onQuote: () => void;
}) {
  const isHighlighted = !!pkg.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={[
        "relative flex flex-col rounded-2xl p-7 border transition-all duration-300",
        isHighlighted
          ? "border-electric/40 bg-electric/[0.04] shadow-[0_0_32px_rgba(0,102,255,0.08)]"
          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]",
      ].join(" ")}
    >
      {/* Electric top line for highlighted */}
      {isHighlighted && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent rounded-t-2xl" />
      )}

      {/* Badge */}
      {isHighlighted && (
        <div className="absolute -top-3 left-6">
          <span
            className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-electric text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {pkg.isCustom ? "Custom" : "Best Value"}
          </span>
        </div>
      )}

      {/* Name */}
      <h3
        className="font-display font-bold text-ghost text-lg mb-2 leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {pkg.name}
      </h3>

      {/* Sub-note */}
      {pkg.note && (
        <p
          className="text-[11px] font-mono uppercase tracking-widest mb-3"
          style={{ color, fontFamily: "var(--font-mono)" }}
        >
          {pkg.note}
        </p>
      )}

      {/* Price */}
      <div className="mb-6">
        {pkg.price ? (
          <span
            className="font-display font-extrabold text-3xl"
            style={{ color, fontFamily: "var(--font-display)" }}
          >
            {pkg.price}
          </span>
        ) : (
          <span
            className="font-display font-extrabold text-3xl text-electric"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Custom
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-2.5 flex-1 mb-8">
        {pkg.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: isHighlighted ? "#0066FF" : color }}
            />
            <span className="text-mist text-sm leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={onQuote}
        className={[
          "w-full py-3 px-5 rounded-xl text-sm font-mono uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2",
          pkg.isCustom || isHighlighted
            ? "bg-electric text-white hover:bg-electric/90"
            : "border hover:bg-white/[0.04]",
        ].join(" ")}
        style={
          pkg.isCustom || isHighlighted
            ? { fontFamily: "var(--font-mono)" }
            : { borderColor: `${color}40`, color, fontFamily: "var(--font-mono)" }
        }
      >
        <MessageCircle className="w-4 h-4" />
        {pkg.isCustom ? "Get a Quote" : "Get Started"}
      </button>
    </motion.div>
  );
}

export default function PricingPageClient({ service }: { service: PricingService }) {
  const Icon = ICON_MAP[service.icon] ?? Zap;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: service.color }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-mist hover:text-ghost transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono uppercase tracking-widest mb-4 block"
              style={{ color: service.color, fontFamily: "var(--font-mono)" }}
            >
              {service.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-ghost leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-mist leading-relaxed mb-8"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <div>
                <p
                  className="text-[10px] font-mono text-smoke uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Starting from
                </p>
                <p
                  className="font-bold text-lg"
                  style={{ color: service.color, fontFamily: "var(--font-display)" }}
                >
                  {service.startingFrom}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-14 md:py-20 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p
              className="text-xs font-mono uppercase tracking-widest text-smoke mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Pricing
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl text-ghost"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your Package
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {service.packages.map((pkg, i) => (
              <PricingCard
                key={i}
                pkg={pkg}
                color={service.color}
                index={i}
                onQuote={() => window.open(WA_URL, "_blank")}
              />
            ))}
          </div>

          {/* Custom package note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-ghost font-medium mb-1">Need something different?</p>
              <p className="text-mist text-sm">
                Every business is unique. We build fully custom packages around your goals, budget, and timeline.
              </p>
            </div>
            <button
              onClick={() => window.open(WA_URL, "_blank")}
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-electric text-white text-sm font-mono uppercase tracking-widest hover:bg-electric/90 transition-colors rounded-xl"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <CTABanner />

      {/* Single modal at page level */}
    </>
  );
}
