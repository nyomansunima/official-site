import { LogGroup } from "./log-group"
import journeysData from "./journeys-data.json"

const logGroups = [...journeysData].reverse()

export function LogSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Changelog.
        </span>
        <h2 className="text-lg font-medium">What's going on?</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        My recent activities, achievements, updates and what i'am built. Also
        the latest updates about my products.
      </p>

      <div className="flex flex-col gap-14 mt-10">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
