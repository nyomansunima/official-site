import * as React from "react"
import { SourceGroup, SourceGroupData } from "./source-group"
import resourcesData from "./resources-data.json"

const resources = resourcesData as SourceGroupData[]

export function SourcesSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono tracking-tight">
          Resources.
        </span>
        <h2 className="text-lg font-medium">Find goodies & things.</h2>
      </div>

      <div className="flex flex-col gap-20">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
