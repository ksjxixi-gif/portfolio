import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TABLES = 186;
const DOMAINS = 9;
const ACCENT = "#ff6b35";
const FG = "#ededea";

// Seeded PRNG so the graph is identical on every visit.
const prng = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// One node per table, clustered by domain; each table links to an earlier
// table in its domain (like a foreign key), hubs link across domains.
function buildGraph() {
  const rand = prng(7);
  const onSphere = (radius) => {
    const u = rand() * 2 - 1;
    const t = rand() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    return new THREE.Vector3(s * Math.cos(t), s * Math.sin(t), u).multiplyScalar(radius);
  };

  const hubs = Array.from({ length: DOMAINS }, () => onSphere(2.1));
  const domains = hubs.map((hub) => [hub]);
  const nodes = [...hubs];
  const edges = [];

  for (let i = DOMAINS; i < TABLES; i++) {
    const domain = domains[i % DOMAINS];
    const node = domain[0].clone().add(onSphere(0.25 + rand() * 0.75));
    edges.push(node, domain[Math.floor(rand() * domain.length)]);
    domain.push(node);
    nodes.push(node);
  }
  hubs.forEach((hub, d) => edges.push(hub, hubs[(d + 1) % DOMAINS], hub, hubs[(d + 3) % DOMAINS]));

  const flat = (points) => new Float32Array(points.flatMap((p) => p.toArray()));
  return { nodes: flat(nodes), hubs: flat(hubs), edges: flat(edges) };
}

function dotTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

const Cloud = ({ positions, size, color, dot }) => (
  <points>
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" args={[positions, 3]} />
    </bufferGeometry>
    <pointsMaterial map={dot} alphaTest={0.5} size={size} color={color} />
  </points>
);

function Graph() {
  const tilt = useRef(null);
  const spin = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { nodes, hubs, edges } = useMemo(buildGraph, []);
  const dot = useMemo(dotTexture, []);
  const still = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useEffect(() => {
    const onMove = (e) => {
      pointer.current = { x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    if (!still) spin.current.rotation.y += dt * 0.06;
    tilt.current.rotation.x = THREE.MathUtils.damp(tilt.current.rotation.x, pointer.current.y * 0.5, 2, dt);
    tilt.current.rotation.y = THREE.MathUtils.damp(tilt.current.rotation.y, pointer.current.x * 0.5, 2, dt);
  });

  return (
    <group ref={tilt}>
      <group ref={spin} rotation={[0.35, 0, 0.15]}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edges, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={ACCENT} transparent opacity={0.3} />
        </lineSegments>
        <Cloud positions={nodes} size={0.07} color={FG} dot={dot} />
        <Cloud positions={hubs} size={0.17} color={ACCENT} dot={dot} />
      </group>
    </group>
  );
}

const SchemaGraph = () => (
  <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} dpr={[1, 2]}>
    <Graph />
  </Canvas>
);

export default SchemaGraph;
