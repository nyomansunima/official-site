import { RecentItem } from "./recent-item"
import storiesData from "./stories-data.json"

const recents = [...storiesData].reverse()

export function RecentlySection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Recents.
        </span>
        <h2 className="text-lg font-medium">Just now.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        My recents updates, see my articles, video, podcasts and my recent
        publications about anything.
      </p>

      <div className="flex flex-col gap-2 mt-10">
        {recents.map((recent, i) => (
          <RecentItem recent={recent} key={i} />
        ))}
      </div>
    </section>
  )
}
