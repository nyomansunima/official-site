import React, { Activity } from "react";
import { cx } from "tailwind-variants/lite";
import sources from "~/data/works.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const TABS = {
  CASE_STUDIES: "CASE_STUDIES",
  SPOTLIGHTS: "SPOTLIGHTSS",
} as const;

interface WorkProps {
  work: {
    date: string;
    url?: string;
    img: string;
    title: string;
  };
}

function Work({ work }: WorkProps) {
  return (
    <a
      className="group/item flex cursor-pointer flex-col transition-all duration-300 hover:-translate-y-0.5"
      href={work.url}
      rel="noopener"
      target="_blank"
    >
      <div className="flex select-none rounded-xl border border-border border-dashed bg-surface p-1">
        <img
          alt={work.title}
          className="h-50 w-full overflow-hidden rounded-lg object-cover object-top sm:h-80"
          src={work.img}
        />
      </div>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-foreground/40 leading-none tracking-tight transition-all duration-300 group-hover/item:text-foreground">
          {work.title}
        </span>
        <span className="text-foreground/20 leading-none tracking-tight">
          {work.date}
        </span>
      </div>
    </a>
  );
}

interface TabProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ onClick, isActive, children }: TabProps) {
  return (
    <button
      className={cx(
        "flex cursor-pointer items-center gap-1 text-foreground/30 leading-tight tracking-tight outline-none transition-all duration-300 hover:text-foreground",
        isActive && "text-foreground/60!"
      )}
      data-cuelume-press="tick"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function MoreWorksModal() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.SPOTLIGHTS);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            className="flex cursor-pointer items-center gap-1 text-foreground/40 leading-tight tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="tick"
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
        <div className="flex items-center gap-2 border-border border-b border-dashed pb-2 text-foreground/20">
          <Tab
            isActive={activeTab === TABS.SPOTLIGHTS}
            onClick={() => {
              setActiveTab(TABS.SPOTLIGHTS);
            }}
          >
            Spotlights
          </Tab>
          /
          <Tab
            isActive={activeTab === TABS.CASE_STUDIES}
            onClick={() => {
              setActiveTab(TABS.CASE_STUDIES);
            }}
          >
            Case Studies
          </Tab>
        </div>
        <div className="mt-5 flex flex-col gap-10">
          <Activity mode={activeTab === TABS.SPOTLIGHTS ? "visible" : "hidden"}>
            {sources.list.spotlights.map((work, i) => (
              <Work key={i} work={work} />
            ))}
          </Activity>
          <Activity
            mode={activeTab === TABS.CASE_STUDIES ? "visible" : "hidden"}
          >
            {sources.list.casestudies.map((work, i) => (
              <Work key={i} work={work} />
            ))}
          </Activity>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function WorksSection() {
  return (
    <section className="mt-16 flex flex-col">
      <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Works.
        </span>
        <MoreWorksModal />
      </div>

      <div className="group/list mt-5 flex w-full flex-col gap-10">
        {sources.featureds.map((work, i) => (
          <Work key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
