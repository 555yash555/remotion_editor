/**
 * Scene 5: Feature Burst 1
 * "VERIFIED TRIPS."
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const Scene5FeatureBurst1: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen
          src={[
            "book_style.jpg",
            "book_pickup.jpg",
            "book_drop.jpg",
            "book_review.jpg"
          ]}
          interval={15} // Switch every 0.5s (30fps)
          delay={5}
          direction="right"
      />

      <KineticText
        text="YOUR RULES."
        animation="scaleUp"
        color={BRAND_COLORS.accent.indigo}
        fontSize={140}
        fontWeight={800}
      />
    </AbsoluteFill>
  );
};
