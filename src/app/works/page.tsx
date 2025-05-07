import * as React from "react"
import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { WorksListSection } from "@features/works"

export const metadata: Metadata = {
  title: "Works | Nyoman Sunima",
  description:
    "See all of my works including projects, apps, products, case studies, idea and playground",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Works | Nyoman Sunima",
    description:
      "See all of my works including projects, apps, products, case studies, idea and playground",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Works | Nyoman Sunima",
    description:
      "See all of my works including projects, apps, products, case studies, idea and playground",
  },
}

export default function WorksPage() {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <WorksListSection />
    </div>
  )
}
