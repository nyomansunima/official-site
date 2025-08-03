import type { WorkData } from "./work-service"
import { mergeClass, parseReadableDate } from "@shared/libs"
import { Link } from "react-router"

interface Props {
  work: WorkData
}

export function WorkItem({ work }: Props) {
  const { slug, title, description, image, date } = work

  const readableTimeline = parseReadableDate(date)
  const link = `/works/${slug}`

  return (
    <Link to={link} viewTransition className={mergeClass("flex flex-col")}>
      <div className="flex w-full relative overflow-hidden h-[200px] tablet:h-[360px] rounded-2xl">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full"
          sizes="(min-width: 1024px) 2048px, 100vw"
        />
      </div>

      <div className="flex items-center gap-4 mt-6">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{readableTimeline}</span>
      </div>

      <p className="line-clamp-2 text-pretty mt-3 leading-7">{description}</p>
    </Link>
  )
}
