import * as React from "react";
import { cx } from "tailwind-variants/lite";
import sources from "~/data/thoughts.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const TABS = {
  SPEAKS: "SPEAKS",
  VIDEOS: "VIDEOS",
  WRITINGS: "WRITINGS",
} as const;

interface ThoughtProps {
  thought: {
    title: string;
    url: string;
    date: string;
  };
}

function Thought({ thought }: ThoughtProps) {
  return (
    <a
      className="group/item flex items-center gap-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40"
      href={thought.url}
      rel="noopener"
      target="_blank"
    >
      <div className="flex grow items-center gap-2">
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
          {thought.title}
        </span>
      </div>
      <span className="text-foreground/20 tracking-tight">{thought.date}</span>
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

function MoreThoughtsModal() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.WRITINGS);

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
        <div className="flex items-center gap-2 border-border border-b border-dashed pb-2 text-foreground/20">
          <Tab
            isActive={activeTab === TABS.WRITINGS}
            onClick={() => {
              setActiveTab(TABS.WRITINGS);
            }}
          >
            Writings
          </Tab>{" "}
          /
          <Tab
            isActive={activeTab === TABS.VIDEOS}
            onClick={() => {
              setActiveTab(TABS.VIDEOS);
            }}
          >
            Videos
          </Tab>{" "}
          /
          <Tab
            isActive={activeTab === TABS.SPEAKS}
            onClick={() => {
              setActiveTab(TABS.SPEAKS);
            }}
          >
            Speaks
          </Tab>
        </div>

        <div className="group/list mt-5 flex flex-col gap-1">
          <React.Activity
            mode={activeTab === TABS.WRITINGS ? "visible" : "hidden"}
          >
            {sources.list.writings.map((thought, i) => (
              <Thought key={i} thought={thought} />
            ))}
          </React.Activity>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ThoughtsSection() {
  return (
    <section className="mt-16 flex flex-col">
      <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
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
