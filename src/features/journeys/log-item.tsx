import { parseReadableDate } from "@shared/libs/utils";

export type LogItemData = {
  title: string;
  description: string;
  date: string;
  image?: string;
  url?: string;
};

type Props = {
  log: LogItemData;
};

export function LogItem({ log }: Props) {
  const { title, description, date, image, url } = log;
  const readableDate = parseReadableDate(date);

  return (
    <a className="flex flex-col" href={url || "/"} target="_blank">
      {image && (
        <div className="relative mb-6 h-[200px] tablet:h-[360px] w-full overflow-hidden rounded-2xl">
          <img
            alt={title}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={image}
          />
        </div>
      )}

      <div className="flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{readableDate}</span>
      </div>

      <p className="mt-3 text-pretty leading-7">{description}</p>
    </a>
  );
}
