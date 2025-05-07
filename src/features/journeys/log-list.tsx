import * as React from "react"
import { LogGroup, LogGroupData } from "./log-group"
import journeysData from "./journeys-data.json"

const logGroups = [...journeysData].reverse() as LogGroupData[]

export function LogListSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-14">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
