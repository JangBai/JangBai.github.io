export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-6"
    >
      <div className="w-full text-[var(--color-primary)]">
        <h2 className="pb-16 text-center font-bold sm:text-xl md:text-3xl lg:text-5xl">
          Experience
        </h2>

        <div className="relative flex flex-col gap-16">
          <div className="hover:shadow-[var(--color-primary)]/20 relative w-full rounded-2xl border border-black/10 bg-white/70 p-8 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60">
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--color-primary)] opacity-70" />

            <div className="mb-6">
              <div className="flex flex-wrap items-end gap-3">
                <h3 className="text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
                    법무법인 와이케이
                  </span>
                </h3>
                <p className="text-lg opacity-70">주임 | 마케팅IT팀</p>
              </div>
              <p className="mt-2 text-sm opacity-50">2025.07 ~ 현재</p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                검색 중심 서비스 구조 및 SEO 설계
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>
                  Next.js 기반 웹 서비스에서 검색 노출을 고려한 페이지 구조 설계
                  및 SEO 요구사항 반영
                </li>
                <li>
                  동적 라우팅 구조 개선을 통해 콘텐츠 관리 효율 및 유지보수성
                  향상
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                센터 단위 서비스 구조 설계 및 공통 UI 관리
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>
                  형사·이혼·민사센터 등 법률 서비스 구조 설계 및 공통 UI 분리
                </li>
                <li>신규 센터 추가 시 개발·유지보수 부담 최소화</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                협업 기반 운영 효율 개선
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>기획·디자인·운영 담당자와 협업하여 업무 흐름 단순화</li>
                <li>UI 개선 및 기능 보완을 병행하여 서비스 안정성 지속 개선</li>
              </ul>
            </div>
          </div>

          <div className="hover:shadow-[var(--color-primary)]/20 relative w-full rounded-2xl border border-black/10 bg-white/70 p-8 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60">
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--color-primary)] opacity-70" />

            <div className="mb-6">
              <div className="flex flex-wrap items-end gap-3">
                <h3 className="text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
                    주식회사 아쿠시 (HSM클라우디피아)
                  </span>
                </h3>
                <p className="text-lg opacity-70">사원 | 개발팀</p>
              </div>
              <p className="mt-2 text-sm opacity-50">2022.02 ~ 2025.02 (3년)</p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                클라이언트 맞춤형 ERP 및 업무 시스템 프론트엔드 개발
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>
                  기업별 요구사항을 분석하여 업무 프로세스에 맞는 화면 및 기능
                  구현
                </li>
                <li>
                  데이터 관리 인터페이스(CRUD 기반) 설계 및 운영 기능 고도화
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                자사 MVC 기반 웹 시스템 구조 설계 및 개선
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>프로젝트 구조 및 라우팅 체계 정립</li>
                <li>코드 리팩토링을 통해 기능 추가 및 유지보수 흐름 정비</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-base font-semibold text-[var(--color-primary)]">
                실시간 데이터 처리 기반 기능 개선
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed opacity-80">
                <li>
                  실시간 통신 구조를 적용하여 기존 수동 업무 프로세스를 자동화
                </li>
                <li>데이터 처리 흐름 개선을 통해 운영 효율 향상</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
