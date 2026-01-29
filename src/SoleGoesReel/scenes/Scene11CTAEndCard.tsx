/**
 * Scene 11: CTA End Card
 * Logo + tagline + CTA button + URL
 * Duration: 0:15.2–0:18.0 (456–540 frames = 84 frames)
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, Easing} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS, BRAND_FONTS, PREMIUM_EASING} from '../config/brandTokens';

export const Scene11CTAEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Logo fade in (8 frames)
  const logoOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  // CTA button pulse: gentle 96→100
  const buttonScale = interpolate(frame, [20, 30], [0.96, 1], {
    easing: Easing.bezier(...PREMIUM_EASING),
    extrapolateRight: 'clamp',
  });
  
  // CTA glow pulse
  const glowIntensity = interpolate(
    frame,
    [20, 35, 50, 65],
    [0, 1, 0.5, 1],
    {
      easing: Easing.inOut(Easing.sin),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  
  // URL typewriter effect
  const urlReveal = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Bass Shake (New): Shake screen on boom impact (Frames 0-10)
  const shake = interpolate(frame, [0, 5, 10], [0, 15, 0], {
     extrapolateRight: 'clamp',
     easing: Easing.bounce,
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 40,
        transform: `translate(${shake}px, ${shake}px)`, // Apply shake
      }}
    >
      {/* Logo text */}
      <div style={{ opacity: logoOpacity }}>
        <h1
          style={{
            fontSize: 120,
            fontWeight: 800,
            fontFamily: BRAND_FONTS.heading,
            color: BRAND_COLORS.text.primary,
            margin: 0,
            letterSpacing: '-2px',
          }}
        >
          SOLEGOES
        </h1>
      </div>
      
      {/* Tagline */}
      <KineticText
        text="SOLO, NOT ALONE."
        animation="fadeIn"
        fontSize={48}
        fontFamily="body"
        color={BRAND_COLORS.text.secondary}
        delay={8}
      />
      
      {/* CTA Button */}
      <div
        style={{
          transform: `scale(${buttonScale})`,
          marginTop: 20,
        }}
      >
        <div
          style={{
            padding: '24px 60px',
            backgroundColor: BRAND_COLORS.accent.indigo,
            borderRadius: 50,
            boxShadow: `0 0 ${60 * glowIntensity}px ${BRAND_COLORS.accent.glowIndigo}`,
            border: `2px solid ${BRAND_COLORS.accent.glowIndigo}`,
          }}
        >
          <span
            style={{
              color: BRAND_COLORS.text.primary,
              fontSize: 40,
              fontWeight: 700,
              fontFamily: BRAND_FONTS.body,
              letterSpacing: '0.5px',
            }}
          >
            JOIN WAITLIST
          </span>
        </div>
      </div>
      
      {/* URL typewriter */}
      <div
        style={{
          marginTop: 10,
          clipPath: `inset(0 ${(1 - urlReveal) * 100}% 0 0)`,
        }}
      >
        <span
          style={{
            color: BRAND_COLORS.text.secondary,
            fontSize: 36,
            fontFamily: BRAND_FONTS.body,
            letterSpacing: '1px',
          }}
        >
          solegoes.in
        </span>
      </div>
    </AbsoluteFill>
  );
};
