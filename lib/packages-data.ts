export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number | null;
  savePercent: number | null;
  saveAmount: number | null;
  color: string;
  icon: string;
  includedServiceIds: string[];
  highlighted?: boolean;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "travel-starter",
    name: "Travel Starter Package",
    tagline: "Essential travel services including visa assistance and one week of trip planning.",
    price: 160,
    originalPrice: 175,
    savePercent: 9,
    saveAmount: 15,
    color: "#8B5CF6",
    icon: "Plane",
    includedServiceIds: ["travel-visa", "trip-planning"],
  },
  {
    id: "travel-complete",
    name: "Travel Complete Package",
    tagline: "Comprehensive travel support with visa, planning, and hotel booking coordination.",
    price: 225,
    originalPrice: 260,
    savePercent: 13,
    saveAmount: 35,
    color: "#8B5CF6",
    icon: "Map",
    includedServiceIds: ["travel-visa", "trip-planning", "hotel-booking"],
    highlighted: true,
  },
  {
    id: "pakistan-documentation",
    name: "Pakistan Documentation Package",
    tagline: "Complete Pakistani documentation support including passport and NADRA certification.",
    price: 125,
    originalPrice: 150,
    savePercent: 17,
    saveAmount: 25,
    color: "#10B981",
    icon: "BookOpen",
    includedServiceIds: ["pk-passport", "nicop"],
  },
  {
    id: "immigration-premium",
    name: "Immigration Premium Package",
    tagline: "Complete I-130 and sponsor form assistance for family-based immigration.",
    price: 325,
    originalPrice: 350,
    savePercent: 7,
    saveAmount: 25,
    color: "#0066FF",
    icon: "Globe",
    includedServiceIds: ["i130-visa", "sponsor-form"],
    highlighted: true,
  },
  {
    id: "career-upgrade",
    name: "Career Upgrade Package",
    tagline: "Professional resume writing combined with comprehensive job hunt support.",
    price: 550,
    originalPrice: 600,
    savePercent: 8,
    saveAmount: 50,
    color: "#EC4899",
    icon: "Briefcase",
    includedServiceIds: ["resume-professional", "job-hunt"],
  },
  {
    id: "financial-starter",
    name: "Financial Starter Package",
    tagline: "Money transfer setup and digital account opening for financial independence.",
    price: 90,
    originalPrice: 100,
    savePercent: 10,
    saveAmount: 10,
    color: "#F59E0B",
    icon: "ArrowLeftRight",
    includedServiceIds: ["money-transfer", "digital-account"],
  },
  {
    id: "investor-beginner",
    name: "Investor Beginner Package",
    tagline: "Stock market account opening with premium training for first-time investors.",
    price: 200,
    originalPrice: null,
    savePercent: null,
    saveAmount: null,
    color: "#F59E0B",
    icon: "BarChart2",
    includedServiceIds: ["stock-premium"],
  },
];
