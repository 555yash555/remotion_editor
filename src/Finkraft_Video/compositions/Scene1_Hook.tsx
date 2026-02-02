import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { COLORS } from '../utils/constants';
import { ErrorIcon } from '../components/Icons';
import { InvoiceCard } from '../components/InvoiceCard';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title, Subtitle, Highlight } from '../components/Typography';

// Helper for 3D rotation
const rotate3d = (x: number, y: number, z: number, deg: number) => `rotate3d(${x}, ${y}, ${z}, ${deg}deg)`;

export const Scene1_Hook: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera Zoom (Aggressive)
  const zoom = interpolate(frame, [0, 90], [1, 1.4], { extrapolateRight: 'clamp' });
  const rotZ = interpolate(frame, [0, 90], [0, 5], { extrapolateRight: 'clamp' });

  // Text Entrance
  const textOpacity = interpolate(frame, [15, 25], [0, 1]);
  const textY = interpolate(frame, [15, 25], [20, 0]);

  return (
    <GlobalLayout>
      <AbsoluteFill style={{ overflow: 'hidden', perspective: 1000 }}>
      
      {/* 3D Floating Chaos Layer */}
      <AbsoluteFill style={{ 
          transform: `scale(${zoom}) rotateZ(${rotZ}deg)`, 
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 40%'
      }}>
        {[...Array(10)].map((_, i) => {
            const x = (Math.sin(i * 132.31) * 600) + 540; 
            const y = (Math.cos(i * 452.12) * 800) + 960;
            const z = (Math.sin(i * 12.12) * 400) - 200;
            const rX = Math.sin(i) * 30;
            const rY = Math.cos(i) * 30;
            const rZ = (i * 35) % 360;
            const floatY = Math.sin((frame / 40) + i) * 20;

            return (
                <div key={i} style={{ 
                    position: 'absolute', 
                    left: x - 150, 
                    top: y - 90, 
                    transform: `translate3d(0, ${floatY}px, ${z}px) ${rotate3d(1, 0, 0, rX)} ${rotate3d(0, 1, 0, rY)} rotateZ(${rZ}deg)`,
                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                    opacity: 0.95
                }}>
                    <InvoiceCard 
                        id={`ERR-${8000 + i}`} 
                        amount={`₹ ${(Math.random() * 50000).toFixed(2)}`} 
                        date="22/10/2023"
                        status="error" 
                    />
                    {/* Floating Pulse Error Icon */}
                    <div style={{ 
                        position: 'absolute', 
                        top: -20, 
                        right: -20, 
                        transform: 'translateZ(50px) scale(0.8)',
                        animation: 'pulse 1s infinite alternate'
                    }}>
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '50%', 
                            padding: 8,
                            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
                        }}>
                             <ErrorIcon size={50} />
                        </div>
                    </div>
                </div>
            )
        })}
      </AbsoluteFill>

      {/* Main Text Card - Glassmorphism */}
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            padding: '40px 60px',
            borderRadius: 32,
            border: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            textAlign: 'center',
            minWidth: 600
        }}>
            <Subtitle style={{ marginTop: 0, marginBottom: 10 }}>Still stuck with</Subtitle>
            <Title>
                Manual <Highlight>GST?</Highlight>
            </Title>
        </div>
      </AbsoluteFill>
      </AbsoluteFill>
    </GlobalLayout>
  );
};
