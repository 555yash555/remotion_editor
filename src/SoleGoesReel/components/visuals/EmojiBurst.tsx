/**
 * EmojiBurst.tsx
 * Spawns a cloud of emojis that increase in number over time.
 * Includes exclusion zone to keep center text clear.
 */

import React from 'react';
import {useCurrentFrame, interpolate, random, Easing} from 'remotion';

interface EmojiBurstProps {
  emojis: string[];
  count?: number;
  stagger?: number;
  spread?: number;
}

export const EmojiBurst: React.FC<EmojiBurstProps> = ({
  emojis,
  count = 15,
  stagger = 3,
  spread = 400,
}) => {
  const frame = useCurrentFrame();

  return (
    <div style={{position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none'}}>
      {Array.from({length: count}).map((_, i) => {
        const seed = i * 123.45;
        let x = (random(seed) - 0.5) * spread * 2;
        let y = (random(seed + 1) - 0.5) * spread * 2;
        
        // Push away from center (Radius 220px exclusion)
        const distance = Math.sqrt(x*x + y*y);
        const minDistance = 220;
        if (distance < minDistance) {
            const angle = Math.atan2(y, x);
            x = Math.cos(angle) * (minDistance + 50 + random(seed)*50);
            y = Math.sin(angle) * (minDistance + 50 + random(seed)*50);
        }

        const rotation = (random(seed + 2) - 0.5) * 60;
        const emoji = emojis[i % emojis.length];
        const size = 40 + random(seed + 3) * 60;
        
        const delay = i * stagger;
        const localFrame = frame - delay;
        
        if (localFrame < 0) return null;

        const scale = interpolate(localFrame, [0, 8, 12], [0, 1.2, 1], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        
        const floatY = interpolate(localFrame, [0, 100], [0, -50]);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y + floatY}px)) rotate(${rotation}deg) scale(${scale})`,
              fontSize: size,
              opacity: 0.9,
              textShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
};
