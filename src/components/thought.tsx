import * as React from "react";
import sources from "~/data/thoughts.json";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

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
      className="group flex items-center gap-2 py-1 outline-none transition-all duration-300 hover:-translate-y-0.5"
      href={thought.url}
      rel="noopener"
      target="_blank"
    >
      <div className="flex grow items-center gap-2">
        <svg
          className="text-foreground/40 transition-all duration-300 group-hover:text-foreground"
          fill="currentColor"
          height={10}
          viewBox="0 0 24 24"
          width={10}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
        </svg>

        <h3>{thought.title}</h3>
      </div>
      <span className="text-foreground/40 tracking-tight transition-all duration-300 group-hover:text-foreground">
        {thought.date}
      </span>
    </a>
  );
}

function MoreThoughtsModal() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.WRITINGS);

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
          <DialogTitle>Thoughts.</DialogTitle>
        </DialogHeader>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.WRITINGS);
            }}
            variant={activeTab === TABS.WRITINGS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
            </svg>
            Writings
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.VIDEOS);
            }}
            variant={activeTab === TABS.VIDEOS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66c-2.285 0 -3.915 2.619 -3.997 5.752l-.003 .248c0 3.242 1.655 6 4 6s4 -2.758 4 -6s-1.655 -6 -4 -6" />
            </svg>
            Videos
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.SPEAKS);
            }}
            variant={activeTab === TABS.SPEAKS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.168 11.605c-1.285 -1.927 -4.354 -2.132 -6.387 -.777a1 1 0 0 0 1.11 1.664c1.195 -.797 3.014 -.675 3.613 .223a1 1 0 1 0 1.664 -1.11m1.268 -3.245c-2.469 -1.852 -5.895 -2.187 -8.608 -.589a1 1 0 0 0 1.016 1.724c1.986 -1.171 4.544 -.92 6.392 .465a1 1 0 0 0 1.2 -1.6m1.43 -3.048c-3.677 -2.298 -7.766 -2.152 -10.977 -.546a1 1 0 0 0 .894 1.788c2.635 -1.317 5.997 -1.437 9.023 .454a1 1 0 1 0 1.06 -1.696" />
            </svg>
            Speaks
          </Button>
        </div>
        <div className="mt-3 flex">
          <React.Activity
            mode={activeTab === TABS.WRITINGS ? "visible" : "hidden"}
          >
            <div className="mt-2 flex w-full flex-col gap-1">
              {sources.list.writings.map((thought, i) => (
                <Thought key={i} thought={thought} />
              ))}
            </div>
          </React.Activity>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ThoughtsSection() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.WRITINGS);

  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tighter">
        Thoughts.
      </h1>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.WRITINGS);
            }}
            variant={activeTab === TABS.WRITINGS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
            </svg>
            Writings
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.VIDEOS);
            }}
            variant={activeTab === TABS.VIDEOS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66c-2.285 0 -3.915 2.619 -3.997 5.752l-.003 .248c0 3.242 1.655 6 4 6s4 -2.758 4 -6s-1.655 -6 -4 -6" />
            </svg>
            Videos
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.SPEAKS);
            }}
            variant={activeTab === TABS.SPEAKS ? "secondary" : "outline"}
          >
            <svg
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.168 11.605c-1.285 -1.927 -4.354 -2.132 -6.387 -.777a1 1 0 0 0 1.11 1.664c1.195 -.797 3.014 -.675 3.613 .223a1 1 0 1 0 1.664 -1.11m1.268 -3.245c-2.469 -1.852 -5.895 -2.187 -8.608 -.589a1 1 0 0 0 1.016 1.724c1.986 -1.171 4.544 -.92 6.392 .465a1 1 0 0 0 1.2 -1.6m1.43 -3.048c-3.677 -2.298 -7.766 -2.152 -10.977 -.546a1 1 0 0 0 .894 1.788c2.635 -1.317 5.997 -1.437 9.023 .454a1 1 0 1 0 1.06 -1.696" />
            </svg>
            Speaks
          </Button>
        </div>
        <div className="flex">
          <MoreThoughtsModal />
        </div>
      </div>

      <div className="mt-5 flex">
        <a
          className="flex w-full cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
          href={"/"}
        >
          <img
            alt="Banner"
            className="h-30 w-full overflow-hidden rounded-lg object-cover object-top"
            src={
              "https://cdn.dribbble.com/userupload/47405923/file/448edb06be3cb9192a739253d0516f93.png"
            }
          />
        </a>
      </div>

      <div className="mt-3 flex w-full">
        <React.Activity
          mode={activeTab === TABS.WRITINGS ? "visible" : "hidden"}
        >
          <div className="flex w-full flex-col gap-2">
            {sources.featured.writings.map((thought, index) => (
              <Thought key={index} thought={thought} />
            ))}
          </div>
        </React.Activity>
        <React.Activity mode={activeTab === TABS.VIDEOS ? "visible" : "hidden"}>
          <div className="flex w-full flex-col gap-2">
            {sources.featured.videos.map((thought, index) => (
              <Thought key={index} thought={thought} />
            ))}
          </div>
        </React.Activity>
        <React.Activity mode={activeTab === TABS.SPEAKS ? "visible" : "hidden"}>
          <div className="flex w-full flex-col gap-2">
            {sources.featured.speaks.map((thought, index) => (
              <Thought key={index} thought={thought} />
            ))}
          </div>
        </React.Activity>
      </div>
    </div>
  );
}
