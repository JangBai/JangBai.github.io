"use client";

import { useEffect, useState } from "react";

export default function ThemeButton() {
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

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-zinc-800 px-2 py-1 text-xs font-medium text-white shadow-md transition-all duration-300 hover:opacity-80 dark:bg-zinc-200 dark:text-black"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
