import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ACCENT, FG, prefersReducedMotion, usePointer } from "./three-utils";

// One ring per layer in the security section; index 0 is the innermost (core) layer.
// Outer ring diameter is about 5.6 world units.
const LAYERS = 8;

const circle = (radius, segments = 256) => {
  const out = new Float32Array(segments * 3);
  for (let i = 0; i < segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    out[i * 3] = Math.cos(t) * radius;
    out[i * 3 + 1] = Math.sin(t) * radius;
  }
  return out;
};

function Ring({ index, still }) {
  const spin = useRef(null);
  const radius = 0.9 + index * 0.27;
  const points = useMemo(() => circle(radius), [radius]);
  const color = useMemo(() => new THREE.Color(ACCENT).lerp(new THREE.Color("#4a4a50"), index / (LAYERS - 1)), [index]);
  const speed = (index % 2 ? -1 : 1) * (0.5 - index * 0.04);

  useFrame((_, dt) => {
    if (!still) spin.current.rotation.z += dt * speed;
  });

  return (
    <group rotation={[(index * 1.7) % Math.PI, (index * 2.3) % Math.PI, 0]}>
      <group ref={spin}>
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[points, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={color} />
        </lineLoop>
        {/* a packet travelling around the layer */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color={index < 3 ? ACCENT : FG} />
        </mesh>
      </group>
    </group>
  );
}

const SecurityRings = () => {
  const group = useRef(null);
  const core = useRef(null);
  const pointer = usePointer();
  const still = useMemo(prefersReducedMotion, []);

  useFrame((_, dt) => {
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.6, 2, dt);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.6, 2, dt);
    if (!still) {
      core.current.rotation.x += dt * 0.3;
      core.current.rotation.y += dt * 0.4;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshBasicMaterial color={ACCENT} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color={FG} />
      </mesh>
      {Array.from({ length: LAYERS }, (_, i) => (
        <Ring key={i} index={i} still={still} />
      ))}
    </group>
  );
};

export default SecurityRings;
