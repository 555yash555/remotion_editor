import React from 'react';
import {AbsoluteFill} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';
import {AppScreen} from '../components/visuals/AppScreen';

export const SceneAgencyVibe: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <AppScreen
        src={["know_style_traits.jpg", "know_style_bio.jpg"]}
        delay={0}
        interval={30} // Switch every 1s
        direction="up"
        darken={0.6}
      />

      <KineticText
        text="KNOW THEIR STYLE."
        animation="slideIn"
        fontSize={100}
        fontFamily="heading"
        color={BRAND_COLORS.accent.indigo}
        delay={0}
      />
    </AbsoluteFill>
  );
};
