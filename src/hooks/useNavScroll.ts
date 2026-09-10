import { useState, useEffect } from "react";
import { scrollToWithLenis } from "@/hooks/useLenis";

export const useNavScroll = () => {
  const [activeSection, setActiveSection] = useState<string>("introduce");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible) setActiveSection((visible.target as HTMLElement).id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80; // 헤더 높이 보정
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: elementPosition, behavior: "instant" });
      return;
    }

    scrollToWithLenis(elementPosition);
  };

  return { activeSection, scrollToSection };
};
