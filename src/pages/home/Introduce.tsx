export default function Introduce() {
  return (
    <section
      id="introduce"
      className="flex h-screen -translate-y-32 flex-col items-center justify-center gap-6 max-sm:h-[60vh] sm:-translate-y-56 sm:gap-12"
    >
      <div className="flex flex-col items-center justify-center gap-1 text-[var(--color-primary)]">
        <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl">
          KIM JANG BAE
        </h2>
        <p className="text-xl sm:text-3xl lg:text-4xl">Frontend Developer</p>
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <span className="text-center text-base text-[var(--color-primary)] sm:text-xl lg:text-2xl">
          {/* 문제 해결 중심의 사고와 비즈니스 이해를 바탕으로, */}
          Based on problem-solving thinking and business understanding
        </span>
        <span className="text-center text-base text-[var(--color-primary)] sm:text-xl lg:text-2xl">
          {/* 사용자와 서비스 모두에 가치를 더하는 프론트엔드 개발자 김장배입니다. */}
          This is Kim Jang-bae, a front-end developer who adds value to both
          users and services.
        </span>
      </div>
    </section>
  );
}
