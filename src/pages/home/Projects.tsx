import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10"
    >
      <h2 className="pb-16 text-3xl font-bold text-[var(--color-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
        Projects
      </h2>

      {projects.map((project) => (
        <article
          key={project.id}
          className="relative w-full rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6"
        >
          {/* 헤더 */}
          <div className="mb-6 flex items-end justify-between">
            <h3 className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-2xl font-semibold text-transparent dark:from-white dark:to-slate-400">
              {project.title}
            </h3>

            {project.links && project.links.length > 0 && (
              <div className="flex gap-1.5">
                {project.links.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-black/10 px-2 py-1 text-xs text-[var(--color-primary)] transition hover:bg-white/20"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {project.subTitle && project.subTitle.length > 0 && (
            <div className="flex flex-col gap-0.5 pb-6 text-sm text-[var(--color-primary)]">
              {project.subTitle.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          {/* 설명 */}
          <ul className="space-y-1 leading-relaxed text-[var(--color-primary)]">
            {project.descriptions.map((desc, index) => (
              <li key={index}>• {desc}</li>
            ))}
          </ul>

          {/* 스택 */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {project.stacks.map((stack) => (
              <span
                key={stack.name}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25"
              >
                <img src={stack.icon} alt={stack.name} className="h-4 w-4" />
                {stack.name}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
