import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FlowingTerrain() {
  const geometryRef = useRef<THREE.PlaneGeometry>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (geometryRef.current) {
      const position = geometryRef.current.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        // Create rolling hills effect representing agricultural topography
        const z = Math.sin(x * 0.2 + time * 0.3) * Math.cos(y * 0.2 + time * 0.3) * 1.5;
        position.setZ(i, z);
      }
      position.needsUpdate = true;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry ref={geometryRef} args={[50, 50, 100, 100]} />
      <meshBasicMaterial 
        color="#2e7d32" 
        wireframe 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
}

function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 1000;
  
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40; // x
      pos[i * 3 + 1] = Math.random() * 15 - 5; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
      spd[i] = 0.5 + Math.random() * 1.5; // individual speed
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const posAttribute = pointsRef.current.geometry.attributes.position;
      const array = posAttribute.array as Float32Array;
      for (let i = 0; i < count; i++) {
        array[i * 3 + 1] += delta * speeds[i]; // move up representing data flow/growth
        if (array[i * 3 + 1] > 10) {
          array[i * 3 + 1] = -5; // reset to bottom
        }
      }
      posAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#f9a825" 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
      />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
        <fog attach="fog" args={['#ffffff', 5, 25]} />
        <FlowingTerrain />
        <DataParticles />
      </Canvas>
    </div>
  );
}
