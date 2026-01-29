import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const SceneAgencyDashboard: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen 
        src="my_trips.jpg" 
        delay={0} 
        direction="up" 
      />

      <KineticText
        text="MANAGE ALL."
        animation="scaleUp"
        color={BRAND_COLORS.text.primary}
        fontSize={120}
        fontWeight={800}
      />
    </AbsoluteFill>
  );
};
