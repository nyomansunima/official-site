import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, YYYY");
}
