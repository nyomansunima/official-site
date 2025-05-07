import {
  ArticleContent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/components"
import * as React from "react"
import { getWorkDetail } from "./work-service"
import Link from "next/link"
import { parseReadableDate } from "@shared/utils"

type WorkDetailContentProps = {
  slug: string
}

export async function WorkDetailContent({
  slug,
}: WorkDetailContentProps): Promise<React.ReactElement> {
  const { content, meta } = await getWorkDetail(slug)
  const { category, date, status, team, title, type } = meta
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
                  href={meta.team.url}
                  target="_blank"
                  className="flex items-center gap-2 leading-none! text-sm text-link"
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
        <span className="flex items-center gap-2 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-link text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {status}
        </span>

        <span className="flex items-center gap-2 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-link text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {type}
        </span>

        <span className="flex items-center gap-2 leading-none! cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-link text-sm text-foreground/60">
          <i className="fi fi-rr-circle-small" />
          {category}
        </span>
      </div>

      <ArticleContent className="mt-10 prose-p:text-foreground/70 prose-ul:text-foreground/70">
        {content}
      </ArticleContent>
    </div>
  )
}
