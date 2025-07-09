import { ExperienceSection, LogSection } from "@features/journeys"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Journeys | Nyoman Sunima",
    description: "The whole story of me, nyoman sunima and all of the journey",
  })
}

export default function JourneysPage() {
  return (
    <main className="flex flex-col gap-20">
      <ExperienceSection />
      <LogSection />
    </main>
  )
}
