import { Link } from "react-router"

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

  return (
    <Link
      to={url}
      target="_blank"
      className="flex items-start tablet:items-center flex-col tablet:flex-row border-2 border-border border-dashed p-3 rounded-2xl transition-all duration-300 hover:border-link hover:-translate-y-1"
    >
      <div className="flex items-center gap-2 grow">
        <i className="fi fi-sc-check-circle text-sm" />

        <h3 className="text-sm font-medium text-pretty leading-tight! line-clamp-1 grow">
          {title}
        </h3>
      </div>
      <div className="flex gap-2 text-sm text-foreground/60">
        <span className="transition-all duration-300">{timeline}</span>
      </div>
    </Link>
  )
}
