import publications from "./publication-data.json" with { type: "json" };
import { PublicationItem } from "./publication-item";

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Publications.
        </span>
        <h2 className="mt-2 font-medium text-lg">Where's the stories?</h2>

        <p className="mt-6 text-pretty leading-7">
          My favorite place to share and publicly updates about news, tips and
          tricks, blogs and newsletter. Check this out.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {publications.map((pub, index) => (
          <PublicationItem key={index} publication={pub} />
        ))}
      </div>
    </section>
  );
}
