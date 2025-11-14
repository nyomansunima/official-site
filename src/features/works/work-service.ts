import { createServerFn } from "@tanstack/react-start";
import { allWorks } from "content-collections";
import z from "zod";

export const getWorkDetail = createServerFn()
  .inputValidator(
    z.object({
      slug: z.string(),
    }),
  )
  .handler((ctx) => {
    const works = allWorks;
    const slug = ctx.data.slug;

    const work = works.filter((w) => w._meta.path === slug)[0];
    return work;
  });

export const getWorks = createServerFn().handler(() => {
  const works = allWorks;
  return works;
});

export const getFeaturedWorks = createServerFn().handler(() => {
  const works = allWorks;
  const featuredWorks = works.filter((w) => w.isFeatured) || [];
  return featuredWorks;
});

export const getRelatedWorks = createServerFn()
  .inputValidator(z.object({ slug: z.string() }))
  .handler((ctx) => {
    const slug = ctx.data.slug;
    const works = allWorks;
    const relatedWorks =
      works.filter((w) => w._meta.path !== slug).slice(0, 5) || [];

    return relatedWorks;
  });
