import sources from "~/data/projects.json";
import { MoreProjectsDialog } from "./project-dialog";
import { ProjectItem } from "./project-item";

export function ProjectSection() {
  return (
    <div className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="leading-tight tracking-tight">Projects.</span>
        <MoreProjectsDialog />
      </div>

      <div className="group/list mt-5 flex w-full flex-col gap-1">
        {sources.featureds.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
