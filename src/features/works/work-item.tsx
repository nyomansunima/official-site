import { mergeClass, parseReadableDate } from "@shared/libs/utils";
import type { WorkData } from "./work-service";

type Props = {
  work: WorkData;
};

export function WorkItem({ work }: Props) {
  const { slug, title, description, image, date } = work;

  const readableTimeline = parseReadableDate(date);
  const link = `/works/${slug}`;

  return (
    <a className={mergeClass("flex flex-col")} href={link}>
      <div className="relative flex h-[200px] tablet:h-[360px] w-full overflow-hidden rounded-2xl">
        <img
          alt={title}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 2048px, 100vw"
          src={image}
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{readableTimeline}</span>
      </div>

      <p className="mt-3 line-clamp-2 text-pretty leading-7">{description}</p>
    </a>
  );
}
