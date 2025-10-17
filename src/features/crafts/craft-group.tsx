import type { CraftData } from "./craft-item";
import { CraftItem } from "./craft-item";

export type CraftGroupData = {
  title: string;
  list: CraftData[];
};

type CraftGroupProps = {
  group: CraftGroupData;
};

export function CraftGroup({ group }: CraftGroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{title} :</h2>

      <div className="flex flex-col gap-1">
        {list.map((craft, index) => (
          <CraftItem craft={craft} key={index} />
        ))}
      </div>
    </div>
  );
}
