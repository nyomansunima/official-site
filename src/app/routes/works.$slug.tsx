import { createFileRoute } from "@tanstack/react-router"
import {
  getWorkDetail,
  type WorkDetail,
  WorkDetailContent,
} from "@features/works"
import { generatedMetadata } from "@shared/libs"

export const Route = createFileRoute("/works/$slug")({
  head: (ctx) => {
    const work = (ctx.loaderData! as any).work as WorkDetail
    return {
      meta: generatedMetadata({
        title: `${work.meta.title} | Nyoman Sunima`,
        description: work.meta.description,
        image: work.meta.image,
      }),
    }
  },
  // @ts-expect-error Just checking error for the return value
  loader: async (ctx) => {
    const slug = ctx.params.slug
    const work = await getWorkDetail({ data: { slug } })

    return { work }
  },
  component: PageComponent,
})

function PageComponent() {
  const { work } = Route.useLoaderData() as any

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent work={work} />
    </main>
  )
}
