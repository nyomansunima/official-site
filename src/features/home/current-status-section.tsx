import * as React from "react"
import { StatusData, StatusItem } from "./status-item"
import jsonData from "./status-data.json"

const statuses = jsonData as StatusData[]

export function CurrentStatusSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col leading-7! text-pretty">
        <span className="text-sm font-mono text-foreground/60 tracking-tight">
          Progress & updates.
        </span>
        <h2 className="py-2 text-lg font-medium">What's going on?</h2>
      </div>

      <p className="mt-6 text-pretty leading-7 text-foreground/60">
        Currently working on cool projects and build something that make me
        exciting. That's including saas, products or services.
      </p>

      <ul className="flex flex-col mt-6 gap-3">
        {statuses.map((status, i) => (
          <StatusItem key={i} status={status} />
        ))}
      </ul>
    </section>
  )
}
