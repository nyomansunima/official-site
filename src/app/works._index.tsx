import { getWorks, WorksListSection } from "@features/works"
import { generatedMetadata } from "@shared/libs"
import type { Route } from "./+types/works._index"

export async function loader() {
  const works = await getWorks()

  return {
    works,
  }
}

export function meta() {
  return generatedMetadata({
    title: "Works | Nyoman Sunima",
    description:
      "See all of my works including projects, apps, products, case studies, idea and playground",
  })
}

export default function WorksPage({ loaderData }: Route.ComponentProps) {
  const { works } = loaderData

  return (
    <main className="flex flex-col gap-20 tablet:gap-36">
      <WorksListSection works={works} />
    </main>
  )
}
