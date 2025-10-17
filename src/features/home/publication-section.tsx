import { RecentItem, storiesData } from "@features/stories";

const filteredContents = storiesData.slice(0, 5);

export function PublicationSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Contents.
        </span>
        <h2 className="mt-2 font-medium text-lg">Read more.</h2>

        <p className="mt-6 text-pretty leading-7">
          Read my newest content, article, video about business, indie hacking,
          web design and another topic in different publication.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {filteredContents.map((st, i) => (
          <RecentItem key={i} recent={st} />
        ))}
      </div>
    </section>
  );
}
