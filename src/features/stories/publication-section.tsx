import publications from "./publication-data.json"
import { PublicationItem } from "./publication-item"

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Publications.
        </span>
        <h2 className="text-lg font-medium mt-2">Where's the stories?</h2>

        <p className="mt-6 text-pretty leading-7">
          My favorite place to share and publicly updates about news, tips and
          tricks, blogs and newsletter. Check this out.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-10">
        {publications.map((pub, index) => (
          <PublicationItem publication={pub} key={index} />
        ))}
      </div>
    </section>
  )
}
