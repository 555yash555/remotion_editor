/**
 * Scene 8: Agency Callout Pivot
 * "GO VIRAL? MAYBE."
 * Action Zoom Cut Animation for "MAYBE."
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, Easing} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene8AgencyCallout: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Action Movie "Zoom Cuts"
  // 1. Initial Pop (Frame 18): Scale 1.0
  // 2. Zoom Cut 1 (Frame 40): Scale 1.4
  // 3. Zoom Cut 2 (Frame 60): Scale 2.5 (Massive)
  
  const frameOffset = frame - 18; // relative to text appearance
  
  let shakeX = 0;
  let shakeY = 0;
  
  if (frameOffset >= 25 && frameOffset < 45) {
     // Shake on impact frame 1
     if (frameOffset < 28) {
         shakeX = (Math.random() - 0.5) * 20;
         shakeY = (Math.random() - 0.5) * 20;
     }
  } else if (frameOffset >= 45) {
     // Shake harder on impact frame 2
     if (frameOffset < 48) {
         shakeX = (Math.random() - 0.5) * 40;
         shakeY = (Math.random() - 0.5) * 40;
     }
  }

  // Smooth out the scale transition slightly so it's not a hard glitch
  const animScale = interpolate(frame, [18, 18+5, 43, 43+5, 63, 63+5], [0, 1, 1, 1.4, 1.4, 2], {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.back(3)), // "Overshoot" snap for punchiness
  });  

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 30,
      }}
    >
      {/* Main text */}
      <KineticText
        text="GO VIRAL?"
        animation="pop"
        fontSize={100}
        fontFamily="heading"
        delay={10}
      />
      
      {/* Subtitle with Stepped Zoom & Interaction Shake */}
      <div style={{transform: `scale(${animScale}) translate(${shakeX}px, ${shakeY}px)`}}>
        <KineticText
          text="MAYBE."
          animation="slideIn"
          fontSize={100}
          fontFamily="heading"
          color={BRAND_COLORS.accent.indigo}
          delay={18}
          glow={true}
        />
      </div>
    </AbsoluteFill>
  );
};
