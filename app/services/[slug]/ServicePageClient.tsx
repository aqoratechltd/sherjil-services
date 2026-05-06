"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Zap,
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database,
  Link as LinkIcon, ShoppingCart, Cloud, ShieldCheck,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABanner from "@/components/sections/CTABanner";

const WA_BASE = "https://wa.me/923273001777";
const waUrl = (service: string) =>
  `${WA_BASE}?text=${encodeURIComponent(`Hi! I'd like to get a price for ${service}.`)}`;
import { SERVICES } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database,
  Link: LinkIcon, ShoppingCart, Cloud, ShieldCheck,
};

// Service-specific details
const SERVICE_DETAILS: Record<string, { features: string[]; process: string[]; tech: string[] }> = {
  "ecommerce": {
    features: [
      "Ecommerce store setup and optimization (Shopify, WooCommerce, Custom)",
      "Conversion rate optimization (CRO)",
      "Product listing and catalog management",
      "Abandoned cart recovery strategies",
      "Customer retention and loyalty programs",
      "Ecommerce SEO",
      "Email and SMS marketing for ecommerce"
    ],
    process: ["Strategy", "Setup & Optimization", "Launch", "Growth & Retention"],
    tech: ["Shopify", "WooCommerce", "Next.js", "Klaviyo", "Stripe"],
  },
  "smm": {
    features: [
      "Social media strategy and content calendar",
      "Content creation (graphics, reels, captions)",
      "Community management and engagement",
      "Instagram, Facebook, TikTok, LinkedIn, YouTube management",
      "Influencer collaboration and outreach",
      "Paid social campaigns (Meta, TikTok, LinkedIn Ads)",
      "Monthly analytics and reporting"
    ],
    process: ["Strategy", "Content Creation", "Community Management", "Paid Social", "Analytics"],
    tech: ["Meta Ads", "TikTok Ads", "Later", "Hootsuite", "Figma"],
  },
  "seo": {
    features: [
      "SEO audit and competitor analysis",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO (site speed, Core Web Vitals, schema)",
      "Link building and off-page SEO",
      "Local SEO for location-based businesses",
      "Monthly performance reporting"
    ],
    process: ["Audit", "Keyword Strategy", "On-Page & Technical", "Link Building", "Reporting"],
    tech: ["Ahrefs", "Semrush", "Google Analytics", "Google Search Console", "Screaming Frog"],
  },
  "development": {
    features: [
      "Business websites and landing pages",
      "Ecommerce store development",
      "Custom web application development",
      "iOS and Android app development",
      "UI/UX design",
      "Website maintenance and support",
      "Speed and performance optimization"
    ],
    process: ["UX/UI Design", "Frontend Dev", "Backend Integration", "QA Testing", "Launch & Maintenance"],
    tech: ["Next.js", "React Native", "Tailwind CSS", "Node.js", "Figma"],
  },
  "performance-marketing": {
    features: [
      "Google Search & Display Ads",
      "Meta Ads (Facebook & Instagram)",
      "TikTok and YouTube Ads",
      "Retargeting campaigns",
      "Landing page creation and CRO",
      "Full-funnel campaign strategy",
      "Weekly reporting and performance reviews"
    ],
    process: ["Funnel Strategy", "Ad Creation", "Campaign Launch", "A/B Testing", "Scaling"],
    tech: ["Google Ads", "Meta Ads", "TikTok Ads Manager", "Google Tag Manager", "Unbounce"],
  },
  "lead-generation": {
    features: [
      "Lead generation strategy and funnel design",
      "Landing page creation",
      "Lead magnet development",
      "Email and WhatsApp nurture sequences",
      "CRM setup and integration",
      "LinkedIn lead generation",
      "B2B and B2C lead campaigns"
    ],
    process: ["Lead Magnet Strategy", "Funnel Build", "Traffic Generation", "Nurture Sequences", "CRM Handoff"],
    tech: ["HubSpot", "Salesforce", "ActiveCampaign", "LinkedIn Ads", "Zapier"],
  },
  "branding": {
    features: [
      "Brand strategy and positioning",
      "Logo design and visual identity",
      "Brand guidelines and style guide",
      "Brand messaging and tone of voice",
      "Marketing collateral design",
      "Social media branding kit",
      "Brand refresh and rebranding"
    ],
    process: ["Discovery", "Brand Strategy", "Visual Identity Concept", "Guidelines Creation", "Rollout"],
    tech: ["Figma", "Adobe CC", "Illustrator", "Photoshop", "Canva"],
  },
};

// Default details for unlisted services
const DEFAULT_DETAILS = {
  features: [
    "End-to-end project ownership",
    "Dedicated senior engineering team",
    "Agile sprints with weekly demos",
    "Architecture review & documentation",
    "Security-first development practices",
    "Post-launch support & SLAs",
  ],
  process: ["Discovery", "Architecture", "Development", "Testing", "Launch & Support"],
  tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis", "Prisma"],
};

interface Props {
  service: (typeof SERVICES)[0];
}

export default function ServicePageClient({ service }: Props) {
  const Icon = ICON_MAP[service.icon] || Brain;
  const details = SERVICE_DETAILS[service.id] || DEFAULT_DETAILS;

  // Related services (exclude current)
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: service.color }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
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

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              {/* Category */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono uppercase tracking-widest mb-4 block"
                style={{ color: service.color, fontFamily: "var(--font-mono)" }}
              >
                {service.category}
              </motion.span>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-ghost leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-mist leading-relaxed mb-8 md:mb-10"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton
                  onClick={() => window.open(waUrl(service.title), "_blank")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm"
                  style={{ backgroundColor: service.color }}
                >
                  Start This Project
                </MagneticButton>
                <MagneticButton
                  onClick={() => window.open(waUrl(service.title), "_blank")}
                  className="px-7 py-3.5 rounded-xl text-white font-medium text-sm bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" style={{ display: 'block', flexShrink: 0 }} fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Get Price
                  </span>
                </MagneticButton>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/[0.08] text-ghost text-sm font-medium hover:border-white/20 transition-colors"
                >
                  Ask a Question
                </Link>
              </motion.div>
            </div>

            {/* Service card visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl p-6 md:p-10 glass border overflow-hidden"
                style={{ borderColor: `${service.color}25` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: `radial-gradient(ellipse at top right, ${service.color} 0%, transparent 70%)` }}
                />
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
                >
                  <Icon className="w-10 h-10" style={{ color: service.color }} />
                </div>
                <h3 className="font-display font-bold text-ghost text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {service.title}
                </h3>
                <p className="text-mist text-sm mb-6">{service.category} Division</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {details.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${service.color}10`,
                        border: `1px solid ${service.color}25`,
                        color: service.color,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* What's included */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {details.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                    <span className="text-mist leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Our Process */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Process
              </h2>
              <div className="space-y-4">
                {details.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass border border-white/[0.06]"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono flex-shrink-0"
                      style={{ backgroundColor: `${service.color}20`, color: service.color, fontFamily: "var(--font-mono)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-ghost font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 md:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((s) => {
              const RelIcon = ICON_MAP[s.icon] || Brain;
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="group p-5 rounded-xl glass border border-white/[0.06] hover:border-electric/20 transition-all duration-200"
                >
                  <RelIcon className="w-6 h-6 mb-3" style={{ color: s.color }} />
                  <p className="font-medium text-ghost text-sm group-hover:text-white transition-colors">
                    {s.title}
                  </p>
                  <p className="text-xs text-smoke mt-1">{s.category}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
