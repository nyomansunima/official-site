import {
  AchievementSection,
  ActivitySection,
  DetailSection,
  EndWordSection,
  IndieSection,
  SharingSection,
} from "@features/about"
import { ArticleContent } from "@shared/components"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "About | Nyoman Sunima",
    description:
      "The whole story about me, nyoman sunima and all of the journey",
  })
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <ArticleContent>
        <DetailSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </main>
  )
}
