import { generatedMetadata } from "@shared/libs"
import { getWorkDetail, WorkDetailContent } from "@features/works"
import type { Route } from "./+types/works.$slug"

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params
  const work = await getWorkDetail(slug)

  return { work }
}

export function meta({ data }: Route.MetaArgs) {
  if (data) {
    const { work } = data

    return generatedMetadata({
      title: `${work.meta.title} | Nyoman Sunima`,
      description: work.meta.description,
      image: work.meta.image,
    })
  }
}

export default function WorkDetailPage({ loaderData }: Route.ComponentProps) {
  const { work } = loaderData

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent work={work} />
    </main>
  )
}
