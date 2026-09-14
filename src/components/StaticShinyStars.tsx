import React, { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export const StaticShinyStars: React.FC = () => {
  // Fine pinprick and micro-shiny stars across the blue background (#60A5FA)
  const stars = useMemo<Star[]>(() => {
    const list: Star[] = [];
    const seedPoints = [
      // Top hemisphere
      [4, 7, 2, 0.95, '#FFFFFF'],
      [8, 21, 1.5, 0.8, '#FFFFFF'],
      [14, 11, 2.2, 0.95, '#FFFFFF'],
      [19, 26, 1.5, 0.85, '#E0F2FE'],
      [25, 8, 2, 0.9, '#FFFFFF'],
      [31, 18, 1.5, 0.75, '#FFFFFF'],
      [38, 9, 2.5, 0.95, '#FFFFFF'],
      [44, 23, 1.5, 0.8, '#FFFFFF'],
      [51, 6, 2, 0.95, '#E0F2FE'],
      [57, 17, 1.5, 0.75, '#FFFFFF'],
      [64, 10, 2.2, 0.95, '#FFFFFF'],
      [71, 22, 1.5, 0.85, '#FFFFFF'],
      [78, 8, 2, 0.95, '#FFFFFF'],
      [85, 16, 1.8, 0.9, '#E0F2FE'],
      [92, 9, 2.5, 0.95, '#FFFFFF'],
      [96, 24, 1.5, 0.8, '#FFFFFF'],

      // Mid section
      [3, 39, 1.8, 0.9, '#FFFFFF'],
      [7, 54, 2.2, 0.95, '#E0F2FE'],
      [13, 44, 1.5, 0.75, '#FFFFFF'],
      [18, 62, 2, 0.85, '#FFFFFF'],
      [27, 49, 1.5, 0.8, '#FFFFFF'],
      [34, 38, 2, 0.9, '#FFFFFF'],
      [82, 43, 2.2, 0.95, '#FFFFFF'],
      [87, 57, 1.8, 0.9, '#E0F2FE'],
      [93, 41, 2, 0.85, '#FFFFFF'],
      [97, 58, 1.5, 0.8, '#FFFFFF'],

      // Lower section
      [5, 75, 2.2, 0.95, '#FFFFFF'],
      [11, 88, 1.5, 0.8, '#FFFFFF'],
      [17, 79, 2, 0.9, '#FFFFFF'],
      [24, 91, 1.5, 0.75, '#E0F2FE'],
      [32, 82, 2.2, 0.95, '#FFFFFF'],
      [41, 93, 1.8, 0.85, '#FFFFFF'],
      [49, 78, 1.5, 0.75, '#FFFFFF'],
      [58, 92, 2, 0.9, '#E0F2FE'],
      [66, 81, 2.2, 0.95, '#FFFFFF'],
      [74, 93, 1.8, 0.85, '#FFFFFF'],
      [81, 76, 2.2, 0.95, '#FFFFFF'],
      [88, 89, 1.5, 0.8, '#E0F2FE'],
      [94, 79, 2, 0.95, '#FFFFFF'],
      [98, 92, 1.5, 0.75, '#FFFFFF'],

      // Subtle fill pinpricks
      [12, 33, 1.2, 0.75, '#FFFFFF'],
      [22, 15, 1.4, 0.8, '#E0F2FE'],
      [29, 68, 1.2, 0.7, '#FFFFFF'],
      [36, 52, 1.5, 0.75, '#FFFFFF'],
      [45, 36, 1.3, 0.8, '#FFFFFF'],
      [53, 64, 1.4, 0.75, '#FFFFFF'],
      [61, 48, 1.2, 0.7, '#E0F2FE'],
      [68, 34, 1.5, 0.8, '#FFFFFF'],
      [76, 61, 1.3, 0.75, '#FFFFFF'],
      [84, 29, 1.4, 0.85, '#FFFFFF'],
    ] as const;

    seedPoints.forEach(([x, y, size, opacity, color], i) => {
      list.push({
        id: i,
        x,
        y,
        size,
        opacity,
        color,
      });
    });

    return list;
  }, []);

  return (
    <div
      id="static-shiny-stars-backdrop"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 15%, #60A5FA 0%, #3B82F6 50%, #2563EB 100%)',
      }}
      aria-hidden="true"
    >
      {/* Radiant celestial ambient glow overlay */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #93C5FD 0%, #60A5FA 50%, transparent 80%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Render shimmering white shiny stars on the blue background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px #FFFFFF, 0 0 ${star.size * 3.5}px rgba(255, 255, 255, 0.6)`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
