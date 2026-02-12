export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-neutral-200 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#introduce" className="text-lg font-semibold tracking-tight">
          JB
        </a>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium">
          <a
            href="#introduce"
            className="text-neutral-200 transition-colors hover:text-white"
          >
            Introduce
          </a>
          <a
            href="#experience"
            className="text-neutral-200 transition-colors hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-neutral-200 transition-colors hover:text-white"
          >
            Project
          </a>
        </nav>
      </div>
    </header>
  );
}
