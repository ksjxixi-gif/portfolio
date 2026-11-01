import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { ACCENT, FG, SIGNATURE, dotTexture, prefersReducedMotion, usePointer } from "./three-utils";

const COUNT = 4500;

// Sample the opaque pixels of the signature image as particle targets, centred on the origin.
async function sampleSignature() {
  const img = new Image();
  img.src = "/assets/signature.png";
  await img.decode();
  const w = 720;
  const h = Math.round((w * img.height) / img.width);
  const ctx = Object.assign(document.createElement("canvas"), { width: w, height: h }).getContext("2d");
  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);
  const hits = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) if (data[(y * w + x) * 4 + 3] > 120) hits.push(x, y);
  }
  const target = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const j = Math.floor(Math.random() * (hits.length / 2)) * 2;
    target[i * 3] = (hits[j] / w - 0.5) * SIGNATURE.width;
    target[i * 3 + 1] = -(hits[j + 1] / h - 0.5) * SIGNATURE.width * (h / w);
    target[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
  }
  return target;
}

function Particles({ target }) {
  const points = useRef(null);
  const group = useRef(null);
  const progress = useRef(0);
  const pointer = usePointer();
  const dot = useMemo(dotTexture, []);
  const still = useMemo(prefersReducedMotion, []);
  const start = useMemo(() => Float32Array.from({ length: COUNT * 3 }, () => (Math.random() - 0.5) * 12), []);
  const positions = useMemo(() => (still ? target.slice() : start.slice()), [still, start, target]);
  const colors = useMemo(() => {
    const out = new Float32Array(COUNT * 3);
    const fg = new THREE.Color(FG);
    const accent = new THREE.Color(ACCENT);
    for (let i = 0; i < COUNT; i++) (Math.random() < 0.08 ? accent : fg).toArray(out, i * 3);
    return out;
  }, []);

  useFrame((state, dt) => {
    const g = group.current;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.current.y * 0.35, 2, dt);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.current.x * 0.45, 2, dt);
    if (still) return;

    // Fly in from a scattered cloud, then keep breathing slightly.
    progress.current = Math.min(1, progress.current + dt / 2.4);
    const k = 1 - Math.pow(1 - progress.current, 3);
    const time = state.clock.elapsedTime;
    const attr = points.current.geometry.attributes.position;
    for (let i = 0; i < COUNT * 3; i += 3) {
      attr.array[i] = start[i] + (target[i] - start[i]) * k + Math.sin(time * 1.5 + i) * 0.012 * k;
      attr.array[i + 1] = start[i + 1] + (target[i + 1] - start[i + 1]) * k + Math.cos(time * 1.3 + i) * 0.012 * k;
      attr.array[i + 2] = start[i + 2] + (target[i + 2] - start[i + 2]) * k;
    }
    attr.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial map={dot} alphaTest={0.5} size={0.035} vertexColors />
      </points>
    </group>
  );
}

// The handwritten signature, assembled from particles. SIGNATURE.width units wide.
const SignatureParticles = () => {
  const [target, setTarget] = useState(null);
  useEffect(() => {
    sampleSignature().then(setTarget);
  }, []);
  return target && <Particles target={target} />;
};

export default SignatureParticles;
