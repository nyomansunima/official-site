"use server"

import fs from "fs/promises"
import path from "path"
import * as React from "react"
import { ContentImage } from "@shared/components"
import Link from "next/link"
import { evaluate } from "next-mdx-remote-client/rsc"
import { getFrontmatter } from "next-mdx-remote-client/utils"
import dayjs from "dayjs"

const WORK_CONTENT_PATH = "/src/features/works/contents"

export type WorkFrontMatter = {
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

type WorkMetadata = Pick<WorkFrontMatter, "title" | "description" | "image">

type WorkDetail = {
  meta: WorkFrontMatter
  content
}

export type WorkData = WorkFrontMatter & {
  slug: string
}

export async function getWorkMetadata(slug: string): Promise<WorkMetadata> {
  const workPath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(workPath, "utf-8")
  const { frontmatter: meta } = getFrontmatter<WorkFrontMatter>(file)

  return {
    title: meta.title,
    description: meta.description,
    image: meta.image,
  }
}

export async function getWorkDetail(slug: string): Promise<WorkDetail> {
  const filePath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(filePath, "utf-8")
  const { frontmatter: meta, content } = await evaluate<WorkFrontMatter>({
    source: file,
    options: {
      parseFrontmatter: true,
    },
    components: {
      img: ContentImage,
      a: (props) => <Link {...props} target="_blank" />,
    },
  })

  return {
    meta,
    content,
  }
}

export async function getWorkPaths(): Promise<string[]> {
  const workDirPath = path.join(process.cwd(), WORK_CONTENT_PATH)
  const files = await fs.readdir(workDirPath)

  const slugs = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "")
      return slug
    }) as string[]

  return slugs
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
      const { frontmatter } = getFrontmatter<WorkFrontMatter>(fileContent)

      return { ...frontmatter, slug }
    }),
  )

  const sortedWorks = works.sort((a, b) => {
    const dateA = dayjs(a.date)
    const dateB = dayjs(b.date)
    return dateB.isAfter(dateA) ? 1 : -1
  })

  return sortedWorks || []
}
