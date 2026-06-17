import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sherjil Services — who we are, our mission, and how we help clients navigate immigration, documents, finance, and careers.",
};

export default function AboutPage() {
  return <AboutClient />;
}
