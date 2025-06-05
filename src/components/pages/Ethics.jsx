import React from "react";
import { FileText, Phone, ExternalLink, ShieldCheck } from "lucide-react";

const Ethics = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 py-20 px-6 md:px-20 relative">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-5 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#014C2A]">
            Ethics and Compliance
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Learn how Dubey Construction fosters a culture of ethical behavior,
            legal compliance, and social responsibility in everything we do.
          </p>
        </div>

        {/* Section: Code of Conduct */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-[#014C2A] flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Code of Conduct
          </h2>
          <p>
            Our Code of Conduct unifies Dubey Construction’s core policies and
            outlines standards for legal, ethical, and transparent operations.
            It provides clarity on responsibilities for all employees and
            partners.
          </p>
          <p>
            We uphold high standards of business ethics, including honesty,
            integrity, and respect. Every member of our team — from executives
            to site workers — is expected to act responsibly and in accordance
            with applicable laws.
          </p>
          <p>
            We promote a supportive, respectful, and ethical workplace that
            enables everyone to do their best work with integrity.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1VwR_gwjkv4PKjMszKA2YtJ1b44KcZNK3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d1b85b] underline"
         >
            Code of Conduct PDF
          </a>

        </div>

        {/* Section: Ethics Helpline */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-[#014C2A] flex items-center gap-2">
            <Phone className="w-6 h-6" />
            Ethics Helpline
          </h2>
          <p>
            If you have an ethics concern or need to report a compliance issue
            anonymously, you can contact our confidential Ethics Helpline.
          </p>
          <p>
            Call us anytime at:{" "}
            <strong className="text-[#014C2A]">(800) 461-9330</strong>
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#014C2A] text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Ethics Helpline
          </a>
        </div>

        {/* Section: Anti-Forced Labour */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-[#014C2A] flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            Fighting Forced & Child Labour
          </h2>
          <p>
            Dubey Construction strictly prohibits forced labor and child labor
            across its operations and supply chains. We are committed to
            protecting human rights and ensuring ethical labor practices.
          </p>
          <a
  href="https://drive.google.com/uc?export=download&id=1g_-cwlV-aciYlgrcnksDxNJCb-__pSy7"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#d1b85b] underline"
>
  Child Labour
</a>

        </div>

        {/* Footer Note */}
        <div className="text-center pt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Dubey Construction. Integrity. Trust. Responsibility.
        </div>
      </div>
    </section>
  );
};

export default Ethics;
