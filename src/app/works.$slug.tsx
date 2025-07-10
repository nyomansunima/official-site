import { generatedMetadata } from "@shared/libs"
import {
  getWorkDetail,
  WorkDetailContent,
  type WorkDetail,
} from "@features/works"

export async function loader({ params }) {
  const { slug } = params
  const work = await getWorkDetail(slug)

  return { work }
}

export function meta({ data }) {
  const { work } = data

  return generatedMetadata({
    title: `${work.meta.title} | Nyoman Sunima`,
    description: work.meta.description,
    image: work.meta.image,
  })
}

export default function WorkDetailPage({ loaderData }) {
  const { work } = loaderData
  const parsedWork = work as WorkDetail

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent work={parsedWork} />
    </main>
  )
}
