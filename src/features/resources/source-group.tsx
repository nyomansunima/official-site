import type { SourceData } from "./source-item";
import { SourceItem } from "./source-item";

export type SourceGroupData = {
  title: string;
  list: SourceData[];
};

type SourceGroupProps = {
  group: SourceGroupData;
};

export function SourceGroup({ group }: SourceGroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{title} :</h2>

      <div className="flex flex-col gap-1">
        {list.map((sou, index) => (
          <SourceItem key={index} source={sou} />
        ))}
      </div>
    </div>
  );
}
