import React from "react";
import { Img, staticFile, interpolate, useCurrentFrame, Easing } from "remotion";

interface BrowserMockupProps {
    src: string;
    delay?: number;
    scale?: number;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ 
    src, 
    delay = 0,
    scale = 1
}) => {
    const frame = useCurrentFrame();
    const localFrame = frame - delay;

    if (localFrame < 0) return null;

    // Slide in animation
    const slideY = interpolate(localFrame, [0, 30], [100, 0], {
        easing: Easing.out(Easing.cubic),
        extrapolateRight: 'clamp',
    });

    const opacity = interpolate(localFrame, [0, 20], [0, 1]);

    // Gentle float
    const floatY = Math.sin(frame * 0.03) * 8;

    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 1400 * scale,
            marginLeft: (-700 * scale),
            marginTop: (-480 * scale),
            transform: `translateY(${slideY + floatY}px)`,
            opacity,
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))',
        }}>
            {/* Browser Chrome */}
            <div style={{
                backgroundColor: '#E8EAED',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
            }}>
                {/* Traffic Lights */}
                <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28CA42' }} />
                </div>
                
                {/* URL Bar */}
                <div style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: '8px 16px',
                    fontSize: 14,
                    color: '#5F6368',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}>
                    🔒 getcopayhelp.com
                </div>
            </div>

            {/* Browser Content */}
            <div style={{
                backgroundColor: 'white',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                overflow: 'hidden',
            }}>
                <Img 
                    src={staticFile(src)} 
                    style={{ 
                        width: '100%', 
                        display: 'block',
                    }} 
                />
            </div>
        </div>
    );
};
