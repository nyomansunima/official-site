import { DomainSection, ProductSection } from "@features/crafts"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Crafts | Nyoman Sunima",
    description:
      "See all of my projects, business, products, side husltes and something that i built",
  })
}

export default function CraftsPage() {
  return (
    <main className="flex flex-col gap-20">
      <DomainSection />
      <ProductSection />
    </main>
  )
}
