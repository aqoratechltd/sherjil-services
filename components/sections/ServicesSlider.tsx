"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/utils";

const CATEGORY_ORDER = ["Immigration", "Pakistan Docs", "Financial", "Career"];

// Group services by category in a flat ordered list
const ORDERED_SERVICES = CATEGORY_ORDER.flatMap((cat) =>
  SERVICES.filter((s) => s.category === cat)
);

export default function ServicesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono text-smoke uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              All Services &amp; Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-ghost leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Our Packages
            </motion.h2>
          </div>

          {/* Scroll arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-mist hover:text-ghost hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-mist hover:text-ghost hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          paddingLeft: "clamp(1.5rem, 6vw, 3rem)",
          paddingRight: "clamp(1.5rem, 6vw, 3rem)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {ORDERED_SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            style={{ flexShrink: 0, width: 296 }}
          >
            <div className="relative rounded-2xl p-4 sm:p-6 border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col group">
              {/* Top color line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}55, transparent)`,
                }}
              />

              {/* Category */}
              <span
                className="text-[10px] font-mono uppercase tracking-widest mb-4 block"
                style={{ color: service.color, fontFamily: "var(--font-mono)" }}
              >
                {service.category}
              </span>

              {/* Title */}
              <h3
                className="font-display font-bold text-ghost text-base leading-tight mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-mist text-sm leading-relaxed mb-5 flex-1">
                {service.description.length > 100
                  ? service.description.slice(0, 100) + "…"
                  : service.description}
              </p>

              {/* Price */}
              <div className="mb-5">
                <p
                  className="text-[10px] font-mono text-smoke uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Price
                </p>
                <p
                  className="font-display font-bold text-xl"
                  style={{ color: service.color, fontFamily: "var(--font-display)" }}
                >
                  {service.price}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest transition-all group-hover:gap-3 whitespace-nowrap"
                style={{ color: service.color, fontFamily: "var(--font-mono)" }}
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
