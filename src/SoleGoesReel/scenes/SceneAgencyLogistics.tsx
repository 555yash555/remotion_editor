import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const SceneAgencyLogistics: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen 
        src="payment_options.jpg" 
        delay={0} 
        direction="up" 
        darken={0.7} // Darker overlay for this busy screen
      />

      <div style={{
          position: 'absolute',
          bottom: 150, // Push text to bottom
          width: '100%',
          textAlign: 'center',
          zIndex: 10,
      }}>
        <KineticText
            text="ZERO STRESS."
            animation="slideIn"
            color={BRAND_COLORS.accent.indigo}
            fontSize={120}
            fontWeight={800}
        />
      </div>
    </AbsoluteFill>
  );
};
