import React, { Activity } from "react";
import { Button } from "./button";

interface SpotlightProps {
  href?: string;
  img: string;
  title: string;
}

function Spotlight({ href, img, title }: SpotlightProps) {
  return (
    <a
      className="flex cursor-pointer select-none rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
      href={href}
      rel="noopener"
      target="_blank"
    >
      <img
        alt={title}
        className="h-80 w-full overflow-hidden rounded-lg object-cover"
        src={img}
      />
    </a>
  );
}

interface CaseStudyProps {
  date: string;
  href?: string;
  img: string;
  title: string;
}

function CaseStudy({ href, img, title, date }: CaseStudyProps) {
  return (
    <a
      className="flex cursor-pointer flex-col transition-all duration-300 hover:-translate-y-0.5"
      href={href}
      rel="noopener"
      target="_blank"
    >
      <div className="flex select-none rounded-xl border border-border border-dashed bg-surface p-1">
        <img
          alt={title}
          className="h-40 w-full overflow-hidden rounded-lg object-cover object-top"
          src={img}
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-foreground leading-none">{title}</h3>
        <span className="text-foreground/40 text-sm leading-none">{date}</span>
      </div>
    </a>
  );
}

function CaseStudyList() {
  return (
    <div className="flex w-full flex-col gap-10">
      <CaseStudy
        date="Aug 2024"
        img="https://cdn.dribbble.com/userupload/47391735/file/bfc528ce2ebd30b06d0c842c585e2b4f.png"
        title="Tracking system"
      />
      <CaseStudy
        date="Dec 2025"
        img="https://cdn.dribbble.com/userupload/16734510/file/original-f1e2b34a8a8030e12f2a83625ecac051.png"
        title="Travellio"
      />
      <CaseStudy
        date="Aug 2025"
        img="https://cdn.dribbble.com/userupload/47153260/file/87a3e2ac3e9e8c1326e59250b25d42c6.png"
        title="Cargic Logistics"
      />
    </div>
  );
}

function SpotlightList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Spotlight
        img="https://cdn.dribbble.com/userupload/19420515/file/original-2ed398d89b0939d71e46ddaeb840c140.png"
        title="Bank"
      />
      <Spotlight
        img="https://cdn.dribbble.com/userupload/48180421/file/61190e26fa2496f88e9bddc6f5b8f41f.jpg"
        title="Micro Learning"
      />
      <Spotlight
        img="https://cdn.dribbble.com/userupload/15891252/file/original-3301079672549d007c74c7cbce004e85.jpg"
        title="Finance"
      />
    </div>
  );
}

export function WorksSection() {
  const TABS = {
    SPOTLIGHTS: "SPOTLIGHTSS",
    CASE_STUDIES: "CASE_STUDIES",
  } as const;
  const [activeTab, setActiveTab] = React.useState<string>(TABS.SPOTLIGHTS);

  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tight">
        Works.
      </h1>

      <div className="mt-5 flex items-center gap-2">
        <Button
          className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
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

      <div className="mt-5 flex w-full">
        <Activity mode={activeTab === TABS.SPOTLIGHTS ? "visible" : "hidden"}>
          <SpotlightList />
        </Activity>
        <Activity mode={activeTab === TABS.CASE_STUDIES ? "visible" : "hidden"}>
          <CaseStudyList />
        </Activity>
      </div>
    </div>
  );
}
