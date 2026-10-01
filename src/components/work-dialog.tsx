import sources from "~/data/works.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { WorkItem } from "./work-item";

const reversedWorks = [...sources.list].reverse();

export function MoreWorksDialog() {
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
        <div className="flex flex-col gap-2">
          {reversedWorks.map((work, i) => (
            <WorkItem key={i} work={work} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
