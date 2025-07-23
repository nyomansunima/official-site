import type { WorkData } from "@features/works"
import { WorkItem } from "@features/works"

interface Props {
  works: WorkData[]
}

export function WorkSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-link tracking-tight">
          Featured works.
        </span>
        <h2 className="py-2 text-lg font-medium">Recent work.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        See my recent works around design, development, hacking, saas, and my
        business.
      </p>

      <div className="flex mt-10 w-full">
        <div className="grid grid-cols-1 gap-2 w-full">
          {works.map((work, i) => (
            <WorkItem work={work} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
