import { PublicationItem } from "./publication-item"
import publications from "./publication-data.json"

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Publications.
        </span>
        <h2 className="text-lg font-medium">Where's the stories?</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        My favorite place to share and publicly updates about news, tips and
        tricks, blogs and newsletter. Check this out.
      </p>

      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-2 w-full mt-10">
        {publications.map((pub, index) => (
          <PublicationItem publication={pub} key={index} />
        ))}
      </div>
    </section>
  )
}
