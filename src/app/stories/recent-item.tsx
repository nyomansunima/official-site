import * as React from 'react'
import Link from 'next/link'

export type RecentData = {
  title: string
  timeline: string
  url: string
}

type RecentItemProps = {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps): React.ReactElement {
  const { title, timeline, url } = recent

  return (
    <Link
      href={url}
      target="_blank"
      className="
        flex items-start tablet:items-center flex-col tablet:flex-row px-3 py-3 gap-2 rounded-2xl bg-surface group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-2 grow">
        <i className="fi fi-br-circle-small text-foreground/60" />

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
