import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-6"
    >
      <div className="w-full text-[var(--color-primary)]">
        <h2 className="pb-16 text-center text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Experience
        </h2>

        <div className="relative flex flex-col gap-16">
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
