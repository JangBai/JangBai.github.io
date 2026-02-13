export default function Introduce() {
  return (
    <section
      id="introduce"
      className="flex h-screen -translate-y-48 flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col items-center justify-center gap-1 text-[var(--color-primary)]">
        <h2 className="text-6xl font-bold">KIM JANG BAE</h2>
        <p className="text-4xl">Frontend Developer</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center text-2xl text-[var(--color-primary)]">
          문제 해결 중심의 사고와 비즈니스 이해를 바탕으로,
        </span>
        <span className="text-center text-2xl text-[var(--color-primary)]">
          사용자와 서비스 모두에 가치를 더하는 프론트엔드 개발자 김장배입니다.
        </span>
      </div>
    </section>
  );
}
