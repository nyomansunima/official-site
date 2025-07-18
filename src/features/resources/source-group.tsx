import { SourceItem } from "./source-item"
import type { SourceData } from "./source-item"

export interface SourceGroupData {
  title: string
  list: SourceData[]
}

interface SourceGroupProps {
  group: SourceGroupData
}

export function SourceGroup({ group }: SourceGroupProps) {
  const { title, list } = group

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{title} :</h2>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {list.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </div>
  )
}
