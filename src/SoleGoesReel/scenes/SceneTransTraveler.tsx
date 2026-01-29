import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {EmojiBurst} from '../components/visuals/EmojiBurst';

export const SceneTransTraveler: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Background Burst */}
      <EmojiBurst 
        emojis={['✈️', '🌍', '🗺️', '🧳', '📸', '🏝️', '🕶️']} 
        count={25} 
        spread={500}
        stagger={2} 
      />

      <KineticText
        text="HEY"
        animation="slideIn"
        fontSize={80}
        fontFamily="heading"
        color={BRAND_COLORS.text.primary} // White
        delay={0}
      />
      
      <KineticText
        text="TRAVELERS..."
        animation="scaleUp"
        fontSize={100}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo} // Indigo
        delay={15}
        glow={true}
      />
    </AbsoluteFill>
  );
};
