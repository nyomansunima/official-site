import { RecentItem } from "./recent-item";
import storiesData from "./stories-data.json" with { type: "json" };

const recents = [...storiesData].reverse();

export function RecentlySection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Updates :</h2>
      <div className="flex flex-col gap-1">
        {recents.map((recent, i) => (
          <RecentItem key={i} recent={recent} />
        ))}
      </div>
    </section>
  );
}
