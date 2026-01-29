/**
 * Scene 4: What It Is
 * "THE SOLO TRAVEL HUB" + "FOR GEN Z" (indigo)
 * Each line rises 12px + fade (stagger 4 frames)
 * Duration: 0:03.6–0:05.0 (108–150 frames)
 */

import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AppScreen} from '../components/visuals/AppScreen';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene4WhatItIs: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen 
        src="explore_screen.jpg" 
        delay={0} 
        direction="left" 
        scrollAmount={800} // Fast scroll through vibes
        scrollStartDelay={10}
      />

      <KineticText
        text="FIND YOUR VIBE."
        animation="trackingIn"
        color={BRAND_COLORS.text.primary}
        fontSize={140}
        fontWeight={800}
      />
    </AbsoluteFill>
  );
};
