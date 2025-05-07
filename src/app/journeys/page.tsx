import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { ExperienceSection, LogListSection } from "@features/journeys"

export const metadata: Metadata = {
  title: "Journeys | Nyoman Sunima",
  description: "The whole story of me, nyoman sunima and all of the journey",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Journeys | Nyoman Sunima",
    description: "The whole story of me, nyoman sunima and all of the journey",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Journeys | Nyoman Sunima",
    description: "The whole story of me, nyoman sunima and all of the journey",
  },
}

export default function JourneysPage() {
  return (
    <div className="flex flex-col gap-20">
      <ExperienceSection />
      <LogListSection />
    </div>
  )
}
