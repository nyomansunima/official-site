import journeysData from "./journeys-data.json" with { type: "json" };
import { LogGroup } from "./log-group";

const logGroups = [...journeysData].reverse();

export function LogSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-16">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  );
}
