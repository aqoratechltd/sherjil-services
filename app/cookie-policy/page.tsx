import { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Aqora",
  description: "How Aqora uses cookies and similar tracking technologies on its website.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    body: `Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your device on subsequent visits, remember your preferences, and gather analytics data. Similar technologies include local storage, session storage, and web beacons.`,
  },
  {
    title: "2. How We Use Cookies",
    body: `We use cookies to:\n\n• Ensure the website functions correctly (strictly necessary)\n• Remember your preferences and settings\n• Understand how visitors use our site so we can improve it\n• Measure the effectiveness of our content and campaigns\n\nWe do not use cookies to build advertising profiles or sell data to third parties.`,
  },
  {
    title: "3. Types of Cookies We Use",
    body: `Strictly Necessary Cookies\nThese cookies are essential for the website to function. They enable core features such as page navigation and secure form submissions. They cannot be disabled without affecting how the site works.\n\nAnalytics & Performance Cookies\nWe use tools such as Google Analytics to collect anonymised information about how visitors use our site — including pages visited, time on site, and traffic sources. This data helps us improve the user experience. No personally identifiable information is collected.\n\nFunctional Cookies\nThese cookies allow the site to remember choices you make (such as your region or language preference) to provide a more personalised experience.\n\nMarketing & Third-Party Cookies\nIf you book a call via Calendly or interact with embedded third-party services, those providers may set their own cookies. We recommend reviewing their respective privacy policies.`,
  },
  {
    title: "4. Third-Party Cookies",
    body: `Some cookies on our site are set by third-party services we use, including:\n\n• Google Analytics — web analytics\n• Calendly — meeting scheduling\n• Vercel — hosting and performance monitoring\n\nThese third parties have their own privacy and cookie policies, and we encourage you to review them.`,
  },
  {
    title: "5. Your Cookie Choices",
    body: `You can control and manage cookies in the following ways:\n\nBrowser settings: Most browsers allow you to refuse or delete cookies via their settings menu. Note that disabling cookies may affect the functionality of our and other websites.\n\nOpt-out tools: You can opt out of Google Analytics tracking at: https://tools.google.com/dlpage/gaoptout\n\nDo Not Track: Some browsers support a "Do Not Track" signal. We honour this signal where technically feasible.\n\nConsent: When you first visit our site, we will ask for your consent to set non-essential cookies. You can withdraw consent at any time by adjusting your browser settings.`,
  },
  {
    title: "6. Cookie Retention",
    body: `Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period — typically between 30 days and 2 years — depending on their purpose. You can delete persistent cookies at any time via your browser settings.`,
  },
  {
    title: "7. Changes to This Policy",
    body: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our use of cookies. Updates will be posted on this page with a revised effective date.`,
  },
  {
    title: "8. Contact Us",
    body: `If you have questions about how we use cookies, contact us at aqoratech@gmail.com.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website."
      effectiveDate="24 April 2026"
      sections={sections}
    />
  );
}
