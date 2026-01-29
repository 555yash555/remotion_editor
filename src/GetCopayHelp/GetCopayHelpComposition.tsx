import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { ASSETS, COLOR_BACKGROUND } from "./constants";
import { Scene1Problem } from "./scenes/Scene1Problem";
import { Scene2Frustration } from "./scenes/Scene2Frustration";
import { Scene3BrandReveal } from "./scenes/Scene3BrandReveal";
import { Scene4Features } from "./scenes/Scene4Features";
import { Scene5SocialProof } from "./scenes/Scene5SocialProof";
import { Scene6CTA } from "./scenes/Scene6CTA";

export const GetCopayHelpComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
      <Audio src={staticFile(ASSETS.music)} volume={0.5} />
      <Sequence durationInFrames={75}>
          <Scene1Problem />
      </Sequence>
      <Sequence from={75} durationInFrames={60}>
          <Scene2Frustration />
      </Sequence>
      <Sequence from={135} durationInFrames={60}>
          <Scene3BrandReveal />
      </Sequence>
      <Sequence from={195} durationInFrames={240}>
          <Scene4Features />
      </Sequence>
      <Sequence from={435} durationInFrames={45}>
          <Scene5SocialProof />
      </Sequence>
      <Sequence from={480} durationInFrames={75}>
          <Scene6CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
