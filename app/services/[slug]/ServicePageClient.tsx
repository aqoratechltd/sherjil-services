"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle2, Brain,
  Globe, FileText, Clipboard, CreditCard, ShieldCheck, Award, BadgeCheck,
  Users, Building2, ArrowLeftRight, TrendingUp, BarChart2, Sparkles, Briefcase,
  BookOpen, FileSignature, Plane, Map, BedDouble,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, WA_URL } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Globe, FileText, Clipboard, CreditCard, ShieldCheck, Award, BadgeCheck,
  Users, Building2, ArrowLeftRight, TrendingUp, BarChart2, Sparkles, Briefcase, Brain,
  BookOpen, FileSignature, Plane, Map, BedDouble,
};

const waUrl = (service: string) =>
  `${WA_URL}?text=${encodeURIComponent(`Hi! I'd like to book: ${service}.`)}`;

const SERVICE_DETAILS: Record<string, { features: string[]; process: string[]; tags: string[] }> = {
  "us-passport": {
    features: [
      "New passport application or renewal assistance",
      "Document checklist and preparation guidance",
      "Conditional intake: new vs. renewal workflow",
      "Secure document review and verification",
      "Form DS-11 / DS-82 completion support",
      "Photo requirement guidance",
      "Submission tracking assistance",
    ],
    process: ["Inquiry", "New or Renewal Check", "Document Upload", "Form Completion", "Submission"],
    tags: ["USCIS", "DS-11", "DS-82", "Passport Renewal"],
  },
  "i130-visa": {
    features: [
      "I-130 Petition for Alien Relative filing support",
      "Family-based immigration guidance",
      "Evidence compilation and checklist",
      "Supporting document preparation",
      "Filing fee guidance",
      "Status follow-up assistance",
      "Priority Date tracking",
    ],
    process: ["Eligibility Check", "Document Gathering", "Form I-130 Completion", "Filing", "Follow-up"],
    tags: ["I-130", "Family Petition", "USCIS", "Immigration"],
  },
  "sponsor-form": {
    features: [
      "Form I-864 Affidavit of Support preparation",
      "Income documentation guidance",
      "Household size calculation",
      "Supporting evidence assembly",
      "Joint sponsor arrangement guidance",
      "Review before submission",
    ],
    process: ["Income Assessment", "Document Collection", "I-864 Completion", "Evidence Review", "Submission Ready"],
    tags: ["I-864", "Affidavit of Support", "USCIS", "Sponsorship"],
  },
  "green-card-renewal": {
    features: [
      "Form I-90 (Green Card Renewal) completion",
      "Eligibility confirmation",
      "Biometrics appointment guidance",
      "Document checklist preparation",
      "Secure document upload support",
      "Status monitoring assistance",
    ],
    process: ["Eligibility Check", "I-90 Form Prep", "Document Upload", "Biometrics Guidance", "Status Tracking"],
    tags: ["I-90", "Green Card", "Permanent Resident", "USCIS"],
  },
  "green-card-waiver": {
    features: [
      "Form I-912 (Fee Waiver) preparation",
      "Income and hardship documentation",
      "Supporting evidence structural indexing",
      "Eligibility assessment",
      "Submission package preparation",
    ],
    process: ["Eligibility Review", "Hardship Documentation", "I-912 Completion", "Evidence Package", "Submission"],
    tags: ["I-912", "Fee Waiver", "Green Card", "USCIS"],
  },
  "citizenship-application": {
    features: [
      "Form N-400 (Naturalization) completion",
      "Eligibility check (5-year / 3-year rule)",
      "Civics test preparation resources",
      "Document checklist and review",
      "Interview preparation tips",
      "Status tracking guidance",
    ],
    process: ["Eligibility Check", "N-400 Preparation", "Document Review", "Interview Prep", "Oath Ceremony Guidance"],
    tags: ["N-400", "Naturalization", "Citizenship", "USCIS"],
  },
  "citizenship-waiver": {
    features: [
      "Form N-912 (Citizenship Fee Waiver) preparation",
      "Income verification documentation",
      "Background documentation compilation",
      "Waiver eligibility assessment",
      "Submission package review",
    ],
    process: ["Eligibility Assessment", "N-912 Completion", "Income Documentation", "Evidence Package", "Submission"],
    tags: ["N-912", "Fee Waiver", "Citizenship", "USCIS"],
  },
  "pk-passport": {
    features: [
      "New Pakistani passport application support",
      "Passport renewal assistance (standard & urgent)",
      "Document checklist preparation",
      "Form filling and review",
      "Photo requirement guidance",
      "Online application portal walkthrough",
      "Remote handling — no travel required",
    ],
    process: ["Initial Inquiry", "New or Renewal Check", "Document Preparation", "Application Submission", "Tracking & Delivery"],
    tags: ["Pakistani Passport", "Nadra", "Renewal", "Pakistan Docs"],
  },
  "nicop": {
    features: [
      "NICOP new application assistance",
      "NICOP renewal support",
      "Nadra online portal guidance",
      "Document checklist and verification",
      "Biometric requirements guidance",
      "Form B and supporting documents review",
      "Remote handling — no visit to Pakistan required",
    ],
    process: ["Eligibility Check", "Document Checklist", "Application Form", "Nadra Submission", "Card Delivery Tracking"],
    tags: ["NICOP", "Nadra", "Overseas Pakistanis", "Identity Card"],
  },
  "power-of-attorney": {
    features: [
      "POA document drafting and review",
      "General and special POA preparation",
      "Notarization and attestation guidance",
      "Embassy or consulate attestation support",
      "Pakistan MOFA attestation guidance",
      "Remote handling for overseas Pakistanis",
    ],
    process: ["Purpose Assessment", "Document Drafting", "Notarization Guidance", "Attestation", "Final Delivery"],
    tags: ["Power of Attorney", "POA", "MOFA", "Attestation"],
  },
  "nadra-services": {
    features: [
      "Nadra Identity Card (CNIC) assistance",
      "Family Registration Certificate (FRC)",
      "Birth, death, and marriage certificate support",
      "Nadra online portal guidance",
      "Document verification and correction support",
      "Remote support for overseas Pakistanis",
    ],
    process: ["Needs Assessment", "Document Collection", "Application Preparation", "Nadra Submission", "Follow-up & Delivery"],
    tags: ["Nadra", "CNIC", "FRC", "Pakistan Documents"],
  },
  "digital-account": {
    features: [
      "Step-by-step remote bank account setup",
      "HBL, Meezan, UBL, or other bank guidance",
      "Online/app-based account provisioning",
      "Account verification and activation support",
      "Easypaisa / JazzCash digital wallet setup",
      "Document requirements guidance",
    ],
    process: ["Bank Selection", "Document Prep", "Application Walkthrough", "Verification", "Account Activated"],
    tags: ["HBL", "Meezan", "Easypaisa", "JazzCash", "Pakistan Banking"],
  },
  "money-transfer": {
    features: [
      "International money transfer platform setup",
      "Remittance routing optimization",
      "Wise, Remitly, or local platform setup",
      "Account verification and linking",
      "Transfer testing and confirmation",
      "Best rate guidance",
    ],
    process: ["Platform Selection", "Account Setup", "Verification", "Test Transfer", "Ongoing Support"],
    tags: ["Wise", "Remitly", "Global Remittance", "Money Transfer"],
  },
  "stock-basic": {
    features: [
      "Stock market brokerage account setup",
      "PSX (Pakistan Stock Exchange) registration",
      "CDC account opening",
      "1 foundational training session (live)",
      "Market basics: how stocks work",
      "Portfolio setup guidance",
      "Post-session Q&A",
    ],
    process: ["Account Registration", "CDC Setup", "KYC Completion", "Training Session", "Portfolio Guidance"],
    tags: ["PSX", "CDC", "Brokerage", "Stock Market", "Basic Training"],
  },
  "stock-premium": {
    features: [
      "Stock market brokerage account setup",
      "PSX + CDC account opening",
      "Multi-part live training curriculum",
      "Intermediate-level investment strategies",
      "Technical analysis fundamentals",
      "Risk management training",
      "Ongoing email support post-training",
    ],
    process: ["Account Setup", "CDC Registration", "Curriculum Schedule", "Multi-Session Training", "Support Access"],
    tags: ["PSX", "CDC", "Premium Training", "Investment Strategy", "Technical Analysis"],
  },
  "resume-normal": {
    features: [
      "Professional structural layout redesign",
      "Modern formatting optimization",
      "Content narrative enhancement",
      "PDF/DOCX existing resume intake required",
      "ATS-friendly formatting",
      "1 revision round",
      "48–72 hr turnaround",
    ],
    process: ["Resume Upload", "Content Review", "Rewrite & Format", "Revision", "Delivery"],
    tags: ["Resume", "ATS", "Job Search", "Formatting"],
  },
  "resume-professional": {
    features: [
      "High-impact professional resume re-engineering",
      "Corporate industry positioning",
      "Algorithmic ATS keyword tuning",
      "Multi-slot file upload and job spec intake",
      "Target job description analysis",
      "2 revision rounds",
      "Cover letter guidance",
    ],
    process: ["Resume & Job Spec Upload", "Industry Analysis", "ATS Optimization", "Rewrite", "Revisions & Delivery"],
    tags: ["Professional Resume", "ATS", "Corporate", "Keyword Optimization"],
  },
  "job-hunt": {
    features: [
      "All-inclusive job search strategy",
      "Pipeline optimization and tracking",
      "Hands-on application submission support",
      "LinkedIn profile optimization",
      "Interview preparation coaching",
      "15-min discovery call or full career questionnaire",
      "Dedicated support for the duration",
    ],
    process: ["Discovery Call / Questionnaire", "Strategy Design", "Application Pipeline", "Interview Prep", "Offer Negotiation Guidance"],
    tags: ["Job Hunt", "LinkedIn", "Career Strategy", "Interview Prep"],
  },
};

