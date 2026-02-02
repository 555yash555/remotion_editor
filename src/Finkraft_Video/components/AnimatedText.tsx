import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from 'remotion';
import { COLORS, fontFamily } from '../utils/constants';

interface AnimatedTextProps {
  text: string;
  delay?: number; // in seconds
  fontSize?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string; // Add className prop
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  delay = 0, 
  fontSize = 60, 
  color = COLORS.TextPrimary,
  style,
  className
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(' ');

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '0.3em',
      fontFamily,
      ...style 
    }} className={className}>
      {words.map((word, i) => {
        const wordDelay = delay * fps + i * 5; // Stagger by 5 frames
        
        const opacity = interpolate(
            frame, 
            [wordDelay, wordDelay + 15], 
            [0, 1], 
            { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
        );
        
        const translateY = interpolate(
            frame, 
            [wordDelay, wordDelay + 15], 
            [40, 0], 
            { easing: Easing.out(Easing.cubic), extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
        );

        return (
          <span 
            key={i} 
            style={{ 
              opacity, 
              transform: `translateY(${translateY}px)`,
              fontSize,
              fontWeight: 800,
              color,
              display: 'inline-block'
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
