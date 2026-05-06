import { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Aqora",
  description: "How Aqora collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Aqora ("we", "us", "our") is a software and digital-marketing agency. Our registered office and primary point of contact is aqoratech@gmail.com. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you provide directly — such as your name, email address, company name, phone number, and project details when you fill in a contact or project-start form.\n\nWe also collect information automatically when you browse our site, including your IP address, browser type, pages visited, referring URLs, and time spent on pages. This data is gathered via cookies and similar tracking technologies (see Section 7).`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to:\n\n• Respond to enquiries and deliver the services you request\n• Send project updates, invoices, and service-related communications\n• Improve our website and understand how visitors engage with our content\n• Comply with legal obligations and resolve disputes\n• Send marketing communications where you have opted in — you may opt out at any time\n\nWe do not sell, rent, or trade your personal data to third parties for their marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `Where applicable under data-protection law (including the UK GDPR and EU GDPR), we process your personal data on the following legal bases:\n\n• Contract: to fulfil obligations under a service agreement with you\n• Legitimate interests: to respond to enquiries, improve our services, and prevent fraud\n• Consent: for marketing emails and non-essential cookies\n• Legal obligation: where we are required to comply with applicable laws`,
  },
  {
    title: "5. Data Sharing & Third Parties",
    body: `We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services — including cloud-hosting providers, email platforms, payment processors, and analytics tools. These providers are contractually bound to handle your data securely and only for the purposes we specify.\n\nWe may disclose information where required by law, court order, or governmental authority.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Client project data is typically retained for 5 years after project completion for accounting and legal purposes. You may request deletion at any time (see Section 9).`,
  },
  {
    title: "7. Cookies",
    body: `Our website uses cookies to enhance your experience and gather analytics. For full details on the cookies we use and how to control them, please read our Cookie Policy.`,
  },
  {
    title: "8. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data in transit is encrypted via TLS. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "9. Your Rights",
    body: `Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you\n• Correct inaccurate or incomplete data\n• Request erasure of your data ("right to be forgotten")\n• Restrict or object to our processing\n• Request portability of your data\n• Withdraw consent at any time (where processing is based on consent)\n\nTo exercise any of these rights, contact us at aqoratech@gmail.com. We will respond within 30 days.`,
  },
  {
    title: "10. International Transfers",
    body: `If we transfer your data outside the UK or European Economic Area, we ensure appropriate safeguards are in place — such as Standard Contractual Clauses — to protect your information in accordance with applicable data-protection law.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact Us",
    body: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:\n\nEmail: aqoratech@gmail.com\nSubject line: Privacy Request`,
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
