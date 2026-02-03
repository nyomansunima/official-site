import type React from "react";

interface Data {
  url: string;
  title: string;
}

interface ItemProps {
  data: Data;
}

export function Item({ data }: ItemProps) {
  return (
    <a
      className="group group flex gap-1 py-1 transition-colors duration-300 hover:text-foreground/60"
      href={data.url}
      target="_blank"
    >
      <svg
        className="text-foreground/40"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.1" cy="12.1" r="1" />
      </svg>
      <span className="mt-0.5">{data.title}</span>
    </a>
  );
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
    <div className="flex flex-col gap-1">{children}</div>
  ) : (
    <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-10">
      {children}
    </div>
  );
}
