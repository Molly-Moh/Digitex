import React, { useState } from 'react';

// 1. Jeanah Ventures Logo Component - Extracted from https://www.facebook.com/Jeanah.Venture/
export const JeanahVenturesLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-1.5 bg-white rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-transform duration-200 h-10 shrink-0 select-none ${className}`}
      title="Jeanah Ventures Ltd"
    >
      {!imgError ? (
        <img
          src="/logos/jeanah_venture.jpg"
          alt="Jeanah Ventures Ltd official brand logo"
          className="w-7 h-7 rounded-full object-cover shadow-xs border border-slate-200 shrink-0"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-full bg-[#0D1527] flex items-center justify-center text-white font-bold text-xs shrink-0">
          JV
        </div>
      )}
      <div className="flex flex-col text-left">
        <span className="text-xs font-black text-[#0D1527] font-serif leading-tight">
          Jeanah
        </span>
        <span className="text-[10px] font-bold text-slate-600 font-serif leading-none tracking-wide">
          Ventures
        </span>
      </div>
    </div>
  );
};

// 2. Favier Group Logo Component - Extracted from https://faviergroup.com/about/
export const FavierGroupLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center justify-center px-3 py-1.5 bg-white rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-transform duration-200 h-10 shrink-0 select-none ${className}`}
      title="Favier Group"
    >
      {!imgError ? (
        <img
          src="/logos/favier_group.png"
          alt="Favier Group official brand logo"
          className="h-6 sm:h-7 w-auto max-w-[140px] sm:max-w-[160px] object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black text-[#0D9488] tracking-wider">
            FAVIER
          </span>
          <span className="text-[9px] font-bold text-slate-600 tracking-[0.2em] uppercase">
            GROUP
          </span>
        </div>
      )}
    </div>
  );
};

// 3. Bright Achievers Logo Component - Extracted from https://www.brightachieversltd.com/
export const BrightAchieversLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center justify-center px-3 py-1.5 bg-white rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-transform duration-200 h-10 shrink-0 select-none ${className}`}
      title="Bright Achievers Training Consultants Ltd"
    >
      {!imgError ? (
        <img
          src="/logos/bright_achievers.jpg"
          alt="Bright Achievers Ltd official brand logo"
          className="h-7 sm:h-8 w-auto max-w-[130px] sm:max-w-[155px] object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col text-left">
          <span className="text-xs font-black text-[#B45309] leading-tight">
            Bright Achievers
          </span>
          <span className="text-[9px] font-semibold text-slate-600 leading-none">
            Consultants Ltd
          </span>
        </div>
      )}
    </div>
  );
};

// 4. Start Walking Foundation Logo Component - Extracted from https://www.startwalkingfoundation.org/stories
export const StartWalkingLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center justify-center px-3 py-1.5 bg-white rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-transform duration-200 h-10 shrink-0 select-none ${className}`}
      title="Start Walking Foundation"
    >
      {!imgError ? (
        <img
          src="/logos/start_walking.webp"
          alt="Start Walking Foundation official brand logo"
          className="h-7 sm:h-8 w-auto max-w-[130px] sm:max-w-[150px] object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col text-left">
          <span className="text-xs font-extrabold text-[#059669] leading-tight">
            Start Walking
          </span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-none">
            Foundation
          </span>
        </div>
      )}
    </div>
  );
};

// 5. One World One Future Logo Component - Extracted from https://onefuturetrust.org/
export const OneWorldOneFutureLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center justify-center px-3 py-1.5 bg-white rounded-xl border border-white/80 shadow-md hover:shadow-lg transition-transform duration-200 h-10 shrink-0 select-none ${className}`}
      title="One World One Future Trust"
    >
      {!imgError ? (
        <img
          src="/logos/one_future_trust.jpg"
          alt="One World One Future Trust official brand logo"
          className="h-7 sm:h-8 w-auto max-w-[130px] sm:max-w-[160px] object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-extrabold text-[#0284C7] leading-tight">
            One World
          </span>
          <span className="text-[9.5px] font-bold text-[#16A34A] leading-none">
            One Future
          </span>
        </div>
      )}
    </div>
  );
};
