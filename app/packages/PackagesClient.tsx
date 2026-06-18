"use client";

import { motion } from "framer-motion";
import {
  Plane, Map, BedDouble, BookOpen, Globe, ArrowLeftRight, BarChart2, Briefcase,
  CheckCircle2, ArrowRight, Wallet, Target, Zap,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, WA_URL } from "@/lib/utils";
import { SERVICE_PACKAGES } from "@/lib/packages-data";

const PACKAGES_COLOR = "#0066FF";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Plane, Map, BedDouble, BookOpen, Globe, ArrowLeftRight, BarChart2, Briefcase,
};

const BENEFITS = [
  {
    Icon: Wallet,
    title: "Better Value",
    description: "Save up to 17% compared to purchasing services individually.",
  },
  {
    Icon: Target,
    title: "Coordinated Support",
    description: "Seamlessly integrated services designed to work together.",
  },
  {
    Icon: Zap,
    title: "Streamlined Process",
    description: "Single point of contact for all your bundled services.",
  },
];

function serviceTitle(id: string) {
  return SERVICES.find((s) => s.id === id)?.title ?? id;
}

export default function PackagesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: PACKAGES_COLOR }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-widest mb-6"
            style={{ color: PACKAGES_COLOR, fontFamily: "var(--font-mono)" }}
          >
            Service Packages
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bundled Services.
            <br />
            <span style={{ color: PACKAGES_COLOR }}>Better Value.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist max-w-2xl leading-relaxed"
          >
            Curated bundles of complementary services with exclusive pricing and enhanced value.
          </motion.p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_PACKAGES.map((pkg, idx) => {
              const Icon = ICON_MAP[pkg.icon] ?? Briefcase;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className={[
                    "relative flex flex-col rounded-2xl p-7 border transition-all duration-300",
                    pkg.highlighted
                      ? "border-electric/40 bg-electric/[0.04] shadow-[0_0_32px_rgba(0,102,255,0.08)]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]",
                  ].join(" ")}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent rounded-t-2xl" />
                  )}

                  {pkg.savePercent && (
                    <div className="absolute -top-3 left-6">
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: pkg.color, fontFamily: "var(--font-mono)" }}
                      >
                        Save {pkg.savePercent}%
                      </span>
                    </div>
                  )}

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mt-2"
                    style={{ backgroundColor: `${pkg.color}15`, border: `1px solid ${pkg.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pkg.color }} />
                  </div>

                  <h3
                    className="font-display font-bold text-ghost text-lg mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pkg.name}
                  </h3>

                  <p className="text-sm text-mist leading-relaxed mb-6">{pkg.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="font-display font-extrabold text-3xl"
                        style={{ color: pkg.color, fontFamily: "var(--font-display)" }}
                      >
                        ${pkg.price.toFixed(2)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-smoke line-through">${pkg.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    {pkg.saveAmount && (
                      <span className="text-xs text-smoke">Save ${pkg.saveAmount.toFixed(2)}</span>
                    )}
                  </div>

                  <div className="mb-7 flex-1">
                    <p
                      className="text-[11px] font-mono uppercase tracking-widest mb-3"
                      style={{ color: pkg.color, fontFamily: "var(--font-mono)" }}
                    >
                      Services Included
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includedServiceIds.map((id) => (
                        <li key={id} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                          <span className="text-sm text-mist leading-relaxed">{serviceTitle(id)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <MagneticButton
                    onClick={() =>
                      window.open(
                        `${WA_URL}?text=${encodeURIComponent(`Hi! I'd like to book: ${pkg.name}.`)}`,
                        "_blank"
                      )
                    }
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm w-full"
                    style={{ backgroundColor: pkg.color }}
                  >
                    Select Package
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </MagneticButton>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose a Package */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-extrabold text-ghost text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Choose a Package?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {BENEFITS.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass border border-white/[0.06] rounded-2xl p-7 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: `${PACKAGES_COLOR}15`, border: `1px solid ${PACKAGES_COLOR}30` }}
                >
                  <b.Icon className="w-6 h-6" style={{ color: PACKAGES_COLOR }} />
                </div>
                <h3
                  className="font-display font-bold text-ghost text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border border-electric/20 bg-electric/[0.04] rounded-2xl p-10 text-center"
          >
            <h3
              className="text-2xl font-display font-bold text-ghost mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need a Custom Package?
            </h3>
            <p className="text-mist max-w-xl mx-auto mb-7">
              We can create a tailored bundle of services designed specifically for your unique needs and circumstances.
            </p>
            <MagneticButton
              onClick={() =>
                window.open(
                  `${WA_URL}?text=${encodeURIComponent("Hi! I'd like to request a custom package.")}`,
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric text-white font-medium text-sm electric-glow"
            >
              Request Custom Package
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
