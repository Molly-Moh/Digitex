import React from 'react';
import {
  JeanahVenturesLogo,
  FavierGroupLogo,
  BrightAchieversLogo,
  StartWalkingLogo,
  OneWorldOneFutureLogo,
} from './PartnerLogos';

export const CollaboratorsMarquee: React.FC = () => {
  // Repeating list for seamless continuous infinite marquee moving right to left
  const partnerLogos = [
    { key: 'jeanah', component: <JeanahVenturesLogo /> },
    { key: 'favier', component: <FavierGroupLogo /> },
    { key: 'bright', component: <BrightAchieversLogo /> },
    { key: 'start-walking', component: <StartWalkingLogo /> },
    { key: 'one-world', component: <OneWorldOneFutureLogo /> },
  ];

  const fullList = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <div id="collaborators-section" className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-0">
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="h-px w-8 bg-[#0B1C38]/40"></div>
        <p className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-[#0B1C38] text-center drop-shadow-xs">
          Collaborated With
        </p>
        <div className="h-px w-8 bg-[#0B1C38]/40"></div>
      </div>

      {/* Floating Logos Marquee Moving Right to Left at slow Heartbeat Pace */}
      <div className="relative w-full overflow-hidden py-0.5">
        {/* Soft blue fade masks on edges matching the revolution blue */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#60A5FA] via-[#60A5FA]/70 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#60A5FA] via-[#60A5FA]/70 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-left flex items-center gap-4 sm:gap-5">
          {fullList.map((item, index) => (
            <div
              key={`${item.key}-${index}`}
              className="shrink-0 transition-transform duration-200 hover:scale-105"
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
