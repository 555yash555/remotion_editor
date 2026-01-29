/**
 * AppScreen.tsx
 * Wraps a screenshot in a sleek, premium phone container style.
 * Adds 3D tilt, shadow, and border radius to match modern UI design.
 */

import React from 'react';
import {Img, staticFile, useCurrentFrame, interpolate, Easing} from 'remotion';

interface AppScreenProps {
  src: string | string[]; // Single image or slideshow
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scrollAmount?: number;
  scrollStartDelay?: number; 
  touchPoint?: {x: number, y: number}; 
  touchDelay?: number;
  darken?: number;
  interval?: number; // Frames per slide if src is array
}

export const AppScreen: React.FC<AppScreenProps> = ({
  src,
  delay = 0,
  direction = 'up',
  scrollAmount = 0,
  scrollStartDelay = 40,
  touchPoint,
  touchDelay = 60,
  darken = 0.5,
  interval = 20, // Default speed for slideshow
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - delay;
  
  if (localFrame < 0) return null;

  // Slideshow Logic
  const images = Array.isArray(src) ? src : [src];
  const activeIndex = Math.floor(localFrame / interval) % images.length;
  const activeImage = images[activeIndex];

  // 1. Slide In Animation
  const slide = interpolate(localFrame, [0, 20], [100, 0], {
     easing: Easing.out(Easing.cubic),
     extrapolateRight: 'clamp',
  });
  
  const opacity = interpolate(localFrame, [0, 15], [0, 1]);
  
  // 2. Continuous Float
  const floatY = Math.sin(frame * 0.05) * 10;
  const rotateY = Math.sin(frame * 0.02) * 5;

  let transform = '';
  if (direction === 'up') transform = `translateY(${slide}%)`;
  if (direction === 'down') transform = `translateY(${-slide}%)`;
  
  // 3. Scroll Animation
  const scrollY = interpolate(
    localFrame - scrollStartDelay,
    [0, 60],
    [0, -scrollAmount],
    {
      easing: Easing.inOut(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  );

  // 4. Touch Animation
  const touchScale = interpolate(
      localFrame - touchDelay,
      [0, 10],
      [1.5, 0.8], 
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  const touchOpacity = interpolate(
      localFrame - touchDelay,
      [0, 5, 20],
      [0, 0.6, 0],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  const finalTransform = `
    perspective(1000px)
    ${transform}
    translateY(${floatY}px)
    rotateY(${rotateY}deg)
    rotateX(5deg)
  `;

  return (
    <div style={{
       position: 'absolute',
       left: '50%',
       top: '50%',
       width: 650, 
       height: 1200, 
       marginLeft: -325,
       marginTop: -600,
       transform: finalTransform,
       opacity,
       zIndex: 0,
    }}>
        {/* Phone Frame */}
        <div style={{
            width: '100%', 
            height: '100%', 
            borderRadius: 80, 
            overflow: 'hidden',
            boxShadow: '0 40px 120px rgba(79, 70, 229, 0.3)',
            border: '14px solid #121212', 
            position: 'relative',
            backgroundColor: '#000',
        }}>
           {/* Scrollable Content Container */}
           <div style={{
               width: '100%',
               transform: `translateY(${scrollY}px)`,
           }}>
                {/* Image Switcher */}
                <Img 
                    src={staticFile(`assets/screenshots/${activeImage}`)} 
                    style={{
                        width: '100%', 
                        height: 'auto', 
                        display: 'block'
                    }} 
                />
           </div>

           {/* Dark Overlay for Text Contrast */}
           <div style={{
               position: 'absolute',
               top: 0,
               left: 0,
               width: '100%',
               height: '100%',
               backgroundColor: `rgba(0,0,0,${darken})`, 
               pointerEvents: 'none',
           }} />
           
           {/* Touch Ripple Overlay */}
           {touchPoint && (
               <div style={{
                   position: 'absolute',
                   left: `${touchPoint.x}%`,
                   top: `${touchPoint.y}%`,
                   width: 80,
                   height: 80,
                   borderRadius: '50%',
                   border: '4px solid rgba(255,255,255,0.8)',
                   backgroundColor: 'rgba(255,255,255,0.3)',
                   transform: `translate(-50%, -50%) scale(${touchScale})`,
                   opacity: touchOpacity,
                   pointerEvents: 'none',
               }} />
           )}
           
           {/* Glass Glare */}
           <div style={{
               position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
               background: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
               pointerEvents: 'none'
           }} />
        </div>
    </div>
  );
};
