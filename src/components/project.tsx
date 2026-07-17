import sources from "~/data/projects.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

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
    <a
      className="group/item flex flex-col gap-x-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40 sm:flex-row sm:items-center"
      href={project.href}
      rel="noopener"
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <svg
          className="text-foreground/20"
          fill="currentColor"
          height={10}
          viewBox="0 0 24 24"
          width={10}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
        </svg>
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
      <span className="ml-4 text-foreground/40 sm:ml-0">{project.desc}</span>
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
    <div className="mt-16 flex flex-col">
      <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
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
