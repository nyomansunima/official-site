import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import dayjs from "dayjs";
import type { GrayMatterFile } from "gray-matter";
import matter from "gray-matter";
import { twMerge } from "tailwind-merge";

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, YYYY");
}

export function parseMarkdown(rawFile: any): GrayMatterFile<any> {
  const parsedFile = matter(rawFile);
  return parsedFile;
}
