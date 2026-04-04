"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Github, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    { label: "Ecommerce Solutions", href: "/services/ecommerce" },
    { label: "Social Media Marketing", href: "/services/smm" },
    { label: "SEO", href: "/services/seo" },
    { label: "Web & App Development", href: "/services/development" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Branding", href: "/services/branding" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Call", href: "https://calendly.com/your-agency/30min" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-obsidian">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-electric rounded-lg" />
                <Zap className="absolute inset-0 m-auto w-4 h-4 text-white" />
              </div>
              <span
                className="font-display font-bold text-lg text-ghost"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aqora
              </span>
            </Link>
            <p className="text-mist text-sm leading-relaxed max-w-xs mb-6">
              Aqora — We grow bold brands online through strategy, creativity, and relentless execution.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:hello@aqora.agency" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-mist hover:text-electric hover:border-electric/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-mono text-smoke uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist hover:text-ghost transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke font-mono" style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Aqora. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-smoke hover:text-mist transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
