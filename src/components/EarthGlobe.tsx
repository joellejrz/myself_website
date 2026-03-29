'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlobeWireframe() {
  const globeRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
  });

  // Tour city coordinates (lat/lon to 3D)
  const cities = [
    { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
    { name: 'Darmstadt', lat: 49.8728, lon: 8.6512 },
    { name: 'Odenwald', lat: 49.65, lon: 8.95 },
  ];

  const latLonToXYZ = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  return (
    <group ref={globeRef}>
      {/* Main wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2, 36, 36]} />
        <meshBasicMaterial
          color="#c9a84c"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.98, 24, 24]} />
        <meshBasicMaterial
          color="#c9a84c"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Latitude lines */}
      {[-60, -30, 0, 30, 60].map((lat) => {
        const radius = 2.01;
        const phi = (90 - lat) * (Math.PI / 180);
        const r = radius * Math.sin(phi);
        const y = radius * Math.cos(phi);
        return (
          <mesh key={`lat-${lat}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[r - 0.005, r + 0.005, 64]} />
            <meshBasicMaterial color="#c9a84c" transparent opacity={0.25} side={THREE.DoubleSide} />
          </mesh>
        );
      })}

      {/* City markers */}
      {cities.map((city) => {
        const pos = latLonToXYZ(city.lat, city.lon, 2.05);
        return (
          <group key={city.name} position={[pos.x, pos.y, pos.z]}>
            {/* Dot */}
            <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#c9a84c" />
            </mesh>
            {/* Pulse ring */}
            <mesh>
              <ringGeometry args={[0.08, 0.12, 32]} />
              <meshBasicMaterial
                color="#c9a84c"
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}

      {/* Ambient particles */}
      {Array.from({ length: 200 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2.02 + Math.random() * 0.3;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);
        return (
          <mesh key={`p-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.008, 4, 4]} />
            <meshBasicMaterial color="#c9a84c" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function EarthGlobe() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#c9a84c" />
        <GlobeWireframe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
