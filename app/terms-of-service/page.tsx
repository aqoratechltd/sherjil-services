import { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Aqora",
  description: "The terms governing your use of Aqora's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing this website or engaging Aqora for services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`,
  },
  {
    title: "2. Services",
    body: `Aqora provides software development, digital marketing, branding, SEO, and related professional services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate Statement of Work (SOW) or service agreement signed by both parties. These Terms govern the general relationship and supplement — but do not replace — any such agreement.`,
  },
  {
    title: "3. Client Responsibilities",
    body: `To enable us to deliver your project effectively, you agree to:\n\n• Provide accurate, complete, and timely information, feedback, and approvals\n• Ensure you have the legal right to share any assets, content, or intellectual property you provide to us\n• Designate a single point of contact with authority to approve deliverables\n• Make payments in accordance with the agreed payment schedule\n\nDelays caused by failure to meet these responsibilities may affect timelines and may result in additional charges.`,
  },
  {
    title: "4. Payment Terms",
    body: `Unless otherwise agreed in writing:\n\n• Projects require a deposit (typically 50%) before work commences\n• Remaining balances are due upon delivery or at agreed milestone dates\n• Invoices are payable within 14 days of issue\n• Late payments attract interest at 8% per annum above the Bank of England base rate\n• We reserve the right to pause or suspend work on overdue accounts`,
  },
  {
    title: "5. Intellectual Property",
    body: `Upon receipt of full payment, all custom work product created specifically for you under an engagement transfers to you as the client. This includes source code, designs, and written content unique to your project.\n\nWe retain ownership of:\n• Pre-existing tools, frameworks, libraries, and methodologies\n• Internal processes and know-how developed independently\n• Any work product for which payment has not been received in full\n\nWe reserve the right to display completed work in our portfolio and case studies unless you request otherwise in writing.`,
  },
  {
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information disclosed during the engagement and not to disclose it to third parties without prior written consent. This obligation survives termination of the engagement for a period of 3 years.`,
  },
  {
    title: "7. Revisions & Change Requests",
    body: `Each project phase includes a defined number of revision rounds as specified in the SOW. Requests that materially change the agreed scope, add new features, or require rework due to client-side changes will be treated as change requests and quoted separately.`,
  },
  {
    title: "8. Warranties & Disclaimers",
    body: `We warrant that our services will be performed with reasonable skill and care in accordance with industry standards. We do not warrant that our deliverables will be error-free or that your business will achieve any specific financial outcomes from our work.\n\nThis website and its content are provided "as is" without warranties of any kind, express or implied.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by law, Aqora's total liability for any claim arising from or related to our services shall not exceed the total fees paid by you for the specific engagement giving rise to the claim in the 3 months preceding the claim.\n\nWe shall not be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, or business interruption.`,
  },
  {
    title: "10. Termination",
    body: `Either party may terminate an engagement by giving 14 days' written notice. Upon termination:\n\n• You will pay for all work completed to the termination date at the pro-rata rate\n• We will deliver all completed work product for which full payment has been received\n• Confidentiality obligations survive termination`,
  },
  {
    title: "11. Governing Law",
    body: `These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "12. Changes to These Terms",
    body: `We reserve the right to update these Terms at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our website or services after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "13. Contact",
    body: `Questions about these Terms? Reach us at aqoratech@gmail.com.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Terms of Service"
      subtitle="The rules governing your use of our website and engagement with our services."
      effectiveDate="24 April 2026"
      sections={sections}
    />
  );
}
