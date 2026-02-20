import { useEffect } from "react";

export const useStarfield = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

      return {
        x,
        y,
        angle: Math.atan2(y - centerY(), x - centerX()),
        speed: Math.random() * 0.1 + 0.02,
        radius: Math.random() * 1.5 + 0.3,
      };
    });

    const getPrimaryColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getPrimaryColor();

      stars.forEach((star) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

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
  }, [canvasRef]);
};
