import { useNavScroll } from "@/hooks/useNavScroll";
import { nav } from "@/data/nav";
import ThemeButton from "@/components/ui/ThemeButton";
import { GrSend } from "react-icons/gr";

export default function Header() {
  const { activeSection, scrollToSection } = useNavScroll();

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-4xl bg-[var(--color-nav-background)] px-6 backdrop-blur-md">
      <div className="flex items-center justify-between py-3">
        <h1>
          <a href="/" className="tracking-tight">
            <span className="text-xl font-bold text-[var(--color-primary)]">
              JangBae
            </span>
          </a>
        </h1>

        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");

            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(id)}
                className={`transition-colors ${
                  activeSection === id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-nav-text)] hover:text-[var(--color-nav-text-hover)]"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeButton />
          <button
            type="button"
            onClick={() => scrollToSection("connect")}
            className="rounded-lg bg-[var(--color-accent)] px-1 py-1 text-white transition-all duration-300 hover:bg-[var(--color-accent-strong)]"
          >
            <GrSend />
          </button>
        </div>
      </div>
    </header>
  );
}
