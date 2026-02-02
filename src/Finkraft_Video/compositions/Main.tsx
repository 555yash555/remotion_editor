import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from 'remotion';

import { Scene1_Hook } from './Scene1_Hook';
import { Scene2_PainPoint } from './Scene2_PainPoint';
import { Scene3_Solution } from './Scene3_Solution';
import { Scene4_Features } from './Scene4_Features';
import { Scene5_SocialProof } from './Scene5_SocialProof';
import { Scene6_CTA } from './Scene6_CTA';

export const Main = () => {
  const { fps } = useVideoConfig();

  // Scene timing logic (accumulative)
  const s1Dur = 3 * fps; // Hook - 0 to 3s
  const s2Dur = 3 * fps; // Pain - 3 to 6s
  const s3Dur = 2.5 * fps; // Solution - 6 to 8.5s
  const s4Dur = 6 * fps; // Features - 8.5 to 14.5s
  const s5Dur = 2 * fps; // Social - 14.5 to 16.5s
  const s6Dur = 2.5 * fps; // CTA - 16.5 to 19s

  const s2Start = s1Dur;
  const s3Start = s2Start + s2Dur;
  const s4Start = s3Start + s3Dur;
  const s5Start = s4Start + s4Dur;
  const s6Start = s5Start + s5Dur;

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <Audio src={staticFile('/assets/audio/corporate-inspiring-motivational-upbeat-ambience-140045.mp3')} />

      {/* Scene 1: Hook */}
      <Sequence from={0} durationInFrames={s1Dur}>
        <Scene1_Hook />
        <Audio src={staticFile('/assets/audio/paper-rustle-81855.mp3')} startFrom={0} />
      </Sequence>

      {/* Scene 2: Pain Point */}
      <Sequence from={s2Start} durationInFrames={s2Dur}>
        <Scene2_PainPoint />
        {/* Sync "Slams" */}
        <Audio src={staticFile('/assets/audio/boom.mp3')} startFrom={0} volume={0.8} />
        <Sequence from={40}>
             <Audio src={staticFile('/assets/audio/boom.mp3')} startFrom={0} volume={0.9} />
        </Sequence>
        <Sequence from={70}>
             <Audio src={staticFile('/assets/audio/boom.mp3')} startFrom={0} volume={1} />
        </Sequence>
      </Sequence>

      {/* Scene 3: Solution */}
      <Sequence from={s3Start} durationInFrames={s3Dur}>
        <Scene3_Solution />
        <Audio src={staticFile('/assets/audio/whoosh.mp3')} startFrom={0} />
        <Audio src={staticFile('/assets/audio/happy-message-ping-351298.mp3')} startFrom={20} />
      </Sequence>

      {/* Scene 4: Features */}
      <Sequence from={s4Start} durationInFrames={s4Dur}>
        <Scene4_Features />
        <Sequence from={15}>
            <Audio src={staticFile('/assets/audio/click.mp3')} />
         </Sequence>
         <Sequence from={120 + 20}>
             <Audio src={staticFile('/assets/audio/click.mp3')} />
         </Sequence>
         <Sequence from={210 + 20}>
            <Audio src={staticFile('/assets/audio/success.mp3')} />
         </Sequence>
         <Sequence from={300 + 10}>
             <Audio src={staticFile('/assets/audio/click.mp3')} />
         </Sequence>
      </Sequence>

      {/* Scene 5: Social Proof */}
      <Sequence from={s5Start} durationInFrames={s5Dur}>
        <Scene5_SocialProof />
        <Audio src={staticFile('/assets/audio/pop.mp3')} />
      </Sequence>

      {/* Scene 6: CTA */}
      <Sequence from={s6Start} durationInFrames={s6Dur}>
        <Scene6_CTA />
        <Audio src={staticFile('/assets/audio/hit-windy-thud-399086.mp3')} />
      </Sequence>
    </AbsoluteFill>
  );
};
