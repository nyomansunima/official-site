import { parseReadableDate } from "@shared/libs/utils";
import type { Work } from "content-collections";

interface WorkItemProps {
  work: Work;
}

interface WorkListSectionProps {
  works: Work[];
}

export function WorkItem({ work }: WorkItemProps) {
  const { title, description, image, _meta, date, status } = work;

  const readableTimeline = parseReadableDate(date);
  const link = `/works/${_meta.path}`;
  const isDisabled = status === "Coming soon";

  return (
    <a
      className={`"flex flex-col" ${isDisabled ? "pointer-events-none" : ""}`}
      href={link}
    >
      <img
        alt={title}
        className="h-50 w-full rounded-2xl object-cover md:h-90"
        sizes="(min-width: 1024px) 2048px, 100vw"
        src={image}
      />

      <div className="mt-6 flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm leading-none">
          {readableTimeline}
        </span>
        <span className="text-foreground/40 text-sm leading-none">
          {status}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-pretty text-foreground/70 leading-7">
        {description}
      </p>
    </a>
  );
}

export function WorkListSection({ works }: WorkListSectionProps) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-16">
        {works.map((work, i) => (
          <WorkItem key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
