/**
 * Scene 3a: Context Bridge
 * "CONNECTING TRAVELERS"
 * "WITH TRUSTED AGENCIES."
 * Purpose: Explain exactly what the app does before listing features.
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS, ANIMATION_TIMINGS} from '../config/brandTokens';

export const Scene3aContext: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 15,
      }}
    >
      <KineticText
        text="JOIN TRIPS."
        animation="scaleUp" // Boom effect
        fontSize={90}
        fontFamily="heading"
        delay={0}
      />
      
      <KineticText
        text="GET A LIFE."
        animation="slideIn" // Fast slide
        fontSize={100}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={20}
        glow={true}
      />
    </AbsoluteFill>
  );
};
