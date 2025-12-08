import { parseReadableDate } from "@shared/libs/utils";
import speaksData from "./speak-data.json" with { type: "json" };

const speaks = [...speaksData].reverse();

type SpeakData = {
  title: string;
  timeline: string;
  url: string;
};

type SpeakItemProps = {
  item: SpeakData;
};

function SpeakItem({ item }: SpeakItemProps) {
  const { title, timeline, url } = item;
  const parsedDate = parseReadableDate(timeline);

  return (
    <a
      className="flex tablet:flex-row flex-col tablet:items-center py-2"
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

      <span className="ml-5 tablet:ml-0 text-foreground/40 text-sm">
        {parsedDate}
      </span>
    </a>
  );
}

function EmptySpeak() {
  return (
    <p className="flex items-center gap-2">
      <svg
        className="fill-foreground/40"
        height="10"
        viewBox="0 0 24 24"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
      </svg>

      <span>We're cooking</span>
    </p>
  );
}

export function SpeakSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Speaks:</h2>
      <div className="flex flex-col gap-1">
        {speaks.length > 0 ? (
          speaks.map((item, i) => <SpeakItem item={item} key={i} />)
        ) : (
          <EmptySpeak />
        )}
      </div>
    </section>
  );
}
