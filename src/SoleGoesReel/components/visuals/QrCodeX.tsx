/**
 * QrCodeX.tsx
 * Digital Scan / Pixel Binning Effect.
 * Combination of the "White Tile" shape but with a high-density, flickering pixel grid.
 */

import React, {useMemo} from 'react';
import {useCurrentFrame, interpolate, Easing, random} from 'remotion';

export const QrCodeX: React.FC<{delay?: number}> = ({delay = 0}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - delay;
  
  if (localFrame < 0) return null;

  // Pop in animation
  const scale = interpolate(localFrame, [0, 15], [0, 1], {
    easing: Easing.out(Easing.back(1.5)),
    extrapolateRight: 'clamp',
  });
  
  // X Appearance
  const xScale = interpolate(localFrame, [10, 20], [0, 1], {
     easing: Easing.elastic(1.5),
     extrapolateRight: 'clamp',
  });
  
  // "Data Scan" Effect
  // We generate a static grid, but opacity flickers based on frame to simulate scanning
  const gridSize = 12; // 12x12 = 144 dots

  return (
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '38%', 
        transform: `translate(-50%, -50%) scale(${scale})`, 
        zIndex: 10,
    }}>
       {/* White Tile Container */}
       <div style={{
           width: 280, 
           height: 280, 
           backgroundColor: 'white',
           borderRadius: 20,
           padding: 15,
           boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           position: 'relative',
           overflow: 'hidden'
       }}>
           {/* High-Density Pixel Grid */}
           <div style={{
               width: '100%', 
               height: '100%', 
               display: 'grid',
               gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
               gap: 4,
           }}>
               {Array.from({length: gridSize * gridSize}).map((_, i) => {
                    // Unique flicker per pixel
                    const seed = random(i) * 100;
                    // Some pixels are static black, some flicker
                    const isStatic = random(i + 10) > 0.3;
                    
                    // Flicker calculation
                    const flickerSpeed = 0.5 + random(i)*0.5;
                    const opacity = isStatic ? 1 : Math.abs(Math.sin((frame * flickerSpeed) + seed));
                    
                    // Color: mostly black, some "empty" (white)
                    const isPixel = random(i + 20) > 0.4;
                    const color = isPixel ? 'black' : 'transparent';

                    return (
                        <div key={i} style={{
                            backgroundColor: color, 
                            borderRadius: 2,
                            opacity: opacity, // The scan effect
                        }} />
                    );
               })}
           </div>
           
           {/* Eyes (Corner Markers) overlay on top of grid */}
           <div style={{position: 'absolute', top: 15, left: 15, width: 60, height: 60, border: '6px solid black', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: 30, height: 30, background: 'black'}} />
           </div>
           <div style={{position: 'absolute', top: 15, right: 15, width: 60, height: 60, border: '6px solid black', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: 30, height: 30, background: 'black'}} />
           </div>
           <div style={{position: 'absolute', bottom: 15, left: 15, width: 60, height: 60, border: '6px solid black', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: 30, height: 30, background: 'black'}} />
           </div>
       </div>
       
       {/* Red X Cross */}
       <div style={{
           position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
           display: 'flex', justifyContent: 'center', alignItems: 'center',
           transform: `scale(${xScale})`,
       }}>
           <div style={{position: 'relative', width: 240, height: 240}}>
                <div style={{position: 'absolute', left: '50%', top: '50%', width: '100%', height: 25, background: '#ef4444', transform: 'translate(-50%, -50%) rotate(45deg)', borderRadius: 10, boxShadow: '0 0 20px rgba(239,68,68,0.5)'}} />
                <div style={{position: 'absolute', left: '50%', top: '50%', width: '100%', height: 25, background: '#ef4444', transform: 'translate(-50%, -50%) rotate(-45deg)', borderRadius: 10, boxShadow: '0 0 20px rgba(239,68,68,0.5)'}} />
           </div>
       </div>
    </div>
  );
};
