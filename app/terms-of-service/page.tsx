import { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";
import { CONTACT_EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service | Sherjil Services",
  description: "The terms governing your use of Sherjil Services' website and facilitation services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing this website or engaging Sherjil Services ("we", "us", "our") for any service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.`,
  },
  {
    title: "2. Nature of Our Services",
    body: `Sherjil Services is a facilitation and documentation-assistance provider. We help clients prepare, complete, and submit paperwork for U.S. immigration matters, Pakistani documents (passport, NICOP, NADRA), financial-account opening, career services, and travel arrangements (visas, trip planning, hotel bookings).\n\nWe are not a law firm, immigration attorney, government agency, bank, or travel operator. We do not provide legal advice, guarantee approval of any application, or guarantee outcomes from any government agency, financial institution, consulate, or airline. Final decisions rest entirely with the relevant third-party authority or institution.`,
  },
  {
    title: "3. Client Responsibilities",
    body: `To enable us to process your request effectively, you agree to:\n\n• Provide accurate, complete, and truthful information and documentation\n• Ensure you have the legal right to provide any identification, passport, or financial documents you share with us\n• Respond promptly to requests for additional information or signatures\n• Make payments in accordance with the agreed service fee\n\nDelays or rejections caused by inaccurate, incomplete, or fraudulent information provided by you are your sole responsibility, and we are not liable for any resulting loss.`,
  },
  {
    title: "4. Fees & Payment",
    body: `Service fees are as quoted on our website or as agreed directly with you before work begins. Unless otherwise agreed in writing:\n\n• Fees cover our facilitation and processing services only and do not include government, consulate, NADRA, bank, or third-party fees, which are payable separately\n• Payment is due before or upon submission of your application unless another arrangement is agreed\n• Fees already paid for work performed (e.g. document preparation, submission) are non-refundable once the relevant step has been completed\n• We reserve the right to pause or decline service on unpaid accounts`,
  },
  {
    title: "5. No Guarantee of Outcome",
    body: `We perform our services with reasonable care and diligence. However, approval of visas, passports, NICOP, citizenship, financial accounts, or any other application is determined solely by the relevant government agency, consulate, NADRA, bank, or institution. We do not guarantee approval, processing time, or any specific outcome, and we are not responsible for decisions made by third-party authorities.`,
  },
  {
    title: "6. Confidentiality",
    body: `We treat the personal and identification information you share with us as confidential and use it only to deliver the service you have requested, in line with our Privacy Policy. We will not disclose your information to third parties except where necessary to complete your application or as required by law.`,
  },
  {
    title: "7. Cancellations & Refunds",
    body: `You may request cancellation of a service before we begin processing your application for a full refund of our service fee. Once document preparation or submission has commenced, fees become non-refundable, as they reflect work already performed. Any third-party fees already paid to a government agency, consulate, NADRA, or bank are non-refundable by us and are subject to that third party's own refund policy.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the maximum extent permitted by law, our total liability for any claim arising from or related to our services shall not exceed the total service fees paid by you for the specific request giving rise to the claim. We shall not be liable for indirect, incidental, special, or consequential damages, including delays, rejections, or losses caused by third-party agencies, institutions, or incorrect information provided by you.`,
  },
  {
    title: "9. Termination",
    body: `We may decline or discontinue service to any client at our discretion, including where information provided appears inaccurate, fraudulent, or where a request falls outside the scope of services we offer. Where we discontinue a service before completing the requested work, any unused portion of fees paid will be refunded.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sherjil Services operates. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation in the first instance.`,
  },
  {
    title: "11. Changes to These Terms",
    body: `We reserve the right to update these Terms at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our website or services after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "12. Contact",
    body: `Questions about these Terms? Reach us at ${CONTACT_EMAIL}.`,
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
