import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const Scene3BrandPayoff: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen 
          src="chat_list.jpg" 
          delay={15} 
          direction="up" 
          scrollAmount={300}
      />

      <div style={{
          position: 'absolute', 
          top: 200, // Move above the phone (Phone starts at ~360px)
          width: '100%',
          textAlign: 'center',
          zIndex: 10
      }}>
        <KineticText
            text="GO SOLO."
            animation="scaleUp"
            color={BRAND_COLORS.text.primary}
            fontSize={120}
            fontWeight={900}
            delay={0}
            customDuration={15} 
        />
      </div>

      <div style={{
          position: 'absolute', 
          bottom: 200, 
          width: '100%', 
          textAlign: 'center',
          zIndex: 10
      }}>
         <KineticText
            text="NOT ALONE."
            animation="trackingIn"
            color={BRAND_COLORS.accent.indigo}
            fontSize={110}
            fontWeight={900}
            delay={20}
            glow={true}
        />
      </div>
    </AbsoluteFill>
  );
};
