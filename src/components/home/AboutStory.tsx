import type { CSSProperties } from "react";
import { aboutStoryParagraphs } from "@/data/aboutStory";

export default function AboutStory() {
  return (
    <section className="about-story" aria-label="자기소개">
      {aboutStoryParagraphs.map((paragraph, index) => {
        const lines = paragraph.split("\n");
        const words = lines.flatMap((line) => line.split(" ").filter(Boolean));
        return (
          <div
            className={`story-chapter ${index === 0 ? "story-chapter-lead" : ""}`}
            data-story={index === 0 ? "pinned" : "flow"}
            key={paragraph}
          >
            <div className="story-reading">
              <div className="story-caption" aria-hidden="true">
                <span>0{index + 1} / ABOUT ME</span>
                <span>
                  {
                    [
                      "THE WAY I BUILD",
                      "VALUE THROUGH CODE",
                      "BEYOND DEVELOPMENT",
                      "BETTER TOGETHER",
                    ][index]
                  }
                </span>
              </div>
              <p className="story-copy">
                <span className="sr-only">{paragraph}</span>
                <span aria-hidden="true">
                  {lines.map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line
                        .split(" ")
                        .filter(Boolean)
                        .map((word, wordIndex) => {
                          const revealIndex =
                            lines
                              .slice(0, lineIndex)
                              .flatMap((previousLine) =>
                                previousLine.split(" ").filter(Boolean)
                              ).length + wordIndex;

                          return (
                            <span
                              key={wordIndex}
                              className="story-word"
                              style={
                                {
                                  "--word-index": revealIndex,
                                  "--word-count": words.length,
                                } as CSSProperties
                              }
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                      {lineIndex < lines.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </p>
              <div className="story-rule" aria-hidden="true">
                <span />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
