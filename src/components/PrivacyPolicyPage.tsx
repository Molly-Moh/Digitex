import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle } from 'lucide-react';
import { DigitexLogo } from './DigitexLogo';
import { StaticShinyStars } from './StaticShinyStars';
import { PageView } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (view: PageView) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div id="privacy-policy-page" className="min-h-screen bg-[#60A5FA] text-white flex flex-col justify-between relative">
      {/* Background Stars */}
      <StaticShinyStars />

      {/* Top Header */}
      <header className="w-full bg-[#0B1C38]/90 backdrop-blur-md border-b border-white/20 py-3 px-4 sm:px-8 relative z-20 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            id="privacy-back-home-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-blue-200 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <DigitexLogo size="sm" onClick={() => onNavigate('home')} dark={true} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-8 relative z-10">
        <div className="bg-slate-950/90 backdrop-blur-md rounded-2xl border border-white/25 shadow-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-widest bg-white/15 border border-white/30 px-2.5 py-1 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>Trust & Governance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Effective Date: Last updated September 2026 • Digitex Enterprises Ltd
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-300" />
              <span>1. Startup Confidentiality Commitment</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At Digitex Enterprise, we work closely with emerging startups, innovators, and founders. We treat your business plans, proprietary methodologies, customer lists, market metrics, and workshop discussions with the strictest commercial confidentiality.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-300" />
              <span>2. Information We Collect</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When scheduling a digital marketing workshop, strategy hour, or performance analysis, we collect basic contact information (full name, email address, phone number, startup name) solely to deliver tailored marketing solutions and prepare sessions.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-300" />
              <span>3. Data Security & Storage</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All client records are encrypted in transit and at rest. We never sell, rent, or trade your contact details or business metrics with external third-party advertisers.
            </p>
          </section>

          {/* Return button */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={() => onNavigate('home')}
              className="py-2 px-5 rounded-lg bg-white hover:bg-slate-100 text-[#0B1C38] text-xs font-black transition shadow-md cursor-pointer border border-white/80"
            >
              Accept & Return Home
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/20 py-3 text-center text-xs text-white/90 bg-[#0B1C38]/90 shrink-0 relative z-20">
        Digitex Enterprise • Nairobi, Kenya • Confidential & Proprietary
      </footer>
    </div>
  );
};
