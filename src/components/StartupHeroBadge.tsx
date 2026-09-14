import React, { useState, useEffect } from 'react';

interface StartupHeroBadgeProps {
  className?: string;
}

interface HeroImage {
  id: number;
  url: string;
  alt: string;
  label: string;
}

const heroImages: HeroImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80',
    alt: 'African founders startup workshop and agile brainstorming session',
    label: 'Workshop Innovation',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
    alt: 'Executive boardroom strategy discussion and market expansion',
    label: 'Boardroom Strategy',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80',
    alt: 'Tech innovators and venture founders reviewing product roadmap',
    label: 'Venture Acceleration',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&auto=format&fit=crop&q=80',
    alt: 'Data-driven growth and startup marketing analytics',
    label: 'Growth Analytics',
  },
];

export const StartupHeroBadge: React.FC<StartupHeroBadgeProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle and pop images one by one behind "Startups revolution"
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="startup-hero-section"
      className={`relative w-full max-w-4xl mx-auto h-full flex-1 flex flex-col items-center justify-center text-center ${className}`}
    >
      {/* Container with popping images expanded to fill the space between logo and rate card - NO black background */}
      <div className="relative w-full h-full flex-1 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/60 shadow-[0_10px_35px_rgba(30,58,138,0.25)] bg-blue-600/30 backdrop-blur-sm flex items-center justify-center">
        {/* Popping Background Images filling the whole expanded section with bright natural tones - no dark black filter */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => {
            const isActive = index === currentIndex;
            if (!isActive) return null;

            return (
              <div
                key={`${img.id}-${currentIndex}`}
                className="absolute inset-0 w-full h-full animate-pop-image"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 saturate-115"
                />
              </div>
            );
          })}
        </div>

        {/* Color Blending Overlays - Clean Revolution Blue & Frosted Whites - NO BLACK */}
        {/* 1. Subtle brand blue tint for visual cohesion */}
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply pointer-events-none" />

        {/* 2. Horizontal edge soft blue fade into canvas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA]/85 via-transparent to-[#60A5FA]/85 pointer-events-none" />

        {/* 3. Top & bottom soft edge fade blending with header and rate card area */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#60A5FA]/50 via-transparent to-[#60A5FA]/60 pointer-events-none" />

        {/* 4. Center radiant frosted spotlight - pure white & celestial blue glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(96, 165, 250, 0.25) 60%, transparent 100%)',
          }}
        />

        {/* Catch phrase strictly: Startups revolution - NO black background, nicely centered */}
        <div className="relative z-10 px-4 py-3 flex flex-col items-center justify-center">
          <h2
            id="catch-phrase-text"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight flex items-center gap-2.5 sm:gap-3.5 flex-wrap justify-center drop-shadow-[0_2px_14px_rgba(11,28,56,0.35)]"
          >
            <span className="text-white tracking-tight drop-shadow-[0_2px_8px_rgba(11,28,56,0.45)]">
              Startups
            </span>
            <span className="text-[#0B1C38] bg-white/95 backdrop-blur-md px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl font-black shadow-[0_4px_20px_rgba(11,28,56,0.22)] border border-white/90">
              revolution
            </span>
          </h2>
        </div>

        {/* Image Pop Indicators (Bottom Center) - Clean white pills */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
          {heroImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                  : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Show image ${idx + 1}: ${img.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
