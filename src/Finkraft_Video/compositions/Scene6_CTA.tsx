import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
import { COLORS, fontFamily } from '../utils/constants';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title, Subtitle } from '../components/Typography';

export const Scene6_CTA: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({ frame, fps, config: { damping: 10, mass: 0.8 } });
    const opacity = interpolate(frame, [0, 15], [0, 1]);

    return (
        <GlobalLayout dark>
            <AbsoluteFill style={{ 
                background: `linear-gradient(135deg, ${COLORS.Primary} 0%, #0F172A 100%)`,
                justifyContent: 'center', 
                alignItems: 'center',
            }}>
                <AbsoluteFill style={{ 
                    justifyContent: 'center', 
                    alignItems: 'center',
                }}>
                    <div style={{ transform: `scale(${scale})`, opacity }}>
                         <Title style={{ 
                             fontSize: 120, 
                             color: 'white',
                             marginBottom: 20,
                             letterSpacing: '-0.04em'
                         }}>
                             FINKRAFT
                         </Title>
                    </div>
                    
                    <div style={{
                        transform: `translateY(${interpolate(frame, [10, 30], [50, 0])}px)`,
                        opacity: interpolate(frame, [10, 30], [0, 1]),
                        marginTop: 40,
                        textAlign: 'center'
                    }}>
                        <Subtitle style={{ color: 'rgba(255,255,255,0.8)', fontSize: 40 }}>
                            Power Your Financial Journey
                        </Subtitle>
                        
                        <div style={{
                            marginTop: 60,
                            background: COLORS.Secondary,
                            color: COLORS.Primary,
                            padding: '24px 64px',
                            borderRadius: 100,
                            fontSize: 48,
                            fontWeight: 800,
                            fontFamily,
                            boxShadow: `0 10px 50px rgba(110, 206, 178, 0.3)`,
                            letterSpacing: '-0.02em',
                            cursor: 'pointer'
                        }}>
                            finkraft.ai
                        </div>
                    </div>
                </AbsoluteFill>
            </AbsoluteFill>
        </GlobalLayout>
    );
};
