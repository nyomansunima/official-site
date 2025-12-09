import { createServerFn } from "@tanstack/react-start";
import { allWorks } from "content-collections";
import dayjs from "dayjs";
import z from "zod";

export const getWorkDetail = createServerFn()
  .inputValidator(
    z.object({
      slug: z.string(),
    })
  )
  .handler((ctx) => {
    const works = allWorks;
    const slug = ctx.data.slug;

    const work = works.find((w) => w._meta.path === slug);
    return work;
  });

export const getWorks = createServerFn().handler(() => {
  const works = allWorks;
  const sortedWorks = works.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  return sortedWorks;
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
      works.filter((w) => w._meta.path !== slug).slice(0, 3) || [];

    return relatedWorks;
  });
