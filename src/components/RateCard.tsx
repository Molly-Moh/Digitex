import React from 'react';

interface RateCardProps {
  onSelectService: (serviceName: string) => void;
}

export interface PdfRateItem {
  id: string;
  name: string;
  thumbnail: string;
  subtext?: string;
  rate: string;
  buttonText: string;
}

export const pdfRatesData: PdfRateItem[] = [
  {
    id: 'workshop',
    name: 'Workshop',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&auto=format&fit=crop&q=80',
    rate: 'Ksh 1000',
    buttonText: 'Book Now',
  },
  {
    id: 'strategy',
    name: 'Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80',
    rate: 'Ksh 500/hr',
    buttonText: 'Book Now',
  },
  {
    id: 'analysis',
    name: 'Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=200&auto=format&fit=crop&q=80',
    rate: 'Ksh 300/hr',
    buttonText: 'Book Now',
  },
];

export const RateCard: React.FC<RateCardProps> = ({ onSelectService }) => {
  return (
    <div id="rate-card-container" className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* Reshuffled Palette: Digitex Deep Navy Card with White Contrast Actions on Blue Background */}
      <div className="bg-[#0B1C38]/90 backdrop-blur-md rounded-xl border border-white/30 shadow-[0_10px_35px_rgba(11,28,56,0.35)] divide-y divide-white/15 overflow-hidden">
        {pdfRatesData.map((item) => (
          <div
            key={item.id}
            id={`rate-row-${item.id}`}
            className="flex items-center justify-between p-2 sm:p-2.5 hover:bg-[#0B1C38]/95 transition-colors gap-2 sm:gap-4"
          >
            {/* Left: Thumbnail (Showcasing Black Professionals) & Title */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
              <div className="w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden shrink-0 border border-white/40 shadow-xs bg-[#132A52]">
                <img
                  src={item.thumbnail}
                  alt={`${item.name} session with professional team`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80';
                  }}
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] text-blue-200 hidden sm:block font-medium">
                  Digitex Startup Acceleration
                </p>
              </div>
            </div>

            {/* Middle: Duration / Rate */}
            <div className="text-right shrink-0 px-1 sm:px-2 min-w-[75px] sm:min-w-[95px]">
              <div className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight drop-shadow-xs">
                {item.rate}
              </div>
            </div>

            {/* Right: Reshuffled High-Contrast Crisp White Button */}
            <div className="shrink-0">
              <button
                id={`btn-${item.id}`}
                onClick={() => onSelectService(item.name)}
                className="cursor-pointer bg-white hover:bg-slate-100 text-[#0B1C38] font-black text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 border border-white/80"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
