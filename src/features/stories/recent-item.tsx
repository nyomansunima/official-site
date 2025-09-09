import { parseReadableDate } from "@shared/libs"

export interface RecentData {
  title: string
  timeline: string
  url: string
}

interface RecentItemProps {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps) {
  const { title, timeline, url } = recent
  const parsedDate = parseReadableDate(timeline)

  return (
    <a href={url} target="_blank" className="flex items-center py-2">
      <div className="flex items-center gap-2 grow">
        <i className="fi fi-sr-bullet text-sm text-foreground/40" />
        <span className="text-pretty line-clamp-1">{title}</span>
      </div>

      <span className="text-sm text-foreground/40">{parsedDate}</span>
    </a>
  )
}
