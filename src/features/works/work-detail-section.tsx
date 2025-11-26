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

      <article className="prose mt-10">
        <MDXContent code={mdx} />
      </article>
    </section>
  );
}
