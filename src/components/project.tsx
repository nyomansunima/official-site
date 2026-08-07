import sources from "~/data/projects.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface ProjectProps {
  project: {
    desc: string;
    href: string;
    icon: string;
    title: string;
    date: string;
  };
}

function Project({ project }: ProjectProps) {
  return (
    <a
      className="group/item flex flex-col gap-x-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40 sm:flex-row sm:items-center"
      data-cuelume-hover="press"
      href={project.href}
      rel="noopener"
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <span className="transition-all duration-300 group-hover/item:text-foreground">
          {project.title}
        </span>
        <svg
          className="transition-all duration-300 group-hover/item:text-foreground"
          fill="none"
          height={14}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={14}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M9 9l3 3l-3 3" />
          <path d="M13 9l3 3l-3 3" />
          <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
        </svg>
      </div>
      <span className="grow text-foreground/40">{project.desc}</span>
      <span className="text-foreground/20 tracking-tight">{project.date}</span>
    </a>
  );
}

function MoreProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            className="flex cursor-pointer items-center gap-1 text-foreground/40 leading-tight tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="tick"
            type="button"
          >
            Others
            <svg
              fill="none"
              height={14}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M9 9l3 3l-3 3" />
              <path d="M13 9l3 3l-3 3" />
              <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
            </svg>
          </button>
        }
      />
      <DialogContent>
        <div className="group/list flex w-full flex-col gap-2">
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
    <div className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Projects.
        </span>
        <MoreProjectsModal />
      </div>

      <div className="group/list mt-5 flex w-full flex-col gap-2">
        {sources.featureds.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
