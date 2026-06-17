import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_PHONE = "+1 (734) 767-3999";
export const CONTACT_EMAIL = "info@sherjil.us";
export const WA_URL = "https://wa.me/17347673999";

export const SERVICES = [
  // US Immigration & Travel
  {
    id: "us-passport",
    title: "U.S. Passport Application or Renewal",
    description: "Professional assistance with U.S. passport applications and renewals — new applicants and renewals handled with care.",
    icon: "Globe",
    color: "#0066FF",
    category: "Immigration",
    price: "$50",
    featured: true,
  },
  {
    id: "i130-visa",
    title: "I-130 Visa Petition Assistance",
    description: "Comprehensive structural support for formal I-130 family-based immigration legal petitions.",
    icon: "FileText",
    color: "#0066FF",
    category: "Immigration",
    price: "$200",
  },
  {
    id: "sponsor-form",
    title: "Sponsor Form Completion",
    description: "Expert guidance on Form I-864 Affidavit of Support documentation mapping and supporting evidence assembly.",
    icon: "Clipboard",
    color: "#0066FF",
    category: "Immigration",
    price: "$150",
  },
  {
    id: "green-card-renewal",
    title: "Green Card Renewal Assistance",
    description: "Professional lifecycle support for green card renewal application submissions (Form I-90).",
    icon: "CreditCard",
    color: "#0066FF",
    category: "Immigration",
    price: "$125",
  },
  {
    id: "green-card-waiver",
    title: "Green Card Fee Waiver Assistance",
    description: "Expert targeted assistance with green card legal fee waiver applications (Form I-912) with supporting evidence indexing.",
    icon: "ShieldCheck",
    color: "#0066FF",
    category: "Immigration",
    price: "$100",
  },
  {
    id: "citizenship-application",
    title: "Citizenship Application Assistance",
    description: "End-to-end technical support for naturalization and citizenship applications (Form N-400).",
    icon: "Award",
    color: "#0066FF",
    category: "Immigration",
    price: "$150",
  },
  {
    id: "citizenship-waiver",
    title: "Citizenship Fee Waiver Assistance",
    description: "Expert navigation of citizenship fee waiver frameworks (Form N-912) and compliant background documentation.",
    icon: "BadgeCheck",
    color: "#0066FF",
    category: "Immigration",
    price: "$100",
  },
  // Pakistan Documents & Services
  {
    id: "pk-passport",
    title: "Pakistani Passport Application or Renewal",
    description: "Complete professional support for Pakistani passport applications and renewals. Whether applying for the first time or renewing, we handle the entire process remotely.",
    icon: "BookOpen",
    color: "#10B981",
    category: "Pakistan Docs",
    price: "$50",
    featured: true,
  },
  {
    id: "nicop",
    title: "NICOP Application or Renewal",
    description: "Expert assistance with NICOP (National Identity Card for Overseas Pakistanis) applications and renewals. We guide you through every Nadra requirement step by step.",
    icon: "CreditCard",
    color: "#10B981",
    category: "Pakistan Docs",
    price: "$50",
  },
  {
    id: "power-of-attorney",
    title: "Power of Attorney (POA)",
    description: "Professional preparation and attestation of Power of Attorney documents for overseas Pakistanis — handled remotely with full legal compliance.",
    icon: "FileSignature",
    color: "#10B981",
    category: "Pakistan Docs",
    price: "Custom Quote",
  },
  {
    id: "nadra-services",
    title: "Nadra Card & Document Services",
    description: "Comprehensive Nadra assistance for identity cards, family registration certificates, and other official Pakistani documentation — for residents and overseas Pakistanis.",
    icon: "Users",
    color: "#10B981",
    category: "Pakistan Docs",
    price: "Custom Quote",
  },
  // Travel Services
  {
    id: "travel-visa",
    title: "Travel Visa (e-Visa) Assistance",
    description: "Expert e-visa application support for seamless international travel. Our specialists guide you through every step of the process — from eligibility to approval.",
    icon: "Plane",
    color: "#8B5CF6",
    category: "Travel",
    price: "$50",
    priceNote: "per application",
    featured: true,
  },
  {
    id: "trip-planning",
    title: "Trip Planning",
    description: "Comprehensive weekly itinerary planning tailored to your preferences and travel style. Our travel experts create detailed day-by-day plans so you can focus on enjoying the journey.",
    icon: "Map",
    color: "#8B5CF6",
    category: "Travel",
    price: "$125",
    priceNote: "per week",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Service",
    description: "Professional hotel research, comparison, and booking assistance to secure the best accommodations at optimal rates. We find the right stay for your budget and preferences.",
    icon: "BedDouble",
    color: "#8B5CF6",
    category: "Travel",
    price: "$15",
    priceNote: "per night",
  },
  // Financial Services
  {
    id: "digital-account",
    title: "Pakistan Digital Account Opening",
    description: "Step-by-step navigational support for provisioning remote digital bank accounts inside primary Pakistani banking structures.",
    icon: "Building2",
    color: "#F59E0B",
    category: "Financial",
    price: "$75",
  },
  {
    id: "money-transfer",
    title: "Money Transfer Setup",
    description: "Professional guidance on creating, testing, and verifying international money transfer platform routing for global remittances.",
    icon: "ArrowLeftRight",
    color: "#F59E0B",
    category: "Financial",
    price: "$25",
  },
  {
    id: "stock-basic",
    title: "Stock Market Account + Basic Training",
    description: "Complete lifecycle guidance on configuring an active stock market brokerage account with one comprehensive foundational strategy training session.",
    icon: "TrendingUp",
    color: "#F59E0B",
    category: "Financial",
    price: "$100",
  },
  {
    id: "stock-premium",
    title: "Stock Market Account + Premium Training",
    description: "Extended strategic intermediate live coaching workflows paired with brokerage account setup for an institutional-grade investment overview.",
    icon: "BarChart2",
    color: "#F59E0B",
    category: "Financial",
    price: "$200",
    featured: true,
  },
  // Career Services
  {
    id: "resume-normal",
    title: "Resume Writing (Normal)",
    description: "Professional structural layout, modern formatting optimization, and comprehensive content narrative enhancement service.",
    icon: "FileText",
    color: "#EC4899",
    category: "Career",
    price: "$50",
  },
  {
    id: "resume-professional",
    title: "Professional Resume Writing",
    description: "High-impact professional resume re-engineering with corporate industry positioning and algorithmic ATS keyword tuning.",
    icon: "Sparkles",
    color: "#EC4899",
    category: "Career",
    price: "$100",
  },
  {
    id: "job-hunt",
    title: "Job Hunt Support",
    description: "All-inclusive tactical corporate job search execution, pipeline optimization strategy, and dedicated hands-on submission tracking.",
    icon: "Briefcase",
    color: "#EC4899",
    category: "Career",
    price: "$500",
    featured: true,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Fatima R.",
    role: "US Permanent Resident",
    quote: "Sherjil Services made my Green Card renewal completely stress-free. They knew exactly what documents were needed and guided me through every step. Highly recommend!",
    avatar: "/avatars/fatima.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed K.",
    role: "Pakistani Expat, Michigan",
    quote: "Got my NICOP sorted in no time. Sherjil's team handled all the Nadra paperwork remotely without me having to travel. Absolutely worth it.",
    avatar: "/avatars/ahmed.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria S.",
    role: "Software Engineer",
    quote: "The professional resume writing service landed me 3 interviews in my first week of applying. The ATS optimization made a huge difference. Worth every penny!",
    avatar: "/avatars/maria.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar F.",
    role: "New Investor",
    quote: "The stock market training was incredibly comprehensive. I went from knowing nothing to confidently managing my own brokerage account. Sherjil is the real deal.",
    avatar: "/avatars/omar.jpg",
    rating: 5,
  },
];

export const PARTNERS = [
  "USCIS", "Nadra", "State Department", "I-90 Renewal", "N-400 Citizenship",
  "I-130 Petition", "I-864 Support", "I-912 Waiver", "PSX Pakistan", "CDC Pakistan",
  "Easypaisa", "JazzCash", "HBL", "LinkedIn", "Indeed",
];

export const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "4", label: "Service Categories" },
  { value: "21+", label: "Services Offered" },
  { value: "100%", label: "Dedicated Support" },
];
