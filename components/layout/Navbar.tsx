"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Zap, Sun, Moon,
  Palette, Video, Search, TrendingUp, Globe, Share2, Film,
  Star, Code, Award, Camera, Layers, ShoppingBag, Package,
  Brain, Server, Cloud, Network, Database, Sparkles,
  ShoppingCart, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";
import { useTheme } from "@/components/ui/ThemeProvider";

const NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const MENU_SECTIONS = [
  {
    heading: "Core Services",
    color: "#0066FF",
    Icon: Zap,
    items: [
      { label: "Ecommerce Solutions",       href: "/services/ecommerce",            tag: "Hot",  Icon: ShoppingCart },
      { label: "Social Media Marketing",     href: "/services/smm",                             Icon: Share2      },
      { label: "SEO",                        href: "/services/seo",                             Icon: Search      },
      { label: "Web & App Development",      href: "/services/development",                     Icon: Code        },
      { label: "Performance Marketing",      href: "/services/performance-marketing", tag: "Ads", Icon: TrendingUp  },
      { label: "Lead Generation",            href: "/services/lead-generation",                 Icon: Globe       },
      { label: "Branding",                   href: "/services/branding",                        Icon: Award       },
    ],
  },
  {
    heading: "Creative & Design",
    color: "#EC4899",
    Icon: Palette,
    items: [
      { label: "Graphic Design",       href: "/services/graphic-design",       Icon: Palette },
      { label: "Video Editing",         href: "/services/video-editing",         Icon: Video   },
      { label: "Video Production",      href: "/services/video-production",      Icon: Film    },
      { label: "Influencer Content",    href: "/services/influencer-content",    Icon: Star    },
      { label: "Content Creation",      href: "/services/content-creation",      Icon: Camera  },
      { label: "Brand Identity",        href: "/services/brand-identity",        Icon: Award   },
    ],
  },
  {
    heading: "Marketing & Growth",
    color: "#06B6D4",
    Icon: TrendingUp,
    items: [
      { label: "Digital Marketing",    href: "/services/digital-marketing",        Icon: Globe       },
      { label: "Social Media",          href: "/services/social-media-marketing",   Icon: Share2      },
      { label: "Performance Ads",       href: "/services/performance-ads",          Icon: TrendingUp  },
      { label: "SEO Packages",          href: "/services/seo-packages",             Icon: Search      },
      { label: "Advanced Marketing",    href: "/services/marketing-advanced",       Icon: Layers      },
      { label: "E-Commerce Support",    href: "/services/ecommerce-support",        Icon: ShoppingBag },
      { label: "Courier Management",    href: "/services/courier-management",       Icon: Package     },
    ],
  },
  {
    heading: "Technology & AI",
    color: "#7C3AED",
    Icon: Brain,
    items: [
      { label: "SaaS Development",     href: "/services/saas-development",   Icon: Layers,    tag: "New" },
      { label: "AI Integrations",       href: "/services/ai-integrations",    Icon: Brain,     tag: "AI"  },
      { label: "Generative AI",         href: "/services/generative-ai",      Icon: Sparkles,  tag: "AI"  },
      { label: "Website Development",   href: "/services/web-dev",            Icon: Code               },
      { label: "Blockchain Dev",         href: "/services/blockchain-dev",     Icon: Network            },
      { label: "Blockchain & Crypto",   href: "/services/blockchain-crypto",  Icon: Database           },
      { label: "Infrastructure",         href: "/services/infrastructure",     Icon: Server             },
      { label: "Cloud Architecture",    href: "/services/cloud-design",       Icon: Cloud              },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

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
          scrolled ? "py-3 bg-obsidian" : "py-6 bg-transparent"
        )}
      >
        {/* Inner container — relative so mega menu positions against it */}
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 relative"
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group overflow-hidden flex items-center" style={{ height: '28px', width: '140px' }}>
              <Image
                src="/logo.png"
                alt="Aqora"
                width={400}
                height={135}
                className="w-[400px] h-auto group-hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
                style={{ marginTop: '-48px', marginBottom: '-48px' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        dropdownOpen ? "text-ghost" : "text-mist hover:text-ghost"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          dropdownOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        pathname === link.href ? "text-ghost" : "text-mist hover:text-ghost"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggle}
                aria-label="Toggle light/dark mode"
                className="w-9 h-9 rounded-lg border border-white/[0.08] bg-obsidian flex items-center justify-center text-mist hover:text-ghost hover:border-electric/30 transition-all duration-200"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <MagneticButton
                className="px-5 py-2 rounded-xl bg-electric hover:bg-electric-dim text-white text-sm font-medium transition-colors duration-200 electric-glow"
                onClick={() => window.open("https://wa.me/923273001777", "_blank")}
              >
                Book a Free Call
              </MagneticButton>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle light/dark mode"
                className="p-2 rounded-lg text-mist hover:text-ghost transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-mist hover:text-ghost transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* ── Mega Menu ── */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setDropdownOpen(true)}
                className="absolute top-full left-0 right-0 mt-3 bg-obsidian border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

                <div className="grid grid-cols-4 divide-x divide-white/[0.05]">
                  {MENU_SECTIONS.map((section) => (
                    <div key={section.heading} className="p-5">
                      {/* Section heading */}
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${section.color}18`, border: `1px solid ${section.color}30` }}
                        >
                          <section.Icon className="w-3 h-3" style={{ color: section.color }} />
                        </div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold"
                          style={{ color: section.color, fontFamily: "var(--font-mono)" }}
                        >
                          {section.heading}
                        </span>
                      </div>

                      {/* Items */}
                      <ul className="space-y-0.5">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-sm text-mist hover:text-ghost hover:bg-white/[0.05] transition-all duration-150"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <item.Icon
                                  className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                                  style={{ color: section.color }}
                                />
                                <span className="truncate">{item.label}</span>
                              </div>
                              {item.tag && (
                                <span
                                  className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full flex-shrink-0"
                                  style={{
                                    backgroundColor: `${section.color}18`,
                                    color: section.color,
                                    border: `1px solid ${section.color}30`,
                                    fontFamily: "var(--font-mono)",
                                  }}
                                >
                                  {item.tag}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="border-t border-white/[0.05] px-5 py-3 flex items-center justify-between bg-white/[0.01]">
                  <p className="text-xs text-smoke">
                    22 services across 4 categories
                  </p>
                  <Link
                    href="/services"
                    className="flex items-center gap-1.5 text-xs text-electric hover:text-electric/80 transition-colors font-mono uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    View All Services
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            className="mobile-menu-bg fixed inset-0 z-[8999] bg-obsidian lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-6 pt-24 pb-8">
              <nav className="flex flex-col gap-1 flex-1">
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

                {/* Mobile service categories */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-2"
                >
                  {MENU_SECTIONS.map((section) => (
                    <div key={section.heading}>
                      <p
                        className="text-[10px] font-mono uppercase tracking-widest mb-2 px-1"
                        style={{ color: section.color, fontFamily: "var(--font-mono)" }}
                      >
                        {section.heading}
                      </p>
                      {section.items.slice(0, 4).map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1.5 px-1 text-sm text-smoke hover:text-ghost transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <button
                  onClick={() => window.open("https://wa.me/923273001777", "_blank")}
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
