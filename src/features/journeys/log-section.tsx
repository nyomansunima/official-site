import { LogGroup } from "./log-group"
import journeysData from "./journeys-data.json"

const logGroups = [...journeysData].reverse()

export function LogSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Changelog.
        </span>
        <h2 className="text-lg font-medium mt-2">What's going on?</h2>

        <p className="mt-6 text-pretty leading-7">
          My recent activities, achievements, updates and what i'am built. Also
          the latest updates about my products.
        </p>
      </div>

      <div className="flex flex-col gap-16 mt-10">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
