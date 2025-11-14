import type { Work } from "content-collections";
import { WorkItem } from "./work-item";

type Props = {
  works: Work[];
};

export function WorksListSection({ works }: Props) {
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
