/**
 * HyperdriveBackground.tsx
 * A high-speed "Data Tunnel" effect.
 * Uses 3D perspective to simulate flying through a digital corridor.
 * - High Energy
 * - Cinematic Depth
 * - Matches kinetic text pacing
 */

import React from 'react';
import {AbsoluteFill, useCurrentFrame, random} from 'remotion';
import {BRAND_COLORS} from '../../config/brandTokens';

export const HyperdriveBackground: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Speed of the tunnel
  const speed = 20; 
  const t = frame * speed;

  return (
    <AbsoluteFill style={{
        backgroundColor: '#000000', 
        overflow: 'hidden',
        perspective: '1000px', // Create 3D depth
    }}>
      
      {/* 1. The Grid Floor/Ceiling */}
      <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '200%', height: '200%',
          transform: `translate(-50%, -50%) rotateX(90deg) translateZ(-500px)`,
          transformStyle: 'preserve-3d',
      }}>
          {/* Moving Lines */}
          {Array.from({length: 20}).map((_, i) => {
              const zPos = ((t + i * 200) % 2000) - 1000; // Loop from -1000 to 1000
              const opacity = Math.max(0, (1000 - Math.abs(zPos)) / 1000); // Fade in distance
              
              return (
                  <div key={i} style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      border: `2px solid rgba(79, 70, 229, ${opacity * 0.3})`, // Indigo fade
                      borderRadius: '50%', // Cylindrical tunnel
                      transform: `translateZ(${zPos}px)`,
                  }} />
              );
          })}
      </div>

      {/* 2. Passing Light Streaks (Star Wars Hyperspace style) */}
      <div style={{
          position: 'absolute', width: '100%', height: '100%',
          perspective: '500px', transformStyle: 'preserve-3d',
      }}>
        {Array.from({length: 30}).map((_, i) => {
             // Random spread
             const angle = random(i) * 360;
             const radius = 300 + random(i + 1) * 500;
             const delay = random(i + 2) * 1000;
             
             // Z movement
             const z = ((t * 2 + delay) % 2000) - 500;
             const opacity = z > 0 ? (1000 - z) / 1000 : 0;
             
             return (
                 <div key={i} style={{
                     position: 'absolute',
                     left: '50%', top: '50%',
                     width: 4, height: 100, // Streak perception
                     background: 'white',
                     opacity: opacity * 0.5,
                     transform: `rotate(${angle}deg) translateY(${radius}px) rotateX(90deg) translateZ(${z}px)`,
                     boxShadow: '0 0 10px white'
                 }} />
             );
        })}
      </div>
      
      {/* 3. Central Void Fog to hide the vanishing point */}
      <div style={{
          position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle, transparent 0%, #000000 80%)',
      }} />

    </AbsoluteFill>
  );
};
