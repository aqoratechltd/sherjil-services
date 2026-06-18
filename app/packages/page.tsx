import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Packages & Deals",
  description:
    "Curated bundles of complementary Sherjil Services — travel, documentation, immigration, financial, and career packages with exclusive pricing.",
};

export default function PackagesPage() {
  return <PackagesClient />;
}
