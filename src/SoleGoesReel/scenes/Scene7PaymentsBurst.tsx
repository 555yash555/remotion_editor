/**
 * Scene 7: Payments
 * "NO SHADY QRS."
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const Scene7PaymentsBurst: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 400,
      }}
    >
      <AppScreen 
          src="payment_success.jpg" 
          delay={0} 
          direction="up" 
          // No scroll, just the result
      />

      <KineticText
        text="DONE."
        animation="scaleUp"
        fontSize={80}
        fontFamily="heading"
        delay={0}
      />
      
      <KineticText
        text="PAY SAFE IN APP."
        animation="scaleUp"
        fontSize={90}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={15}
        glow={true}
      />
    </AbsoluteFill>
  );
};
