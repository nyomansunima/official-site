import * as React from 'react'
import Link from 'next/link'

export interface RecentData {
  title: string
  timeline: string
  url: string
}

interface RecentItemProps {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps): React.ReactElement {
  const { title, timeline, url } = recent

  return (
    <Link
      href={url}
      target="_blank"
      className="
        flex items-start tablet:items-center flex-col tablet:flex-row px-4 py-3 gap-2 rounded-2xl bg-surface border border-border group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-2 flex-grow">
        <i className="fi fi-rr-circle-small" />

        <h3 className="text-sm font-medium text-pretty !leading-tight line-clamp-1 flex-grow">
          {title}
        </h3>
      </div>
      <div className="flex gap-2 text-sm text-foreground/50">
        <span className="transition-all duration-300 group-hover:text-foreground">
          {timeline}
        </span>
      </div>
    </Link>
  )
}
