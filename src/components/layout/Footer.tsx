export default function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-black/10 bg-[var(--color-nav-background)] backdrop-blur-md dark:border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-base font-medium tracking-wide text-[var(--color-primary)]">
              김장배 | Frontend Engineer
            </span>
            <span className="text-sm text-black/60 dark:text-white/60">
              This page was handcrafted with care. AI assists, but humans
              create.
            </span>
          </div>

          <span className="text-sm text-black/60 dark:text-white/60">
            Seoul, Korea
          </span>

          <div className="mt-4 text-xs text-black/50 dark:text-white/50">
            <p>© {new Date().getFullYear()} Kim Jang Bae.</p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
