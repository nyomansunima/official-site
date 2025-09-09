import { createFileRoute } from "@tanstack/react-router"
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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: generatedMetadata({
      title: "About | Nyoman Sunima",
      description:
        "The whole story about me, nyoman sunima and all of the journey",
    }),
  }),
  component: PageComponent,
})

function PageComponent() {
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
