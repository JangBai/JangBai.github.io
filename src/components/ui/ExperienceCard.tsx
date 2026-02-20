import { experienceData } from "@/data/experience";

export default function ExperienceCard() {
  let lineHeight = "h-[120%]";

  return (
    <div className="relative space-y-20">
      {experienceData.map((item, index) => {
        if (index === experienceData.length - 1) {
          lineHeight = "h-full";
        }

        return (
          <div key={item.id} className="relative">
            <div className="absolute left-1.5 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary)]" />
            <div
              className={`absolute left-[0.35rem] top-4 ${lineHeight} w-0.5 bg-[var(--color-primary)]`}
            />

            {/* content */}
            <div className="w-full pl-8">
              <div className="mb-10">
                <div className="flex flex-wrap items-end gap-3">
                  <div className="text-3xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-lg opacity-70">{item.position}</p>
                </div>
                <p className="mt-2 text-sm opacity-50">{item.period}</p>
              </div>

              {item.sections.map((section, idx) => (
                <div key={idx} className="mb-8">
                  <h4 className="mb-3 text-xl font-semibold text-[var(--color-accent-strong)] dark:text-[var(--color-accent-soft)]">
                    {section.title}
                  </h4>
                  <ul className="space-y-1 text-lg opacity-80">
                    {section.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]"></span>
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
