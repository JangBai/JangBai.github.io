import { TypeAnimation } from "react-type-animation";

export default function Introduce() {
  return (
    <section id="introduce" className="intro-section">
      <div className="hero-journey">
        <div className="hero-stage">
          <div className="cosmos" aria-hidden="true">
            <div className="cosmos-haze" />
            <div className="cosmos-depth">
              <i />
              <i />
              <i />
            </div>
            <div className="cosmos-orbit cosmos-orbit-one" />
            <div className="cosmos-orbit cosmos-orbit-two" />
            <div className="cosmos-orbit cosmos-orbit-three" />
            <div className="cosmos-core" />
            <div className="cosmos-flare" />
          </div>
          <div className="hero-title flex flex-col items-center justify-center gap-4">
            <div className="text-center text-[var(--color-primary)]">
              <h2 className="hero-name font-bold">KIM JANG BAE</h2>
              <p className="hero-role">Frontend Developer</p>
            </div>
            <div className="px-4 text-center text-[var(--color-accent-strong)] dark:text-[var(--color-accent-soft)] sm:text-lg lg:text-xl">
              <span className="typing-static">Adding Value Through Code</span>
              <TypeAnimation
                className="typing-animated"
                sequence={[
                  "Adding Value Through Code",
                  3000,
                  "",
                  1500,
                  "코드에 가치를 더하다",
                  3000,
                  "",
                  1500,
                ]}
                speed={10}
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="hero-scroll">
            <div className="flex flex-col items-center gap-6">
              <span className="text-xs tracking-[0.3em] text-[var(--color-primary)] opacity-60">
                SCROLL TO EXPLORE
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="var(--color-primary)"
                className="animate-float opacity-70"
                aria-hidden="true"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p
        data-reveal="story-panel"
        className="intro-story text-[var(--color-primary)]"
        aria-label="자기소개"
      >
        <span data-reveal="story">
          문제 해결과 비즈니스 관점을 바탕으로 서비스의 완성도를 높이는
          프론트엔드 개발자 김장배입니다.
        </span>
        <span data-reveal="story">
          사용자와 서비스 모두에 가치를 더하는 프론트엔드 개발자 김장배입니다.
          Next.js 기반 프로젝트에서 검색 노출을 고려한 페이지 구조와 메타데이터
          관리, SEO 요구사항을 반영한 구현을 중심으로 유지보수성과 확장성을
          고려한 프론트엔드 개발을 수행해왔고,
        </span>
        <span data-reveal="story">
          검색 의도에 맞는 콘텐츠 구조와 사용자 접근성을 함께 고민하며, 실제
          서비스 배포·운영 과정을 경험해 개발 이후 단계까지 고려하는 방향으로
          일하고 있습니다.
        </span>
        <span data-reveal="story">
          기획, 디자인, 운영 등 다양한 직무와의 협업 속에서 반복 업무를 줄이고
          효율적인 작업 환경을 만드는 것을 중요하게 여기며, 팀과 함께 더 나은
          결과를 만드는 개발자로 성장하고자 합니다.
        </span>
      </p>
    </section>
  );
}
