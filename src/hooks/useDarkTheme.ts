import { useEffect, useState } from "react";

// 다크모드 훅
export default function useDarkTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // 기본값 Dark
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");

    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
}
