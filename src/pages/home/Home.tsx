import Experience from "./Experience";
import Projects from "./Projects";
import Introduce from "./Introduce";
// import About from "./About";

export default function Home() {
  return (
    <>
      <Introduce />
      {/* 일단 보류 -> 따로 분리할지 결정되면 다시 추가 */}
      {/* <About /> */}
      <Experience />
      <Projects />
    </>
  );
}
