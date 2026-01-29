/**
 * RapidStream.tsx
 * High-dopamine text component that flashes words sequentially.
 * Used for "SWIPE. MATCH. GO." style energetic messaging.
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BRAND_COLORS, BRAND_FONTS} from '../config/brandTokens';

interface RapidStreamProps {
  words: string[];
  durationPerWord: number; // How long each word stays (e.g., 10 frames)
  delay?: number;
  fontSize?: number;
  color?: string;
  glow?: boolean;
}

export const RapidStream: React.FC<RapidStreamProps> = ({
  words,
  durationPerWord,
  delay = 0,
  fontSize = 140,
  color = BRAND_COLORS.text.primary,
  glow = false,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - delay; // Frame relative to start of this sequence

  // Determine which word to show
  const wordIndex = Math.floor(localFrame / durationPerWord);
  const currentWord = words[wordIndex];

  // If before start or after end, show nothing
  if (localFrame < 0 || wordIndex >= words.length) {
    return null;
  }

  // Animation for each word: POP IN (scale 0.5 -> 1.5 -> 1)
  const wordFrame = localFrame % durationPerWord;
  // Simple "punch" scale effect for every word
  const scale = wordFrame < 2 ? 1.1 : 1.0; 
  const opacity = 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize,
          fontFamily: BRAND_FONTS.heading,
          fontWeight: 800,
          color,
          textAlign: 'center',
          opacity,
          transform: `scale(${scale})`,
          textShadow: glow 
            ? `0 0 20px ${BRAND_COLORS.accent.glowIndigo}80` 
            : '0 4px 10px rgba(0,0,0,0.5)',
          lineHeight: 1,
        }}
      >
        {currentWord}
      </div>
    </AbsoluteFill>
  );
};
