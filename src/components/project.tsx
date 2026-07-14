import sources from "~/data/projects.json";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
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
      <Tooltip>
        <TooltipTrigger
          render={
            <DialogTrigger
              render={
                <Button
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                  variant="text"
                >
                  <svg
                    fill="currentColor"
                    height={14}
                    viewBox="0 0 24 24"
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm3 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
                  </svg>
                  See more
                </Button>
              }
            />
          }
        />
        <TooltipContent className={"font-medium"}>
          Yeah, there's more
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Projects.</DialogTitle>
        </DialogHeader>
        <div className="mt-5 flex">
          <div className="flex w-full flex-wrap gap-6">
            {sources.list.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectSection() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tighter">
        Projects.
      </h1>

      <div className="mt-5 flex w-full">
        <div className="flex w-full justify-between gap-3">
          {sources.featureds.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center border-border border-t border-dashed pt-3">
        <MoreProjectsModal />
      </div>
    </div>
  );
}
