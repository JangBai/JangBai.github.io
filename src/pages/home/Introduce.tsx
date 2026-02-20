import { TypeAnimation } from "react-type-animation";

export default function Introduce() {
  return (
    <section className="relative flex h-screen -translate-y-32 flex-col items-center justify-center gap-6 max-sm:h-[60vh] sm:-translate-y-56 sm:gap-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center text-[var(--color-primary)]">
          <h2 className="text-3xl font-bold sm:text-5xl lg:text-5xl">
            KIM JANG BAE
          </h2>
          <p className="text-xl sm:text-3xl lg:text-5xl">Frontend Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center text-[var(--color-accent-strong)] dark:text-[var(--color-accent-soft)] sm:text-lg lg:text-xl">
          <TypeAnimation
            sequence={[
              "Adding Value Through Code", // "코드에 가치를 더하다"
              3000, // 다 쓰고 대기
              "", // 지우기
              1500, // 지운 후 대기
            ]}
            speed={10}
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="animate-glow rounded-50% absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,transparent_60%)]" />

      <p className="flex flex-col gap-4 text-center text-[var(--color-primary)] sm:text-lg lg:text-lg">
        <span>
          문제 해결과 비즈니스 관점을 바탕으로 서비스의 완성도를 높이는
          프론트엔드 개발자 김장배입니다.
        </span>
        <span>
          사용자와 서비스 모두에 가치를 더하는 프론트엔드 개발자 김장배입니다.
          Next.js 기반 프로젝트에서 검색 노출을 고려한 페이지 구조와 메타데이터
          관리, SEO 요구사항을 반영한 구현을 중심으로 유지보수성과 확장성을
          고려한 프론트엔드 개발을 수행해왔고,
        </span>
        <span>
          검색 의도에 맞는 콘텐츠 구조와 사용자 접근성을 함께 고민하며, 실제
          서비스 배포·운영 과정을 경험해 개발 이후 단계까지 고려하는 방향으로
          일하고 있습니다.
        </span>
        <span>
          기획, 디자인, 운영 등 다양한 직무와의 협업 속에서 반복 업무를 줄이고
          효율적인 작업 환경을 만드는 것을 중요하게 여기며, 팀과 함께 더 나은
          결과를 만드는 개발자로 성장하고자 합니다.
        </span>
      </p>

      <div className="animate-float left-50 absolute bottom-0">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="var(--color-primary)"
          className="stroke-[var(--color-primary)] opacity-70"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
