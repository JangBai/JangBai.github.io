import { useEffect, useState } from "react";
import Switch from "../ui/Switch";

export default function Header() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-neutral-200 bg-[var(--color-nav-background)] backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1>
          <a
            href="#introduce"
            className="text-lg font-semibold tracking-tight text-[var(--color-primary)]"
          >
            JB
          </a>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium">
          <a
            href="#introduce"
            className="text-[var(--color-nav-text)] transition-colors hover:text-[var(--color-nav-text-hover)]"
          >
            Introduce
          </a>
          <a
            href="#experience"
            className="text-[var(--color-nav-text)] transition-colors hover:text-[var(--color-nav-text-hover)]"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-[var(--color-nav-text)] transition-colors hover:text-[var(--color-nav-text-hover)]"
          >
            Project
          </a>
        </nav>
        {/* <button
          className="bg-primary text-black dark:text-white"
          onClick={() => {
            setTheme(theme === "default" ? "dark" : "default");
          }}
        >
          Click Me
        </button> */}
        <Switch />
      </div>
    </header>
  );
}
