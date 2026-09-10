import { useEffect } from "react";

/** 
 *
  canvas mount → 별 위치/개수 등을 최초 1회 생성
  모바일 Safari 스크롤 → 브라우저 상단/하단 UI 변화 때문에 resize가 자주 발생할 수 있음
  resize마다 별을 다시 만들면 → 별 위치가 계속 바뀌거나 불필요한 렌더링이 발생할 수 있음
  그래서 별 데이터는 유지
  다크/라이트 테마 변경 시 → 좌표는 그대로 두고 색만 변경
 */
export const useStarfield = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = width < 640 ? 35 : 85;
    const stars = Array.from({ length: count }, () => {
      const depth = 0.4 + Math.random() * 1.6;
      return {
        alpha: 0.25 + depth * 0.2,
        radius: 0.3 + Math.random() * 1.1,
        x: Math.random() * width,
        y: Math.random() * height,
      };
    });

    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "#ffffff"
        : "#000000";
      for (const star of stars) {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const themeObserver = new MutationObserver(paint);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    paint();

    return () => themeObserver.disconnect();
  }, [canvasRef]);
};
