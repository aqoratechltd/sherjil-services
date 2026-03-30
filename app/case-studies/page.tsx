import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Aqora",
  description: "See how we help bold brands grow.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32">
      <div className="text-center">
        <h1 className="text-5xl font-display font-extrabold text-ghost mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Case Studies
        </h1>
        <p className="text-mist text-lg">Coming soon.</p>
      </div>
    </div>
  );
}
