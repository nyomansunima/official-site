import { CraftItem, type CraftData } from "./craft-item"

export interface CraftGroupData {
  title: string
  list: CraftData[]
}

interface CraftGroupProps {
  group: CraftGroupData
}

export function CraftGroup({ group }: CraftGroupProps) {
  const { title, list } = group

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{title} :</h2>

      <div className="flex flex-col gap-1">
        {list.map((craft, index) => (
          <CraftItem craft={craft} key={index} />
        ))}
      </div>
    </div>
  )
}
