import { createFileRoute } from "@tanstack/react-router"
import { getWorkDetail, WorkDetailContent } from "@features/works"
import { generatedMetadata } from "@shared/libs"

export const Route = createFileRoute("/works/$slug")({
  head: async ({ loaderData }) => {
    const { work } = loaderData as any

    return {
      meta: generatedMetadata({
        title: `${work.meta.title} | Nyoman Sunima`,
        description: work.meta.description,
        image: work.meta.image,
      }),
    }
  },
  loader: async ({ params }) => {
    const { slug } = params
    const work = await getWorkDetail({ data: { slug } })

    return { work }
  },
  component: PageComponent,
})

function PageComponent() {
  const { work } = Route.useLoaderData<any>()

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent work={work} />
    </main>
  )
}
