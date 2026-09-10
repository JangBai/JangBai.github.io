import AboutStory from "./AboutStory";
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
      <AboutStory />
    </section>
  );
}
