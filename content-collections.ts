import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const works = defineCollection({
  name: "works",
  directory: "src/features/works/contents",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.string(),
    status: z.string(),
    isFeatured: z.boolean().optional(),
    type: z.string().optional(),
    category: z.string().optional(),
    roles: z.array(z.string()).optional(),
    responsibilities: z.array(z.string()).optional(),
    team: z
      .object({
        name: z.string(),
        url: z.url(),
      })
      .optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [works],
});
