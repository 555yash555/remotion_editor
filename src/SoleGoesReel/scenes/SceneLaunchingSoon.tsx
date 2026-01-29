/**
 * Scene Launching Soon
 * Builds anticipation before final CTA
 */
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const SceneLaunchingSoon: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{fontSize: 80, marginBottom: 20}}>🚀</div>
      <KineticText
        text="LAUNCHING"
        animation="slideIn"
        fontSize={90}
        fontFamily="heading"
        delay={0}
      />
      <KineticText
        text="SOON."
        animation="scaleUp"
        fontSize={110}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={10}
        glow={true}
      />
    </AbsoluteFill>
  );
};
