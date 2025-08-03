import type { WorkData } from "@features/works"
import { WorkItem } from "@features/works"

interface Props {
  works: WorkData[]
}

export function WorkSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Featured works.
        </span>
        <h2 className="text-lg font-medium mt-2">Recent work.</h2>

        <p className="mt-6 text-pretty leading-7">
          See my recent works around design, development, hacking, saas, and my
          business.
        </p>
      </div>

      <div className="flex flex-col mt-10 gap-16">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
