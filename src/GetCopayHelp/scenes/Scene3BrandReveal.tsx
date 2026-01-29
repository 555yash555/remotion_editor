import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile, Audio } from "remotion";
import { ASSETS, COLOR_BACKGROUND, COLOR_PRIMARY, FONT_FAMILY_HEADING } from "../constants";
import { Background } from "../components/Background";

export const Scene3BrandReveal: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 12 }
    });

    const handY = spring({
        frame: frame - 10,
        fps,
        config: { damping: 15 }
    });

    const handYVal = interpolate(handY, [0, 1], [300, 0]);

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
            <Audio src={staticFile(ASSETS.sfxThud)} startFrom={0} volume={1} />
            <Background />
            
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ transform: `scale(${scale})` }}>
                    <h1 style={{ 
                        fontFamily: FONT_FAMILY_HEADING, 
                        fontWeight: 'bold', 
                        fontSize: 100,
                        color: COLOR_PRIMARY,
                        textAlign: 'center'
                    }}>
                        GetCopayHelp
                    </h1>
                </div>
            </AbsoluteFill>

            <AbsoluteFill>
                <Img 
                    src={staticFile("GetCopayHelp/illustration_helping_hand_1769706474771.png")} 
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 350,
                        transform: `translateX(-50%) translateY(${handYVal}px)`
                    }}
                />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
