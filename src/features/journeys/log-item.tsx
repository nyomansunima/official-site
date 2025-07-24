import { parseReadableDate } from "@shared/libs"
import { Link } from "react-router"

export interface LogItemData {
  title: string
  description: string
  date: string
  category: string
  image?: string
  url?: string
}

interface Props {
  log: LogItemData
}

export function LogItem({ log }: Props) {
  const { title, description, date, category, image, url } = log

  const readableDate = parseReadableDate(date)

  return (
    <Link
      to={url || "/"}
      target="_blank"
      className="flex flex-col bg-surface p-3 rounded-2xl border-2 border-border border-dashed transition-all duration-300 hover:-translate-y-1 hover:border-link"
    >
      <div className="flex flex-col tablet:flex-row gap-2 tablet:items-center">
        <h3 className="flex items-center gap-1 font-medium text-sm leading-tight! text-pretty grow flex-1">
          <i className="fi fi-sr-bullet" />
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
        <span className="flex items-center gap-1 bg-secondary text-secondary-foreground transition-all duration-300 rounded-full px-3 py-1 hover:-translate-y-1 text-sm">
          {category}
        </span>
      </div>

      {image && (
        <div className="flex cursor-pointer mt-6">
          <picture className="relative w-full h-[200px] tablet:h-[360px] overflow-hidden rounded-xl not-prose">
            <img
              src={image}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-300 hover:scale-105 not-prose h-full w-full"
            />
          </picture>
        </div>
      )}
    </Link>
  )
}
