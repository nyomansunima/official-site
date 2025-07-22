import { ExperienceItem } from "./experience-item"
import experienceData from "./experiences-data.json"

const experiences = [...experienceData].reverse()

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-link font-mono tracking-tight">
            Journeys.
          </span>
          <h2 className="text-lg font-medium">What's going on?</h2>
        </div>

        <div className="flex flex-col gap-3 bg-surface rounded-2xl p-5 border-2 border-border border-dashed transition-all duration-300 hover:border-link hover:-translate-y-1 cursor-pointer">
          {experiences.map((exp, index) => (
            <ExperienceItem experience={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
