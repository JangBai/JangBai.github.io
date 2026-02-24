import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10"
    >
      <h2 className="pb-16 text-3xl font-bold text-[var(--color-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
        Projects
      </h2>
      <div className="relative w-full space-y-10">
        <ProjectCard />
      </div>
    </section>
  );
}
