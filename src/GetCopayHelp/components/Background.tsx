import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLOR_BACKGROUND, COLOR_SECONDARY, COLOR_PRIMARY } from "../constants";

export const Background: React.FC = () => {
    const frame = useCurrentFrame();
    
    // Subtle pulsing gradient
    const gradientShift = interpolate(frame, [0, 100], [0, 10], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND, overflow: "hidden" }}>
            <div
                style={{
                    position: "absolute",
                    top: "-20%",
                    left: "-20%",
                    width: "80%",
                    height: "80%",
                    background: `radial-gradient(circle, ${COLOR_SECONDARY}33 0%, transparent 70%)`,
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    transform: `translate(${Math.sin(frame / 60) * 20}px, ${Math.cos(frame / 60) * 20}px)`,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "-20%",
                    right: "-20%",
                    width: "80%",
                    height: "80%",
                    background: `radial-gradient(circle, ${COLOR_PRIMARY}22 0%, transparent 70%)`,
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    transform: `translate(${Math.cos(frame / 80) * 30}px, ${Math.sin(frame / 80) * 30}px)`,
                }}
            />
        </AbsoluteFill>
    );
};
