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
      <div className="flex flex-1 flex-col">
        <h1 className="text-balance font-medium text-lg">{title}</h1>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-foreground/40 text-sm">{parsedDate}</span>
          <span className="text-foreground/40 text-sm">{status}</span>
          {team && (
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

      <article className="prose mt-10">
        <MDXContent code={mdx} />
      </article>
    </section>
  );
}
