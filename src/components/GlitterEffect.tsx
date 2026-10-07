import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  shape: 'circle' | 'square' | 'star' | 'star4' | 'diamond' | 'cross';
  duration: number;
  delay: number;
}

interface GlitterEffectProps {
  triggerCount: number;
}

const GLITTER_COLORS = [
  '#FFD700', // Classic Gold
  '#FFDF00', // Imperial Gold
  '#F4D03F', // Sun Yellow
  '#FFF275', // Light Shimmer
  '#A29BFE', // Soft Lavender
  '#9b5DE5', // Deep Purple
  '#F15BB5', // Soft Pink
  '#00F5D4', // Mint Breeze
  '#4ADE80', // Emerald Green (Victory!)
  '#FFFFFF', // Pure Light
];

export const GlitterEffect: React.FC<GlitterEffectProps> = ({ triggerCount }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (triggerCount === 0) return;

    // Generate increased celebratory sparkle pieces with rich high-fidelity motion curves
    const newParticles: Particle[] = Array.from({ length: 80 }).map((_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 120 + Math.random() * 320; // Expanded burst distance power
      const x = Math.cos(angle) * speed;
      const y = Math.sin(angle) * speed - 70; // Initial upward draft

      const shapes: ('circle' | 'square' | 'star' | 'star4' | 'diamond' | 'cross')[] = [
        'circle',
        'star',
        'star4',
        'diamond',
        'cross',
        'square',
      ];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

      return {
        id: Date.now() + index + Math.random(),
        x,
        y,
        rotation: Math.random() * 900 - 450,
        scale: 0.5 + Math.random() * 1.4,
        color: GLITTER_COLORS[Math.floor(Math.random() * GLITTER_COLORS.length)],
        shape: randomShape,
        duration: 1.3 + Math.random() * 1.3,
        delay: Math.random() * 0.14,
      };
    });

    setParticles(newParticles);

    // Self-destruct after execution to free up DOM nodes and keep performance light
    const timer = setTimeout(() => {
      setParticles([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [triggerCount]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-50 flex items-center justify-center"
      aria-hidden="true"
    >
      <AnimatePresence>
        {particles.map((p) => {
          let element: React.ReactNode = null;

          // Custom high-contrast vector particles
          if (p.shape === 'star') {
            element = <Star className="w-4.5 h-4.5 fill-current drop-shadow-[0_2px_6px_rgba(255,215,0,0.5)]" />;
          } else if (p.shape === 'star4') {
            element = <Sparkles className="w-4.5 h-4.5 fill-current drop-shadow-[0_2px_6px_rgba(255,215,0,0.5)]" />;
          } else if (p.shape === 'cross') {
            element = <Plus className="w-4.5 h-4.5 text-inherit stroke-[3.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />;
          } else if (p.shape === 'diamond') {
            element = (
              <div 
                className="w-3.5 h-3.5 rotate-45 border-2 border-white/50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" 
                style={{ backgroundColor: p.color }}
              />
            );
          } else if (p.shape === 'circle') {
            element = (
              <div 
                className="w-3 h-3 rounded-full border border-white/40 drop-shadow-[0_2px_4px_rgba(255,215,0,0.4)]" 
                style={{ backgroundColor: p.color }}
              />
            );
          } else {
            element = (
              <div 
                className="w-3.5 h-3 rounded-sm border border-white/30 rotate-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" 
                style={{ backgroundColor: p.color }}
              />
            );
          }

          return (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 20, opacity: 1, scale: 0.1, rotate: 0 }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: [1, 1, 0.9, 0],
                scale: p.scale,
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.1, 0.8, 0.25, 1], // Natural ease-out deceleration
              }}
              className="absolute"
              style={{ color: p.color }}
            >
              {element}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

// Simple helper component to export the Plus icon safely
const Plus: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
