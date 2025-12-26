import { parseReadableDate } from "@shared/libs/utils";
import writingData from "./writing-data.json" with { type: "json" };

const writings = [...writingData].reverse();

interface WritingData {
  title: string;
  timeline: string;
  url: string;
}

interface WritingItemProps {
  item: WritingData;
}

function WritingItem({ item }: WritingItemProps) {
  const { title, timeline, url } = item;
  const parsedDate = parseReadableDate(timeline);

  return (
    <a
      className="flex flex-col py-2 md:flex-row md:items-center"
      href={url}
      target="_blank"
    >
      <div className="flex grow items-center gap-2">
        <svg
          className="fill-foreground/40"
          height="10"
          viewBox="0 0 24 24"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
        </svg>
        <span className="line-clamp-1 text-pretty">{title}</span>
      </div>

      <span className="ml-5 text-foreground/40 text-sm md:ml-0">
        {parsedDate}
      </span>
    </a>
  );
}

export function WritingSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Writings:</h2>
      <div className="flex flex-col gap-1">
        {writings.map((item, i) => (
          <WritingItem item={item} key={i} />
        ))}
      </div>
    </section>
  );
}
