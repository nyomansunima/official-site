import sources from "~/data/works.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface WorkProps {
  work: {
    date: string;
    url: string;
    img: string;
    title: string;
  };
}

function Work({ work }: WorkProps) {
  return (
    <a
      className="group/item flex cursor-pointer flex-col outline-none transition-all duration-300"
      href={work.url}
      rel="noopener"
      target="_blank"
    >
      <img
        alt={work.title}
        className="aspect-4/3 w-full overflow-hidden rounded-lg object-cover object-top"
        src={work.img}
      />
      <div className="mt-3 flex justify-between text-center">
        <span className="text-foreground/40 tracking-tight transition-all duration-300 group-hover/item:text-foreground">
          {work.title}
        </span>
        <span className="text-foreground/20 tracking-tight">{work.date}</span>
      </div>
    </a>
  );
}

function MoreWorksModal() {
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
        <div className="flex flex-col gap-10">
          {sources.list.map((work, i) => (
            <Work key={i} work={work} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function WorksSection() {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Works.
        </span>
        <MoreWorksModal />
      </div>

      <div className="group/list mt-6 flex w-full flex-col gap-10">
        {sources.featureds.map((work, i) => (
          <Work key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
