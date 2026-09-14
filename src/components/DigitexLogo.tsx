import React from 'react';

interface DigitexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  dark?: boolean;
}

export const DigitexLogo: React.FC<DigitexLogoProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  const sizeConfig = {
    sm: { height: 38, scale: 0.7 },
    md: { height: 48, scale: 0.9 },
    lg: { height: 58, scale: 1.1 },
  }[size];

  // Colors reshuffled for high-contrast on the radiant blue (#60A5FA) background:
  // Primary Navy #0B1C38 and Pure Crisp White #FFFFFF
  const primaryNavy = '#0B1C38';
  const pureWhite = '#FFFFFF';

  return (
    <div
      id="digitex-header-logo"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 select-none transition-transform duration-200 hover:scale-[1.02] ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      title="Digitex Enterprises Ltd"
    >
      <svg
        viewBox="0 0 520 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${sizeConfig.height}px`, width: 'auto' }}
        className="drop-shadow-[0_2px_8px_rgba(11,28,56,0.3)] overflow-visible"
      >
        {/* Monogram Symbol "DE" */}
        <g transform="translate(10, 10)">
          {/* Outer Curve of "D" in Crisp White */}
          <path
            d="M 2 10 
               H 70 
               C 105 10, 125 35, 125 55 
               C 125 75, 105 100, 70 100 
               H 62
               C 85 92, 108 76, 108 55
               C 108 34, 88 23, 62 23
               H 16
               V 87
               H 2
               Z"
            fill={pureWhite}
          />

          {/* Inner Deep Navy "E" */}
          <path
            d="M 2 34 
               H 74 
               V 48 
               H 20 
               V 52 
               H 62 
               V 64 
               H 20 
               V 70 
               H 72 
               V 84 
               H 2 
               Z"
            fill={primaryNavy}
          />
        </g>

        {/* Wordmark: DIGITEX in Bold Deep Navy */}
        <text
          x="150"
          y="72"
          fill={primaryNavy}
          fontFamily="'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="900"
          fontSize="56"
          letterSpacing="0.08em"
        >
          DIGITEX
        </text>

        {/* Subtitle: ENTERPRISES LTD in Crisp White */}
        <text
          x="153"
          y="98"
          fill={pureWhite}
          fontFamily="'Plus Jakarta Sans', 'Space Grotesk', system-ui, sans-serif"
          fontWeight="800"
          fontSize="18.5"
          letterSpacing="0.32em"
        >
          ENTERPRISES LTD
        </text>
      </svg>
    </div>
  );
};
