import { parseReadableDate } from "@shared/libs/utils";
import logsData from "./logs-data.json" with { type: "json" };

const logs = [...logsData].reverse();

interface LogItemData {
  title: string;
  description: string;
  date: string;
  image?: string;
  url?: string;
}

interface LogItemProps {
  log: LogItemData;
}

interface LogGroupData {
  title: string;
  list: LogItemData[];
}

interface LogGroupProps {
  group: LogGroupData;
}

function LogItem({ log }: LogItemProps) {
  const { title, description, date, image, url } = log;
  const readableDate = parseReadableDate(date);

  return (
    <a className="flex flex-col" href={url || "/"} target="_blank">
      {image !== undefined && (
        <img
          alt={title}
          className="mb-6 h-70 w-full overflow-hidden rounded-xl object-cover sm:h-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
        />
      )}

      <div className="flex items-center gap-4 leading-none">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{readableDate}</span>
      </div>

      <p className="mt-3 text-pretty text-foreground/80 leading-relaxed">
        {description}
      </p>
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
        {logs.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  );
}
