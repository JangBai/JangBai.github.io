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
    const stories = root.querySelectorAll<HTMLElement>("[data-story]");
    const headings = root.querySelectorAll<HTMLElement>(
      '[data-reveal="heading"]'
    );
    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    let layoutDirty = true;
    let heroTop = 0;
    let heroHeight = 0;
    const storyLayout = new Map<HTMLElement, { top: number; height: number }>();
    const headingLayout = new Map<HTMLElement, number>();
    const sceneLayout = new Map<HTMLElement, { top: number; height: number }>();

    // Reading layout during every scroll frame forces synchronous reflow. Cache
    // document coordinates and refresh them only when the layout can change.
    const measureLayout = () => {
      const scrollY = window.scrollY;
      if (hero) {
        heroTop = hero.getBoundingClientRect().top + scrollY;
        heroHeight = hero.offsetHeight;
      }
      storyLayout.clear();
      headingLayout.clear();
      sceneLayout.clear();
      stories.forEach((story) => {
        const bounds = story.getBoundingClientRect();
        storyLayout.set(story, {
          top: bounds.top + scrollY,
          height: bounds.height,
        });
      });
      headings.forEach((heading) => {
        headingLayout.set(
          heading,
          heading.getBoundingClientRect().top + scrollY
        );
      });
      scenes.forEach((scene) => {
        const bounds = scene.getBoundingClientRect();
        sceneLayout.set(scene, {
          top: bounds.top + scrollY,
          height: bounds.height,
        });
      });
      layoutDirty = false;
    };

    const update = () => {
      frame = 0;
      if (!hero || preference.matches) return;
      if (layoutDirty) measureLayout();
      const scrollY = window.scrollY;
      const distance = Math.max(1, heroHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, (scrollY - heroTop) / distance));
      hero.style.setProperty("--hero-progress", String(progress));
      root.style.setProperty(
        "--page-progress",
        String(
          clamp(
            scrollY /
              Math.max(
                1,
                document.documentElement.scrollHeight - window.innerHeight
              )
          )
        )
      );
      stories.forEach((story) => {
        const layout = storyLayout.get(story);
        if (!layout) return;
        const top = layout.top - scrollY;
        const pinned =
          story.dataset.story === "pinned" && window.innerHeight > 600;
        const progress = pinned
          ? -top / Math.max(1, layout.height - window.innerHeight)
          : (window.innerHeight * 0.85 - top) /
            (layout.height * 0.65 + window.innerHeight * 0.2);
        story.style.setProperty("--story-progress", String(clamp(progress)));
      });
      headings.forEach((heading) => {
        const layoutTop = headingLayout.get(heading);
        if (layoutTop === undefined) return;
        const top = layoutTop - scrollY;
        heading.style.setProperty(
          "--heading-enter",
          String(
            clamp(
              (top - window.innerHeight * 0.35) / (window.innerHeight * 0.65)
            )
          )
        );
      });
      scenes.forEach((scene) => {
        const layout = sceneLayout.get(scene);
        if (!layout) return;
        const bounds = {
          top: layout.top - scrollY,
          bottom: layout.top - scrollY + layout.height,
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
    const refreshLayout = () => {
      layoutDirty = true;
      schedule();
    };
    const configure = () => {
      root.classList.toggle("motion-enabled", !preference.matches);
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
    const resizeObserver = new ResizeObserver(refreshLayout);
    resizeObserver.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", refreshLayout);
    preference.addEventListener("change", configure);
    root.addEventListener("focusin", revealFocused);
    return () => {
      root.classList.remove("motion-enabled");
      cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", refreshLayout);
      preference.removeEventListener("change", configure);
      root.removeEventListener("focusin", revealFocused);
      targets.forEach((target) => target.classList.remove("reveal-pending"));
    };
  }, []);
  return ref;
}
