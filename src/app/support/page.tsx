import * as React from "react"
import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { SupportSection } from "@features/support"

export const metadata: Metadata = {
  title: "Support Me (Donate) | Nyoman Sunima",
  description: "Support me by donating for projects and contents or goodies",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Support Me (Donate) | Nyoman Sunima",
    description: "Support me by donating for projects and contents or goodies",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Support Me (Donate) | Nyoman Sunima",
    description: "Support me by donating for projects and contents or goodies",
  },
}

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <SupportSection />
    </div>
  )
}
