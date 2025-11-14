import { CraftGroup } from "./craft-group";
import crafts from "./crafts-data.json" with { type: "json" };

export function ProductSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-16">
        {crafts.map((group, i) => (
          <CraftGroup group={group} key={i} />
        ))}
      </div>
    </div>
  );
}
