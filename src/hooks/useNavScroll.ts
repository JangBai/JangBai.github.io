import { useState, useEffect } from "react";

export const useNavScroll = () => {
  const [activeSection, setActiveSection] = useState<string>("introduce");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.getBoundingClientRect().top + window.scrollY;

        if (scrollY >= sectionTop - window.innerHeight * 0.3) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80; // 헤더 높이 보정
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return { activeSection, scrollToSection };
};
