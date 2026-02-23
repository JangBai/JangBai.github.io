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

      <article className="dark:[var(--color-accent-soft-20)] relative w-full rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6">
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
                className="mr-1.5 rounded-md border border-white/10 bg-black/10 px-[0.5rem] py-[0.25rem] text-xs font-normal text-[var(--color-primary)] transition-colors duration-300 hover:bg-white/20 dark:bg-white/10"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* 내용 */}
        <ul className="space-y-1 leading-relaxed text-[var(--color-primary)]">
          <li>
            • 센터별 페이지 특성을 고려한 SEO 구조 설계 및 메타데이터 관리
          </li>
          <li>
            • 검색 API 및 검색 결과 로직 구현을 통해 사용자 검색 경험 개선
          </li>
          <li>
            • 페이지 특성에 따라 SSR / ISR을 혼합 적용하고, revalidate 전략을
            활용해 성능과 최신성의 균형을 설계
          </li>
          <li>
            • 정적 export 환경에서의 서비스 운영 경험을 바탕으로 nginx 및 Docker
            기반의 라우팅·리다이렉트 구조 구성
          </li>
          <li>
            • 공통 구조를 기반으로 신규 센터를 추가할 수 있는 서비스 구조를
            설계하여 센터 확장 및 운영 효율을 개선
          </li>
          <li>
            • 운영 과정에서 변경되는 요구사항을 반영해 UI 개선과 기능 보완을
            병행하며 서비스 완성도를 지속적으로 향상
          </li>
        </ul>

        {/* 스택 */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img
              src="/language_logo/Next.js.svg"
              alt="Next.js"
              className="h-4 w-4"
            />
            Next.js
          </span>
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img
              src="/language_logo/React.svg"
              alt="React"
              className="h-4 w-4"
            />
            React
          </span>
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img
              src="/language_logo/TypeScript.svg"
              alt="TypeScript"
              className="h-4 w-4"
            />
            TypeScript
          </span>
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img
              src="/language_logo/JavaScript.svg"
              alt="JavaScript"
              className="h-4 w-4"
            />
            JavaScript
          </span>
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img
              src="/language_logo/Express.svg"
              alt="Express"
              className="h-4 w-4"
            />
            Express
          </span>
          <span className="flex flex-row items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25">
            <img src="/language_logo/SCSS.svg" alt="SCSS" className="h-4 w-4" />
            SCSS
          </span>
        </div>
      </article>
    </section>
  );
}
