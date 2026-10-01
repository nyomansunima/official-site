import sources from "~/data/thoughts.json";
import { MoreThoughtsDialog } from "./thought-dialog";
import { ThoughtItem } from "./thought-item";

export function ThoughtsSection() {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="leading-tight tracking-tight">Thoughts.</span>
        <MoreThoughtsDialog />
      </div>

      <div className="group/list mt-5 flex w-full flex-col gap-1">
        {sources.featureds.map((thought, index) => (
          <ThoughtItem key={index} thought={thought} />
        ))}
      </div>
    </section>
  );
}
