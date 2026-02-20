import ThemeButton from "@/components/ui/ThemeButton";
import { nav } from "@/data/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-neutral-200 bg-[var(--color-nav-background)] backdrop-blur-md">
      <div className="flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <h1>
          <a href="/" className="tracking-tight">
            <span className="text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
              JB
            </span>
          </a>
        </h1>

        {/* Navigation */}
        <nav className="hidden gap-4 md:flex md:gap-6 lg:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
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
