import fs from "fs/promises"
import path from "path"
import { parseMarkdown } from "@shared/libs"

const WORK_CONTENT_PATH = "src/contents/works"

export interface WorkFrontMatter {
  title: string
  description: string
  image: string
  date: string
  status: "Completed" | "In Progress"
  isFeatured?: boolean
  type: "Hacking" | "Work"
  category: string
  team: {
    name: string
    url: string
  }
}

export interface WorkDetail {
  meta: WorkFrontMatter
  content: any
}

export type WorkData = WorkFrontMatter & {
  slug: string
}

export async function getWorkDetail(slug: string): Promise<WorkDetail> {
  const filePath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(filePath, "utf-8").catch(() => {
    throw new Response("No work found", {
      status: 404,
      statusText:
        "Opps, the work that you looking is not found. You can find another else",
    })
  })
  const { content, data } = parseMarkdown(file)

  return { meta: data as WorkFrontMatter, content }
}

export async function getWorks(): Promise<WorkData[]> {
  const workDirPath = path.join(process.cwd(), WORK_CONTENT_PATH)
  const files = await fs.readdir(workDirPath)

  const contentFiles = files.filter(
    (file) => file.endsWith(".md") || file.endsWith(".mdx"),
  )

  const works = await Promise.all(
    contentFiles.map(async (file) => {
      const filePath = path.join(workDirPath, file)

      const fileContent = await fs.readFile(filePath, "utf-8")
      const slug = file.replace(/\.(mdx|md)$/, "")
      const { data } = parseMarkdown(fileContent)

      return {
        slug,
        ...data,
      } as any
    }),
  )

  return works ?? []
}

export async function getFeaturedWorks(): Promise<WorkData[]> {
  const works = await getWorks()
  const featuredWorks = works.filter((work) => work.isFeatured)
  return featuredWorks ?? []
}
