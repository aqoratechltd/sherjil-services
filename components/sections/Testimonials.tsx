"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const cardWidth = 420;
  const gap = 24;
  const totalWidth = (cardWidth + gap) * TESTIMONIALS.length;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-extrabold text-ghost"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Results Speak
            <br />
            <span className="text-gradient-electric">Louder Than Promises</span>
          </motion.h2>
        </div>

        {/* Draggable card slider */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -totalWidth + (containerRef.current?.offsetWidth ?? 800),
            }}
            dragElastic={0.05}
            style={{ x }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                onClick={() => !isDragging && setActiveIndex(i)}
                className={cn(
                  "relative flex-shrink-0 w-[min(85vw,380px)] md:w-[420px] rounded-2xl p-6 sm:p-8 border transition-all duration-300",
                  activeIndex === i
                    ? "glass-electric border-electric/25 shadow-electric"
                    : "glass border-white/[0.06]"
                )}
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-electric text-electric" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-ghost text-base leading-relaxed mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center text-white font-bold text-sm font-display">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-ghost text-sm font-medium">{t.name}</p>
                    <p className="text-smoke text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                x.set(-i * (cardWidth + gap));
              }}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                activeIndex === i ? "w-8 bg-electric" : "w-2 bg-smoke hover:bg-mist"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
