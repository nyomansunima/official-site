import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { ArticleContent } from "@shared/components"
import {
  AchievementSection,
  ActivitySection,
  DetailSection,
  EndWordSection,
  IndieSection,
  SharingSection,
} from "@features/about"

export const metadata: Metadata = {
  title: "About | Nyoman Sunima",
  description: "The whole story about me, nyoman sunima and all of the journey",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "About | Nyoman Sunima",
    description:
      "The whole story about me, nyoman sunima and all of the journey",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "About | Nyoman Sunima",
    description:
      "The whole story about me, nyoman sunima and all of the journey",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <ArticleContent>
        <DetailSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </div>
  )
}
