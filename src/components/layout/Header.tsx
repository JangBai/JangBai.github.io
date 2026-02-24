import { useNavScroll } from "@/hooks/useNavScroll";
import { nav } from "@/data/nav";
import ThemeButton from "../ui/ThemeButton";

export default function Header() {
  const { activeSection, scrollToSection } = useNavScroll();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-nav-background)] backdrop-blur-md">
      <div className="flex items-center justify-between py-3">
        <h1>
          <a href="/" className="tracking-tight">
            <span className="text-xl font-bold text-[var(--color-primary)]">
              JB
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
        <ThemeButton />
      </div>
    </header>
  );
}
