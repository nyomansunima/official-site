import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { DomainSection, ProductSection } from "@features/crafts"

export const metadata: Metadata = {
  title: "Crafts | Nyoman Sunima",
  description:
    "See all of my projects, business, products, side husltes and something that i built",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Crafts | Nyoman Sunima",
    description:
      "See all of my projects, business, products, side husltes and something that i built",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Crafts | Nyoman Sunima",
    description:
      "See all of my projects, business, products, side husltes and something that i built",
  },
}

export default function CraftsPage() {
  return (
    <div className="flex flex-col gap-20">
      <DomainSection />
      <ProductSection />
    </div>
  )
}
