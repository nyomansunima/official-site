import publications from "./publication-data.json" with { type: "json" };
import { PublicationItem } from "./publication-item";

export function PublicationSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Publications :</h2>

      <div className="flex flex-col gap-1">
        {publications.map((pub, index) => (
          <PublicationItem key={index} publication={pub} />
        ))}
      </div>
    </section>
  );
}
