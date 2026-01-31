import type React from "react";

interface Data {
  url: string;
  title: string;
  desc?: string;
}

interface ItemProps {
  data: Data;
  type: "SIMPLE" | "ALIGN" | "JUSTIFY";
}

export function Item({ data, type }: ItemProps) {
  const comp = {
    SIMPLE: (
      <a
        className="group group flex items-center gap-1 py-2"
        href={data.url}
        target="_blank"
      >
        <svg
          className="text-foreground/40 transition-all duration-300 group-hover:text-foreground"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.1" cy="12.1" r="1" />
        </svg>
        <span>{data.title}</span>
      </a>
    ),

    ALIGN: (
      <a
        className="group group flex flex-col gap-x-2 gap-y-1 py-2 md:flex-row md:items-center"
        href={data.url}
        target="_blank"
      >
        <div className="flex items-center gap-1">
          <svg
            className="text-foreground/40 transition-all duration-300 group-hover:text-foreground"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>

          <span>{data.title}</span>
          <span className="hidden md:block">-</span>
        </div>
        <span className="ml-4 text-foreground/60 md:ml-0">{data.desc}</span>
      </a>
    ),

    JUSTIFY: (
      <a
        className="group group flex flex-col py-2 md:flex-row md:items-center"
        href={data.url}
        target="_blank"
      >
        <div className="flex grow items-center gap-1">
          <svg
            className="text-foreground/40 transition-all duration-300 group-hover:text-foreground"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>
          <span className="line-clamp-1 text-pretty">{data.title}</span>
        </div>

        <span className="ml-5 text-foreground/40 text-sm md:ml-0">
          {data.desc}
        </span>
      </a>
    ),
  };

  return comp[type];
}

interface GroupProps {
  children: React.ReactNode;
}

export function Group({ children }: GroupProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h2 className="text-foreground/60">{children}</h2>;
}

interface StacksProps {
  type: "LIST" | "GRID";
  children: React.ReactNode;
}

export function Stacks({ type, children }: StacksProps) {
  return type === "LIST" ? (
    <div className="flex flex-col gap-0.5">{children}</div>
  ) : (
    <div className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
      {children}
    </div>
  );
}
