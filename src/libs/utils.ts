import dayjs from "dayjs"

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, DD YYYY")
}
