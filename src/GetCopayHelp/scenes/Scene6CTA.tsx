import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from "remotion";
import { ASSETS, COLOR_BACKGROUND, COLOR_PRIMARY, FONT_FAMILY_HEADING } from "../constants";

export const Scene6CTA: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const buttonScale = spring({
        frame,
        fps,
        config: { damping: 12 }
    });

    const arrowX = Math.sin(frame * 0.1) * 10;

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND, justifyContent: 'center', alignItems: 'center' }}>
            <Audio src={staticFile(ASSETS.sfxShimmer)} volume={0.8} />
            
            {/* CTA Button */}
            <div style={{
                backgroundColor: COLOR_PRIMARY,
                padding: '30px 60px',
                borderRadius: 50,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                transform: `scale(${buttonScale})`,
                boxShadow: '0 10px 30px rgba(255, 123, 107, 0.4)'
            }}>
                <h1 style={{
                    fontFamily: FONT_FAMILY_HEADING,
                    fontSize: 60,
                    color: 'white',
                    margin: 0
                }}>
                    Check if you qualify
                </h1>
                <span style={{ 
                    color: 'white', 
                    fontSize: 60, 
                    fontWeight: 'bold',
                    transform: `translateX(${arrowX}px)`
                }}>
                    →
                </span>
            </div>
            
            {/* Small Logo at bottom */}
            <div style={{ position: 'absolute', bottom: 50, opacity: interpolate(frame, [20, 40], [0, 1]) }}>
               <h3 style={{ fontFamily: FONT_FAMILY_HEADING, color: 'black', opacity: 0.5 }}>GetCopayHelp</h3>
            </div>

        </AbsoluteFill>
    );
};
