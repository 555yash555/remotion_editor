import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, Img, random, staticFile, Audio } from "remotion";
import { ASSETS, COLOR_BACKGROUND, COLOR_TEXT_PRIMARY, FONT_FAMILY_HEADING, COLOR_PRIMARY, COLOR_ACCENT } from "../constants";

const Dot: React.FC<{ x: number, y: number, delay: number, color: string }> = ({ x, y, delay, color }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    
    const scale = spring({
        frame: frame - delay,
        fps,
        config: { damping: 10 }
    });

    const pulse = Math.sin((frame - delay) * 0.1) * 0.2 + 1;

    return (
        <div style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: color,
            transform: `scale(${scale * pulse})`,
            opacity: 0.8
        }} />
    );
};

export const Scene5SocialProof: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const dots = new Array(20).fill(0).map((_, i) => ({
        x: random(i) * 60 + 20, // 20-80%
        y: random(i + 10) * 40 + 30, // 30-70%
        delay: i * 2,
        color: i % 2 === 0 ? COLOR_PRIMARY : COLOR_ACCENT
    }));
    
    const mapScale = spring({
        frame,
        fps,
        config: { damping: 15 }
    });

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
             <Audio src={staticFile(ASSETS.sfxPing)} volume={0.6} />
             {/* Text Overlay - Explicitly Positioned at Top */}
             <div style={{
                 position: 'absolute',
                 top: 150,
                 left: 0,
                 width: '100%',
                 display: 'flex',
                 justifyContent: 'center',
                 zIndex: 10
             }}>
                 <h2 style={{
                     fontFamily: FONT_FAMILY_HEADING,
                     fontSize: 80,
                     color: COLOR_TEXT_PRIMARY,
                     textAlign: 'center',
                     margin: 0
                 }}>
                    Trusted by patients nationwide
                 </h2>
             </div>

             {/* Map - Centered Below Text */}
             <div style={{
                 position: 'absolute',
                 top: 300,
                 left: '50%',
                 transform: `translateX(-50%) scale(${mapScale})`,
                 width: '70%',
                 height: 'auto'
             }}>
                 <Img src={staticFile("GetCopayHelp/illustration_us_map_outline_1769706801568.png")} style={{ width: '100%' }} />
                 
                 {/* Dots */}
                 {dots.map((d, i) => (
                     <Dot key={i} x={d.x} y={d.y} delay={d.delay} color={d.color} />
                 ))}
             </div>
        </AbsoluteFill>
    );
};
