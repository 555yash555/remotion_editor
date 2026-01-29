/**
 * Background Component with Indigo Glow
 * Slow "breathing" indigo radial glow effect
 */

import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, Easing} from 'remotion';
import {BRAND_COLORS} from '../config/brandTokens';

export const BackgroundGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Slow breathing effect - 4 second cycle
  const breathCycle = 4 * fps; // 120 frames
  const breathProgress = (frame % breathCycle) / breathCycle;
  
  // Glow intensity oscillates between 0.15 and 0.35
  const glowIntensity = interpolate(
    breathProgress,
    [0, 0.5, 1],
    [0.15, 0.35, 0.15],
    {
      easing: Easing.inOut(Easing.sin),
    }
  );
  
  // Glow scale breathes between 100% and 110%
  const glowScale = interpolate(
    breathProgress,
    [0, 0.5, 1],
    [1, 1.1, 1],
    {
      easing: Easing.inOut(Easing.sin),
    }
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: BRAND_COLORS.bg.base,
        overflow: 'hidden',
      }}
    >
      {/* Deep background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${BRAND_COLORS.bg.deep} 0%, ${BRAND_COLORS.bg.base} 60%)`,
        }}
      />
      
      {/* Breathing indigo glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '120%',
          height: '80%',
          transform: `translate(-50%, -50%) scale(${glowScale})`,
          background: `radial-gradient(ellipse at center, ${BRAND_COLORS.accent.glowIndigo}${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')} 0%, transparent 60%)`,
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
