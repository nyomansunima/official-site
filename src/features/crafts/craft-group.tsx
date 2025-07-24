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

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {list.map((craft, index) => (
          <CraftItem craft={craft} key={index} />
        ))}
      </div>
    </div>
  )
}
