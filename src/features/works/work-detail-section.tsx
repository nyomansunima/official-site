import { MDXContent } from "@content-collections/mdx/react";
import { ArticleContent } from "@shared/components";
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
        <a
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl text-foreground/60 transition-all duration-300 hover:text-foreground"
          href="/works"
        >
          <i className="fi fi-rr-turn-left" />
        </a>

        <div className="flex flex-1 flex-col">
          <h1 className="text-balance font-medium text-lg">{title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground">
              {parsedDate}
            </span>

            {team && (
              <a
                className="font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
                href={team.url}
                target="_blank"
              >
                {team.name}
              </a>
            )}
          </div>
        </div>

        <button
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl text-foreground/60 transition-all duration-300 hover:text-foreground"
          onClick={copyWorkLink}
          type="button"
        >
          <i className="fi fi-rr-broken-chain-link-wrong" />
        </button>
      </div>

      <ArticleContent className="mt-10">
        <MDXContent code={mdx} />
      </ArticleContent>
    </section>
  );
}
