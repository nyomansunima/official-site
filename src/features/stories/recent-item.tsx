import { Link } from "react-router"

export type RecentData = {
  title: string
  timeline: string
  url: string
}

type RecentItemProps = {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps) {
  const { title, timeline, url } = recent

  return (
    <Link
      to={url}
      target="_blank"
      className="
        flex p-1 rounded-2xl group transition-all duration-300 hover:-translate-y-1 bg-surface group"
    >
      <div className="flex items-start tablet:items-center flex-col tablet:flex-row border-2 border-border border-dashed p-3 rounded-xl h-full w-full transition-all duration-300 group-hover:border-link">
        <div className="flex items-center gap-2 grow">
          <i className="fi fi-ss-circle-small text-foreground/60 group-hover:text-link" />

          <h3 className="text-sm font-medium text-pretty leading-tight! line-clamp-1 grow">
            {title}
          </h3>
        </div>
        <div className="flex gap-2 text-sm text-foreground/60">
          <span className="transition-all duration-300 group-hover:text-link">
            {timeline}
          </span>
        </div>
      </div>
    </Link>
  )
}
