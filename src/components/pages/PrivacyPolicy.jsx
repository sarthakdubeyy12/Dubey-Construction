import React from "react";
import {
  ShieldCheck,
  FileText,
  User,
  Lock,
  Globe,
  Mail,
  RefreshCcw,
  ExternalLink,
} from "lucide-react";

const Section = ({ icon: Icon, title, children }) => (
  <div className="space-y-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
    <div className="flex items-center space-x-4">
      <Icon className="w-8 h-8 text-[#014C2A]" />
      <h2 className="text-2xl font-bold text-[#014C2A]">{title}</h2>
    </div>
    <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 py-20 my-20 px-6 md:px-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-5 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#014C2A]">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We value your trust. Learn how Dubey Construction protects, uses, and stores your personal information with utmost care and responsibility.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          <Section icon={User} title="Information We Collect">
            We collect personal information such as your name, email, phone number, and any messages you send. Additionally, we gather non-personal data such as browser type, IP address, and device identifiers for performance and analytics.
          </Section>

          <Section icon={FileText} title="How We Use Your Information">
            Your data helps us to improve services, respond to queries, and personalize user experiences. We may use your information for marketing, but only with your explicit consent.
          </Section>

          <Section icon={ShieldCheck} title="Your Consent & Rights">
            By using our website, you consent to our privacy policy. You have full rights to access, edit, or delete your data anytime. Reach out to us if you'd like to exercise those rights.
          </Section>

          <Section icon={Lock} title="Data Protection & Security">
            We apply strong encryption and strict policies to keep your data safe. However, no digital platform is 100% secure—so we also encourage safe browsing practices on your end.
          </Section>

          <Section icon={Globe} title="Cookies & Tracking Technologies">
            Cookies help us understand site performance and enhance user experience. You can disable cookies anytime from your browser settings.
          </Section>

          <Section icon={ExternalLink} title="Third-Party Links">
            Occasionally, we may link to external websites. We’re not responsible for the privacy practices or content of these third-party websites. Please review their policies when visiting.
          </Section>

          <Section icon={RefreshCcw} title="Policy Updates">
            We may update this policy periodically. All updates will be posted here with revised effective dates. Continued use of our site indicates your acceptance of any changes.
          </Section>

          <Section icon={Mail} title="Contact Us">
            Have questions or concerns? Contact our privacy officer at:
            <br />
            <strong className="block mt-2 text-[#014C2A]">
              info@dubeyconstruction.com
            </strong>
          </Section>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Dubey Construction. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
