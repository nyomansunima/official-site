import { parseReadableDate } from "@shared/libs/utils";
import journeysData from "./journeys-data.json" with { type: "json" };

const logGroups = [...journeysData].reverse();

type LogItemData = {
  title: string;
  description: string;
  date: string;
  image?: string;
  url?: string;
};

type LogItemProps = {
  log: LogItemData;
};

type LogGroupData = {
  title: string;
  list: LogItemData[];
};

type LogGroupProps = {
  group: LogGroupData;
};

function LogItem({ log }: LogItemProps) {
  const { title, description, date, image, url } = log;
  const readableDate = parseReadableDate(date);

  return (
    <a className="flex flex-col" href={url || "/"} target="_blank">
      {image !== undefined && (
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

function LogGroup({ group }: LogGroupProps) {
  const { title, list } = group;
  const reorderList = [...list].reverse();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}</h2>

      <div className="flex flex-col gap-16">
        {reorderList.map((log, i) => (
          <LogItem key={i} log={log} />
        ))}
      </div>
    </div>
  );
}

export function LogSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-16">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  );
}
