import {
  BioSection,
  HeroSection,
  PublicationSection,
  StatusSection,
  WorkSection,
} from "@features/home"
import { getFeaturedWorks } from "@features/works"
import { generatedMetadata } from "@shared/libs"

export async function loader() {
  const featuredWorks = await getFeaturedWorks()

  return { featuredWorks }
}

export function meta() {
  return generatedMetadata({
    title: "Product Designer, Software Developer & Creator | Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business",
  })
}

export default function HomePage({ loaderData }) {
  const { featuredWorks } = loaderData

  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <StatusSection />
      <WorkSection works={featuredWorks} />
      <PublicationSection />
      <BioSection />
    </main>
  )
}
