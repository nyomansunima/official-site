import type { LogItemData } from "./log-item";
import { LogItem } from "./log-item";

export type LogGroupData = {
  title: string;
  list: LogItemData[];
};

type LogGroupProps = {
  group: LogGroupData;
};

export function LogGroup({ group }: LogGroupProps) {
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
