import sources from "~/data/projects.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface ProjectProps {
  project: {
    desc: string;
    href: string;
    icon: string;
    title: string;
  };
}

function Project({ project }: ProjectProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            className="group relative flex h-13 w-13 items-center gap-2 outline-none transition-all duration-300"
            href={project.href}
            rel="noopener"
            target="_blank"
          >
            <span className="absolute h-13 w-13 rotate-12 scale-80 rounded-2xl border border-border border-dashed bg-background transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-2 group-hover:scale-95" />
            <span className="absolute h-13 w-13 scale-80 rounded-2xl border border-border border-dashed bg-background transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-95" />
            <div className="absolute rounded-2xl border border-border border-dashed bg-background p-2 transition-all duration-200 group-hover:-translate-y-0.5">
              <img
                alt={project.title}
                className="overflow-hidden rounded-lg object-cover transition-all duration-300 group-hover:-rotate-6"
                height={44}
                src={project.icon}
                width={44}
              />
            </div>
          </a>
        }
      />
      <TooltipContent>{project.title}</TooltipContent>
    </Tooltip>
  );
}

function MoreProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button className="flex cursor-pointer items-center gap-1 text-foreground/40 leading-tight tracking-tight outline-none transition-all duration-300 hover:text-foreground">
            Others.
          </button>
        }
      />
      <DialogContent>
        <div className="flex w-full flex-wrap gap-6">
          {sources.list.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectSection() {
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Projects.
        </span>
        <MoreProjectsModal />
      </div>

      <div className="mt-5 flex w-full justify-between gap-3">
        {sources.featureds.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
