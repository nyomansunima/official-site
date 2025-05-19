import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const works = defineCollection({
  loader: glob({ pattern: "*.{md, mdx}", base: "src/contents/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.string(),
    status: z.enum(["Completed", "In Progress"]),
    isFeatured: z.boolean().optional(),
    type: z.enum(["Hacking", "Work"]),
    category: z.string(),
    team: z
      .object({
        name: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
})

export const collections = { works }
