import { CraftGroup } from "./craft-group"
import crafts from "./crafts-data.json"

export function ProductSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Crafts.
        </span>
        <h2 className="text-lg font-medium mt-2">Things as results.</h2>

        <p className="mt-6 text-pretty leading-7">
          This is what currently i am building, craft and ship. Including my
          saas, products, business and streams.
        </p>
      </div>

      <div className="flex flex-col gap-16 mt-10">
        {crafts.map((group, i) => (
          <CraftGroup group={group} key={i} />
        ))}
      </div>
    </div>
  )
}
