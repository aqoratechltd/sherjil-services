import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/utils";
import ServicePageClient from "./ServicePageClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Sherjil Services`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
