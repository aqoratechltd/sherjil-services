"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, CheckCircle2, AlertCircle, Mail, Phone,
  Calendar, ArrowRight,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WA_URL, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SERVICES_LIST = [
  // Immigration
  "U.S. Passport Application or Renewal",
  "I-130 Visa Petition Assistance",
  "Sponsor Form Completion",
  "Green Card Renewal Assistance",
  "Green Card Fee Waiver Assistance",
  "Citizenship Application Assistance",
  "Citizenship Fee Waiver Assistance",
  // Pakistan Docs
  "Pakistani Passport Application or Renewal",
  "NICOP Application or Renewal",
  "Power of Attorney (POA)",
  "Nadra Card & Document Services",
  // Financial
  "Pakistan Digital Account Opening",
  "Money Transfer Setup",
  "Stock Market Account + Basic Training",
  "Stock Market Account + Premium Training",
  // Career
  "Resume Writing (Normal)",
  "Professional Resume Writing",
  "Job Hunt Support",
  "Other / General Inquiry",
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.message.trim()) errors.message = "Please describe what you need";
  else if (data.message.trim().length < 20)
    errors.message = "Please provide a bit more detail (min 20 chars)";
  return errors;
}

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-graphite border border-white/[0.08] text-ghost placeholder:text-smoke text-sm focus:outline-none focus:border-electric/40 focus:bg-graphite/80 transition-all duration-200";
  const labelClass =
    "block text-xs font-mono text-mist uppercase tracking-widest mb-2";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-electric/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Get Your
            <br />
            <span className="text-gradient-electric">Service Started.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist max-w-xl leading-relaxed"
          >
            Tell us what you need and we&apos;ll get back to you quickly. You can also reach us directly by phone or WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            {/* Left — Contact info */}
            <div>
              {/* WhatsApp quick contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => window.open(WA_URL, "_blank")}
                className="group cursor-pointer p-6 rounded-2xl glass-electric border border-electric/20 hover:border-electric/40 transition-all duration-300 mb-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-electric/15 border border-electric/25 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-electric" />
                  </div>
                  <p className="font-medium text-ghost">Prefer WhatsApp?</p>
                </div>
                <p className="text-sm text-mist mb-4 leading-relaxed">
                  Message us directly on WhatsApp for a fast response — usually within a few hours.
                </p>
                <div className="flex items-center gap-2 text-sm text-electric group-hover:gap-3 transition-all">
                  Chat Now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                {[
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: CONTACT_PHONE,
                    href: WA_URL,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: CONTACT_EMAIL,
                    href: `mailto:${CONTACT_EMAIL}`,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl glass border border-white/[0.06] hover:border-electric/20 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-electric/10 group-hover:border-electric/20 transition-colors">
                      <Icon className="w-4 h-4 text-mist group-hover:text-electric transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-smoke">{label}</p>
                      <p className="text-sm text-ghost">{value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Response time */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 rounded-xl bg-electric/5 border border-electric/15"
              >
                <p className="text-xs font-mono text-electric uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  Response Time
                </p>
                <p className="text-ghost font-medium">Within a few hours</p>
                <p className="text-xs text-smoke mt-0.5">7 days a week</p>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-16 glass border border-electric/20 rounded-2xl min-h-[500px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-electric/15 border border-electric/30 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-electric" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-ghost mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      Message Sent!
                    </h3>
                    <p className="text-mist max-w-xs leading-relaxed mb-8">
                      Thanks for reaching out. We&apos;ll be in touch soon. You can also WhatsApp us for a faster response.
                    </p>
                    <button
                      onClick={() => window.open(WA_URL, "_blank")}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-electric text-white text-sm font-medium electric-glow"
                    >
                      <Calendar className="w-4 h-4" />
                      Chat on WhatsApp
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="glass border border-white/[0.08] rounded-2xl p-8 space-y-6"
                  >
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass} style={{ fontFamily: "var(--font-mono)" }}>
                          Full Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-red-400">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className={labelClass} style={{ fontFamily: "var(--font-mono)" }}>
                          Phone / WhatsApp
                        </label>
                        <input
                          name="phone"
                          type="text"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-mono)" }}>
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-mono)" }}>
                        Service You Need
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" className="bg-graphite">Select a service</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s} className="bg-graphite">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass} style={{ fontFamily: "var(--font-mono)" }}>
                        Tell us about your situation
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Describe what you need help with..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <MagneticButton
                      as="button"
                      className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-electric text-white font-medium text-base electric-glow hover:bg-electric-dim transition-colors overflow-hidden relative whitespace-nowrap"
                    >
                      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin shrink-0" />
                          <span className="relative">Sending...</span>
                        </>
                      ) : (
                        <span className="relative">Send Message</span>
                      )}
                    </MagneticButton>

                    <p className="text-center text-xs text-smoke">
                      We respond promptly. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
