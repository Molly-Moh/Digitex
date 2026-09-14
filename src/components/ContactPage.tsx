import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, Mail, Building, User, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { DigitexLogo } from './DigitexLogo';
import { StaticShinyStars } from './StaticShinyStars';
import { EnquiryForm, PageView } from '../types';

interface ContactPageProps {
  onNavigate: (view: PageView) => void;
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialService = '' }) => {
  const [formData, setFormData] = useState<EnquiryForm>({
    fullName: '',
    email: '',
    startupName: '',
    phone: '',
    service: initialService || 'Workshop (Ksh 1000)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div
      id="contact-us-page"
      className="h-screen max-h-screen overflow-hidden flex flex-col justify-between bg-[#60A5FA] text-white relative"
    >
      {/* Background Stars on Blue */}
      <StaticShinyStars />

      {/* Slim Top Navigation Bar */}
      <header className="w-full bg-[#0B1C38]/90 backdrop-blur-md border-b border-white/20 py-2 px-4 shrink-0 relative z-20 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            id="contact-back-home-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-200 transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <DigitexLogo size="sm" onClick={() => onNavigate('home')} dark={true} />
        </div>
      </header>

      {/* Main Form Container - Fitted neatly in one screen */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-2 flex flex-col justify-center overflow-hidden relative z-10">
        {submitted ? (
          <div
            id="enquiry-success-card"
            className="bg-slate-950/90 backdrop-blur-md rounded-xl border border-white/25 shadow-2xl p-6 text-center max-w-md mx-auto text-white"
          >
            <div className="w-12 h-12 bg-white text-[#0B1C38] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-white mb-1.5">
              Enquiry Received!
            </h2>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. 
              Our team at <span className="font-semibold text-blue-300">Digitex Enterprise</span> will review your inquiry for{' '}
              <span className="font-semibold text-white">{formData.service}</span> and reach out shortly.
            </p>

            <div className="bg-slate-900/80 rounded-lg p-3 text-left text-[11px] space-y-1 border border-slate-800 mb-4 text-slate-300">
              <div><span className="font-bold text-slate-400">Startup:</span> {formData.startupName || 'Not specified'}</div>
              <div><span className="font-bold text-slate-400">Email:</span> {formData.email}</div>
              <div><span className="font-bold text-slate-400">Service:</span> <span className="text-blue-300 font-semibold">{formData.service}</span></div>
            </div>

            <div className="flex gap-2.5 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    startupName: '',
                    phone: '',
                    service: 'Workshop (Ksh 1000)',
                    message: '',
                  });
                }}
                className="py-1.5 px-3.5 rounded-lg border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800 transition cursor-pointer"
              >
                Send Another
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="py-1.5 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#0B1C38] text-xs font-black transition shadow-md cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-950/90 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-4 sm:p-5">
            <div className="mb-3 border-b border-slate-800 pb-2 flex items-center justify-between">
              <div>
                <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                  <span>Enquiry Form</span>
                  <span className="text-xs font-medium text-blue-300">• Digitex Enterprise</span>
                </h1>
                <p className="text-[11px] text-slate-300">
                  Fill out the details below to schedule your workshop or strategy session.
                </p>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-white uppercase tracking-wider bg-white/15 border border-white/30 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-blue-300" />
                <span>Startups Revolution</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-fullname" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                    <input
                      id="enquiry-fullname"
                      type="text"
                      required
                      placeholder="e.g. Alex Mwangi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="enquiry-email" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      placeholder="alex@startup.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Startup Name */}
                <div>
                  <label htmlFor="enquiry-startup" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                    Startup Name *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                    <input
                      id="enquiry-startup"
                      type="text"
                      required
                      placeholder="e.g. Apex Logistics"
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition"
                    />
                  </div>
                </div>

                {/* Phone or WhatsApp */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                    <input
                      id="enquiry-phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="enquiry-service-select" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                  Service of Interest *
                </label>
                <select
                  id="enquiry-service-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition cursor-pointer"
                >
                  <option value="Workshop (Ksh 1000)" className="bg-slate-900 text-white">
                    Workshop — Ksh 1000
                  </option>
                  <option value="Strategy (Ksh 500/hr)" className="bg-slate-900 text-white">
                    Strategy — Ksh 500/hr
                  </option>
                  <option value="Analysis (Ksh 300/hr)" className="bg-slate-900 text-white">
                    Analysis — Ksh 300/hr
                  </option>
                  <option value="General Marketing Consultation" className="bg-slate-900 text-white">
                    General Marketing Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="enquiry-message" className="block text-[11px] font-bold text-slate-200 mb-0.5">
                  Brief Startup Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  <textarea
                    id="enquiry-message"
                    rows={2}
                    placeholder="Briefly describe your goals or preferred schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-900/90 text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:border-white transition resize-none"
                  />
                </div>
              </div>

              {/* Submit button - Reshuffled to Crisp White with Navy Text */}
              <button
                id="submit-enquiry-button"
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#0B1C38] font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-75 border border-white/80"
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Startup Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Slim footer */}
      <footer className="w-full border-t border-white/20 py-2 text-center text-[10.5px] text-white/90 bg-[#0B1C38]/90 shrink-0 relative z-20">
        Digitex Enterprise • Enquiry Portal
      </footer>
    </div>
  );
};
