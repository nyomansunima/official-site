import { MDXContent } from "@content-collections/mdx/react";
import { ArticleContent } from "@shared/components";
import { parseReadableDate } from "@shared/libs/utils";
import { useLocation } from "@tanstack/react-router";
import type { Work } from "content-collections";

type WorkDetailSectionProps = {
  work: Work;
};

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title, mdx, status } = work;
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
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
            <path d="M9 14 4 9l5-5" />
          </svg>
        </a>

        <div className="flex flex-1 flex-col">
          <h1 className="text-balance font-medium text-lg">{title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="cursor-pointer font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground">
              {parsedDate}
            </span>

            <span className="cursor-pointer font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground">
              {status}
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
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
            <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
            <line x1="8" x2="8" y1="2" y2="5" />
            <line x1="2" x2="5" y1="8" y2="8" />
            <line x1="16" x2="16" y1="19" y2="22" />
            <line x1="19" x2="22" y1="16" y2="16" />
          </svg>
        </button>
      </div>

      <ArticleContent className="mt-10">
        <MDXContent code={mdx} />
      </ArticleContent>
    </section>
  );
}
