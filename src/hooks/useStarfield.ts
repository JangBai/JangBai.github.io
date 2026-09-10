import { useEffect } from "react";

export const useStarfield = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let color = "#ffffff";
    let stars: { x: number; y: number; depth: number; radius: number }[] = [];

    const draw = (time: number) => {
      frame = 0;
      const delta = Math.min((time - lastTime) / 16.67 || 1, 2);
      lastTime = time;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      for (const star of stars) {
        if (!preference.matches) {
          star.y -= 0.06 * star.depth * delta;
          if (star.y < 0) star.y = height;
        }
        const offset = preference.matches
          ? 0
          : window.scrollY * star.depth * 0.035;
        const y = (((star.y - offset) % height) + height) % height;
        ctx.globalAlpha = 0.25 + star.depth * 0.2;
        ctx.beginPath();
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!preference.matches && !document.hidden)
        frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      draw(performance.now());
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: width < 640 ? 35 : 85 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        depth: 0.4 + Math.random() * 1.6,
        radius: 0.3 + Math.random() * 1.1,
      }));
      restart();
    };
    const updateTheme = () => {
      color = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim();
      restart();
    };
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    updateTheme();
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", restart);
    preference.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", restart);
      preference.removeEventListener("change", restart);
    };
  }, [canvasRef]);
};
