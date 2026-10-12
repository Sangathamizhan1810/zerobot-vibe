"use client";

import { useRef, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { THEME_COLORS, THEME_EVENT, readDomTheme, type Theme } from "@/lib/theme";
import * as THREE from "three";
import { Float } from "@react-three/drei";

/* ─────────────────────────────────────────────
   Creative: Morphing Data Swarm
   ───────────────────────────────────────────── */
function SceneFog({ theme }: { theme: Theme }) {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog(THEME_COLORS[theme], 6, 25);
    return () => {
      scene.fog = null;
    };
  }, [scene, theme]);

  return null;
}

function DataSwarm({ theme }: { theme: Theme }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const PARTICLE_COUNT = 4000;
  const LERP_SPEED = 0.003; // Extremely slow for graceful, buttery smooth transitions
  
  // Track current scroll stage
  const currentStageRef = useRef(0);
  
  // We will pre-calculate 4 different geometric formations for the particles.
  const { positions, targets } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    
    // Arrays for the 4 different target formations
    const targetSphere = new Float32Array(PARTICLE_COUNT * 3);
    const targetHelix = new Float32Array(PARTICLE_COUNT * 3);
    const targetGrid = new Float32Array(PARTICLE_COUNT * 3);
    const targetVortex = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      
      // 1. HERO: The Core (A structured, layered sphere)
      const r1 = 3 + Math.random() * 2;
      const theta1 = Math.random() * 2 * Math.PI;
      const phi1 = Math.acos(2 * Math.random() - 1);
      targetSphere[i3] = r1 * Math.sin(phi1) * Math.cos(theta1);
      targetSphere[i3 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1);
      targetSphere[i3 + 2] = r1 * Math.cos(phi1);

      // 2. ABOUT: Sovereign DNA (A massive sprawling double helix)
      const t = (i / PARTICLE_COUNT) * Math.PI * 40; // 20 coils
      const radius2 = 2 + Math.random() * 1.5;
      const helixOffset = i % 2 === 0 ? 0 : Math.PI; // Two strands
      const spread = (Math.random() - 0.5) * 2;
      targetHelix[i3] = Math.cos(t + helixOffset) * radius2 + spread;
      targetHelix[i3 + 1] = (i / PARTICLE_COUNT) * 30 - 15; // Spread vertically
      targetHelix[i3 + 2] = Math.sin(t + helixOffset) * radius2 + spread;

      // 3. HARDWARE: Precision Grid (A rigid, structural 3D matrix)
      const gridSize = Math.ceil(Math.pow(PARTICLE_COUNT, 1 / 3)); // ~20
      const spacing = 0.8;
      const x = i % gridSize;
      const y = Math.floor(i / gridSize) % gridSize;
      const z = Math.floor(i / (gridSize * gridSize));
      const offset = (gridSize * spacing) / 2;
      // Add a tiny bit of scatter so it looks like floating tech, not perfect dots
      const scatter = (Math.random() - 0.5) * 0.2; 
      targetGrid[i3] = x * spacing - offset + scatter;
      targetGrid[i3 + 1] = y * spacing - offset + scatter;
      targetGrid[i3 + 2] = z * spacing - offset + scatter;

      // 4. SOFTWARE: Data Vortex (A swirling chaotic tunnel)
      const angle4 = Math.random() * Math.PI * 2;
      const radius4 = Math.random() * 10 + (Math.random() > 0.8 ? 5 : 0); // Core + outer ring
      const height4 = (Math.random() - 0.5) * 40;
      targetVortex[i3] = Math.cos(angle4) * radius4;
      targetVortex[i3 + 1] = height4;
      targetVortex[i3 + 2] = Math.sin(angle4) * radius4;

      // Initial position starts at Sphere
      pos[i3] = targetSphere[i3];
      pos[i3 + 1] = targetSphere[i3 + 1];
      pos[i3 + 2] = targetSphere[i3 + 2];
    }

    return { 
      positions: pos, 
      targets: [targetSphere, targetHelix, targetGrid, targetVortex] 
    };
  }, []);

  // Handle Scroll to determine active formation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 700) currentStageRef.current = 0; // Hero -> Sphere
      else if (scrollY < 1600) currentStageRef.current = 1; // About -> Helix
      else if (scrollY < 2800) currentStageRef.current = 2; // Hardware -> Grid
      else currentStageRef.current = 3; // Software -> Vortex
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.elapsedTime;
    const stage = currentStageRef.current;
    const activeTarget = targets[stage];
    
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const posArray = positionsAttr.array as Float32Array;

    // Unified, very slow continuous rotation to avoid chaotic, dizzying swings
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1; // Gentle breathing tilt
    pointsRef.current.rotation.z = Math.cos(time * 0.2) * 0.05;

    // Morph individual particles toward their active target formation
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
      // Add very subtle organic ambient noise (breathing effect)
      const noiseX = Math.sin(time + i * 0.1) * 0.05;
      const noiseY = Math.cos(time * 0.8 + i * 0.2) * 0.05;
      const noiseZ = Math.sin(time * 1.2 + i * 0.3) * 0.05;

      posArray[i] = THREE.MathUtils.lerp(posArray[i], activeTarget[i] + noiseX, LERP_SPEED);
      posArray[i + 1] = THREE.MathUtils.lerp(posArray[i + 1], activeTarget[i + 1] + noiseY, LERP_SPEED);
      posArray[i + 2] = THREE.MathUtils.lerp(posArray[i + 2], activeTarget[i + 2] + noiseZ, LERP_SPEED);
    }

    positionsAttr.needsUpdate = true;
  });

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
      <points ref={pointsRef} position={[0, 0, -8]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        {/* Lower opacity and size so it sits quietly in the background */}
        <pointsMaterial
          key={theme}
          size={0.035}
          color={theme === "light" ? "#0b7c8e" : "#00f0ff"}
          transparent
          opacity={theme === "light" ? 0.42 : 0.18}
          sizeAttenuation
          blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </Float>
  );
}

/* ─────────────────────────────────────────────
   Main exported component
   ───────────────────────────────────────────── */
export function ThreeBackground() {
  const [theme, setTheme] = useState<Theme>("dark");

  useLayoutEffect(() => {
    const sync = () => setTheme(readDomTheme());
    sync();
    const onTheme = (event: Event) => {
      const detail = (event as CustomEvent<Theme>).detail;
      setTheme(detail === "light" || detail === "dark" ? detail : readDomTheme());
    };
    window.addEventListener(THEME_EVENT, onTheme);
    return () => window.removeEventListener(THEME_EVENT, onTheme);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[1] pointer-events-none opacity-90">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneFog theme={theme} />
        <DataSwarm theme={theme} />
      </Canvas>
    </div>
  );
}
