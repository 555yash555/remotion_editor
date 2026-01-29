import React from 'react';
import {Audio, staticFile, Sequence} from 'remotion';
import {SCENE_TIMINGS} from '../../config/sceneTimings';

export const SequencedAudio: React.FC = () => {
    return (
        <>
            {/* Background Music - Stops at End Card (Scene 11) for dramatic boom */}
            <Sequence from={0} durationInFrames={SCENE_TIMINGS.scene11.start}>
                <Audio 
                    src={staticFile('assets/audio/music.mp3')}
                    volume={0.4}
                    startFrom={0}
                />
            </Sequence>

            {/* Scene 1: Glitch/Drone */}
            <Sequence from={0} durationInFrames={60}>
                <Audio 
                    src={staticFile('assets/audio/glitch.mp3')} 
                    startFrom={0}
                    volume={0.5}
                />
            </Sequence>

            {/* Scene 2: Tech Typing / Pops */}
            {/* 0-18: Connection */}
            <Sequence from={SCENE_TIMINGS.scene2.start}>
                <Audio 
                    src={staticFile('assets/audio/pop.mp3')} 
                    startFrom={0}
                    volume={0.6}
                />
            </Sequence>

            {/* 18-36: Experiences */}
            <Sequence from={SCENE_TIMINGS.scene2.start + 18}>
                 <Audio 
                    src={staticFile('assets/audio/pop.mp3')} 
                    volume={0.7}
                />
            </Sequence>

            {/* 36+: Fun */}
            <Sequence from={SCENE_TIMINGS.scene2.start + 36}>
                <Audio 
                    src={staticFile('assets/audio/pop.mp3')} 
                    volume={0.8}
                />
            </Sequence>

            {/* Scene 3: Go Solo - Transitions */}
            <Sequence from={SCENE_TIMINGS.scene3.start}>
                <Audio 
                    src={staticFile('assets/audio/whoosh.mp3')} 
                    volume={0.5}
                />
            </Sequence>

            {/* Scene 3a: Preferences Slideshow (Shutter) */}
            <Sequence from={SCENE_TIMINGS.scene3a.start}>
                 <Audio 
                    src={staticFile('assets/audio/shutter.mp3')} 
                    volume={0.6}
                    startFrom={0}
                />
            </Sequence>

            {/* Scene 4: Scroll Sound */}
            <Sequence from={SCENE_TIMINGS.scene4.start}>
                <Audio 
                    src={staticFile('assets/audio/whoosh.mp3')} 
                    volume={0.3}
                />
            </Sequence>

            {/* Scene 6: Book Click (New Clean Click) */}
            <Sequence from={SCENE_TIMINGS.scene6.start + 30}>
                 <Audio 
                    src={staticFile('assets/audio/click.mp3')} 
                    volume={1.0}
                />
            </Sequence>

            {/* Scene 7: Success Chime */}
            <Sequence from={SCENE_TIMINGS.scene7.start}>
                 <Audio 
                    src={staticFile('assets/audio/success.mp3')} 
                    volume={0.8}
                />
            </Sequence>

            {/* Scene 9 -> Agency Vibe: Shutter for Slideshow */}
            <Sequence from={SCENE_TIMINGS.sceneAgencyVibe.start}>
                 <Audio 
                    src={staticFile('assets/audio/shutter.mp3')} 
                    volume={0.6}
                />
            </Sequence>

            {/* Scene 11: End Card Boom */}
            <Sequence from={SCENE_TIMINGS.scene11.start}>
                 <Audio 
                    src={staticFile('assets/audio/boom.mp3')} 
                    volume={1.0}
                />
            </Sequence>
        </>
    );
};
