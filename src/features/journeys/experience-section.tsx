import { ExperienceItem, ExperienceItemData } from "./experience-item"
import experienceData from "./experiences-data.json"

const experiences = [...experienceData].reverse() as ExperienceItemData[]

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-foreground/60 font-mono tracking-tight">
            Journeys.
          </span>
          <h2 className="text-lg font-medium">What's going on?</h2>
        </div>

        <div className="flex bg-surface p-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group/parent">
          <div className="flex flex-col h-full w-full gap-3 p-5 border-2 border-border border-dashed rounded-xl transition-all duration-300 group-hover/parent:border-link">
            {experiences.map((exp, index) => (
              <ExperienceItem experience={exp} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
