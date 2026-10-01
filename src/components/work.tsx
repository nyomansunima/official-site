import sources from "~/data/works.json";
import { MoreWorksDialog } from "./work-dialog";
import { WorkItem } from "./work-item";

const reversedFeaturedWorks = [...sources.featureds].reverse();

export function WorksSection() {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="leading-tight tracking-tight">Works.</span>
        <MoreWorksDialog />
      </div>

      <div className="group/list mt-7 flex w-full flex-col gap-2">
        {reversedFeaturedWorks.map((work, i) => (
          <WorkItem key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
