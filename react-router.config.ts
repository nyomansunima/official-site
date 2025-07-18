import fs from "fs/promises"
import path from "path"
import type { Config } from "@react-router/dev/config"

async function getWorkPaths(): Promise<string[]> {
  const workDirPath = path.join(process.cwd(), "src/contents/works")
  const files = await fs.readdir(workDirPath)

  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.(md)$/, "")
      return `/works/${slug}`
    }) as string[]

  return slugs
}

export default {
  appDirectory: "src/app",
  ssr: true,
  prerender: async ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths()
    const workPaths = await getWorkPaths()

    return [...staticPaths, ...workPaths]
  },
} satisfies Config
