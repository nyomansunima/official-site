import sources from "~/data/thoughts.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface ThoughtProps {
  thought: {
    title: string;
    url: string;
    date: string;
    type: string;
  };
}

function Thought({ thought }: ThoughtProps) {
  return (
    <a
      className="group/item flex items-center gap-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40"
      data-cuelume-hover="press"
      href={thought.url}
      rel="noopener"
      target="_blank"
    >
      <span className="flex grow transition-all duration-300 group-hover/item:text-foreground">
        {thought.title}
      </span>
      <span className="text-foreground/20 tracking-tight">{thought.date}</span>
    </a>
  );
}

function MoreThoughtsModal() {
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-chevrons-right"
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
        <div className="group/list flex flex-col gap-1">
          {sources.list.map((thought, i) => (
            <Thought key={i} thought={thought} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ThoughtsSection() {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Thoughts.
        </span>
        <MoreThoughtsModal />
      </div>

      <div className="group/list mt-5 flex w-full flex-col gap-2">
        {sources.featureds.map((thought, index) => (
          <Thought key={index} thought={thought} />
        ))}
      </div>
    </section>
  );
}
