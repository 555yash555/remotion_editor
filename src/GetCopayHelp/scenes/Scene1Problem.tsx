import { AbsoluteFill, useCurrentFrame, useVideoConfig, staticFile, Audio } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { ASSETS, COLOR_BACKGROUND, FONT_FAMILY_HEADING, COLOR_TEXT_PRIMARY } from "../constants";
import { WordStagger } from "../components/WordStagger";
import * as THREE from "three";

const Bottle: React.FC = () => {
    const texture = useTexture(staticFile("GetCopayHelp/pill_bottle.png"));
    const meshRef = useRef<THREE.Mesh>(null);
    const frame = useCurrentFrame();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(frame * 0.05) * 0.5;
            meshRef.current.rotation.z = Math.cos(frame * 0.03) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <planeGeometry args={[5, 7]} /> 
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
};

export const Scene1Problem: React.FC = () => {
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_BACKGROUND }}>
            <Audio src={staticFile(ASSETS.sfxPills)} volume={0.8} />
            <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
                <ThreeCanvas width={width} height={height} style={{ backgroundColor: "transparent" }}>
                   <ambientLight intensity={1.5} />
                   <Bottle />
                </ThreeCanvas>
            </div>
            
            <AbsoluteFill style={{ 
                justifyContent: "center", 
                alignItems: "center", 
                zIndex: 2,
                paddingTop: 400 
            }}>
                <WordStagger 
                    text="Medication costs too much?" 
                    delay={15}
                    style={{ 
                        fontSize: 90,
                        fontFamily: FONT_FAMILY_HEADING,
                        fontWeight: 900,
                        color: "#1A2332",
                        textAlign: "center",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }} 
                />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
