import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CALENDLY_URL = "https://calendly.com/your-agency/30min";

export const SERVICES = [
  {
    id: "ecommerce",
    title: "Ecommerce Solutions",
    description: "End-to-end ecommerce growth — from store setup and conversion optimization to retention strategies that turn buyers into loyal customers.",
    icon: "ShoppingCart",
    color: "#10B981",
    category: "Commerce",
    featured: true,
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    description: "Content strategies, community management, and paid social campaigns across Instagram, Facebook, TikTok, LinkedIn, and beyond.",
    icon: "Megaphone",
    color: "#EC4899",
    category: "Social",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Rank higher, attract more organic traffic, and dominate your niche with data-driven on-page, off-page, and technical SEO strategies.",
    icon: "Search",
    color: "#F59E0B",
    category: "Search",
    featured: true,
  },
  {
    id: "development",
    title: "Web & App Development",
    description: "High-performance websites and mobile apps built to convert — fast, responsive, and crafted with your brand's goals at the core.",
    icon: "Code",
    color: "#0066FF",
    category: "Development",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description: "Google Ads, Meta Ads, and multi-channel paid campaigns engineered for maximum ROI with full-funnel tracking and optimization.",
    icon: "TrendingUp",
    color: "#8B5CF6",
    category: "Ads",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "We build systems that consistently fill your pipeline with high-intent, qualified leads — so your sales team closes more with less effort.",
    icon: "LineChart",
    color: "#06B6D4",
    category: "Growth",
  },
  {
    id: "branding",
    title: "Branding",
    description: "From brand identity and logo design to messaging strategy and visual guidelines — we build brands that people remember and trust.",
    icon: "Palette",
    color: "#FF6B35",
    category: "Creative",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayesha R.",
    role: "Founder, NovaSkin Cosmetics",
    quote: "Aqora completely transformed our ecommerce store. Our revenue doubled within 3 months of working with them. The team is strategic, fast, and genuinely invested in our growth.",
    avatar: "/avatars/ayesha.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Bilal K.",
    role: "CEO, TechNest Solutions",
    quote: "Their SEO strategy took us from page 5 to the top 3 results on Google in under 4 months. Our organic traffic grew by 280%. Absolutely worth every penny.",
    avatar: "/avatars/bilal.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sara M.",
    role: "Director, LuxeHome Interiors",
    quote: "The Meta Ads campaigns they ran for our store delivered an 8x ROAS in the first month. We've tried other agencies before — Aqora is in a different league.",
    avatar: "/avatars/sara.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar F.",
    role: "Co-Founder, SwiftServe Logistics",
    quote: "From branding to web development and lead generation — Aqora handles everything for us. They feel less like an agency and more like a growth partner.",
    avatar: "/avatars/omar.jpg",
    rating: 5,
  },
];

export const PARTNERS = [
  "Shopify", "WooCommerce", "Meta", "Google Ads", "TikTok", "LinkedIn", "Vercel", "Next.js"
];

export const STATS = [
  { value: "150+", label: "Campaigns Delivered" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "3x–10x", label: "Average ROAS" },
  { value: "$50M+", label: "Revenue Generated" },
];
