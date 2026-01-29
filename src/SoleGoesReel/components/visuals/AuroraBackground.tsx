/**
 * AuroraBackground.tsx
 * High-end "Liquid Mesh" gradient background.
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BRAND_COLORS} from '../../config/brandTokens';

export const AuroraBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame * 0.02;
  
  return (
    <AbsoluteFill style={{backgroundColor: '#000000', overflow: 'hidden'}}>
      {/* Blob 1: Indigo */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '80%',
          height: '80%',
          background: `radial-gradient(circle, ${BRAND_COLORS.accent.indigo} 0%, transparent 70%)`,
          transform: `translate(${Math.sin(t) * 20}%, ${Math.cos(t * 1.3) * 20}%) rotate(${t * 10}deg)`,
          filter: 'blur(80px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
        }}
      />
      {/* Blob 2: Cyan */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
          transform: `translate(${Math.sin(t * 0.8 + 2) * -30}%, ${Math.cos(t * 0.5) * -20}%)`,
          filter: 'blur(90px)',
          opacity: 0.6,
          mixBlendMode: 'screen',
        }}
      />
      {/* Blob 3: Purple */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '30%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          transform: `translate(${Math.cos(t * 1.1) * 25}%, ${Math.sin(t * 0.9) * 25}%) scale(${1 + Math.sin(t)*0.2})`,
          filter: 'blur(70px)',
          opacity: 0.5,
          mixBlendMode: 'screen',
        }}
      />
      {/* Noise Texture */}
      <AbsoluteFill
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.07,
          mixBlendMode: 'overlay',
          transform: 'scale(1.5)',
        }}
      />
      {/* Vignette */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 120%)',
        }}
      />
    </AbsoluteFill>
  );
};
