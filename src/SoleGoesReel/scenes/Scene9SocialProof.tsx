/**
 * Scene 9: Social Proof / Momentum
 * "GEN Z SOLO TRAVEL IS"
 * "BOOMING." (Indigo + Glow)
 * Refactored to use standard KineticText for visual consistency
 * Duration: 0:11.4–0:13.0 (approx)
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene9SocialProof: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <KineticText
        text="GROW"
        animation="slideIn"
        fontSize={120}
        fontFamily="heading"
        color={BRAND_COLORS.text.primary}
        delay={0}
      />
      
      <KineticText
        text="FASTER."
        animation="scaleUp"
        fontSize={120}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={15} 
        glow={true}
      />
    </AbsoluteFill>
  );
};
