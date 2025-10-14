import type { WorkData } from "./work-service"

interface RelatedWorksSectionProps {
  relatedWorks: WorkData[]
}

interface ItemProps {
  work: WorkData
}

function Item({ work }: ItemProps) {
  const { title, slug } = work

  return (
    <a href={`/works/${slug}`} className="flex items-center gap-2 py-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{title}</span>
    </a>
  )
}

export function RelatedWorkSection({ relatedWorks }: RelatedWorksSectionProps) {
  return (
    <section className="flex flex-col mt-20">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Read more.
        </span>
        <h2 className="text-lg font-medium mt-2">Another works.</h2>
      </div>

      <ul className="flex flex-col gap-2 mt-6">
        {relatedWorks.map((work, i) => (
          <Item work={work} key={i} />
        ))}
      </ul>
    </section>
  )
}
