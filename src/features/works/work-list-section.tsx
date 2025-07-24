import { WorkItem } from "./work-item"
import type { WorkData } from "./work-service"

interface Props {
  works: WorkData[]
}

export function WorksListSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Works.
        </span>
        <h2 className="text-lg font-medium">Top built & hacking.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        I’ve developed commercial projects as well as hobby projects. All
        projects are included (business, works, case studies).
      </p>

      <div className="flex flex-col gap-3 mt-10">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
