/**
 * NotificationPopup.tsx
 * Procedural iOS-style notification bubble
 */

import React from 'react';
import {useCurrentFrame, interpolate, Easing} from 'remotion';
import {BRAND_COLORS, BRAND_FONTS} from '../config/brandTokens';

interface NotificationPopupProps {
  title: string;
  message: string;
  icon?: string;
  delay?: number;
}

export const NotificationPopup: React.FC<NotificationPopupProps> = ({
  title,
  message,
  icon = '✨',
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - delay;
  
  const y = interpolate(localFrame, [0, 15], [-50, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });
  
  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  if (localFrame < 0) return null;

  return (
    <div
      style={{
        transform: `translateY(${y}px)`,
        opacity,
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 24,
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        width: 750,
        boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
        marginBottom: 24,
      }}
    >
      <div 
        style={{
          width: 70, 
          height: 70, 
          background: BRAND_COLORS.accent.indigo,
          borderRadius: 14,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      
      <div style={{flex: 1}}>
        <div style={{
          color: '#000', 
          fontFamily: BRAND_FONTS.body, 
          fontWeight: 700, 
          fontSize: 28,
          marginBottom: 6,
          lineHeight: 1.1,
        }}>
          {title}
        </div>
        <div style={{
          color: '#333',
          fontFamily: BRAND_FONTS.body, 
          fontWeight: 500, 
          fontSize: 24,
          lineHeight: 1.2,
        }}>
          {message}
        </div>
      </div>
      
      <div style={{
        color: '#666',
        fontSize: 18,
        fontFamily: BRAND_FONTS.body,
        alignSelf: 'flex-start',
        marginTop: 4,
        fontWeight: 500,
      }}>
        now
      </div>
    </div>
  );
};
