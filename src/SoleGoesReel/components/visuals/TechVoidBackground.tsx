/**
 * TechVoidBackground.tsx
 * A deep, dark background designed specifically for high text contrast.
 * Features:
 * 1. Deep Graphite/Black base (#030305).
 * 2. Subtle scrolling isometric grid.
 * 3. Very faint 'smoke' lights (Indigo) that never exceed 30% lightness.
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BRAND_COLORS} from '../../config/brandTokens';

export const TechVoidBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame * 0.01; // Slow movement

  return (
    <AbsoluteFill style={{backgroundColor: '#030305', overflow: 'hidden'}}>
      
      {/* 1. Deep Ambient Glows (Very subtle, max opacity 0.4) */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '80%',
          height: '80%',
          background: `radial-gradient(circle, ${BRAND_COLORS.accent.indigo} 0%, transparent 70%)`,
          transform: `translate(${Math.sin(t) * 10}%)`,
          filter: 'blur(120px)',
          opacity: 0.25, // Kept dark
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '70%',
          height: '70%',
          background: `radial-gradient(circle, #3b0764 0%, transparent 70%)`, // Deep Purple
          transform: `translate(${Math.cos(t) * -10}%)`,
          filter: 'blur(100px)',
          opacity: 0.2, // Kept dark
        }}
      />
      
      {/* 2. Scrolling Grid (Adds structure without noise) */}
      <AbsoluteFill
        style={{
            backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            transform: `translateY(${frame * 0.5}px) perspective(500px) rotateX(20deg)`, // Pseudo-3D floor effect
            opacity: 0.15,
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', // Fade edges
        }}
      />

      {/* 3. Digital Embers / Floating Dust */}
      {Array.from({length: 40}).map((_, i) => {
        // Deterministic random
        const seed = i * 456.78;
        const xBase = (seed % 100); 
        const yBase = ((seed * 13) % 100);
        const speed = 0.2 + (seed % 0.5);
        const size = 1 + (seed % 4);
        
        // Floating animation
        const yPos = (yBase - frame * speed) % 100;
        const realY = yPos < 0 ? 100 + yPos : yPos;
        const xWobble = Math.sin(frame * 0.05 + seed) * 3;
        
        const opacity = Math.abs(Math.sin(frame * 0.02 + seed)) * 0.4 + 0.1; // Pulse

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${xBase + xWobble}%`,
              top: `${realY}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: i % 3 === 0 ? BRAND_COLORS.accent.indigo : '#ffffff',
              opacity,
              boxShadow: `0 0 ${size * 2}px ${i % 3 === 0 ? BRAND_COLORS.accent.indigo : 'white'}`,
            }}
          />
        );
      })}

      {/* 4. Vignette (Critical for focusing center text) */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle, transparent 30%, #000000 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
