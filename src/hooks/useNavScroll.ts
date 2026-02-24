import { useState, useEffect } from "react";

export const useNavScroll = () => {
  const [activeSection, setActiveSection] = useState<string>("introduce");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
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
    const elementPosition = element.offsetTop - headerOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return { activeSection, scrollToSection };
};
