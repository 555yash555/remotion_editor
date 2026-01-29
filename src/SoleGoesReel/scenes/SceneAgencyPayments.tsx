import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {EmojiBurst} from '../components/visuals/EmojiBurst';

export const SceneAgencyPayments: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <EmojiBurst 
        emojis={['💰', '💳', '🏦', '💹', '💸', '🧾']} 
        count={25} 
        spread={450} 
      />

      <KineticText
        text="AUTOMATED"
        animation="slideIn"
        fontSize={100}
        fontFamily="heading"
        delay={0}
      />
      
      <KineticText
        text="PAYOUTS."
        animation="scaleUp"
        fontSize={120}
        fontFamily="heading"
        color={BRAND_COLORS.pill.green}
        delay={10}
        glow={true}
      />
    </AbsoluteFill>
  );
};
