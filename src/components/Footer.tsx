import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  currentView: PageView;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  return (
    <footer
      id="site-footer"
      className="w-full border-t border-white/25 bg-[#0B1C38]/90 backdrop-blur-md py-2 px-4 shrink-0 relative z-20 shadow-lg"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 text-xs sm:text-sm">
        <button
          id="footer-link-privacy-policy"
          onClick={() => onNavigate('privacy')}
          className={`cursor-pointer transition-colors font-bold hover:text-white ${
            currentView === 'privacy' ? 'text-white underline decoration-2' : 'text-white/80'
          }`}
        >
          Privacy policy
        </button>
        <span className="text-white/40 select-none">|</span>
        <button
          id="footer-link-contact-us"
          onClick={() => onNavigate('contact')}
          className={`cursor-pointer transition-colors font-bold hover:text-white flex items-center gap-1.5 ${
            currentView === 'contact' ? 'text-white underline decoration-2' : 'text-white/80'
          }`}
        >
          <span>Contact us</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_#93C5FD]"></span>
        </button>
      </div>
    </footer>
  );
};
