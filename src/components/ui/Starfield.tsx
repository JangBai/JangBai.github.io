import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    const stars = Array.from({ length: 50 }).map(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      // 중심 기준 방향 계산
      const angle = Math.atan2(y - centerY(), x - centerX());

      return {
        x,
        y,
        angle,
        speed: Math.random() * 0.1 + 0.02, // 매우 느리게
        radius: Math.random() * 1.5 + 0.3,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";

      stars.forEach((star) => {
        // 중심에서 바깥 방향으로 이동
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // 화면 벗어나면 랜덤 위치 재배치
        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height
        ) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.angle = Math.atan2(star.y - centerY(), star.x - centerX());
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-black" />;
}
