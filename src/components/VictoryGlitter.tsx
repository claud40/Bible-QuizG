import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

interface GlitterParticle {
  id: string;
  type: 'radial' | 'fountain' | 'skyfall';
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
  rotation: number;
  scale: number;
  color: string;
  shape: 'star5' | 'star4' | 'star8' | 'sparkle' | 'diamond' | 'cross' | 'disc' | 'ring';
  duration: number;
  delay: number;
  glow?: string;
}

interface VictoryGlitterProps {
  pct?: number;
}

const GLITTER_PALETTE = [
  '#FFD700', // Classic Rich Gold
  '#FFDF00', // Imperial Royal Gold
  '#FFF275', // Light Golden Glow
  '#F59E0B', // Warm Amber Gold
  '#FFFFFF', // Brilliant Pure Light
  '#FFFBEB', // Celestial White-Gold
  '#F43F5E', // Ruby Rose
  '#38BDF8', // Celestial Sky Blue
  '#A855F7', // Royal Violet
  '#10B981', // Holy Emerald
  '#F472B6', // Shimmering Pink
  '#00F5D4', // Vibrant Aquamarine
];

export const VictoryGlitter: React.FC<VictoryGlitterProps> = ({ pct = 80 }) => {
  const [particles, setParticles] = useState<GlitterParticle[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const allParticles: GlitterParticle[] = [];
    const isSuperWin = pct >= 80;

    // --- 1. FIRST BLAST: Central Radial Fireworks Blast (Immediate Grand Explosion) ---
    const radialWaves = 4;
    const radialParticlesPerWave = isSuperWin ? 55 : 45;

    for (let wave = 0; wave < radialWaves; wave++) {
      const waveDelay = wave * 0.12;

      for (let i = 0; i < radialParticlesPerWave; i++) {
        const angle = (i / radialParticlesPerWave) * Math.PI * 2 + (Math.random() * 0.3 - 0.15);
        const minDistance = 160 + wave * 70;
        const maxDistance = 480 + wave * 130;
        const distance = minDistance + Math.random() * (maxDistance - minDistance);

        const xEnd = Math.cos(angle) * distance;
        const yEnd = Math.sin(angle) * distance;

        const shapes: GlitterParticle['shape'][] = [
          'star5',
          'star4',
          'star8',
          'sparkle',
          'diamond',
          'cross',
          'disc',
          'ring',
        ];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = GLITTER_PALETTE[Math.floor(Math.random() * GLITTER_PALETTE.length)];

        allParticles.push({
          id: `rad-${wave}-${i}-${Math.random()}`,
          type: 'radial',
          xStart: 0,
          yStart: 0,
          xEnd,
          yEnd,
          rotation: Math.random() * 1080 - 540,
          scale: 0.6 + Math.random() * 1.4,
          color,
          shape: randomShape,
          duration: 2.2 + Math.random() * 1.4,
          delay: waveDelay + Math.random() * 0.06,
          glow: color === '#FFFFFF' || color.startsWith('#FF') ? 'drop-shadow(0 0 8px rgba(255,215,0,0.85))' : 'drop-shadow(0 0 6px rgba(0,0,0,0.25))',
        });
      }
    }

    // --- 2. SECOND SET: Cascading Grand Finale Starbursts ---
    const secondSetWaves = 3;
    const secondSetParticlesPerWave = isSuperWin ? 60 : 50;
    const secondSetBaseDelay = 0.9;

    for (let wave = 0; wave < secondSetWaves; wave++) {
      const waveDelay = secondSetBaseDelay + wave * 0.22;

      for (let i = 0; i < secondSetParticlesPerWave; i++) {
        const angle = (i / secondSetParticlesPerWave) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
        const minDistance = 220 + wave * 80;
        const maxDistance = 640 + wave * 150;
        const distance = minDistance + Math.random() * (maxDistance - minDistance);

        const xEnd = Math.cos(angle) * distance;
        const yEnd = Math.sin(angle) * distance;

        const shapes: GlitterParticle['shape'][] = [
          'star8',
          'star5',
          'star4',
          'sparkle',
          'diamond',
          'cross',
          'disc',
        ];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = GLITTER_PALETTE[Math.floor(Math.random() * GLITTER_PALETTE.length)];

        allParticles.push({
          id: `fin-${wave}-${i}-${Math.random()}`,
          type: 'radial',
          xStart: 0,
          yStart: 0,
          xEnd,
          yEnd,
          rotation: Math.random() * 1440 - 720,
          scale: 0.7 + Math.random() * 1.5,
          color,
          shape: randomShape,
          duration: 2.5 + Math.random() * 1.5,
          delay: waveDelay + Math.random() * 0.08,
          glow: 'drop-shadow(0 0 10px rgba(255,215,0,0.9))',
        });
      }
    }

    // --- 3. THIRD SET: Twin Upward Fireworks Fountains ---
    const fountainCount = isSuperWin ? 90 : 70;
    for (let i = 0; i < fountainCount; i++) {
      const isLeftFountain = i % 2 === 0;
      const xOrigin = isLeftFountain ? -120 : 120;
      const launchAngle = isLeftFountain 
        ? -Math.PI * 0.65 + (Math.random() * 0.5 - 0.25)
        : -Math.PI * 0.35 + (Math.random() * 0.5 - 0.25);

      const power = 300 + Math.random() * 450;
      const xEnd = xOrigin + Math.cos(launchAngle) * power;
      const yEnd = Math.sin(launchAngle) * power;

      const shapes: GlitterParticle['shape'][] = ['star4', 'star5', 'sparkle', 'diamond', 'ring'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = GLITTER_PALETTE[Math.floor(Math.random() * GLITTER_PALETTE.length)];

      allParticles.push({
        id: `fnt-${i}-${Math.random()}`,
        type: 'fountain',
        xStart: xOrigin,
        yStart: 180,
        xEnd,
        yEnd,
        rotation: Math.random() * 900 - 450,
        scale: 0.6 + Math.random() * 1.3,
        color,
        shape: randomShape,
        duration: 2.4 + Math.random() * 1.2,
        delay: 0.3 + (i * 0.02),
        glow: 'drop-shadow(0 0 8px rgba(255,235,59,0.8))',
      });
    }

    // --- 4. FOURTH SET: Skyfall Shimmer Rain (Gentle Cascading Sparkle Shower) ---
    // Drifts downward across the whole screen continuously for a prolonged, festive ambiance
    const skyfallCount = isSuperWin ? 150 : 110;
    for (let i = 0; i < skyfallCount; i++) {
      const xPct = Math.random() * 96 + 2; // 2% to 98% of viewport
      const xDrift = (Math.random() * 120 - 60);
      const shapes: GlitterParticle['shape'][] = ['star5', 'star4', 'star8', 'sparkle', 'diamond', 'disc'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = GLITTER_PALETTE[Math.floor(Math.random() * GLITTER_PALETTE.length)];

      allParticles.push({
        id: `sky-${i}-${Math.random()}`,
        type: 'skyfall',
        xStart: xPct,
        yStart: -20 - Math.random() * 40,
        xEnd: xDrift,
        yEnd: window.innerHeight ? window.innerHeight + 80 : 900,
        rotation: Math.random() * 720 - 360,
        scale: 0.5 + Math.random() * 1.2,
        color,
        shape: randomShape,
        duration: 3.2 + Math.random() * 2.8,
        delay: 0.2 + (i * 0.035),
        glow: 'drop-shadow(0 0 6px rgba(255,215,0,0.75))',
      });
    }

    setParticles(allParticles);

    // Keep active to display the full sequential grand celebration (8.5 seconds)
    const timer = setTimeout(() => {
      setParticles([]);
    }, 8500);

    return () => clearTimeout(timer);
  }, [mounted, pct]);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9999] select-none"
      aria-hidden="true"
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence>
        {particles.map((p) => {
          let icon: React.ReactNode = null;

          if (p.shape === 'star5') {
            icon = <Star className="w-5 h-5 fill-current" />;
          } else if (p.shape === 'star4') {
            icon = <Star4Point className="w-5 h-5 fill-current" />;
          } else if (p.shape === 'star8') {
            icon = <Star8Point className="w-6 h-6 fill-current" />;
          } else if (p.shape === 'sparkle') {
            icon = <Sparkles className="w-5 h-5 fill-current animate-pulse" />;
          } else if (p.shape === 'cross') {
            icon = <CrossFlare className="w-4.5 h-4.5 stroke-[4]" />;
          } else if (p.shape === 'ring') {
            icon = (
              <div 
                className="w-4 h-4 rounded-full border-2 border-current shadow-sm"
                style={{ borderColor: p.color }}
              />
            );
          } else if (p.shape === 'diamond') {
            icon = (
              <div 
                className="w-4 h-4 rotate-45 border-2 border-white/60" 
                style={{ backgroundColor: p.color }}
              />
            );
          } else {
            // Glitter metallic disc / coin
            icon = (
              <div 
                className="w-3.5 h-3.5 rounded-full border-2 border-white/50" 
                style={{ 
                  backgroundColor: p.color,
                  backgroundImage: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), transparent 70%)'
                }}
              />
            );
          }

          if (p.type === 'skyfall') {
            // Skyfall particles start from the top of the viewport and drift down
            return (
              <motion.div
                key={p.id}
                initial={{
                  left: `${p.xStart}vw`,
                  top: '-30px',
                  opacity: 0,
                  scale: 0.2,
                  rotate: 0,
                }}
                animate={{
                  top: '105vh',
                  left: `calc(${p.xStart}vw + ${p.xEnd}px)`,
                  opacity: [0, 1, 1, 0.9, 0],
                  scale: [0.2, p.scale, p.scale * 1.1, p.scale * 0.8, 0],
                  rotate: p.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: 'easeOut',
                }}
                className="fixed will-change-transform"
                style={{ 
                  color: p.color,
                  filter: p.glow,
                }}
              >
                {icon}
              </motion.div>
            );
          }

          // Radial and fountain particles launch from center/fountain origins
          const isFountain = p.type === 'fountain';

          return (
            <motion.div
              key={p.id}
              initial={{ 
                left: '50%',
                top: isFountain ? '60%' : '45%',
                x: p.xStart,
                y: p.yStart,
                opacity: 1, 
                scale: 0.1, 
                rotate: 0,
                z: 0 
              }}
              animate={{
                x: p.xEnd,
                // Apply realistic gravity arc trajectory
                y: isFountain 
                  ? [p.yStart, p.yEnd, p.yEnd + 260] 
                  : [p.yStart, p.yEnd * 0.85, p.yEnd + 160],
                opacity: [1, 1, 0.9, 0],
                scale: [0.1, p.scale * 1.15, p.scale, 0],
                rotate: p.rotation,
                z: [0, Math.random() * 240 - 120]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.08, 0.82, 0.17, 1], // Massive explosive acceleration then smooth glide
              }}
              className="fixed will-change-transform"
              style={{ 
                color: p.color,
                filter: p.glow,
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>,
    document.body
  );
};

// --- Custom Crisp Glitter SVG Shapes ---

const Star4Point: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
  </svg>
);

const Star8Point: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1 L14.5 8.5 L22 6 L17.5 12 L22 18 L14.5 15.5 L12 23 L9.5 15.5 L2 18 L6.5 12 L2 6 L9.5 8.5 Z" />
  </svg>
);

const CrossFlare: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
  >
    <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
