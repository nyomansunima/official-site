import { RecentItem, storiesData } from "@features/stories"

const filteredContents = storiesData.slice(0, 5)

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Contents.
        </span>
        <h2 className="text-lg font-medium mt-2">Read more.</h2>

        <p className="mt-6 text-pretty leading-7">
          Read my newest content, article, video about business, indie hacking,
          web design and another topic in different publication.
        </p>
      </div>

      <div className="flex flex-col mt-10 gap-1">
        {filteredContents.map((st, i) => (
          <RecentItem recent={st} key={i} />
        ))}
      </div>
    </section>
  )
}
