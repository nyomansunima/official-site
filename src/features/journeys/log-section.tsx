import journeysData from "./journeys-data.json" with { type: "json" };
import { LogGroup } from "./log-group";

const logGroups = [...journeysData].reverse();

export function LogSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Changelog.
        </span>
        <h2 className="mt-2 font-medium text-lg">What's going on?</h2>

        <p className="mt-6 text-pretty leading-7">
          My recent activities, achievements, updates and what i'am built. Also
          the latest updates about my products.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  );
}
