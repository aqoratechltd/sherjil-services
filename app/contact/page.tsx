import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sherjil Services. Book a service or ask us anything.",
};

export default function ContactPage() {
  return <ContactClient />;
}
