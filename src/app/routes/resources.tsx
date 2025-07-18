import { SourceSection } from "@features/resources"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Resources | Nyoman Sunima",
    description: "Get free resources and things that help your works",
  })
}

export default function ResourcesPage() {
  return (
    <main className="flex flex-col">
      <SourceSection />
    </main>
  )
}
