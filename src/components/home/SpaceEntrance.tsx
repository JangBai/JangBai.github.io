import { useEffect, useRef } from "react";
import * as THREE from "three";

type SpaceEntranceProps = {
  journeyRef: React.RefObject<HTMLDivElement | null>;
};

/** A transparent, hero-only star tunnel. The surrounding page remains DOM UI. */
export default function SpaceEntrance({ journeyRef }: SpaceEntranceProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1800);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const count = window.innerWidth < 640 ? 420 : 1050;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 115;
      positions[offset + 1] = (Math.random() - 0.5) * 76;
      positions[offset + 2] = Math.random() * 1500 - 1100;
      color.setHSL(0.62 + Math.random() * 0.08, 0.65, 0.65 + Math.random() * 0.3);
      colors[offset] = color.r;
      colors[offset + 1] = color.g;
      colors[offset + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 64;
    textureCanvas.height = 64;
    const textureContext = textureCanvas.getContext("2d");
    if (textureContext) {
      textureContext.fillStyle = "#ffffff";
      textureContext.beginPath();
      textureContext.arc(32, 32, 28, 0, Math.PI * 2);
      textureContext.fill();
    }
    const starTexture = new THREE.CanvasTexture(textureCanvas);
    const material = new THREE.PointsMaterial({
      size: 0.75,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.92,
      vertexColors: true,
      depthWrite: false,
      map: starTexture,
      alphaTest: 0.1,
    });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = Math.max(width, 1) / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frame = 0;
    const render = () => {
      const progress = Number.parseFloat(
        journeyRef.current?.style.getPropertyValue("--hero-progress") || "0"
      );
      const amount = Math.min(1, Math.max(0, progress));
      const exitAmount = Math.min(1, Math.max(0, (amount - 0.72) / 0.28));
      camera.position.z = 480 - amount * 940;
      camera.rotation.y = amount * -0.1;
      camera.rotation.x = amount * 0.06;
      stars.rotation.z = amount * -0.12;
      material.opacity = 0.92 * (1 - exitAmount * 0.72);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [journeyRef]);

  return <div ref={mountRef} className="space-entrance" aria-hidden="true" />;
}
