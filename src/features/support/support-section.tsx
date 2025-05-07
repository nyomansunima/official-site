import * as React from "react"
import { SupportData, SupportItem } from "./support-item"
import data from "./support-data.json"

const supports = data as SupportData[]

export function SupportSection() {
  return (
    <section className="flex">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-foreground/60 font-mono tracking-tight">
            Support.
          </span>
          <h2 className="text-lg font-medium">Help me out.</h2>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
          {supports.map((support, index) => (
            <SupportItem data={support} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
