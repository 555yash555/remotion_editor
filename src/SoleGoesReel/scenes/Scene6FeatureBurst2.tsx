/**
 * Scene 6: Feature Burst 2
 * "AI MATCHES YOUR VIBE." - "VIBE" in indigo
 * "AI MATCHES YOUR" wipes, "VIBE" pops
 * Duration: 0:06.4–0:07.8 (192–234 frames)
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const Scene6FeatureBurst2: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen 
          src="trip_detail_ladakh.jpg" 
          delay={0} 
          direction="up"
          scrollAmount={600} // Scroll to 'Book Now'
          scrollStartDelay={30}
          touchPoint={{x: 75, y: 88}} // Tap 'Book Now' button (approx)
          touchDelay={70}
      />

      <KineticText
        text="BOOK IN SECONDS."
        animation="trackingIn"
        color={BRAND_COLORS.text.primary}
        fontSize={110}
        fontWeight={800}
      />
    </AbsoluteFill>
  );
};
