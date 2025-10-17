import { RecentItem } from "./recent-item";
import storiesData from "./stories-data.json" with { type: "json" };

const recents = [...storiesData].reverse();

export function RecentlySection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Recents.
        </span>
        <h2 className="mt-2 font-medium text-lg">Just now.</h2>

        <p className="mt-6 text-pretty leading-7">
          My recents updates, see my articles, video, podcasts and my recent
          publications about anything.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {recents.map((recent, i) => (
          <RecentItem key={i} recent={recent} />
        ))}
      </div>
    </section>
  );
}
