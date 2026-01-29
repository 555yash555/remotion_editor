import React from "react";
import {Img, useCurrentFrame, useVideoConfig, staticFile} from "remotion";

interface FloatingElementProps {
    src: string;
    x: number;
    y: number;
    scale?: number;
    delay?: number;
    rotationSpeed?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
    src,
    x,
    y,
    scale = 1,
    delay = 0,
    rotationSpeed = 0.5,
}) => {
    const frame = useCurrentFrame();
    const {width, height} = useVideoConfig();

    const floatY = Math.sin((frame + delay) * 0.05) * 15;
    const rotate = Math.sin((frame + delay) * 0.02) * 5 * rotationSpeed;
    
    // Extract just the filename from the full path
    const filename = src.startsWith('/') ? src.substring(1) : src;

    return (
        <Img
            src={staticFile(filename)}
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: 100 * scale,
                transform: `translateY(${floatY}px) rotate(${rotate}deg)`,
                opacity: 0.8,
            }}
        />
    );
};
