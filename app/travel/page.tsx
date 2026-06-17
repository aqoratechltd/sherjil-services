import { Metadata } from "next";
import TravelClient from "./TravelClient";

export const metadata: Metadata = {
  title: "Travel Services",
  description: "Sherjil Services offers e-visa assistance, trip planning, and hotel booking — making your travel smooth and stress-free.",
};

export default function TravelPage() {
  return <TravelClient />;
}
