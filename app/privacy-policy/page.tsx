import { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";
import { CONTACT_EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | Sherjil Services",
  description: "How Sherjil Services collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Sherjil Services ("we", "us", "our") is a documentation and facilitation service provider assisting clients with U.S. immigration paperwork, Pakistani document processing, financial-account setup, career services, and travel arrangements. Our primary point of contact is ${CONTACT_EMAIL}. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you provide directly — such as your name, email address, phone number, mailing address, passport or identification details, immigration case information, and other documentation required to process the service you request through a contact form, intake form, or direct correspondence.\n\nWe also collect information automatically when you browse our site, including your IP address, browser type, pages visited, referring URLs, and time spent on pages. This data is gathered via cookies and similar tracking technologies (see Section 7).`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to:\n\n• Prepare, review, and submit the documents and applications you request (e.g. passports, NICOP, visas, immigration forms, financial-account paperwork)\n• Respond to enquiries and communicate case or order status, invoices, and service updates\n• Verify your identity where required by the relevant government agency, bank, or third-party institution\n• Improve our website and understand how visitors engage with our content\n• Comply with legal obligations and resolve disputes\n• Send service-related or marketing communications where you have opted in — you may opt out at any time\n\nWe do not sell, rent, or trade your personal data to third parties for their marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `Where applicable under data-protection law (including the UK GDPR and EU GDPR), we process your personal data on the following legal bases:\n\n• Contract: to fulfil obligations under a service agreement with you\n• Legitimate interests: to respond to enquiries, improve our services, and prevent fraud\n• Consent: for marketing emails and non-essential cookies\n• Legal obligation: where we are required to comply with applicable immigration, financial, or other regulatory laws`,
  },
  {
    title: "5. Data Sharing & Third Parties",
    body: `Because our services involve submitting documents on your behalf, we may share your information with the relevant government agencies, consulates, NADRA, banks, airlines, or other institutions necessary to complete your request. We may also share information with trusted third-party service providers who assist us in operating our website and delivering our services — including cloud-hosting providers, email platforms, payment processors, and analytics tools. These providers are contractually bound to handle your data securely and only for the purposes we specify.\n\nWe may disclose information where required by law, court order, or governmental authority.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes described in this policy, complete your case, or as required by law. Client case and document data is typically retained for 5 years after case completion for record-keeping and legal purposes. You may request deletion at any time (see Section 9).`,
  },
  {
    title: "7. Cookies",
    body: `Our website uses cookies to enhance your experience and gather analytics. For full details on the cookies we use and how to control them, please read our Cookie Policy.`,
  },
  {
    title: "8. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data — including sensitive identification and immigration documents — against unauthorised access, alteration, disclosure, or destruction. All data in transit is encrypted via TLS. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "9. Your Rights",
    body: `Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you\n• Correct inaccurate or incomplete data\n• Request erasure of your data ("right to be forgotten")\n• Restrict or object to our processing\n• Request portability of your data\n• Withdraw consent at any time (where processing is based on consent)\n\nTo exercise any of these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
  },
  {
    title: "10. International Transfers",
    body: `As our services involve coordinating with agencies and institutions in multiple countries (including the United States and Pakistan), your data may be transferred internationally. Where we transfer your data outside the UK or European Economic Area, we ensure appropriate safeguards are in place — such as Standard Contractual Clauses — to protect your information in accordance with applicable data-protection law.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact Us",
    body: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:\n\nEmail: ${CONTACT_EMAIL}\nSubject line: Privacy Request`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      effectiveDate="24 April 2026"
      sections={sections}
    />
  );
}
