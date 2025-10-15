import type { WorkData } from "./work-service"
import { WorkItem } from "./work-item"

interface Props {
  works: WorkData[]
}

export function WorksListSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Works.
        </span>
        <h2 className="text-lg font-medium mt-2">Top built & hacking.</h2>

        <p className="mt-6 text-pretty leading-7">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (business, works & case studies).
        </p>
      </div>

      <div className="flex flex-col gap-16 mt-10">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