const DEFAULT_DETAILS = {
  features: [
    "Professional end-to-end handling",
    "Dedicated support team",
    "Clear step-by-step process",
    "Document review and preparation",
    "Status tracking and follow-up",
    "Remote-ready — no travel required",
  ],
  process: ["Inquiry", "Document Preparation", "Application", "Review", "Completion"],
  tags: ["Sherjil Services", "Professional Assistance"],
};

interface Props {
  service: (typeof SERVICES)[0];
}

export default function ServicePageClient({ service }: Props) {
  const Icon = ICON_MAP[service.icon] || Brain;
  const details = SERVICE_DETAILS[service.id] || DEFAULT_DETAILS;
  const related = SERVICES.filter((s) => s.id !== service.id && s.category === service.category).slice(0, 4);
  const moreRelated = related.length < 4
    ? [...related, ...SERVICES.filter((s) => s.id !== service.id && s.category !== service.category)].slice(0, 4)
    : related;

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
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-mist hover:text-ghost transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
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
                  Book This Service
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
                <h3 className="font-display font-bold text-ghost text-xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {service.title}
                </h3>
                <p className="text-mist text-sm mb-2">{service.category}</p>
                <p
                  className="text-2xl font-display font-extrabold mb-6"
                  style={{ color: service.color, fontFamily: "var(--font-display)" }}
                >
                  {service.price}
                </p>
                <div className="flex flex-wrap gap-2">
                  {details.tags.map((t) => (
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

      {/* Features & Process */}
      <section className="py-14 md:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)" }}>
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

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-6 md:mb-8" style={{ fontFamily: "var(--font-display)" }}>
                How It Works
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
      {moreRelated.length > 0 && (
        <section className="py-14 md:py-24 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ghost mb-8 md:mb-10" style={{ fontFamily: "var(--font-display)" }}>
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {moreRelated.map((s) => {
                const RelIcon = ICON_MAP[s.icon] || Brain;
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="group p-5 rounded-xl glass border border-white/[0.06] hover:border-electric/20 transition-all duration-200"
                  >
                    <RelIcon className="w-6 h-6 mb-3" style={{ color: s.color }} />
                    <p className="font-medium text-ghost text-sm group-hover:text-white transition-colors">{s.title}</p>
                    <p className="text-xs text-smoke mt-1">{s.category}</p>
                    <p className="text-xs font-mono mt-2" style={{ color: s.color, fontFamily: "var(--font-mono)" }}>{s.price}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
