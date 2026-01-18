import { MDXContent } from "@content-collections/mdx/react";
import { parseReadableDate } from "@shared/libs/utils";
import type { Work } from "content-collections";

interface WorkDetailSectionProps {
  work: Work;
}

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title, mdx, status } = work;
  const parsedDate = parseReadableDate(date);

  return (
    <section className="flex">
      <article className="prose">
        <h1>{title}</h1>

        <div className="not-prose mt-2 mb-10 flex items-center gap-3">
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

        <MDXContent code={mdx} />
      </article>
    </section>
  );
}
