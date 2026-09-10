import Lenis from "lenis";
import { useEffect } from "react";

const SCROLL_TO_EVENT = "lenis:scroll-to";

export function scrollToWithLenis(top: number) {
  window.dispatchEvent(
    new CustomEvent<number>(SCROLL_TO_EVENT, { detail: top })
  );
}

export function useLenis() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
    });
    const handleScrollTo = (event: Event) => {
      const { detail } = event as CustomEvent<number>;
      lenis.scrollTo(detail, { offset: 0, duration: 1.1 });
    };

    window.addEventListener(SCROLL_TO_EVENT, handleScrollTo);
    return () => {
      window.removeEventListener(SCROLL_TO_EVENT, handleScrollTo);
      lenis.destroy();
    };
  }, []);
}
