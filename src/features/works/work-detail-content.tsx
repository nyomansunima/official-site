import { ArticleContent, MarkdownContent } from "@shared/components"
import { parseReadableDate } from "@shared/libs"
import { Link } from "react-router"
import type { WorkDetail } from "./work-service"

interface WorkDetailContentProps {
  work: WorkDetail
}

export function WorkDetailContent({ work }: WorkDetailContentProps) {
  const { date, team, title } = work.meta
  const parsedDate = parseReadableDate(date)

  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-medium text-balance">{title}</h1>

      <div className="flex items-center gap-3 mt-3">
        <span className="text-sm text-foreground/40 transition-all duration-300 hover:text-foreground">
          {parsedDate}
        </span>

        {team && (
          <Link
            to={team.url}
            target="_blank"
            className="text-sm text-foreground/40 transition-all duration-300 hover:text-foreground"
          >
            {team.name}
          </Link>
        )}
      </div>

      <ArticleContent className="mt-10">
        <MarkdownContent content={work.content} />
      </ArticleContent>
    </div>
  )
}
