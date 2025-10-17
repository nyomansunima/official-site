import { WorkItem } from "./work-item";
import type { WorkData } from "./work-service";

type Props = {
  works: WorkData[];
};

export function WorksListSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Works.
        </span>
        <h2 className="mt-2 font-medium text-lg">Top built & hacking.</h2>

        <p className="mt-6 text-pretty leading-7">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (business, works & case studies).
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {works.map((work, i) => (
          <WorkItem key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
