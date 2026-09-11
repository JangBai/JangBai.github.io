import { sideProjects } from "@/data/sideProjects";
// import useEmblaCarousel from "embla-carousel-react";
// import { useEffect, useState } from "react";
import {
  // RiArrowLeftSLine,
  // RiArrowRightSLine,
  RiShareBoxLine,
} from "react-icons/ri";
import {
  SiPrisma,
  SiRailway,
  SiSocketdotio,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const stackIcons: Record<string, IconType> = {
  prisma: SiPrisma,
  railway: SiRailway,
  socket: SiSocketdotio,
  supabase: SiSupabase,
  vercel: SiVercel,
};

// type ScreenshotSliderProps = {
//   screenshots: NonNullable<(typeof sideProjects)[number]["screenshots"]>;
// };

// function ScreenshotSlider({ screenshots }: ScreenshotSliderProps) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const activeScreenshot = screenshots[activeIndex];

//   useEffect(() => {
//     if (!emblaApi) return;

//     const updateActiveIndex = () => setActiveIndex(emblaApi.selectedScrollSnap());
//     updateActiveIndex();
//     emblaApi.on("select", updateActiveIndex);
//     emblaApi.on("reInit", updateActiveIndex);

//     return () => {
//       emblaApi.off("select", updateActiveIndex);
//       emblaApi.off("reInit", updateActiveIndex);
//     };
//   }, [emblaApi]);

//   return (
//     <section data-reveal="detail" className="mt-6">
//       <div className="mb-2 flex items-center justify-between gap-3">
//         <h4 className="text-sm font-semibold text-black dark:text-white">
//           화면 미리보기
//         </h4>
//         <span className="text-xs text-[var(--color-primary)]">
//           {activeIndex + 1} / {screenshots.length}
//         </span>
//       </div>
//       <div
//         ref={emblaRef}
//         className="cursor-grab overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 active:cursor-grabbing"
//         style={{ touchAction: "pan-y pinch-zoom" }}
//         aria-label="화면 미리보기 슬라이드. 좌우로 드래그하여 화면을 넘길 수 있습니다."
//       >
//         <div className="flex">
//           {screenshots.map((screenshot) => (
//             <div key={screenshot.src} className="min-w-0 flex-[0_0_100%]">
//               <img
//                 src={screenshot.src}
//                 alt={screenshot.alt}
//                 draggable={false}
//                 className="aspect-video w-full select-none object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-3 flex items-center justify-between gap-3">
//         <div className="flex items-center gap-1">
//           <button
//             type="button"
//             onClick={() => emblaApi?.scrollPrev()}
//             aria-label="이전 화면"
//             className="hover-accent rounded-md p-1 text-[var(--color-primary)]"
//           >
//             <RiArrowLeftSLine className="h-5 w-5" />
//           </button>
//           <button
//             type="button"
//             onClick={() => emblaApi?.scrollNext()}
//             aria-label="다음 화면"
//             className="hover-accent rounded-md p-1 text-[var(--color-primary)]"
//           >
//             <RiArrowRightSLine className="h-5 w-5" />
//           </button>
//         </div>
//         <div
//           className="flex items-center gap-1.5"
//           role="tablist"
//           aria-label="화면 미리보기"
//         >
//           {screenshots.map((screenshot, index) => (
//             <button
//               key={screenshot.src}
//               type="button"
//               role="tab"
//               aria-label={`${screenshot.label} 화면 보기`}
//               aria-selected={activeIndex === index}
//               onClick={() => emblaApi?.scrollTo(index)}
//               className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-5 bg-[var(--color-accent-soft)]" : "w-2 bg-white/30 hover:bg-white/60"}`}
//             />
//           ))}
//         </div>
//         <span className="min-w-16 text-right text-xs font-medium text-[var(--color-primary)]">
//           {activeScreenshot.label}
//         </span>
//       </div>
//     </section>
//   );
// }

export default function SideProjectCard() {
  return (
    <>
      {sideProjects.map((project) => (
        <article
          data-scene="project"
          key={project.id}
          className="relative w-full rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6"
        >
          <div
            data-reveal="card-title"
            className="mb-6 flex flex-wrap items-end justify-between gap-2"
          >
            <h3 className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-2xl font-semibold text-transparent dark:from-white dark:to-slate-400">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {project.links?.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-accent flex items-center gap-0.5 rounded-md border border-white/10 bg-black/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  <span>{item.title}</span>
                  <RiShareBoxLine className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <p
            data-reveal="detail"
            className="pb-6 text-sm text-[var(--color-primary)]"
          >
            {project.subTitle}
          </p>

          <ul className="space-y-1 leading-relaxed text-[var(--color-primary)]">
            {project.descriptions.map((description) => (
              <li
                key={description}
                data-reveal="line"
                className="relative pl-3 text-sm before:absolute before:left-0 before:top-[12px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-accent-strong)] dark:before:bg-[var(--color-accent-soft)]"
              >
                {description}
              </li>
            ))}
          </ul>

          {/* {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotSlider screenshots={project.screenshots} />
          )} */}

          {(project.testAccounts || project.testNotice) && (
            <div
              data-reveal="detail"
              className="mt-6 rounded-lg border border-white/10 bg-black/10 p-4 text-sm text-[var(--color-primary)] dark:bg-white/10"
            >
              {project.testAccounts && (
                <>
                  <h4 className="mb-2 font-semibold text-black dark:text-white">
                    Test Account
                  </h4>
                  <ul className="space-y-1 font-mono text-xs">
                    {project.testAccounts.map((account) => (
                      <li key={account.email}>
                        {account.email} / {account.password}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {project.testNotice && (
                <p
                  className={`${project.testAccounts ? "mt-3" : ""} whitespace-pre-line leading-relaxed`}
                >
                  {project.testNotice}
                </p>
              )}
            </div>
          )}

          <div
            data-reveal="stacks"
            className="mt-6 flex flex-col flex-wrap items-start gap-2 text-xs"
          >
            <span className="text-[var(--color-primary)]">Stack</span>
            <div className="flex flex-wrap items-center gap-2">
              {project.stacks.map((stack) => {
                const Icon = stackIcons[stack.icon];

                return (
                  <span
                    key={stack.name}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1 text-[var(--color-primary)] dark:bg-white/25"
                  >
                    {Icon ? (
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <img
                        src={stack.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    )}
                    {stack.name}
                  </span>
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
