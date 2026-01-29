import { AbsoluteFill, random, useCurrentFrame, useVideoConfig, spring, staticFile, Audio } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import { ASSETS, COLOR_BACKGROUND, FONT_FAMILY_HEADING, COLOR_TEXT_PRIMARY } from "../constants";
import * as THREE from "three";

const Paper: React.FC<{ 
    position: [number, number, number], 
    rotation: [number, number, number],
    textureUrl: string,
    delay: number 
}> = ({ position, rotation, textureUrl, delay }) => {
    const texture = useTexture(textureUrl);
    const meshRef = useRef<THREE.Mesh>(null);
    const frame = useCurrentFrame();
    
    // Explosion logic
    // Start at center (0,0,0) and move to target position based on frame
    
    useFrame(() => {
        if (meshRef.current) {
             const progress = spring({
                frame: frame - delay,
                fps: 30,
                config: { damping: 12, stiffness: 100 }
            });
            
            // Move from 0,0,0 to target
            meshRef.current.position.x = position[0] * progress;
            meshRef.current.position.y = position[1] * progress;
            meshRef.current.position.z = position[2] * progress;
            
            // Rotate chaotically
            meshRef.current.rotation.x = rotation[0] + frame * 0.1;
            meshRef.current.rotation.y = rotation[1] + frame * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={[0,0,0]}>
            <planeGeometry args={[3, 4]} /> 
            <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
    );
};

export const Scene2Frustration: React.FC = () => {
    const { width, height } = useVideoConfig();
    const frame = useCurrentFrame();

    // Generate random positions for papers
    const papers = useMemo(() => {
        return new Array(8).fill(0).map((_, i) => ({
            position: [
                (random(i) - 0.5) * 15, 
                (random(i + 10) - 0.5) * 15, 
                (random(i + 20) - 0.5) * 5
            ] as [number, number, number],
            rotation: [random(i + 30), random(i + 40), random(i + 50)] as [number, number, number],
            delay: i * 2 // Stagger slightly
        }));
    }, []);
    
    // Text shake effect
    const shakeX = Math.sin(frame * 0.8) * 5;
    const shakeY = Math.cos(frame * 0.9) * 5;

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
            <Audio src={staticFile(ASSETS.sfxPaper)} volume={0.8} />
            <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
                <ThreeCanvas width={width} height={height} style={{ backgroundColor: "transparent" }}>
                   <ambientLight intensity={1.5} />
                   {papers.map((p, i) => (
                       <Paper 
                            key={i} 
                            position={p.position} 
                            rotation={p.rotation} 
                            textureUrl={staticFile("GetCopayHelp/illustration_paper_docs_1769706455595.png")}
                            delay={0}
                        />
                   ))}
                </ThreeCanvas>
            </div>
            
             <AbsoluteFill style={{ 
                justifyContent: "center", 
                alignItems: "center", 
                zIndex: 2,
                transform: `translate(${shakeX}px, ${shakeY}px)`
            }}>
                 <h1 style={{
                     fontFamily: FONT_FAMILY_HEADING,
                     fontSize: 90,
                     color: COLOR_TEXT_PRIMARY,
                     textAlign: 'center'
                 }}>
                    Programs are<br/>confusing.
                 </h1>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
