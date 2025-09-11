import { createFileRoute } from "@tanstack/react-router"
import { getWorks, WorksListSection } from "@features/works"
import { generatedMetadata } from "@shared/libs"

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Works | Nyoman Sunima",
      description:
        "See all of my works including projects, apps, products, case studies, idea and playground",
    }),
  }),
  loader: async () => {
    const works = await getWorks()
    return { works }
  },
  component: PageComponent,
})

function PageComponent() {
  const { works } = Route.useLoaderData()

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorksListSection works={works} />
    </main>
  )
}
