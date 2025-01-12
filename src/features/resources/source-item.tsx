'use client'

import Link from 'next/link'
import * as React from 'react'

export type SourceData = {
  title: string
  description: string
  url: string
}

type SourceItemProps = {
  source: SourceData
}

export function SourceItem({ source }: SourceItemProps): React.ReactElement {
  const { title, description, url } = source

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col bg-surface border border-border p-3 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <div className="flex items-center gap-2">
        <i className="fi fi-rr-circle-small" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm text-foreground/60 mt-3 line-clamp-2">
        {description}
      </p>
      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
