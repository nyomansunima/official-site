import fs from "fs/promises"
import path from "path"
import { parseMarkdown } from "@shared/libs"
import { createServerFn } from "@tanstack/react-start"

export interface WorkFrontMatter {
  title: string
  description: string
  image: string
  date: string
  isFeatured?: boolean
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

const WORK_DIR_PATH = "src/features/works/contents"

async function loadWorksDir(): Promise<string[]> {
  try {
    const dirPath = path.join(process.cwd(), WORK_DIR_PATH)
    const files = await fs.readdir(dirPath)
    const contentFiles = files.filter((file) => file.endsWith(".md"))
    return contentFiles
  } catch (e) {
    throw new Error(
      `Opps, cannot load the works directory in ${path.join(WORK_DIR_PATH)} caused: ${JSON.stringify(e)}`,
    )
  }
}

async function loadWorkFile(filePath: string): Promise<string> {
  try {
    const file = await fs.readFile(
      path.join(process.cwd(), WORK_DIR_PATH, filePath),
      "utf-8",
    )
    return file
  } catch {
    throw new Error(
      `Opps, no file found for ${path.join(process.cwd(), WORK_DIR_PATH, filePath)}`,
    )
  }
}

export const getWorkDetail = createServerFn({ method: "GET", type: "static" })
  .validator((data: { slug: string }) => data)
  .handler(async (ctx): Promise<WorkDetail> => {
    const filePath = `${ctx.data.slug}.md`
    const file = await loadWorkFile(filePath)
    const { content, data } = parseMarkdown(file)
    return { meta: data as WorkFrontMatter, content }
  })

export const getWorks = createServerFn({
  method: "GET",
  type: "static",
}).handler(async (): Promise<WorkData[]> => {
  const files = await loadWorksDir()
  const works = await Promise.all(
    files.map(async (filePath) => {
      const slug = filePath.replace(/\.(md)$/, "")
      const file = await loadWorkFile(filePath)
      const { data } = parseMarkdown(file)
      return {
        slug,
        ...data,
      } as any
    }),
  )

  return works ?? []
})

export const getFeaturedWorks = createServerFn({
  method: "GET",
  type: "static",
}).handler(async (): Promise<WorkData[]> => {
  const works = await getWorks()
  const featuredWorks = works.filter((work) => work.isFeatured)
  return featuredWorks ?? []
})
