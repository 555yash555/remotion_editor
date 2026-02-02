import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from 'remotion';
import { COLORS, fontFamily } from '../utils/constants';
import { WarningIcon } from '../components/Icons';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title } from '../components/Typography';

const SlamText: React.FC<{ text: string; color: string; rotation: number }> = ({ text, color, rotation }) => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [0, 5], [2, 1], { extrapolateRight: 'clamp' }); // Tighter slam
    const opacity = interpolate(frame, [0, 2], [0, 1]);
    
    return (
        <div style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            opacity,
            textAlign: 'center',
        }}>
            <Title color={color} style={{ fontSize: 110 }}>{text}</Title>
        </div>
    );
};

export const Scene2_PainPoint: React.FC = () => {
    const frame = useCurrentFrame();

    // Chaotic Background: Flickering Red/Gray
    const flicker = frame % 6 < 3 ? COLORS.LightGray : '#FEF2F2'; 
    const intensity = interpolate(frame, [0, 90], [0, 1]);

    return (
        <GlobalLayout>
            <AbsoluteFill style={{ backgroundColor: flicker, opacity: 0.9 }}>
                 <AbsoluteFill style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(239, 68, 68, 0.1) 100%)',
                 }} />
            </AbsoluteFill>
            
            <AbsoluteFill>
                {/* Central Glitching Warning Icon */}
                 <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${1 + intensity * 0.2})`,
                    opacity: 0.05 + (intensity * 0.1)
                }}>
                    <WarningIcon size={900} color={COLORS.ErrorRed} />
                </div>

                {/* Text Sequence */}
                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Sequence from={0} durationInFrames={40}>
                         <SlamText text="SPREADSHEETS" color={COLORS.TextSecondary} rotation={-3} />
                    </Sequence>

                    <Sequence from={40} durationInFrames={30}>
                         <SlamText text="ERRORS" color={COLORS.ErrorRed} rotation={3} />
                    </Sequence>

                    <Sequence from={70}>
                         <SlamText text="MISSING CREDITS" color={COLORS.TextPrimary} rotation={0} />
                    </Sequence>
                </AbsoluteFill>
            </AbsoluteFill>
        </GlobalLayout>
    );
};
