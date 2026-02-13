import ThemeButton from "@/components/ui/ThemeButton";
import { nav } from "@/data/nav";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-neutral-200 bg-[var(--color-nav-background)] backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1>
          <a href="#introduce" className="tracking-tight">
            <span className="text-2xl font-bold text-[var(--color-primary)]">
              JB
            </span>
          </a>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8">
          {nav.map((item) => (
            <a
              href={item.href}
              className="transition-colors hover:text-[var(--color-nav-text-hover)]"
            >
              <span className="text-sm font-medium text-[var(--color-nav-text)]">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Theme Button */}
        <ThemeButton />
      </div>
    </header>
  );
}
