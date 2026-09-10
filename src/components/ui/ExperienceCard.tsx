import { experienceData } from "@/data/experience";

export default function ExperienceCard() {
  return (
    <div className="relative space-y-20">
      {experienceData.map((item) => {
        return (
          <div
            key={item.id}
            className="experience-scene"
            data-scene="experience"
          >
            {/* content */}
            <div className="w-full text-center">
              <div className="mb-10" data-reveal="company">
                <div className="flex flex-wrap items-end justify-center gap-3">
                  <div className="text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
                      {item.company}
                    </span>
                  </div>
                </div>
                <div className="mt-2 space-y-1 text-sm opacity-50">
                  {item.period.map((period, idx) => (
                    <p key={idx}>
                      {period.duration} | {period.team} - {item.position}
                    </p>
                  ))}
                </div>
              </div>

              {item.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="experience-detail mb-8"
                  data-reveal="detail"
                >
                  <h4
                    data-reveal="subheading"
                    className="mb-3 text-base font-semibold tracking-wide text-black dark:text-white sm:text-lg"
                  >
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-sm leading-relaxed opacity-80 sm:text-base">
                    {section.descriptions.map((desc, i) => (
                      <li
                        key={i}
                        data-reveal="line"
                        className="experience-line"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
