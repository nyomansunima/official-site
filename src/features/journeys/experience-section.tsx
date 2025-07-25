import { ExperienceItem } from "./experience-item"
import experienceData from "./experiences-data.json"

const experiences = [...experienceData].reverse()

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-link font-mono tracking-tight">
            Experiences.
          </span>
          <h2 className="text-lg font-medium">My careers and journeys.</h2>
        </div>

        <p className="mt-6 text-pretty leading-7">
          My overall contributions, leading and participants to create and ship
          a good products.
        </p>

        <div className="flex flex-col gap-3 mt-10 bg-surface rounded-2xl p-5 border-2 border-border border-dashed transition-all duration-300 hover:border-link cursor-pointer">
          {experiences.map((exp, index) => (
            <ExperienceItem experience={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
