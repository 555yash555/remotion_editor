import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY_HEADING, COLOR_TEXT_PRIMARY } from "../constants";

interface WordStaggerProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties; 
}

export const WordStagger: React.FC<WordStaggerProps> = ({ text, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", ...style }}>
      {words.map((word, i) => {
        const delayInFrames = delay + i * 5;
        
        const entrance = spring({
          frame: frame - delayInFrames,
          fps,
          config: { damping: 12 },
        });

        const opacity = interpolate(entrance, [0, 1], [0, 1]);
        const translateY = interpolate(entrance, [0, 1], [20, 0]);

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
