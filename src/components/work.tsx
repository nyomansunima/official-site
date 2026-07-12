import React, { Activity } from "react";
import sources from "~/data/works.json";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const TABS = {
  CASE_STUDIES: "CASE_STUDIES",
  SPOTLIGHTS: "SPOTLIGHTSS",
} as const;

interface SpotlightProps {
  spot: {
    url?: string;
    img: string;
    title: string;
  };
}

function Spotlight({ spot }: SpotlightProps) {
  return (
    <a
      className="flex cursor-pointer select-none rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
      href={spot.url}
      rel="noopener"
      target="_blank"
    >
      <img
        alt={spot.title}
        className="h-80 w-full overflow-hidden rounded-lg object-cover"
        src={spot.img}
      />
    </a>
  );
}

interface CaseStudyProps {
  cs: {
    date: string;
    url?: string;
    img: string;
    title: string;
  };
}

function CaseStudy({ cs }: CaseStudyProps) {
  return (
    <a
      className="flex cursor-pointer flex-col transition-all duration-300 hover:-translate-y-0.5"
      href={cs.url}
      rel="noopener"
      target="_blank"
    >
      <div className="flex select-none rounded-xl border border-border border-dashed bg-surface p-1">
        <img
          alt={cs.title}
          className="h-40 w-full overflow-hidden rounded-lg object-cover object-top"
          src={cs.img}
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-foreground leading-none">{cs.title}</h3>
        <span className="text-foreground/40 text-sm leading-none">
          {cs.date}
        </span>
      </div>
    </a>
  );
}

function MoreWorksModal() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.SPOTLIGHTS);

  return (
    <Dialog>
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
              <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm0 5a1 1 0 0 1 .993 .883l.007 .117v5.585l2.293 -2.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1.008 1.008 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.092 -.064l-.094 -.083l-4 -4a1 1 0 0 1 1.32 -1.497l.094 .083l2.293 2.292v-5.585a1 1 0 0 1 1 -1z"
                fill="currentColor"
              />
            </svg>
            See more
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Works</DialogTitle>
        </DialogHeader>
        <div className="mt-5 flex items-center gap-2">
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.SPOTLIGHTS);
            }}
            variant={activeTab === TABS.SPOTLIGHTS ? "secondary" : "outline"}
          >
            <svg
              data-icon="inline-start"
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z" />
            </svg>
            Spotlights
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.CASE_STUDIES);
            }}
            variant={activeTab === TABS.CASE_STUDIES ? "secondary" : "outline"}
          >
            <svg
              data-icon="inline-start"
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M11.595 2.13a1 1 0 0 1 1.455 -1.016c3.11 1.625 5.41 3.797 6.77 6.627l-.013 -.024l.01 .019l.115 .232c2.751 5.7 .088 12.587 -5.913 13.76l-.267 .049c-8.719 1.91 -14.455 -8.74 -7.97 -14.918c.466 -.46 1.28 -1.196 1.636 -1.45a1 1 0 0 1 1.582 .813c0 .311 .086 1.117 .205 1.694q .046 .215 .093 .383l.017 .058l.1 -.02c1.562 -.396 2.522 -3.021 2.21 -5.955z" />
            </svg>
            Case studies
          </Button>
        </div>
        <div className="mt-5 flex">
          <Activity mode={activeTab === TABS.SPOTLIGHTS ? "visible" : "hidden"}>
            <div className="flex w-full flex-col gap-2">
              {sources.list.spotlights.map((spot, i) => (
                <Spotlight key={i} spot={spot} />
              ))}
            </div>
          </Activity>
          <Activity
            mode={activeTab === TABS.CASE_STUDIES ? "visible" : "hidden"}
          >
            <div className="flex w-full flex-col gap-10">
              {sources.list.casestudies.map((cs, i) => (
                <CaseStudy cs={cs} key={i} />
              ))}
            </div>
          </Activity>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function WorksSection() {
  const [activeTab, setActiveTab] = React.useState<string>(TABS.SPOTLIGHTS);

  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tight">
        Works.
      </h1>

      <div className="mt-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.SPOTLIGHTS);
            }}
            variant={activeTab === TABS.SPOTLIGHTS ? "secondary" : "outline"}
          >
            <svg
              data-icon="inline-start"
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z" />
            </svg>
            Spotlights
          </Button>
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            data-cuelume-press="tick"
            onClick={() => {
              setActiveTab(TABS.CASE_STUDIES);
            }}
            variant={activeTab === TABS.CASE_STUDIES ? "secondary" : "outline"}
          >
            <svg
              data-icon="inline-start"
              fill="currentColor"
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M11.595 2.13a1 1 0 0 1 1.455 -1.016c3.11 1.625 5.41 3.797 6.77 6.627l-.013 -.024l.01 .019l.115 .232c2.751 5.7 .088 12.587 -5.913 13.76l-.267 .049c-8.719 1.91 -14.455 -8.74 -7.97 -14.918c.466 -.46 1.28 -1.196 1.636 -1.45a1 1 0 0 1 1.582 .813c0 .311 .086 1.117 .205 1.694q .046 .215 .093 .383l.017 .058l.1 -.02c1.562 -.396 2.522 -3.021 2.21 -5.955z" />
            </svg>
            Case studies
          </Button>
        </div>
        <div className="flex">
          <MoreWorksModal />
        </div>
      </div>

      <div className="mt-5 flex w-full">
        <Activity mode={activeTab === TABS.SPOTLIGHTS ? "visible" : "hidden"}>
          <div className="flex w-full flex-col gap-2">
            {sources.featured.spotlights.map((spot, i) => (
              <Spotlight key={i} spot={spot} />
            ))}
          </div>
        </Activity>
        <Activity mode={activeTab === TABS.CASE_STUDIES ? "visible" : "hidden"}>
          <div className="flex w-full flex-col gap-10">
            {sources.featured.casestudies.map((cs, i) => (
              <CaseStudy cs={cs} key={i} />
            ))}
          </div>
        </Activity>
      </div>
    </div>
  );
}
