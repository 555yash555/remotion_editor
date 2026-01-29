/**
 * Grain Overlay Component
 * 5-8% noise/grain for premium feel and preventing banding
 */

import React, {useMemo} from 'react';
import {GRAIN_OPACITY} from '../config/brandTokens';

export const GrainOverlay: React.FC = () => {
  // Generate noise pattern using canvas
  const noiseDataUrl = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return '';
    
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise; // R
      data[i + 1] = noise; // G
      data[i + 2] = noise; // B
      data[i + 3] = 255; // A
    }
    
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${noiseDataUrl})`,
        backgroundRepeat: 'repeat',
        opacity: GRAIN_OPACITY,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}
    />
  );
};
