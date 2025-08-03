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

      <div className="flex flex-col gap-1">
        {list.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </div>
  )
}
