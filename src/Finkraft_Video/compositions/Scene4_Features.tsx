import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Sequence } from 'remotion';
import { COLORS, fontFamily } from '../utils/constants';
import { InvoiceCard } from '../components/InvoiceCard';
import { CheckmarkIcon, WarningIcon, RupeeIcon, GearIcon } from '../components/Icons';
import { springScale } from '../utils/animations';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title, Subtitle } from '../components/Typography';

const FeatureSlide: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    children?: React.ReactNode;
    subtitle?: string;
}> = ({ title, icon, children, subtitle }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig(); // Use fps for animations
    const opacity = interpolate(frame, [0, 8], [0, 1]);
    const y = interpolate(frame, [0, 15], [30, 0], { extrapolateRight: 'clamp' });
    const scale = springScale(frame, fps);

    return (
        <AbsoluteFill style={{ 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            paddingTop: 350 
        }}>
             <div style={{ 
                 opacity, 
                 transform: `translateY(${y}px) scale(${scale})`, 
                 display: 'flex', 
                 flexDirection: 'column', 
                 alignItems: 'center',
                 gap: 30,
                 zIndex: 10
            }}>
                {children}
                
                <div style={{ 
                    marginTop: 80,
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: 16
                }}>
                    <div style={{
                        padding: 24,
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        marginBottom: 10
                    }}>
                        {icon}
                    </div>
                    <Title style={{ fontSize: 64, maxWidth: 800 }}>{title}</Title>
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </div>
            </div>
        </AbsoluteFill>
    )
}

export const Scene4_Features: React.FC = () => {
    const frame = useCurrentFrame();

    // Scan Line Animation for AI Scene
    const scanY = interpolate(frame % 90, [0, 90], [0, 400]);

    return (
        <GlobalLayout>
            {/* 4A: AI Reconciliation */}
            <Sequence from={0} durationInFrames={120}>
                <FeatureSlide 
                    title="AI-Powered Reconciliation" 
                    subtitle="100% Automated Matching"
                    icon={<CheckmarkIcon size={80} />}
                >
                    <div style={{ position: 'relative', width: 700, height: 400 }}>
                        <div style={{ position: 'absolute', top: 0, left: 100, transform: 'rotate(-5deg)' }}>
                             <InvoiceCard id="INV-001" amount="₹ 42,500" date="Oct 20" status="verified" />
                        </div>
                        <div style={{ position: 'absolute', top: 40, left: 200, transform: 'rotate(2deg)' }}>
                             <InvoiceCard id="INV-002" amount="₹ 12,900" date="Oct 21" status="verified" />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: scanY,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: COLORS.Secondary,
                            boxShadow: `0 0 20px 4px ${COLORS.Secondary}`,
                            opacity: 0.8,
                            borderRadius: 2
                        }} />
                    </div>
                </FeatureSlide>
            </Sequence>

            {/* 4B: Mismatch Detection */}
            <Sequence from={120} durationInFrames={90}>
                 <FeatureSlide 
                    title="Real-Time Detection" 
                    subtitle="Spot Errors Instantly"
                    icon={<WarningIcon size={80} />} 
                >
                    <div style={{ position: 'relative' }}>
                        <div style={{ animation: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' }}>
                             <InvoiceCard id="INV-ERR" amount="₹ 80,000" date="Oct 21" status="error" />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: -20, right: -20,
                            background: COLORS.ErrorRed,
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: 30,
                            fontWeight: 'bold',
                            fontFamily,
                            boxShadow: '0 5px 15px rgba(239, 68, 68, 0.4)'
                        }}>
                            MISMATCH DETECTED
                        </div>
                    </div>
                </FeatureSlide>
            </Sequence>

            {/* 4C: ITC Recovery */}
            <Sequence from={210} durationInFrames={90}>
                 <FeatureSlide 
                    title="Max ITC Recovery" 
                    subtitle="₹300+ Crores Saved"
                    icon={<RupeeIcon size={80} color={COLORS.Secondary} />} 
                >
                    <div style={{ 
                        width: 300, 
                        height: 300, 
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ fontSize: 100 }}>💰</div>
                    </div>
                </FeatureSlide>
            </Sequence>

            {/* 4D: Zero Manual Work */}
            <Sequence from={300} durationInFrames={60}>
                 <FeatureSlide 
                    title="Zero Manual Work" 
                    subtitle="Full Automation"
                    icon={<GearIcon size={80} />} 
                >
                    <div style={{ animation: 'spin 10s linear infinite' }}>
                        <GearIcon size={200} color={COLORS.Primary} />
                    </div>
                </FeatureSlide>
            </Sequence>
        </GlobalLayout>
    );
};
