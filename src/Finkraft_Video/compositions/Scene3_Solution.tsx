import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Img, staticFile, spring } from 'remotion';
import { COLORS } from '../utils/constants';
import { InvoiceCard } from '../components/InvoiceCard';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title, Highlight } from '../components/Typography';

export const Scene3_Solution: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(frame, [0, 20], [0, 1]);
    const scaleVal = spring({ frame: frame - 5, fps, config: { damping: 14 } });
    const bgY = interpolate(frame, [0, 100], [0, -30]);

    return (
        <GlobalLayout>
            {/* Organized Grid Background */}
            <AbsoluteFill style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 24, 
                padding: 40,
                opacity: 0.15,
                transform: `translateY(${bgY}px)`
            }}>
                {[...Array(9)].map((_, i) => (
                    <div key={i} style={{ transform: 'scale(0.9)' }}>
                        <InvoiceCard 
                            id={`CLN-00${i}`} 
                            amount={`₹${(20000 + i*1000).toLocaleString()}`} 
                            date="Verified" 
                            status="verified"
                        />
                    </div>
                ))}
            </AbsoluteFill>

            {/* Main Reveal */}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ transform: `scale(${scaleVal})`, opacity }}>
                     {/* Logo Element */}
                     <div style={{
                         background: 'white',
                         padding: 50,
                         borderRadius: 40,
                         boxShadow: '0 20px 60px rgba(30, 64, 175, 0.15)',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         marginBottom: 40
                     }}>
                        <Img 
                            src={staticFile('/assets/finkraft/logo/finkraft_logo.png')} 
                            style={{ width: 450 }}
                        />
                     </div>
                     
                    <Title style={{ fontSize: 90 }}>
                        Meet <Highlight>Finkraft.</Highlight>
                    </Title>
                </div>
            </AbsoluteFill>
        </GlobalLayout>
    );
};
