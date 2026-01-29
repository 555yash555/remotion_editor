import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Sequence, Audio } from "remotion";
import { ASSETS, COLOR_BACKGROUND, COLOR_TEXT_PRIMARY, FONT_FAMILY_HEADING, COLOR_PRIMARY } from "../constants";
import { FloatingElement } from "../components/FloatingElement";

const FeatureCard: React.FC<{ 
    src: string, 
    title: string, 
    index: number,
    icon?: string
}> = ({ src, title, index, icon }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Slide in from right
    const entrance = spring({
        frame: frame,
        fps,
        config: { damping: 14 }
    });
    
    // Scale down slightly when next card arrives (optional, maybe just hold)
    // We will let the Sequence handle the "active" time.
    
    return (
        <AbsoluteFill>
             <Audio src={staticFile(ASSETS.sfxSwipe)} volume={0.6} />
             {/* Text Content - Slide/Fade In */}
            <div style={{
                position: 'absolute',
                top: 150,
                left: 100,
                opacity: entrance,
                transform: `translateX(${interpolate(entrance, [0, 1], [50, 0])}px)`
            }}>
                <h2 style={{
                    fontFamily: FONT_FAMILY_HEADING,
                    fontSize: 70,
                    color: COLOR_TEXT_PRIMARY,
                    margin: 0,
                    maxWidth: 600,
                    lineHeight: 1.1
                }}>
                    {title}
                </h2>
                <div style={{ 
                    height: 8, 
                    width: 100 * entrance, 
                    backgroundColor: COLOR_PRIMARY,
                    marginTop: 20,
                    borderRadius: 4
                }} />
            </div>

            {/* Card Visual */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: 150,
                width: 900,
                height: 550,
                transform: `translateY(-50%) translateX(${interpolate(entrance, [0, 1], [400, 0])}px) rotateY(${interpolate(entrance, [0, 1], [20, -5])}deg)`, // Slight 3D rotation
                transformStyle: 'preserve-3d',
                perspective: 1000
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                    backgroundColor: 'white',
                    border: '10px solid white'
                }}>
                    <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                 
                {/* Optional Icon overlay */}
                {icon && (
                    <Img 
                        src={icon} 
                        style={{
                            position: 'absolute',
                            top: -40,
                            right: -40,
                            width: 120,
                            transform: `scale(${entrance}) rotate(10deg)`,
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
                        }}
                    />
                )}
            </div>
        </AbsoluteFill>
    );
};

export const Scene4Features: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
            
            {/* Background elements persistent */}
             <AbsoluteFill>
                <FloatingElement src={ASSETS.pills} x={200} y={800} scale={0.8} delay={0} />
                <FloatingElement src={ASSETS.coins} x={100} y={300} scale={0.6} delay={50} />
                <FloatingElement src={ASSETS.pillBottle} x={900} y={100} scale={0.5} delay={100} />
            </AbsoluteFill>

            {/* Sequence of Feature Cards */}
            {/* Total 240 frames -> 4 slots of 60 frames (2s) each */}
            
            {/* 1. Homepage */}
            <Sequence from={0} durationInFrames={60}>
                <FeatureCard 
                    src={staticFile("GetCopayHelp/screenshot_homepage_hero.png")}
                    title="Simplified Dashboard"
                    index={0}
                />
            </Sequence>

            {/* 2. Eligibility */}
            <Sequence from={60} durationInFrames={60}>
                <FeatureCard 
                    src={staticFile("GetCopayHelp/screenshot_eligibility_results.png")}
                    title="Instant Eligibility"
                    index={1}
                    icon={staticFile("GetCopayHelp/illustration_checkmark_1769706601355.png")}
                />
            </Sequence>

            {/* 3. Applications */}
            <Sequence from={120} durationInFrames={60}>
                <FeatureCard 
                    src={staticFile("GetCopayHelp/screenshot_applications_table.png")}
                    title="Track Every Application"
                    index={2}
                    icon={staticFile("GetCopayHelp/illustration_paper_docs_1769706455595.png")}
                />
            </Sequence>

            {/* 4. Patient Details */}
            <Sequence from={180} durationInFrames={60}>
                 <FeatureCard 
                    src={staticFile("GetCopayHelp/screenshot_patient_details.png")}
                    title="Deep Patient Insights"
                    index={3}
                    icon={staticFile("GetCopayHelp/illustration_speech_bubble_heart_1769706561084.png")}
                />
            </Sequence>

        </AbsoluteFill>
    );
};
