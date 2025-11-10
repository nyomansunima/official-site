import { MDXContent } from "@content-collections/mdx/react";
import { ArticleContent, Button } from "@shared/components";
import { parseReadableDate } from "@shared/libs/utils";
import { useLocation } from "@tanstack/react-router";
import type { Work } from "content-collections";

type WorkDetailSectionProps = {
  work: Work;
};

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title, mdx } = work;
  const location = useLocation();
  const parsedDate = parseReadableDate(date);

  function copyWorkLink() {
    if (location) {
      const url = location.url;
      navigator.clipboard.writeText(url);
    }
  }

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-5">
        <Button asChild size={"icon"} variant={"secondary"}>
          <a href="/works">
            <i className="fi fi-sr-arrow-circle-left" />
          </a>
        </Button>

        <div className="flex flex-1 flex-col">
          <h1 className="text-balance font-medium text-lg">{title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-foreground/40 text-sm transition-all duration-300 hover:text-foreground">
              {parsedDate}
            </span>

            {team && (
              <a
                className="text-foreground/40 text-sm transition-all duration-300 hover:text-foreground"
                href={team.url}
                target="_blank"
              >
                {team.name}
              </a>
            )}
          </div>
        </div>

        <Button onClick={copyWorkLink} size={"icon"} variant={"secondary"}>
          <i className="fi fi-br-broken-chain-link-wrong" />
        </Button>
      </div>

      <ArticleContent className="mt-10">
        <MDXContent code={mdx} />
      </ArticleContent>
    </section>
  );
}
