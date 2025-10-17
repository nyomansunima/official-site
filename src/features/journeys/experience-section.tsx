import { ExperienceItem } from "./experience-item";
import experienceData from "./experiences-data.json" with { type: "json" };

const experiences = [...experienceData].reverse();

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Experiences.
        </span>
        <h2 className="mt-2 font-medium text-lg">My careers and journeys.</h2>

        <p className="mt-6 text-pretty leading-7">
          My overall contributions, leading and participants to create and ship
          a good products.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {experiences.map((exp, index) => (
          <ExperienceItem experience={exp} key={index} />
        ))}
      </div>
    </section>
  );
}
