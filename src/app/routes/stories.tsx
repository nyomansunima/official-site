import {
  NewsletterSection,
  PublicationSection,
  RecentlySection,
} from "@features/stories"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Stories | Nyoman Sunima",
    description:
      "Everyday i write, record, and create any resources to sharing into the social media and community platforms",
  })
}

export default function StoriesPage() {
  return (
    <main className="flex flex-col gap-20">
      <PublicationSection />
      <NewsletterSection />
      <RecentlySection />
    </main>
  )
}
