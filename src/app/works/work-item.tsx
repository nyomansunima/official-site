import Image from 'next/image'
import * as React from 'react'
import { mergeClass, parseReadableDate } from '@shared/utils'
import Link from 'next/link'
import { WorkData } from './work-service'

type WorkItemProps = {
  work: WorkData
}

export function WorkItem({ work }: WorkItemProps) {
  const { slug, title, description, image, date, type, category, status } = work

  const readableTimeline = parseReadableDate(date)
  const link = `/works/${slug}`

  return (
    <Link
      href={link}
      className={mergeClass(
        'flex group rounded-2xl bg-surface p-1 transition-all duration-300 hover:-translate-y-1 relative',
      )}
    >
      <div className="flex flex-col p-3 border-2 border-border border-dashed rounded-xl">
        <div className="flex flex-col tablet:flex-row tablet:items-center gap-2 justify-between">
          <h3 className="flex items-center gap-2 text-sm font-medium flex-1 leading-tight!">
            <i className="fi fi-br-circle-small text-foreground/60" />
            {title}
          </h3>

          <span className="text-sm text-foreground/60">{readableTimeline}</span>
        </div>

        <p className="text-foreground/60 text-sm line-clamp-2 text-pretty mt-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 pl-2! py-1 hover:-translate-y-1 text-sm">
            <i className="fi fi-rr-circle-dashed text-xs" />
            {status}
          </span>

          <span className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 pl-2! py-1 hover:-translate-y-1 text-sm">
            <i className="fi fi-rr-circle-dashed text-xs" />
            {type}
          </span>

          <span className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 pl-2! py-1 hover:-translate-y-1 text-sm">
            <i className="fi fi-rr-circle-dashed text-xs" />
            {category}
          </span>
        </div>

        <div className="flex w-full mt-6">
          <picture className="relative overflow-hidden w-full h-[180px] tablet:h-[300px] rounded-xl">
            <Image
              src={image}
              alt={title}
              className="object-cover transition-all duration-300 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 2048px, 100vw"
            />
          </picture>
        </div>
      </div>
    </Link>
  )
}
