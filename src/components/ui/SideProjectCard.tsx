import { sideProjects } from "@/data/sideProjects";
import { RiShareBoxLine } from "react-icons/ri";
import {
  SiPrisma,
  SiRailway,
  SiSocketdotio,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const stackIcons: Record<string, IconType> = {
  prisma: SiPrisma,
  railway: SiRailway,
  socket: SiSocketdotio,
  supabase: SiSupabase,
  vercel: SiVercel,
};

export default function SideProjectCard() {
  return (
    <>
      {sideProjects.map((project) => (
        <article
          data-scene="project"
          key={project.id}
          className="relative w-full rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6"
        >
          <div
            data-reveal="card-title"
            className="mb-6 flex flex-wrap items-end justify-between gap-2"
          >
            <h3 className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-2xl font-semibold text-transparent dark:from-white dark:to-slate-400">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {project.links.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-accent flex items-center gap-0.5 rounded-md border border-white/10 bg-black/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  <span>{item.title}</span>
                  <RiShareBoxLine className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <p
            data-reveal="detail"
            className="pb-6 text-sm text-[var(--color-primary)]"
          >
            {project.subTitle}
          </p>

          <ul className="space-y-1 leading-relaxed text-[var(--color-primary)]">
            {project.descriptions.map((description) => (
              <li
                key={description}
                data-reveal="line"
                className="relative pl-3 text-sm before:absolute before:left-0 before:top-[12px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-accent-strong)] dark:before:bg-[var(--color-accent-soft)]"
              >
                {description}
              </li>
            ))}
          </ul>

          {project.testAccounts && project.testNotice && (
            <div
              data-reveal="detail"
              className="mt-6 rounded-lg border border-white/10 bg-black/10 p-4 text-sm text-[var(--color-primary)] dark:bg-white/10"
            >
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                Test Account
              </h4>
              <ul className="space-y-1 font-mono text-xs">
                {project.testAccounts.map((account) => (
                  <li key={account.email}>
                    {account.email} / {account.password}
                  </li>
                ))}
              </ul>
              <p className="mt-3 whitespace-pre-line leading-relaxed">
                {project.testNotice}
              </p>
            </div>
          )}

          <div
            data-reveal="stacks"
            className="mt-6 flex flex-col flex-wrap items-start gap-2 text-xs"
          >
            <span className="text-[var(--color-primary)]">Stack</span>
            <div className="flex flex-wrap items-center gap-2">
              {project.stacks.map((stack) => {
                const Icon = stackIcons[stack.icon];

                return (
                  <span
                    key={stack.name}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25"
                  >
                    {Icon ? (
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <img
                        src={stack.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    )}
                    {stack.name}
                  </span>
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
