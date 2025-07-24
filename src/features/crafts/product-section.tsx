import { CraftGroup } from "./craft-group"
import crafts from "./crafts-data.json"

export function ProductSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Crafts.
        </span>
        <h2 className="text-lg font-medium">Things as results.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        This is what currently i am building, craft and ship. Including my saas,
        products, business and streams.
      </p>

      <div className="flex flex-col gap-20 mt-10">
        {crafts.map((group, i) => (
          <CraftGroup group={group} key={i} />
        ))}
      </div>
    </div>
  )
}
