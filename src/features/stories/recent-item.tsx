import Link from "next/link"

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
      href={url}
      target="_blank"
      className="
        flex items-start tablet:items-center flex-col bg-surface tablet:flex-row p-1 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex gap-2 h-full w-full border-2 border-border border-dashed rounded-xl transition-all duration-300 group-hover:border-link p-3">
        <div className="flex items-center gap-2 grow">
          <i className="fi fi-br-circle-small text-foreground/60" />

          <h3 className="text-sm font-medium text-pretty leading-tight! line-clamp-1 grow">
            {title}
          </h3>
        </div>
        <div className="flex gap-2 text-sm text-foreground/60">
          <span className="transition-all duration-300">{timeline}</span>
        </div>
      </div>
    </Link>
  )
}
