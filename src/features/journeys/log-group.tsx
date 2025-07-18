import { LogItem } from "./log-item"
import type { LogItemData } from "./log-item"

export interface LogGroupData {
  title: string
  list: LogItemData[]
}

interface LogGroupProps {
  group: LogGroupData
}

export function LogGroup({ group }: LogGroupProps) {
  const { title, list } = group
  const reorderList = [...list].reverse()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center w-full gap-4">
        <h2 className="font-medium">{title}</h2>
      </div>

      <div className="flex flex-col gap-2 tablet:gap-3">
        {reorderList.map((log, i) => (
          <LogItem log={log} key={i} />
        ))}
      </div>
    </div>
  )
}
