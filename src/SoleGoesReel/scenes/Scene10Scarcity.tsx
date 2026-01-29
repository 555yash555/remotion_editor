/**
 * Scene 10: Scarcity
 * "FIRST 50 AGENCIES." (indigo) + sub text
 * Duration: 0:13.0–0:15.2 (390–456 frames = 66 frames)
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene10Scarcity: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 25,
      }}
    >
      {/* Main scarcity line */}
      <KineticText
        text="EASY VERIFICATION."
        animation="pop"
        fontSize={80}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={0}
        glow={true}
      />
      
      {/* Subtitle */}
      {/* Subtitle Line 1 */}
      <KineticText
        text="ONE-TIME"
        animation="slideIn"
        fontSize={60}
        fontFamily="heading"
        color={BRAND_COLORS.text.primary}
        delay={10}
      />

      {/* Subtitle Line 2 */}
      <KineticText
        text="AUDIT"
        animation="slideIn"
        fontSize={60}
        fontFamily="heading"
        color={BRAND_COLORS.text.secondary}
        delay={14}
      />
    </AbsoluteFill>
  );
};
