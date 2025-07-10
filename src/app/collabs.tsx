import {
  BenefitSection,
  CTASection,
  IntroSection,
  ServiceSection,
  TeamSection,
} from "@features/collabs"
import { ArticleContent } from "@shared/components"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Collabs | Nyoman Sunima",
    description: "Serving with love and crafting for better impawcts",
  })
}

export default function CollabsPage() {
  return (
    <div className="flex flex-col gap-10">
      <ArticleContent>
        <IntroSection />
        <ServiceSection />
        <TeamSection />
        <BenefitSection />
        <CTASection />
      </ArticleContent>
    </div>
  )
}
