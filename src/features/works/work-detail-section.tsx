import { MDXContent } from "@content-collections/mdx/react";
import { parseReadableDate } from "@shared/libs/utils";
import type { Work } from "content-collections";

type WorkDetailSectionProps = {
  work: Work;
};

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title, mdx, status } = work;
  const parsedDate = parseReadableDate(date);

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-6">
        <a
          className="flex h-10 w-10 items-center justify-center rounded-2xl text-foreground/40 transition-all duration-300 hover:text-foreground"
          href="/works"
        >
          <svg
            fill="none"
            height="18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
            <path d="M9 14 4 9l5-5" />
          </svg>
        </a>

        <div className="flex flex-1 flex-col">
          <h1 className="text-balance font-medium text-lg">{title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-foreground/40 text-sm">{parsedDate}</span>
            <span className="text-foreground/40 text-sm">{status}</span>
            {team !== undefined && (
              <a
                className="text-foreground/40 text-sm"
                href={team.url}
                target="_blank"
              >
                {team.name}
              </a>
            )}
          </div>
        </div>
      </div>

      <article className="prose mt-10">
        <MDXContent code={mdx} />
      </article>
    </section>
  );
}
