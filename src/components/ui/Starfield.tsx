import { useRef } from "react";
import { useStarfield } from "@/hooks/useStarfield";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  useStarfield(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[var(--color-background)]"
    />
  );
}
