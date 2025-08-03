import { parseReadableDate } from "@shared/libs"
import { Link } from "react-router"

export interface LogItemData {
  title: string
  description: string
  date: string
  image?: string
  url?: string
}

interface Props {
  log: LogItemData
}

export function LogItem({ log }: Props) {
  const { title, description, date, image, url } = log
  const readableDate = parseReadableDate(date)

  return (
    <Link to={url || "/"} target="_blank" className="flex flex-col">
      {image && (
        <div className="mb-6 relative w-full h-[200px] tablet:h-[360px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-full w-full"
          />
        </div>
      )}

      <div className="flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{readableDate}</span>
      </div>

      <p className="mt-3 text-pretty leading-7">{description}</p>
    </Link>
  )
}
