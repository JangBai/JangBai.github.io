import { ykData } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10"
    >
      <h2 className="pb-16 text-3xl font-bold text-[var(--color-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
        Projects
      </h2>

      <article className="relative w-full rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6">
        {/* 오른쪽 위 버튼 */}
        <div className="mb-6 flex flex-row place-items-end justify-between">
          {/* 제목 */}
          <h3 className="mb-1 text-2xl font-semibold text-[var(--color-primary)]">
            법무법인 YK 센터 웹 서비스
          </h3>
          <div className="flex flex-row justify-start text-[var(--color-primary)]">
            {ykData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1.5 rounded-md border border-white/10 bg-white/10 px-[0.5rem] py-[0.25rem] text-xs font-normal text-[var(--color-primary)] transition-colors duration-300 hover:bg-white/20"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* 내용 */}
        <ul className="space-y-1 leading-relaxed text-[var(--color-primary)]">
          <li>• 내용111111111111111111111111111111111111111111111111</li>
          <li>• 내용222222222222222222222222222222222222222222222222</li>
          <li>• 내용333333333333333333333333333333333333333333333333</li>
          <li>• 내용444444444444444444444444444444444444444444444444</li>
        </ul>

        {/* 스택 */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1">
            Next.js
          </span>
          <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1">
            SEO
          </span>
          <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1">
            Docker
          </span>
          <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1">
            nginx
          </span>
        </div>
      </article>
    </section>
  );
}
