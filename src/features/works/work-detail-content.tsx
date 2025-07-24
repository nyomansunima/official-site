import {
  ArticleContent,
  MarkdownContent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/components"
import { parseReadableDate } from "@shared/libs"
import { Link } from "react-router"
import type { WorkDetail } from "./work-service"

interface WorkDetailContentProps {
  work: WorkDetail
}

export function WorkDetailContent({ work }: WorkDetailContentProps) {
  const { category, date, status, team, title, type } = work.meta
  const parsedDate = parseReadableDate(date)

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium text-balance">{title}</h1>

      <div className="flex items-center gap-3 mt-3">
        <span className="text-sm text-foreground/60">{parsedDate}</span>

        {team && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={team.url}
                  target="_blank"
                  className="flex items-center gap-2 leading-none! text-sm text-link font-mono tracking-tight"
                >
                  {team.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent>Teams</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-6">
        <span className="flex items-center gap-1 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 text-sm font-mono tracking-tight">
          <i className="fi fi-sr-bullet" />
          {status}
        </span>

        <span className="flex items-center gap-1 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 text-sm font-mono tracking-tight">
          <i className="fi fi-sr-bullet" />
          {type}
        </span>

        <span className="flex items-center gap-1 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 text-sm font-mono tracking-tight">
          <i className="fi fi-sr-bullet" />
          {category}
        </span>
      </div>

      <ArticleContent className="mt-10 prose-p:text-foreground/70 prose-ul:text-foreground/70">
        <MarkdownContent content={work.content} />
      </ArticleContent>
    </div>
  )
}
