import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Introduce from "@/components/home/Introduce";
import Connect from "@/components/home/Connect";
import { useScrollMotion } from "@/hooks/useScrollMotion";

export default function Home() {
  const motionRef = useScrollMotion();
  return (
    <div ref={motionRef}>
      <Introduce />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Experience />
        <Projects />
        <Connect />
      </div>
    </div>
  );
}
