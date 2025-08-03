import { ExperienceItem } from "./experience-item"
import experienceData from "./experiences-data.json"

const experiences = [...experienceData].reverse()

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Experiences.
        </span>
        <h2 className="text-lg font-medium mt-2">My careers and journeys.</h2>

        <p className="mt-6 text-pretty leading-7">
          My overall contributions, leading and participants to create and ship
          a good products.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-10">
        {experiences.map((exp, index) => (
          <ExperienceItem experience={exp} key={index} />
        ))}
      </div>
    </section>
  )
}
