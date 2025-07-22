import type { WorkData } from "./work-service"
import { mergeClass, parseReadableDate } from "@shared/libs"
import { Link } from "react-router"

interface Props {
  work: WorkData
}

export function WorkItem({ work }: Props) {
  const { slug, title, description, image, date, type, status } = work

  const readableTimeline = parseReadableDate(date)
  const link = `/works/${slug}`

  return (
    <Link
      to={link}
      viewTransition
      className={mergeClass(
        "flex flex-col p-3 border-2 border-border border-dashed rounded-2xl transition-all duration-300 hover:border-link hover:-translate-y-1",
      )}
    >
      <div className="flex flex-col tablet:flex-row tablet:items-center gap-2 justify-between">
        <h3 className="flex items-center gap-2 text-sm font-medium flex-1 leading-tight!">
          <i className="fi fi-sc-check-circle" />
          {title}
        </h3>

        <span className="text-sm text-foreground/60">{readableTimeline}</span>
      </div>

      <p className="text-foreground/60 text-sm line-clamp-2 text-pretty mt-3 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="flex items-center gap-1 bg-secondary text-secondary-foreground transition-all duration-300 rounded-full px-3 py-1 hover:-translate-y-1 text-sm">
          {status}
        </span>

        <span className="flex items-center gap-1 bg-secondary text-secondary-foreground transition-all duration-300 rounded-full px-3 py-1 hover:-translate-y-1 text-sm">
          {type}
        </span>
      </div>

      <div className="flex w-full mt-6">
        <picture className="relative overflow-hidden w-full h-[200px] tablet:h-[360px] rounded-xl">
          <img
            src={image}
            alt={title}
            className="object-cover transition-all duration-300 group-hover:scale-105 h-full w-full"
            sizes="(min-width: 1024px) 2048px, 100vw"
          />
        </picture>
      </div>
    </Link>
  )
}
