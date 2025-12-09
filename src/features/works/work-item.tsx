import { parseReadableDate } from "@shared/libs/utils";
import type { Work } from "content-collections";

type Props = {
  work: Work;
};

export function WorkItem({ work }: Props) {
  const { title, description, image, _meta, date, status } = work;

  const readableTimeline = parseReadableDate(date);
  const link = `/works/${_meta.path}`;
  const isDisabled = status === "Coming soon";

  return (
    <a
      className={`"flex flex-col" ${isDisabled ? "pointer-events-none" : ""}`}
      href={link}
    >
      <div className="relative flex h-[200px] w-full overflow-hidden rounded-2xl md:h-[360px]">
        <img
          alt={title}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 2048px, 100vw"
          src={image}
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm leading-none">
          {readableTimeline}
        </span>
        <span className="text-foreground/40 text-sm leading-none">
          {status}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-pretty leading-7">{description}</p>
    </a>
  );
}
