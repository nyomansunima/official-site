import {
  NewsletterSection,
  PublicationSection,
  RecentlySection,
} from "@features/stories"
import { generatedMetadata } from "@shared/libs"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: generatedMetadata({
      title: "Stories | Nyoman Sunima",
      description:
        "Everyday i write, record, and create any resources to sharing into the social media and community platforms",
    }),
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <main className="flex flex-col gap-20">
      <PublicationSection />
      <RecentlySection />
      <NewsletterSection />
    </main>
  )
}
