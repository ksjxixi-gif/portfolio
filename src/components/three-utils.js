import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ACCENT = "#ff6b35";
export const FG = "#ededea";
// public/assets/signature.png is 1438x464; width is in world units.
export const SIGNATURE = { width: 6, aspect: 464 / 1438 };

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Pointer position in [-0.5, 0.5], tracked on window so the canvas itself can ignore events.
export function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current = { x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return pointer;
}

// Round sprite for point clouds (pointsMaterial draws squares by default).
export function dotTexture() {
  const canvas = Object.assign(document.createElement("canvas"), { width: 64, height: 64 });
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}
