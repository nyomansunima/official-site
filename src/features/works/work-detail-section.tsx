import type { WorkDetail } from "./work-service"
import { ArticleContent, Button, MarkdownContent } from "@shared/components"
import { parseReadableDate } from "@shared/libs"
import { useLocation } from "@tanstack/react-router"

interface WorkDetailSectionProps {
  work: WorkDetail
}

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title } = work.meta
  const location = useLocation()
  const parsedDate = parseReadableDate(date)

  function copyWorkLink() {
    if (location) {
      const url = location.url
      navigator.clipboard.writeText(url)
    }
  }

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-5">
        <Button variant={"secondary"} size={"icon"} asChild>
          <a href="/works">
            <i className="fi fi-sr-arrow-circle-left" />
          </a>
        </Button>

        <div className="flex flex-col flex-1">
          <h1 className="text-lg font-medium text-balance">{title}</h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-sm text-foreground/40 transition-all duration-300 hover:text-foreground">
              {parsedDate}
            </span>

            {team && (
              <a
                href={team.url}
                target="_blank"
                className="text-sm text-foreground/40 transition-all duration-300 hover:text-foreground"
              >
                {team.name}
              </a>
            )}
          </div>
        </div>

        <Button variant={"secondary"} size={"icon"} onClick={copyWorkLink}>
          <i className="fi fi-br-broken-chain-link-wrong" />
        </Button>
      </div>

      <ArticleContent className="mt-10">
        <MarkdownContent content={work.content} />
      </ArticleContent>
    </section>
  )
}
