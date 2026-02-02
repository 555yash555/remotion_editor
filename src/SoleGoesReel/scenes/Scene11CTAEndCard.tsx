/**
 * Scene 11: CTA End Card
 * Logo + tagline + CTA button + URL
 * Duration: 0:15.2–0:18.0 (456–540 frames = 84 frames)
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, Easing, Img, staticFile} from 'remotion';

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
        gap: 0, // Minimized gap to bring tagline closer
        transform: `translate(${shake}px, ${shake}px)`, // Apply shake
      }}
    >
      {/* Logo Image */}
      <Img
        src={staticFile('assets/logos/logo_transparent.png')}
        style={{
          opacity: logoOpacity,
          width: 800,
          height: 'auto',
          objectFit: 'contain',
          marginBottom: -60, // Negative margin to eat up internal PNG whitespace
        }}
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
          marginTop: 40, // Increased spacing above URL
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
