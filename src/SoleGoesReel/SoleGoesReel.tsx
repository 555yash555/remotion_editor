/**
 * Main Composition: SoleGoesReel
 * Orchestrates all scenes with frame-perfect timing
 */

import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {TechVoidBackground} from './components/visuals/TechVoidBackground';
import {GrainOverlay} from './components/GrainOverlay';
import {BRAND_COLORS} from './config/brandTokens';
import {SCENE_TIMINGS} from './config/sceneTimings';

// Scene imports
import {Scene1HookPunch} from './scenes/Scene1HookPunch';
import {Scene2Contradiction} from './scenes/Scene2Contradiction';
import {Scene3BrandPayoff} from './scenes/Scene3BrandPayoff';
import {Scene3aContext} from './scenes/Scene3aContext';
import {Scene4WhatItIs} from './scenes/Scene4WhatItIs';
import {Scene5FeatureBurst1} from './scenes/Scene5FeatureBurst1';
import {Scene6FeatureBurst2} from './scenes/Scene6FeatureBurst2';
import {Scene7PaymentsBurst} from './scenes/Scene7PaymentsBurst';
import {Scene8AgencyCallout} from './scenes/Scene8AgencyCallout';
import {Scene9SocialProof} from './scenes/Scene9SocialProof';
import {Scene10Scarcity} from './scenes/Scene10Scarcity';
import {Scene11CTAEndCard} from './scenes/Scene11CTAEndCard';
import {SceneTransTraveler} from './scenes/SceneTransTraveler';
import {SceneTransAgency} from './scenes/SceneTransAgency';
import {SceneAgencyDashboard} from './scenes/SceneAgencyDashboard';
import {SceneAgencyLogistics} from './scenes/SceneAgencyLogistics';
import {SceneAgencyVibe} from './scenes/SceneAgencyVibe';
import {SceneAgencyPayments} from './scenes/SceneAgencyPayments';
import {SceneLaunchingSoon} from './scenes/SceneLaunchingSoon';

import {SequencedAudio} from './components/audio/SequencedAudio';

export const SoleGoesReel: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: BRAND_COLORS.bg.base}}>
      {/* Shared Background Layers */}
      <TechVoidBackground />
      <GrainOverlay /> {/* Re-added grain for texture */}
      
      {/* Audio Layer */}
      <SequencedAudio />
      
      {/* Sequenced Scenes */}
      <Sequence from={SCENE_TIMINGS.scene1.start} durationInFrames={SCENE_TIMINGS.scene1.duration} premountFor={15}>
        <Scene1HookPunch />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene2.start} durationInFrames={SCENE_TIMINGS.scene2.duration} premountFor={15}>
        <Scene2Contradiction />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene3.start} durationInFrames={SCENE_TIMINGS.scene3.duration} premountFor={15}>
        <Scene3BrandPayoff />
      </Sequence>

      <Sequence from={SCENE_TIMINGS.scene3a.start} durationInFrames={SCENE_TIMINGS.scene3a.duration} premountFor={15}>
        <Scene3aContext />
      </Sequence>
      
      {/* --- TRAVELERS SECTION --- */}
      <Sequence from={SCENE_TIMINGS.transTraveler.start} durationInFrames={SCENE_TIMINGS.transTraveler.duration} premountFor={15}>
        <SceneTransTraveler />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene4.start} durationInFrames={SCENE_TIMINGS.scene4.duration} premountFor={15}>
        <Scene4WhatItIs />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene6.start} durationInFrames={SCENE_TIMINGS.scene6.duration} premountFor={15}>
        <Scene6FeatureBurst2 />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene5.start} durationInFrames={SCENE_TIMINGS.scene5.duration} premountFor={15}>
        <Scene5FeatureBurst1 />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene7.start} durationInFrames={SCENE_TIMINGS.scene7.duration} premountFor={15}>
        <Scene7PaymentsBurst />
      </Sequence>
      
      {/* --- AGENCIES SECTION --- */}
      <Sequence from={SCENE_TIMINGS.transAgency.start} durationInFrames={SCENE_TIMINGS.transAgency.duration} premountFor={15}>
        <SceneTransAgency />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.sceneAgencyManage.start} durationInFrames={SCENE_TIMINGS.sceneAgencyManage.duration} premountFor={15}>
        <SceneAgencyDashboard />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.sceneAgencyLogistics.start} durationInFrames={SCENE_TIMINGS.sceneAgencyLogistics.duration} premountFor={15}>
        <SceneAgencyLogistics />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.sceneAgencyVibe.start} durationInFrames={SCENE_TIMINGS.sceneAgencyVibe.duration} premountFor={15}>
        <SceneAgencyVibe />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.sceneAgencyPayments.start} durationInFrames={SCENE_TIMINGS.sceneAgencyPayments.duration} premountFor={15}>
        <SceneAgencyPayments />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene8.start} durationInFrames={SCENE_TIMINGS.scene8.duration} premountFor={15}>
        <Scene8AgencyCallout />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene10.start} durationInFrames={SCENE_TIMINGS.scene10.duration} premountFor={15}>
        <Scene10Scarcity />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.scene9.start} durationInFrames={SCENE_TIMINGS.scene9.duration} premountFor={15}>
        <Scene9SocialProof />
      </Sequence>
      
      <Sequence from={SCENE_TIMINGS.sceneLaunchingSoon.start} durationInFrames={SCENE_TIMINGS.sceneLaunchingSoon.duration} premountFor={15}>
        <SceneLaunchingSoon />
      </Sequence>
      
      {/* Outro */}
      <Sequence from={SCENE_TIMINGS.scene11.start} durationInFrames={SCENE_TIMINGS.scene11.duration} premountFor={15}>
        <Scene11CTAEndCard />
      </Sequence>
    </AbsoluteFill>
  );
};
