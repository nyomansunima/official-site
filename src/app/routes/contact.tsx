import { ContactSection, SocialSection } from "@features/contact"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Contact | Nyoman Sunima",
    description: "Get in touch with me right now, start your idea",
  })
}

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-20">
      <ContactSection />
      <SocialSection />
    </main>
  )
}
