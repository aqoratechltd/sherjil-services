"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";

const NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_DROPDOWN = [
  { label: "Ecommerce Solutions", href: "/services/ecommerce", tag: "Hot" },
  { label: "Social Media Marketing (SMM)", href: "/services/smm" },
  { label: "SEO", href: "/services/seo" },
  { label: "Web & App Development", href: "/services/development" },
  { label: "Performance Marketing", href: "/services/performance-marketing", tag: "Ads" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Branding", href: "/services/branding" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[9000] transition-all duration-500",
          scrolled
            ? "py-3 glass border-b border-white/[0.06]"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-electric rounded-lg electric-glow group-hover:scale-110 transition-transform duration-300" />
                <Zap className="absolute inset-0 m-auto w-4 h-4 text-white" />
              </div>
              <span
                className="font-display font-bold text-lg text-ghost tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aqora
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        "text-mist hover:text-ghost"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          dropdownOpen && "rotate-180"
                        )}
                      />

                      {/* Mega Dropdown */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 glass rounded-2xl p-3 border border-white/[0.08]"
                          >
                            <div className="grid grid-cols-1 gap-0.5">
                              {SERVICE_DROPDOWN.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-mist hover:text-ghost hover:bg-white/[0.04] transition-colors duration-150 group"
                                >
                                  <span>{service.label}</span>
                                  {service.tag && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-electric/20 text-electric-glow border border-electric/20">
                                      {service.tag}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "text-ghost"
                          : "text-mist hover:text-ghost"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <MagneticButton
                className="px-5 py-2 rounded-xl bg-electric hover:bg-electric-dim text-white text-sm font-medium transition-colors duration-200 electric-glow"
                onClick={() => window.open("https://calendly.com/your-agency/30min", "_blank")}
              >
                Book a Free Call
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-mist hover:text-ghost transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[8999] bg-obsidian/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full px-6 pt-24 pb-8">
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-2xl font-display font-bold text-mist hover:text-ghost transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => window.open("https://calendly.com/your-agency/30min", "_blank")}
                  className="w-full py-4 rounded-xl bg-electric text-white font-medium text-lg electric-glow"
                >
                  Book a Free Call →
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
