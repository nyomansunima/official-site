import { RecentItem, storiesData } from "@features/stories"

const filteredContents = storiesData.slice(0, 3)

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-link tracking-tight">
          Contents.
        </span>
        <h2 className="py-2 text-lg font-medium">Read more.</h2>
      </div>

      <div className="flex flex-col mt-10 gap-2">
        {filteredContents.map((st, i) => (
          <RecentItem recent={st} key={i} />
        ))}
      </div>
    </section>
  )
}
