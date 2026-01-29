/**
 * Scene 1: Hook Word Punch
 * "SOLO" - center, huge, with scale pop + slight blur-in
 * Duration: 0:00–0:01.2 (0–36 frames)
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene1HookPunch: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Bored Wobble Effect (Slow, low energy)
  const wobbleY = Math.sin(frame * 0.05) * 15; // Slow float up/down
  const wobbleRotate = Math.sin(frame * 0.03) * 3; // Slight lazy tilt

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#000',
      }}
    >
      <div style={{
          transform: `translateY(${wobbleY}px) rotate(${wobbleRotate}deg)`,
      }}>
        <KineticText
            text="BORED?"
            animation="scaleUp"
            color={BRAND_COLORS.text.primary}
            fontSize={180}
            fontWeight={900}
        />
      </div>
    </AbsoluteFill>
  );
};
