import Image from "next/image"
import Link from "next/link"
import { parseReadableDate } from "@shared/utils"

export type LogItemData = {
  title: string
  description: string
  date: string
  category: string
  image?: string
  url?: string
}

type LogItemProps = {
  log: LogItemData
}

export function LogItem({ log }: LogItemProps) {
  const { title, description, date, category, image, url } = log

  const readableDate = parseReadableDate(date)

  return (
    <div className="flex bg-surface p-2 rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col border-2 border-border border-dashed rounded-xl p-3 h-full w-full transition-all duration-300 group-hover:border-link">
        <div className="flex flex-col tablet:flex-row gap-2 tablet:items-center">
          <h3 className="flex items-center gap-2 font-medium text-sm leading-tight! text-pretty grow flex-1">
            <i className="fi fi-br-circle-small text-foreground/60" />
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-foreground/60 text-sm transition-all duration-300">
              {readableDate}
            </span>
          </div>
        </div>

        <p className="text-sm mt-3 text-foreground/60 text-pretty leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-2 mt-4">
          <span className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 pl-2! py-1 hover:-translate-y-1 text-sm">
            <i className="fi fi-rr-circle-dashed text-xs" />
            {category}
          </span>

          {url && (
            <Link
              href={url}
              target="_blank"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 py-1 hover:-translate-y-1 text-sm"
            >
              <i className="fi fi-rr-broken-chain-link-wrong" /> See detail
            </Link>
          )}
        </div>

        {image && (
          <div className="flex rounded-2xl p-1 border border-border bg-surface cursor-pointer mt-6">
            <picture className="relative w-full h-[180px] tablet:h-[300px] overflow-hidden rounded-xl not-prose">
              <Image
                src={image}
                alt={title}
                fill
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-300 hover:scale-105 not-prose"
              />
            </picture>
          </div>
        )}
      </div>
    </div>
  )
}
