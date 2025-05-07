import { CraftData, CraftItem } from "./craft-item"
import domainData from "./domain-data.json"

const domains = domainData as CraftData[]

export function DomainSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono tracking-tight">
          Domains.
        </span>
        <h2 className="text-lg font-medium">Place & teams to works.</h2>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3 mt-10">
        {domains.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
