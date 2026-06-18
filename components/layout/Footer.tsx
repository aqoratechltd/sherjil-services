"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_PHONE, CONTACT_EMAIL, WA_URL } from "@/lib/utils";

const FOOTER_LINKS = {
  "Services": [
    { label: "Passport Application / Renewal", href: "/services/us-passport" },
    { label: "I-130 Visa Petition", href: "/services/i130-visa" },
    { label: "Pakistani Passport", href: "/services/pk-passport" },
    { label: "NICOP Application", href: "/services/nicop" },
    { label: "Digital Account Opening", href: "/services/digital-account" },
    { label: "Resume Writing", href: "/services/resume-normal" },
    { label: "Travel Visa (e-Visa)", href: "/travel#travel-visa" },
  ],
  "Other Services": [
    { label: "Green Card Renewal", href: "/services/green-card-renewal" },
    { label: "Citizenship Application", href: "/services/citizenship-application" },
    { label: "Fee Waiver Assistance", href: "/services/green-card-waiver" },
    { label: "Stock Market Training", href: "/services/stock-basic" },
    { label: "Job Hunt Support", href: "/services/job-hunt" },
    { label: "Trip Planning", href: "/travel#trip-planning" },
    { label: "Hotel Booking Service", href: "/travel#hotel-booking" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "All Services", href: "/services" },
    { label: "Packages & Deals", href: "/packages" },
    { label: "Travel Services", href: "/travel" },
    { label: "Contact", href: "/contact" },
    { label: "WhatsApp Us", href: WA_URL },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-obsidian">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span
                className="font-display font-bold text-xl text-ghost tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sherjil Services
              </span>
            </Link>
            <p className="text-mist text-sm leading-relaxed max-w-sm mb-6">
              Professional assistance for U.S. immigration, Pakistani documents, financial services, and career support — all in one place.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="block text-sm text-mist hover:text-electric transition-colors"
              >
                {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm text-mist hover:text-electric transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
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
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
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
        <div className="mt-10 md:mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke font-mono" style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Sherjil Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-smoke hover:text-mist transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
