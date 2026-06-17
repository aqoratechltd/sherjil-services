"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Map, BedDouble, ArrowRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABanner from "@/components/sections/CTABanner";
import { WA_URL } from "@/lib/utils";

const TRAVEL_COLOR = "#8B5CF6";

const SERVICES = [
  {
    id: "travel-visa",
    Icon: Plane,
    title: "Travel Visa (e-Visa) Assistance",
    category: "Travel",
    price: "$50",
    priceNote: "per application",
    description:
      "Expert e-visa application support for seamless international travel. Our specialists guide you through every step of the process — from eligibility to approval.",
    features: [
      "Eligibility check for your destination country",
      "e-Visa application form completion",
      "Document checklist and preparation",
      "Photo and passport scan requirements",
      "Application submission support",
      "Status tracking until approval",
      "Multiple countries supported",
    ],
    process: ["Eligibility Check", "Document Prep", "Form Completion", "Submission", "Tracking & Approval"],
  },
  {
    id: "trip-planning",
    Icon: Map,
    title: "Trip Planning",
    category: "Travel",
    price: "$125",
    priceNote: "per week",
    description:
      "Comprehensive weekly itinerary planning tailored to your preferences and travel style. Our travel experts create detailed day-by-day plans so you can focus on enjoying the journey.",
    features: [
      "Personalized day-by-day itinerary",
      "Destination and activity recommendations",
      "Transport and connection planning",
      "Budget estimation and breakdown",
      "Restaurant and attraction suggestions",
      "Cultural tips and travel advice",
      "Printable / shareable itinerary format",
    ],
    process: ["Preferences Call", "Research & Planning", "Itinerary Draft", "Review & Revisions", "Final Delivery"],
  },
  {
    id: "hotel-booking",
    Icon: BedDouble,
    title: "Hotel Booking Service",
    category: "Travel",
    price: "$15",
    priceNote: "per night",
    description:
      "Professional hotel research, comparison, and booking assistance to secure the best accommodations at optimal rates. We find the right stay for your budget and preferences.",
    features: [
      "Hotel research based on your budget",
      "Location and amenity comparison",
      "Best-rate guarantee research",
      "Booking confirmation and documentation",
      "Cancellation policy review",
      "Alternative options provided",
      "Support for all major booking platforms",
    ],
    process: ["Requirement Briefing", "Research & Compare", "Options Presented", "Booking Confirmation", "Documentation Sent"],
  },
];

export default function TravelClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: TRAVEL_COLOR }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-widest mb-6"
            style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-mono)" }}
          >
            Travel Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Travel Smarter.
            <br />
            <span style={{ color: TRAVEL_COLOR }}>Stress-Free.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist max-w-2xl leading-relaxed mb-10"
          >
            From visa applications to full trip itineraries and hotel bookings — we handle every detail so you can focus on the experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() => window.open(WA_URL, "_blank")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base electric-glow"
              style={{ backgroundColor: TRAVEL_COLOR }}
            >
              Book a Travel Service
            </MagneticButton>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-4 rounded-xl glass border border-white/[0.08] text-ghost text-base font-medium hover:border-white/20 transition-colors"
            >
              Ask a Question
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Pricing summary strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border"
                style={{ borderColor: `${TRAVEL_COLOR}30`, backgroundColor: `${TRAVEL_COLOR}08` }}
              >
                <s.Icon className="w-4 h-4" style={{ color: TRAVEL_COLOR }} />
                <span className="text-sm text-ghost font-medium">{s.title}</span>
                <span
                  className="text-sm font-mono font-bold"
                  style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-mono)" }}
                >
                  {s.price}
                  <span className="text-xs text-smoke font-normal ml-1">{s.priceNote}</span>
                </span>
              </div>
            ))}
          </motion.div>

          {/* Individual service sections */}
          <div className="space-y-24">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                id={service.id}
                className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start"
              >
                {/* Left — info */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${TRAVEL_COLOR}15`, border: `1px solid ${TRAVEL_COLOR}30` }}
                    >
                      <service.Icon className="w-6 h-6" style={{ color: TRAVEL_COLOR }} />
                    </div>
                    <span
                      className="text-xs font-mono uppercase tracking-widest"
                      style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-mono)" }}
                    >
                      {service.category}
                    </span>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-ghost leading-tight mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>

                  <p className="text-mist leading-relaxed mb-8">{service.description}</p>

                  {/* Price badge */}
                  <div
                    className="inline-flex items-baseline gap-2 px-5 py-3 rounded-xl mb-8 border"
                    style={{ borderColor: `${TRAVEL_COLOR}25`, backgroundColor: `${TRAVEL_COLOR}08` }}
                  >
                    <span className="text-xs text-smoke font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                      Starting Price
                    </span>
                    <span
                      className="text-3xl font-display font-extrabold"
                      style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-display)" }}
                    >
                      {service.price}
                    </span>
                    <span className="text-xs text-smoke">{service.priceNote}</span>
                  </div>

                  <MagneticButton
                    onClick={() =>
                      window.open(
                        `${WA_URL}?text=${encodeURIComponent(`Hi! I'd like to book: ${service.title}.`)}`,
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm"
                    style={{ backgroundColor: TRAVEL_COLOR }}
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>

                {/* Right — features + process */}
                <div className={`space-y-8 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* What's included */}
                  <div className="glass border border-white/[0.06] rounded-2xl p-6">
                    <h3
                      className="text-sm font-mono uppercase tracking-widest mb-5"
                      style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-mono)" }}
                    >
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: TRAVEL_COLOR }}
                          />
                          <span className="text-sm text-mist leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="glass border border-white/[0.06] rounded-2xl p-6">
                    <h3
                      className="text-sm font-mono uppercase tracking-widest mb-5"
                      style={{ color: TRAVEL_COLOR, fontFamily: "var(--font-mono)" }}
                    >
                      How It Works
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono"
                            style={{
                              backgroundColor: `${TRAVEL_COLOR}12`,
                              border: `1px solid ${TRAVEL_COLOR}25`,
                              color: TRAVEL_COLOR,
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                              style={{ backgroundColor: `${TRAVEL_COLOR}30` }}
                            >
                              {i + 1}
                            </span>
                            {step}
                          </span>
                          {i < service.process.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-smoke flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
