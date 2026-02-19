"use client";

import useDarkTheme from "@/hooks/DarkTheme";

export default function ThemeButton() {
  const { isDark, toggleTheme } = useDarkTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-zinc-800 px-2 py-1 text-xs font-medium text-white shadow-md transition-all duration-300 hover:opacity-80 dark:bg-zinc-200 dark:text-black"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
