import { ExperienceItem } from "./experience-item";
import experienceData from "./experiences-data.json" with { type: "json" };

const experiences = [...experienceData].reverse();

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Experiences :</h2>

      <div className="flex flex-col gap-1">
        {experiences.map((exp, index) => (
          <ExperienceItem experience={exp} key={index} />
        ))}
      </div>
    </section>
  );
}
