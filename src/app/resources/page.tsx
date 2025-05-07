import * as React from "react"
import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { SourcesSection } from "@features/resources"

export const metadata: Metadata = {
  title: "Resources | Nyoman Sunima",
  description: "Get free resources and things that help your works",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Resources | Nyoman Sunima",
    description: "Get free resources and things that help your works",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Resources | Nyoman Sunima",
    description: "Get free resources and things that help your works",
  },
}

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <SourcesSection />
    </div>
  )
}
