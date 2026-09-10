import { useEffect, useRef } from "react";

/** Native scrolling stays in control; only composited visual properties change. */
export function useScrollMotion() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = root.querySelector<HTMLElement>(".hero-journey");
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const scenes = root.querySelectorAll<HTMLElement>("[data-scene]");
    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const update = () => {
      frame = 0;
      if (!hero || preference.matches) return;
      const rect = hero.getBoundingClientRect();
      const distance = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      hero.style.setProperty("--hero-progress", String(progress));
      scenes.forEach((scene) => {
        // Measure layout coordinates, not the animated bounding box.
        let layoutTop = 0;
        let ancestor: HTMLElement | null = scene;
        while (ancestor) {
          layoutTop += ancestor.offsetTop;
          ancestor = ancestor.offsetParent as HTMLElement | null;
        }
        const bounds = {
          top: layoutTop - window.scrollY,
          bottom: layoutTop - window.scrollY + scene.offsetHeight,
        };
        const viewport = window.innerHeight;
        const enter = Math.min(
          1,
          Math.max(0, (bounds.top - viewport * 0.42) / (viewport * 0.55))
        );
        const leave = Math.min(
          1,
          Math.max(0, (viewport * 0.2 - bounds.bottom) / (viewport * 0.35))
        );
        scene.style.setProperty("--scene-enter", String(enter));
        scene.style.setProperty("--scene-leave", String(leave));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      observer?.disconnect();
      targets.forEach((target) => target.classList.remove("reveal-pending"));
      hero?.style.removeProperty("--hero-progress");
      scenes.forEach((scene) => {
        scene.style.removeProperty("--scene-enter");
        scene.style.removeProperty("--scene-leave");
      });
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-pending");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      targets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        // Keep a restored or already-visible position readable, animate content
        // that has not yet reached the reading zone.
        if (bounds.top > window.innerHeight * 0.72) {
          target.classList.add("reveal-pending");
          observer?.observe(target);
        }
      });
      schedule();
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest("[data-reveal]");
      target?.classList.remove("reveal-pending");
      if (target) observer?.unobserve(target);
    };
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", configure);
    root.addEventListener("focusin", revealFocused);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", configure);
      root.removeEventListener("focusin", revealFocused);
      targets.forEach((target) => target.classList.remove("reveal-pending"));
    };
  }, []);
  return ref;
}
