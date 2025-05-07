import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { BioSection, CurrentStatusSection, HeroSection } from "@features/home"

export const metadata: Metadata = {
  title: "Product Designer, Software Developer & Creator | Nyoman Sunima",
  description:
    "Focused on crafting digital products, website, web app, mobile app to help business.",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Product Designer, Software Developer & Creator | Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business.",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Product Designer, Software Developer & Creator | Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business.",
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <CurrentStatusSection />
      <BioSection />
    </div>
  )
}
