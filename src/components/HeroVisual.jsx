import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import SecurityRings from "./SecurityRings";
import SignatureParticles from "./SignatureParticles";
import { SIGNATURE } from "./three-utils";

const RINGS_SIZE = 6; // outer ring diameter plus a little air, in world units

// Signature across the top band, security rings filling the space below it.
function Layout() {
  const { width, height } = useThree((state) => state.viewport);
  const margin = height * 0.04;
  const sigWidth = Math.min(width * 0.9, SIGNATURE.width);
  const sigHeight = sigWidth * SIGNATURE.aspect;
  const sigY = height / 2 - margin - sigHeight / 2;
  const ringsSpace = height - sigHeight - margin * 3;
  const ringsY = sigY - sigHeight / 2 - margin - ringsSpace / 2;
  return (
    <>
      <group position={[0, sigY, 0]} scale={sigWidth / SIGNATURE.width}>
        <SignatureParticles />
      </group>
      <group position={[0, ringsY, 0]} scale={Math.min(width, ringsSpace) / RINGS_SIZE}>
        <SecurityRings />
      </group>
    </>
  );
}

const HeroVisual = () => {
  const container = useRef(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    // Stop rendering while the hero is scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="size-full">
      <Canvas
        frameloop={visible ? "always" : "never"}
        style={{ pointerEvents: "none" }}
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        dpr={[1, 2]}
      >
        <Layout />
      </Canvas>
    </div>
  );
};

export default HeroVisual;
