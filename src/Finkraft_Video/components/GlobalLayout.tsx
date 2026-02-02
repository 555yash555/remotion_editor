import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, fontFamily } from '../utils/constants';

export const GlobalLayout: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark = false }) => {
    const frame = useCurrentFrame();
    const { width, height } = useVideoConfig();
    
    // Subtle moving gradient background
    const offset = frame * 0.5;
    
    return (
        <AbsoluteFill style={{ backgroundColor: dark ? COLORS.Primary : COLORS.Background }}>
             {/* Animated Gradient Mesh */}
             {!dark && (
                 <AbsoluteFill style={{
                     background: `
                        radial-gradient(circle at ${50 + Math.sin(frame/60)*10}% ${40 + Math.cos(frame/50)*10}%, rgba(110, 206, 178, 0.15), transparent 60%),
                        radial-gradient(circle at ${80 - Math.sin(frame/70)*10}% ${80 - Math.cos(frame/60)*10}%, rgba(30, 64, 175, 0.08), transparent 50%)
                     `,
                     filter: 'blur(60px)',
                     transform: 'scale(1.2)'
                 }} />
             )}
             
             {/* Noise Texture for "Premium" feel */}
             <AbsoluteFill style={{
                 opacity: 0.03,
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                 pointerEvents: 'none'
             }} />

            {/* Content Container - Enforce Padding if needed, but usually flexible */}
            <AbsoluteFill>
                {children}
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
