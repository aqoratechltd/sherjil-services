import { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why Us",
  description: "What makes Aqora different from every other marketing agency.",
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}
