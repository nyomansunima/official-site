import { CraftGroup } from "./craft-group";
import crafts from "./crafts-data.json" with { type: "json" };

export function ProductSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Crafts.
        </span>
        <h2 className="mt-2 font-medium text-lg">Things as results.</h2>

        <p className="mt-6 text-pretty leading-7">
          This is what currently i am building, craft and ship. Including my
          saas, products, business and streams.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {crafts.map((group, i) => (
          <CraftGroup group={group} key={i} />
        ))}
      </div>
    </div>
  );
}
