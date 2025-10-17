import { parseReadableDate } from "@shared/libs";

export type RecentData = {
  title: string;
  timeline: string;
  url: string;
};

type RecentItemProps = {
  recent: RecentData;
};

export function RecentItem({ recent }: RecentItemProps) {
  const { title, timeline, url } = recent;
  const parsedDate = parseReadableDate(timeline);

  return (
    <a className="flex items-center py-2" href={url} target="_blank">
      <div className="flex grow items-center gap-2">
        <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
        <span className="line-clamp-1 text-pretty">{title}</span>
      </div>

      <span className="text-foreground/40 text-sm">{parsedDate}</span>
    </a>
  );
}
